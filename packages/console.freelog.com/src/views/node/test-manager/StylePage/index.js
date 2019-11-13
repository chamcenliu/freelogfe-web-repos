import AddAndReplace from '../AddAndReplace/index.vue';
import RulesBar from "../../components/RulesBar";
import {decompile} from "@freelog/nmr_translator";

let searchInputDelay = null;

export default {
    name: "index",
    components: {
        RulesBar,
        AddAndReplace,
    },
    data() {
        return {
            matchTestResult: {},
            tableData: [],
            // 筛选搜索框
            filterSearch: '',
            // 已选类型
            selectedType: '全部类型',
            // 状态可以选项
            allState: ['全部状态', '已上线', '未上线', '异常'],
            // 已选状态
            selectedState: '全部状态',
            // 当前页码
            currentPage: 1,
            // 当前页面条数
            pageSize: 10,
            // 表格总数量
            totalQuantity: 0,
        };
    },
    mounted() {
        // console.log(this.$route.params.nodeId, 'this.$router');
        // const {nodeId} = this.$route.params;
        // const nodeId = this.$router
        // this.$axios(`/v1/testNodes/${nodeId}/testResources`);
        this.handleTableData(true);
    },
    methods: {
        async matchTestResources() {
            const {nodeId} = this.$route.params;
            const res = await this.$axios.post(`/v1/testNodes/${nodeId}/matchTestResources`);
            const result = res.data.data;
            this.matchTestResult = {
                ruleText: result.ruleText,
                testRules: result.testRules.map(i => ({text: i.text, ...i.ruleInfo}))
            };
        },
        async handleTableData(init = false) {
            if (init) {
                await this.matchTestResources();
            }

            const {nodeId} = this.$route.params;
            const params = {
                pageIndex: this.currentPage,
                pageSize: this.pageSize,
                resourceType: 'page_build',
                isOnline: this.stateTextToValue(this.selectedState),
                keywords: this.filterSearch || undefined,
            };
            const res = await this.$axios(`/v1/testNodes/${nodeId}/testResources`, {
                params,
            });
            if (res.data.errcode !== 0 || res.data.ret !== 0) {
                return this.$message.error(res.data.msg);
            }
            const data = res.data.data;
            // console.log(data, 'datadatadatadatadata');
            this.tableData = data.dataList;
            this.totalQuantity = data.totalItem;
            // console.log(data.dataList, 'ddddddddddddDDDDDD');
        },
        /**
         * 修改规则成功，并且重新生成匹配规则
         */
        pushRuleSuccess(result) {
            this.matchTestResult = {
                ruleText: result.ruleText,
                testRules: result.testRules.map(i => ({text: i.text, ...i.ruleInfo}))
            };
            this.handleTableData();
        },
        /**
         * 去来源编辑页
         */
        goToOrigin(originInfo) {
            // console.log(originInfo, 'originInfooriginInfo');
            let url = '';
            if (originInfo.type === 'presentable') {
                url = `/node/manager-release/${originInfo.id}`;
            }

            if (originInfo.type === 'mock') {
                url = `/mock/update/${originInfo.id}`;
            }

            if (originInfo.type === 'release') {
                url = `/release/detail/${originInfo.id}?version=${originInfo.version}`;
            }

            window.open(url);
        },
        /**
         * 当前page发生变化时
         * @param currentPage
         */
        onChangeCurrentPage(currentPage) {
            this.currentPage = currentPage;
        },
        /**
         * 页面条数发生变化时
         * @param pageSize
         */
        onChangePageSize(pageSize) {
            this.pageSize = pageSize;
        },
        /**
         * 节点状态发生变化
         */
        onChangeState(value) {
            console.log(value, 'valuevaluevalue');
            // return;
            this.selectedState = value;
        },
        getIconClass(operation) {
            switch (operation) {
                case 'add':
                    return 'el-icon-plus';
                case 'replace':
                    return 'el-icon-refresh';
                case 'offline':
                    return 'el-icon-bottom';
                case 'online':
                    return 'el-icon-top';
                case 'set':
                    return 'el-icon-tickets';
                default:
                    return '';
            }
        },
        /**
         * 文字转换为对应数字
         */
        stateTextToValue(text) {
            //this.$t('allState'), this.$t('online'), this.$t('noOnline'), this.$t('contractException')
            //'全部状态', '已上线', '未上线', '合约异常'
            switch (text) {
                case '全部状态':
                    return 2;
                case '已上线':
                    return 1;
                case '未上线':
                    return 0;
                default:
                    return 2;
            }
        },
        /**
         * 操作命令
         * @param mark
         * @param row
         * @returns {*|Promise<void>|Window}
         */
        operationCommand(mark, row) {
            // console.log(mark, row, 'R$RRRRRRRR');
            if (mark === '编辑') {
                return window.open('/node/test-manager-resource/' + row.testResourceId);
            }

            if (mark === 'isOnline') {
                return this.onLineAndOffLine(row);
            }
        },
        /**
         * 上下线
         * @param row
         */
        async onLineAndOffLine(row) {
            const testRules = [...this.matchTestResult.testRules];
            const {nodeId} = this.$route.params;
            // const res = await this.$axios.get(`/v1/testNodes/${nodeId}`);
            const testResourceName = row.testResourceName;
            const isOnline = row.differenceInfo.onlineStatusInfo.isOnline === 1;
            const oldRulesText = this.matchTestResult.ruleText;
            const rule = testRules.find(i => i.presentableName === testResourceName);
            // console.log(rule, 'rulerulerulerule');
            let newRulesText;
            if (rule) {
                rule.online = !isOnline;
                const ruleText = decompile([rule]);
                newRulesText = oldRulesText.replace(rule.text, ruleText);
            } else {
                const ruleObj = {
                    "tags": null,
                    "replaces": [],
                    "online": !isOnline,
                    "operation": "alter",
                    "presentableName": testResourceName,
                };
                // console.log(decompile([ruleObj]), 'decompile([ruleObj])');
                newRulesText = oldRulesText + '\n' + decompile([ruleObj]);
            }

            const res = await this.$axios.post(`/v1/testNodes`, {
                nodeId,
                testRuleText: Buffer.from(newRulesText).toString('base64'),
            });

            if (res.data.errcode !== 0 || res.data.ret !== 0) {
                return this.$message.error(JSON.stringify(res.data.data.errors));
            }
            isOnline ? this.$message.success('下线成功') : this.$message.success('上线成功');
            // this.handleTableData();
            this.pushRuleSuccess(res.data.data);
        }
    },
    watch: {
        selectedState() {
            this.currentPage = 1;
            this.pageSize = 10;
            this.handleTableData();
        },
        filterSearch() {
            if (searchInputDelay) {
                clearTimeout(searchInputDelay);
            }
            searchInputDelay = setTimeout(() => {
                this.currentPage = 1;
                this.pageSize = 10;
                this.handleTableData();
            }, 300);

        },
        pageSize() {
            this.currentPage = 1;
            this.handleTableData();
        },
        currentPage() {
            this.handleTableData();
        },
    }
}

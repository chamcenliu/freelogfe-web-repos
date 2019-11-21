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
            // 已激活的 themeId
            activatedThemeId: '',
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

            if (res.data.errcode !== 0 || res.data.ret !== 0) {
                return this.$message.error(JSON.stringify(res.data.data.errors));
            }

            const result = res.data.data;
            this.activatedThemeId = result.themeId;
            this.matchTestResult = {
                ruleText: result.ruleText,
                testRules: result.testRules.filter(i => i.matchErrors.length === 0).map(i => ({text: i.text, ...i.ruleInfo}))
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
            this.tableData = data.dataList.map(i => {
                const matched = this.matchTestResult.testRules.find(j => j.presentableName === i.testResourceName);
                // console.log(matched, 'matched');
                const arr = [];
                if (matched) {
                    arr.push(matched.operation);
                    if (matched.tags !== null) {
                        arr.push('set_tags')
                    }
                    if (matched.replaces.length > 0) {
                        arr.push('replace');
                    }

                    // if (matched.online === true) {
                    //     arr.push('show');
                    // }
                    //
                    // if (matched.online === false) {
                    //     arr.push('hide');
                    // }
                }
                // console.log(arr, 'arrarrarr');
                return {
                    ...i,
                    icons: arr,
                };
            });
            this.totalQuantity = data.totalItem;
            // console.log(data.dataList, 'ddddddddddddDDDDDD');
        },
        /**
         * 修改规则成功，并且重新生成匹配规则
         */
        pushRuleSuccess(result) {
            this.activatedThemeId = result.themeId;
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
            // console.log(value, 'valuevaluevalue');
            // return;
            this.selectedState = value;
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

            if (mark === 'delete') {
                // console.log(row, 'row');
                this.deleteRule(row.testResourceName);
            }
        },
        /**
         * 上下线
         * @param row
         */
        async onLineAndOffLine(row) {
            // console.log(this.matchTestResult, 'this.matchTestResult');
            const testRules = [...this.matchTestResult.testRules];
            const {nodeId} = this.$route.params;
            // const res = await this.$axios.get(`/v1/testNodes/${nodeId}`);
            const testResourceName = row.testResourceName;
            // const isOnline = row.differenceInfo.onlineStatusInfo.isOnline === 1;
            const oldRulesText = this.matchTestResult.ruleText;
            const rule = testRules.find(i => i.operation === 'activate_theme');
            console.log(rule, 'rulerulerulerule');
            let newRulesText;
            // if (isOnline) {
            //     return;
            // }

            if (rule) {
                newRulesText = oldRulesText.replace(rule.text, `activate_theme ${testResourceName}`);
            } else {
                newRulesText = `activate_theme ${testResourceName}` + '\n' + oldRulesText;
            }

            const res = await this.$axios.post(`/v1/testNodes`, {
                nodeId,
                testRuleText: Buffer.from(newRulesText).toString('base64'),
            });

            if (res.data.errcode !== 0 || res.data.ret !== 0) {
                return this.$message.error(JSON.stringify(res.data.data.errors));
            }
            this.$message.success('激活成功');
            // this.handleTableData();
            this.pushRuleSuccess(res.data.data);
        },
        /**
         * 删除
         */
        async deleteRule(testResourceName) {
            // console.log(this.matchTestResult, 'this.matchTestResult');
            // console.log(testResourceName, 'testResourceName');
            const matched = this.matchTestResult.testRules.find(i => i.presentableName === testResourceName);
            if (!matched) {
                return;
            }

            // console.log(matched, 'matched');
            const {nodeId} = this.$route.params;
            const newRulesText = this.matchTestResult.ruleText.replace(matched.text, '');

            const res = await this.$axios.post(`/v1/testNodes`, {
                nodeId,
                testRuleText: Buffer.from(newRulesText).toString('base64'),
            });

            if (res.data.errcode !== 0 || res.data.ret !== 0) {
                return this.$message.error(JSON.stringify(res.data.data.errors));
            }
            this.$message.success('删除成功');
            // this.handleTableData();
            this.pushRuleSuccess(res.data.data);
        },
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

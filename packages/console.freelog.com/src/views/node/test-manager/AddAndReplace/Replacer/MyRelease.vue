<template>
    <LazyLoadingBox
        style="margin: 0;"
        :end="dataEnd"
        @toBottom="toBottom"
    >
        <div style="padding: 15px 15px 10px;">
            <el-input
                size="small"
                style="display: block;"
                v-model="input"
                :placeholder="$t('node.content')"
            >
                <i slot="prefix" class="el-input__icon el-icon-search"/>
                <!--                        <i-->
                <!--                            style="cursor: pointer"-->
                <!--                            @click="filterSearch = ''"-->
                <!--                            v-show="filterSearch && filterSearch.length > 0"-->
                <!--                            slot="suffix"-->
                <!--                            class="el-input__icon el-icon-circle-close"-->
                <!--                        ></i>-->
            </el-input>
        </div>

        <Item
            v-for="i in this.data"
            :active="activatedRelease && (i.name === activatedRelease.name)"
            :state="activatedRelease && (i.name === activatedRelease.name) ? activatedRelease: undefined"
            :title="i.name"
            :type="i.type"
            :version="i.version"
            :date="i.date"
            :versions="i.versions"
            @onDataChange="onDataChange"
        />
    </LazyLoadingBox>
</template>

<script>
    import LazyLoadingBox from '@/components/DependentReleaseList/DepDialog/LazyLoadingBox.vue';
    import Item from './Item.vue';

    export default {
        name: 'MyRelease',
        components: {
            LazyLoadingBox,
            Item,
        },
        props: {
            activatedRelease: {
                default: null,
            },
        },
        data() {
            return {
                page: 1,
                input: '',
                dataEnd: false,
                data: [],
                // activatedRelease: null,
            };
        },
        mounted() {
            this.search();
        },
        methods: {
            async search() {
                const params = {
                    isSelf: 1,
                    page: this.page,
                    keywords: this.input,
                    pageSize: 20,
                };
                const res = await this.$axios.get('/v1/releases', {
                    params,
                });
                // console.log(res, 'resresresresres');
                const data = res.data.data;
                this.dataEnd = data.page * data.pageSize >= data.totalItem;
                this.data = [
                    ...this.data,
                    ...data.dataList.map(i => ({
                        id: i.releaseId,
                        name: i.releaseName,
                        isOnline: i.status === 1,
                        type: i.latestVersion.resourceInfo.resourceType,
                        version: i.latestVersion.version,
                        date: i.updateDate.split('T')[0],
                        // disabled: false,
                        versions: i.resourceVersions.map(j => j.version).reverse(),
                        // versions: [],
                    }))
                ];
                // .filter(i => i.id !== this.currentID && i.isOnline);
                // console.log(this.data, 'this.datathis.data');
            },
            toBottom() {
                this.page++;
                this.search();
            },
            onDataChange(data) {
                // console.log(data, 'dataaaa');
                // this.activatedRelease = data;
                this.$emit('onDataChange', data);
            }
        },
        watch: {
            input() {
                if (this.searchTimeout) {
                    clearTimeout(this.searchTimeout);
                }
                this.searchTimeout = setTimeout(() => {
                    this.page = 1;
                    this.data = [];
                    this.search();
                }, 1000);

            },
            // activatedRelease() {
            //     // console.log(this.activatedRelease, 'this.activatedRelease');
            //     this.$emit('onDataChange', this.activatedRelease);
            // },
        },
    }
</script>

<style scoped lang="less">
    .overflow {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

</style>

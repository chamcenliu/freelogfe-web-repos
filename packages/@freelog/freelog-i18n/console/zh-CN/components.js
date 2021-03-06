export default {
    authScheme: {
        checkMessages: ['已发布该授权点，当前操作不可执行', '已废弃该授权点，当前操作不可执行'],
        signContractError: '资源{resources}未选择授权策略',
        update: '更新',
        generate: '生成',
        signSuccessMsg: '节点资源{presentableName}授权合约{msg}成功！',
        notHandleResource: '不处理此资源',
        updateContract: '更新合约',
        createContract: '生成合约',
        schemeTitle: '授权方案',
        unsignedResources: '待签资源',
        policyTitle: '授权策略',
        hadSigned: '存在历史签约',
        unavailable: '不可用',
        selectPolicyMessages: ['父级资源{resourceName}未选中授权方案', '父级资源{resourceName}的授权方案{authSchemeName}未选中'],
        switchSchemeTip: '切换授权方案，将会导致之前选择的策略都将失效',
        cancelSelectedSchemeTip: '取消当前选择，将导致部分授权方案的选择失效',
        confirmMsg: '{str}，确定继续？',
        signedDepsTip: '签约的依赖资源（共{length}个）',
        unsignedDepsTip: '不处理的依赖资源（共{length}个）',
        resourceName: '资源名称',
        authSchemeName: '授权方案',
        policyName: '授权策略',
        signState: '签约状态',
        noResolvedTip: '当前方案选择不处理依赖资源，是否确认签约？',
        signConfirmTitle: '签约确认',
        signConfirmText: '确认',
        dialogTitles: ['合约切换', '签约确认'],
        selectedSchemesTitle: '已选中的授权方案',
        selectTip: '请选择相应授权方案及策略……',
        unhandledListTitle: '上抛（选择的上抛将会成为发行的基础上抛）'
    },

    contractDetail: {
        title: '合约详情',
        releaseName: '发行名称',
        releaseType: '发行类型',
        activateContract: '激活合同',
        triggerContract: '立即激活',
        authState: '授权状态：',
        defaultPolicyName: '授权策略',
        activateContractSuccess: '成功激活合同'
    },

    contractManager: {
        resourceList: '资源列表',
        masterResource: '主资源',
        subResourceId: '子资源合同ID：',
        bubbleResources: '上抛资源'
    },

    cropImage: {
        reUpload: '重新上传'
    },

    detailInfo: {
        createDate: '创建日期',
        contractId: '合约ID',
        partyOne: '甲方',
        partyTwo: '乙方'
    },
    lazyListView: {
        noContentTip: '暂无查询结果',
        loadingTip: '拼命加载中'
    },

    pagination: {
        first: '首页',
        previous: '上一页',
        next: '下一页',
        last: '尾页',
        fromto: '{from}-{to}条，',
        total: '共{total}条'
    },

    policyEditor: {
        inputPlaceholder: '请输入内容',
        licensePlaceholder: '请输入内容License ID',
        demoTpl: '示例模板',
        myTpl: '我的模板',
        copyDone: '已复制',
        defaultPolicyNames: {
            free: '免费策略',
            charge: '收费策略'
        },
        switchTip: '确定{statusText}架策略 <{policyName}>？',
        offline: '下架',
        online: '上架',
        template: '模板',
        policyPlaceholder: '请输入策略',
        selectPolicyTitle: '选择策略模板'
    },

    policyList: {
        addPolicy: '添加新策略',
        unnamedPolicy: '未命名策略'
    },

    policyTplSelector: {
        name: '模板名称',
        operation: '选择'
    },

    resourceButton: {
        exception: '资源异常',
        publish: '发布资源',
        offline: '下架资源',
        freeze: '资源冻结',
        publishTip: '确定{tip}？',
        success: '成功',
        fail: '失败'
    },

    richEditor: {
        uploadTip: '点击上传或将图片拖到此处'
    },

    // ResourceComponents
    uploadResource: '上传资源',
    noMoreThan50m: '资源最大不超过50M',
    uploadSuccess: '上传成功',
    sureDelete: '确定删除资源文件？',
    cancel: '取消',
    confirm: '确定',
    reselect: '重新选择',
    resourceDuplicated: '该资源已存在，不能重复创建',
    unused: '未使用',
    mockCanOnlyBeUsedWithinMock: 'mock资源只可在模拟资源池内使用，若要将mock资源发行，需在创建成功后，先将mock资源转为正式资源',
    // UploadCover
    crop: '裁剪',
    coverMoreThan: '封面图片不能超过5M',

    "enableBtnText": "启用",
    "disableBtnText": "停用",
    "status": [ "已置顶", "已停用", "已启用" ]
};

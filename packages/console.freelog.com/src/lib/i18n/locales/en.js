export default {
    common: {
        login: 'sign in',
        logout: 'sign out',
        register: 'sign up',
        yes: 'has bubble resources',
        no: 'no bubble resources',
        cancel: 'cancel',
        confirm: 'ok',
        operation: 'operation',
        detail: 'detail',
        save: 'save',
        saveSuccess: 'successfully saved',
        createText: 'create',
        cancelCreateText: 'cancel',
        createSuccessTip: 'successfully created',
        searchPlaceholder: 'Search',
        avatarPlaceholder: 'Upload avatar',
        backText: 'back',
        cancelText: 'cancel',
        sureText: 'sure',
        sureBtnText: 'sure',
        cancelBtnText: 'cancel',
        allTypes: 'all'
    },

    header: {
        langSwitchQuestion: 'Change language to {lang}?'
    },
    contract: {
        state: '签约状态',
        signedText: '已签约',
        unsignedText: '未签约',
    },

    scheme: {
        schemeName: '授权方案名称',
        schemeNameInputPlaceholder: '请输入授权方案名称',
        schemeStatus: '授权方案状态'
    },

    policy: {
        authTarget: 'authorized target',
        checked: 'verification pass',
        tplName: 'policy template name',
        policyType: 'policy template type',
        tplDesc: 'policy template content',
        inputTip: 'input your policy here',
        checkBtnText: 'verify policy',
        state: 'status',
        createDate: 'creation date',
        types: {
            resource: 'resource policy template',
            user: 'user policy template'
        },

        statesMap: ['normal', 'deleted']
    },

    resource: {
        createResource: 'create resource',
        resourceType: 'resource type',
        market: 'Release Market',
        myResources: 'My Resources',
        throwUp: 'decentralized resources',
        throwUpResource: 'decentralized resources',
        updateSuccess: 'successfully updated',
        createSuccess: 'successfully created',
        cancelQuestion: 'do you like to cancel resource creation?',
        createDoneText: 'save',
        resourceId: 'resource ID',
        name: 'resource name',
        type: 'resource type',
        version: 'version',
        status: 'resource status',
        author: 'author',
        createDate: 'creation date'
    },

    release: {
        myReleases: 'My releases',
        management: 'Release management',
    },

    node: {
        title: 'node',
        nodeName: 'node name',
        nodeDomain: 'node address',
        createNode: 'create node',
        gotoNodeDetail: 'view node details',
        nodeId: 'node ID',
        nodeState: 'node status',
        createRules: {
            length: 'The node domain name prefix should be 4-20 characters long.',
            prefix: 'The node domain name prefix should consist of an alphanumeric and "-".',
            noEmpty: 'The node domain name prefix cannot be empty.'
        },
        createPlaceholders: {
            domain: 'input node address',
            name: 'input node name'
        },
        nodeNameRules: {
            noEmpty: 'Node description cannot be empty',
            length: 'The node description length should be 4-20 characters, which is not case sensitive.'
        },
        createSuccess: 'successfully created',
        confirmMessages: {
            question: 'Once the node name and domain name are created, they cannot be changed. Are you sure to continue?',
            title: 'prompt',
            confirm: 'continue',
            cancel: 'cancel'
        },

        detailView: {
            paramError: 'missing nodeId',
            copySuccess: 'successfully copied'
        },

        tabTitles: {
            scheme: 'schemes',
            contract: 'contracts',
            policy: 'policies'
        },
        pageStyle: 'Page Style(pagebuild)',
        switchPageStyle: 'switch style',
        choosePageBuildTip: 'Please pick up a resource with the resource type pagebuild as the page style in the presentable list below.',
        quickFilterText: 'quickly filter',
        noPresentableTip: 'no presentables yet',


        // manager
        copySuccess: 'Copy Success',
        nodeReleaseList: 'Node lists of release',
        nodePageStyle: 'Theme',
        all: 'All',
        pending: 'Pending',
        table: {
            publish: 'Release',
            presentableName: 'Title',
            type: 'All Type',
            policies: 'Policy',
            updateTime: 'UpdateTime',
            state: 'All State',
            operation: 'Operation',
        },
        allType: 'AllType',
        allState: 'AllState',
        online: 'Online',
        noOnline: 'NoOnline',
        contractException: 'ContractException',
        noPolicy: 'No policy',
        suchAs: 'Such as ',
        policies: ' policies',
        joined: 'Joined',
        exceptionExists: 'This exception exists on the contractual chain',
        action: {
            edit: 'Edit',
            top: 'Top',
            upgrade: 'Upgrade',
            online: 'Online',
            downline: 'Downline',
        },
        cannotOnline: {
            noPolicy: 'Cannot be on the line : No authorization policy is available',
            exceptions: 'Cannot be on the line : authorized chain of exceptions',
        },

        gotoTest: 'Test node management',
        presentableManagement: 'Presentable',
        notAdded: 'You have not added any issue to the node',
        notSetTheme: 'You have not set a theme for the node, the node cannot be shown. You can add a " theme " theme of the issue as a node of Type',
        toMarket: 'To release the market',
        addTheme: 'AddTheme',
        loading: 'Loading',

        // manager-release
        type: 'Type',
        signingTime: 'Signing Time',
        nodeReleaseTitle: 'The node release title',
        tags: 'Tags',
        newTag: 'New Tag',
        policies_: 'Policies',
        cancel: 'Cancel',
        save: 'Save',
        noPolicyNotAppear: 'No policy issue does not appear in the market',
        addPolicy: 'Add Policy',
        authorization: 'Authorization',
        unnamedPolicy: 'Unnamed policy',
        addPolicySuccess: 'Add a policy success',
        updatedPolicySuccessfully: 'Updated the policy successfully',
        titleUpdateSuccessful: 'The node issuing title update is successful',
        tagUpdatedSuccessfully: 'User tag updated successfully',
        presentableInfo: 'Presentable Info',
        status: 'Status',
        inactive: 'Inactive',
        active: 'Active',
        activated: 'Activated',
        presentableName: 'Name',
        displayVersion: 'Version',
        authorizationPolicy: 'Policies',
    },

    presentable: {
        nodeIndex: 'node home page',
        id: 'presentable ID',
        name: 'presentable name',
        label: 'presentable label',
        addLabel: 'new label',

        listTitle: 'Presentables',
        addPresentable: 'add presentable',

        signedText: 'signed',
        unsignedText: 'not signed',
        paramError: 'lack of presentable parameters',
        tabNames: {
            info: 'presentable basic info',
            schemes: 'authorization scheme management',
            contracts: 'contract management',
            policies: 'policy management'
        },
        uncreatedContractTip: 'No contract created',
        gotoCreateContractTip: 'To create a contract',
        contractStateError: 'incomplete contract or no available policy',
        unAuthError: 'not authorized',
        updateFailTip: 'update failed',
        confirmOffline: 'Determine to offline {presentableName}? After the offline, the node will not be able to access normally.',
        confirmOnline: 'Make sure to online {presentableName}? It will automatically replace the current page style after going online.',
        onlineState: 'online status',
        offlineState: 'offline status',
        allState: 'all status',
        onlineText: 'online',
        offlineText: 'offline',
        deletePresentableText: 'confirm to delete {presentableName}?',
        deleteSuccessTip: 'successfully deleted'
    },

    company: {
        name: 'freelog',
        copyright: 'all rights reserved'
    },

    sidebar: {
        open: 'Expand',
        close: 'Fold',
    },

    metaInput: {
        metaJSONError: 'JSON format is incorrect',
        inputTip: 'JSON data describing resource meta information'
    },

    listResourceItem: {
        lastUpdateText: 'Last updated: ',
        updateInfo: 'Update basic information',
        detail: 'detail',
        schemes: 'Management authorization schemes',
        state: 'status: '
    },

    listReleaseItem: {
        manageDetail: 'Management Detail',
        detail: 'detail',
    },

    search: {
        resourcePlaceholder: 'Enter the resource name',
        myRelease: 'My releases',
        noMyReleases: 'no releases',
        noFavorReleases: 'no favorite releases',
        addBtn: 'add',
        placeholder: 'Enter the release name',
        historicVersion: 'Historic version',
        searchTitle: 'search release',
        favorTitle: 'favorite releases'
    },

    routes: {
        accountSetting: 'Account Setting',

        mockResource: 'Mock Resource',

        nodes: 'Nodes',
        releaseMarket: 'Release Market',
        presentableDetail: 'Presentable Detail',
        nodesSystem: 'Nodes System',

        nodeManager: 'Node Manager',
        nodeReleaseManagement: 'Node release management',

        createNode: 'Create Node',
        nodeList: 'Nodes',
        policyList: 'Policy Templates',
        createPolicyTpl: 'Create Policy Template',
        policyTplDetail: 'Policy Template Detail',
        nodeDetail: 'Node Detail',
        resourceSystem: 'Resources System',
        resourcePolicyTplList: 'Resource Policy Templates',
        createResource: 'Create Resource',
        updateResource: 'Update Resource',
        myResources: 'My Resources',
        myReleases: 'My Releases',
        myCollections: 'My Collections',
        // resourceDetail: 'Resource Detail',
        resourceManager: 'Resource Manager',
        createResourcePolicyTpl: 'Create Resource Policy Template',
        resourcePolicyTplDetail: 'Resource Policy Template Detail',
        createRelease: 'Create release',
        releaseDetail: 'Release details',

        releaseSystem: '',
        releaseManager: 'Release management',
        releaseAdd: 'Add the release',

        mockResourcePool: 'Mock resource pool',
        createMockResource: 'Create mock resource',
        manageMockResource: 'Manage mock resource',
    },

    axios: {
        unAuthError: 'unauthorized!',
        forbidden: 'Forbidden - no access',
        internalError: 'The server is abnormal inside, please try again later!'
    },


    config: {
        account: {
            feather: 'feather',
            eth: 'Ethereum',
            rmb: 'RMB',
            dollar: 'dollar',
            euro: 'euro'
        },
        contract: {
            statesTip: ['No contract created', 'Not started', 'Executing', 'System locked', 'In effect', '', 'Contract terminated'],
        },
        group: {
            user: 'user group',
            node: 'node group'
        },
        node: {
            status: ['normal', 'unreviewed', 'froze']
        },

        presentable: {
            states: ['Test status', 'Not started', 'Executing', 'In effect', 'User terminated', 'system terminated',]
        },
        resource: {
            states: ['Unknown state', 'Unpublished', 'Published', 'froze',]
        },
        scheme: {
            states: ['Not Enabled', 'Enabled', 'Deprecated',]
        }
    },


    components: {
        authScheme: {
            checkMessages: ['The authorization scheme has been released and the current operation cannot be performed.', 'The authorization scheme has been discarded and the current operation cannot be performed.'],
            signContractError: '{resources} did not select authorization policy',
            update: 'update',
            generate: 'generate',
            signSuccessMsg: 'The presentable {presentableName} authorization contract {msg} succeeded!',
            notHandleResource: 'Do not process this resource',
            updateContract: 'Update contract',
            createContract: 'Create contract',
            schemeTitle: 'Authorization scheme',
            unsignedResources: 'Pending resources',
            policyTitle: 'Authorization policy',
            hadSigned: 'Historical signed',
            unavailable: 'unavailable',
            selectPolicyMessages: ['The authorization scheme of the parent resource {resourceName} is not selected', 'The authorization scheme {authSchemeName} of the parent resource {resourceName} is not selected'],
            switchSchemeTip: 'Switching the authorization scheme will cause the previously selected policies to be invalid.',
            cancelSelectedSchemeTip: 'Cancelling the current selection will invalidate the selection of some authorization schemes',
            confirmMsg: '{str}, sure to continue?',
            signedDepsTip: 'Signed dependencies (total {length})',
            unsignedDepsTip: 'Dependent resources not processed (total {length})',
            resourceName: 'resource name',
            authSchemeName: 'Authorization scheme',
            policyName: 'Authorization Policy',
            signState: 'Contract status',
            noResolvedTip: 'The current scheme chooses not to process dependent resources, is it confirmed to sign the contract?',
            signConfirmTitle: 'Signing confirmation',
            signConfirmText: 'ok',
            dialogTitles: ['Contract switching', 'Signing confirmation'],
            selectedSchemesTitle: 'Selected authorization scheme',
            selectTip: 'Please select the appropriate authorization scheme and policy...',
            unhandledListTitle: 'Upcast Releases'
        },

        contractDetail: {
            title: 'contract detail',
            releaseName: 'release name',
            releaseType: 'release type',
            activateContract: 'activate contract',
            triggerContract: 'activate',
            authState: 'Authorization status: ',
            defaultPolicyName: 'Authorization Policy',
            activateContractSuccess: 'success'
        },

        contractManager: {
            resourceList: 'resources',
            masterResource: 'master resource',
            subResourceId: 'subresource contract ID: ',
            bubbleResources: 'bubble resources'
        },

        cropImage: {
            reUpload: 're-upload'
        },

        detailInfo: {
            createDate: 'creation date',
            contractId: 'contract ID',
            partyOne: 'party A',
            partyTwo: 'party B'
        },
        lazyListView: {
            noContentTip: 'No query results',
            loadingTip: 'loading'
        },

        pagination: {
            first: 'first',
            previous: 'previous',
            next: 'next',
            last: 'last',
            fromto: '{from}-{to},',
            total: 'Total {total}'
        },

        policyEditor: {
            inputPlaceholder: 'input here',
            licensePlaceholder: 'input the license ID here',
            demoTpl: 'Sample templates',
            myTpl: 'my templates',
            copyDone: 'Copied',
            defaultPolicyNames: {
                free: 'free policy',
                charge: 'charge policy'
            },
            switchTip: 'Determine to {statusText} the policy <{policyName}>?',
            offline: 'offline',
            online: 'online',
            template: 'template',
            policyPlaceholder: 'input your policy here',
            selectPolicyTitle: 'select a policy template'
        },

        policyList: {
            addPolicy: 'add new policy',
            unnamedPolicy: 'Unnamed policy'
        },

        policyTplSelector: {
            name: 'Template name',
            operation: 'select'
        },

        resourceButton: {
            exception: 'Abnormal resource',
            publish: 'publish',
            offline: 'offline',
            freeze: 'freeze',
            publishTip: 'Determine to {tip}?',
            success: 'success',
            fail: 'fail'
        },

        richEditor: {
            uploadTip: 'Click Upload or drag the image here'
        }
    },

    resourceDetailView: {
        tabs: ['Resource Introduction', 'Authorization Scheme', 'Resource Description', 'Meta Information'],
        favorText: 'Add to favorites',
        favorSuccessText: 'successfully added',
        deleteFavorSuccessText: 'successfully deleted',
        deleteFavorText: 'delete from favorites',
        noMetaTip: 'no meta information yet',
        noDescTip: 'no resource description yet',
        addPresentableSuccessText: 'Successfully added to the presentable list',
        addPresentableText: 'add to be presentable',
        offlineTip: 'offline',
        lastUpdateText: 'Recently updated',
        addResourceToNode: 'add to node：',
        noNodesTip: 'node is not created，',
        createNodeTip: 'to create a node',
        moreTip: 'see more'
    },

    resourceEditView: {
        updateSuccess: 'updated successfully',
        uploadFileText: 'drag files here or click Upload',
        uploadFileRule: 'file size does not exceed 50MB, only one file can be uploaded',
        updateText: 'update',
        hideResourceInfo: 'fold',
        panelsTabName: ['Authorization scheme information', 'Authorized resources management', 'Contract management', 'Policy management'],
        noContractTip: 'no contract',
        createContractTip: 'No dependent authorization relationship created',
        createContractText: 'to create',
        depsListTitle: 'dependent resource list',
        noDepsTip: 'No dependent resources to process',
        requiredDepsTip: 'There are still resources not selected authorization policy',
        createSuccess: 'created successfully',
        enableText: 'enable',
        disableText: 'disable',
        addNewScheme: 'Add a new authorization scheme',
        addScheme: 'Add an authorization scheme',
        inputPlaceholder: 'the authorization scheme name...',
        createSchemeTip: 'Cannot be deleted after the scheme is successfully added',
        disableSchemeTip: 'There are no other authorization schemes in the current resource. Deactivating this scheme will cause the resources to be unavailable. Is the operation confirmed?',
        disableSchemeTitle: 'prompt',
        defaultSchemeName: 'unnamed authorization scheme',

        resourceTypeRule: 'The naming format is incorrect and needs to meet {rule}',
        widgetNameRule: 'For example, freelog-namespace-widgetname, namespace and widgetname at least 3 characters',
        versionRule: 'The version number must conform to the semver specification, such as 0.0.1',

        inputNameTip: 'enter a resource name',
        selectTypeTip: 'select a resource type',

        noSupportTip: 'unsupported file type',
        authFailTip: 'Permission not verified',
        noSupportImageTip: 'unsupported image type',

        uploadingTip: 'The resource file is being uploaded, and then click to create after uploading.',
        noFileTip: 'Resource file not uploaded yet',
        metaError: 'The meta format is incorrect: ',
        donotRepeatUpload: 'Cannot add dependent resources repeatedly',


        resourceTitle: 'resource title',
        changeTypeTip: 'uploaded resource file cannot modify resource type',
        changeTypeTip2: ', if you need to modify, please re-upload resources',
        selectType: 'Please select a resource type',
        uploadPopTip: 'to upload resource file by after selecting a resource type',
        resourceFile: 'resource file',
        uploadResourceRule: 'Drag or click to upload, up to 50M',
        reUploadText: 're-upload',
        widgetName: 'widget name',
        widgetVersion: 'widget version',
        uploadPoster: 'upload cover',
        depResources: 'Dependent resources',
        disableModifiedTip: 'Published resources cannot modify dependencies',
        addDepResource: 'Add dependent resources',
        introTitle: 'Resources Introduction',
        metaTitle: 'meta information',
        inputDescTip: 'Please enter a resource description',
        inputMetaTip: 'resource meta information',
        addResource: 'add resource'
    },

    settingView: {
        avatar: 'avatar',
        username: 'user name',
        usernameTip: 'user name not set',
        nickname: 'nickname',
        nicknameTip: 'nickname not set',
        email: 'email',
        emailTip: 'email not set',
        mobilePhone: 'cellphone number',
        mobilePhoneTip: 'cellphone number not set'
    },

    resourceListView: {
        myListTitle: 'My Resources',
        favorListTitle: 'My Favorites',
        noResources: 'no homemade resource',
        noFavorResources: 'no favorite resource'
    },

    aboutView: {
        about: 'About'
    },
    helpView: {
        title: 'Help Center'
    },

    mock: {
        list: ' List',
        startingFromFreelog: 'Free creativity starting from freelog',
        freelogMockResourcePool: 'In freelog simulation resource pool, you can create storage space, upload test and simulation resources.',
        createBucket: 'Create Bucket',
        mockQuantity: 'Quantity of mock resource',
        creationTime: 'Creation Time ',
        used: 'Used ',
        deleteBucket: 'Delete Bucket',
        confirm: 'Confirm',
        cancel: 'Cancel',
        confirmDeletion: 'Storage space once deleted cannot be recovered, to confirm the deletion ?',
        successfullyDeleted: 'Successfully deleted',
        doesNotRemove: 'The storage space does not remove the simulation of resources',
        createMock: 'Create mock',
        notCreatedAnyMock: 'You have not created any mock resources',
        table: {
            name: 'Name',
            type: 'Type',
            size: 'Size',
            date: 'Create Data',
            action: 'Action',
        },
        edit: 'Edit',
        downloadResourceFile: 'Download resource file',
        generateFormalResources: 'Generate formal resources',
        delete: 'Delete',
        // newBucket: 'New Bucket',
        // createdMayNotBeModified: 'Please note the name of the storage space but created may not be modified',
        // provide2GBStorage: 'Freelog provide 2GB of free storage space for each user',
        // bucketName: 'Bucket Name',
        // includeOnly: 'Include lowercase letters, numbers and dashes only (-);',
        // startAndEnd: 'Start and end must be in lowercase letters or numbers;',
        // between1To63Characters: 'The length must be between 1 - 63 characters.',
        successfullyCreated: 'Successfully created',
        mockOnceDeleted: 'Simulation of resources once deleted cannot be recovered, to confirm the deletion?',
        invalidRelease: 'Resource dependence there is an invalid release : simulation of funding resources.',
        resourceAlreadyExists: 'The resource already exists, cannot be duplicated to create.',
        formalResource: 'Confirm whether you want to make a formal resource',
        prompt: 'Prompt',
        generateSuccess: 'Generate success of official resources',

        resourceUpload: 'Resource Upload',
        resourceType: 'Resource Type',
        beforeUpload: 'Before uploading resources you need to select the resource type',
        resourceFile: 'Resource File',
        resourceName: 'Resource Name',
        enterResourceName: 'Please enter a resource name',
        dependency: 'Dependency',
        description: 'Resource Description',
        enterDescription: 'Please enter the resource description',
        addMeta: 'Add meta information',
        metaInfo: 'Meta Information',
        // cancel: 'Cancel',
        cancelCreating: 'Cancel creating',
        save: 'Save',
        completeCreating: 'Complete creating',
        saveAndRelease: 'Save and release',
        createAndRelease: 'Create and release',
        createANewRelease: 'Create a new release',
        pleaseSelectAResourceType: 'Please select a resource type',
        fileUploading: 'File is uploading',
        pleaseUploadFiles: 'Please upload files',
        pleaseEnterAResourceName: 'Please enter a resource name',
        resourceNamesCannotContain: 'Resource names cannot contain spaces or the following characters:',
        formattingErrors: 'Formatting errors',
        creationFailed: 'Creation failed',
        createdSuccessfully: 'Created successfully',
        releaseAreNotOnline: 'Have relied on in the not Online release',
        selectedTypeMustBeRelease: 'The selected resource type must be ',
        saveFailed: 'Save Failed',
        saveSuccess: 'Save Success',
    }
}

export function resolvePresentableDefaultContractState(presentable, resourceIdContractsMap) {
  const { index, defaultContract } = getHasDefaultContractPolicyIndex(presentable, resourceIdContractsMap)
  presentable.DC_policyIndex = index
  presentable._defaultContract = defaultContract
  presentable.contractState = getContractState.call(this, defaultContract)
}
// 根据合同获取 资源标签状态
export function getContractState(contract) {
  const $i18n = this.$i18n
  const [ nosign, inactive, active, terminate ] = [
    $i18n.t('contractSigning.status[0]'),
    $i18n.t('contractSigning.status[2]'),
    $i18n.t('contractSigning.status[3]'),
    $i18n.t('contractSigning.status[4]'),
  ]
  if (!contract) {
    return { type: 'nosign', tagName: nosign, info: nosign }
  }
  switch (contract.status) {
    case 1:
    case 2:
      return { type: 'inactive', tagName: inactive, info: $i18n.t('contractSigning.contractId') + `：${contract.contractId}` }
    case 4:
      return { type: 'active', tagName: active, info: $i18n.t('contractSigning.contractId') + `：${contract.contractId}` }
    case 3:
    case 5:
    case 6:
      return { type: 'terminate', tagName: terminate, info: terminate }
    default:
      return { type: 'nosign', tagName: nosign, info: nosign }
  }
}

// 获取含有默认合同的policy序号
export function getHasDefaultContractPolicyIndex(presentable, resourceIdContractsMap) {
  const { resourceId, policies } = presentable
  var index = 0, defaultContract = null
  const contractMap = resourceIdContractsMap[resourceId]
  if(contractMap) {
    for(let i = 0; i < policies.length; i++) {
      let policyId = policies[i].policyId
      let contract = contractMap[policyId]
      if(contract && contract.isDefault === 1) {
        index = i
        defaultContract = contract
        break
      }
    }
  }

  return { index, defaultContract }
}


// 处理策略与合同的关系
export function resolvePolicyContractState(policyList, resourceIdContractsMap) {
  policyList.forEach((policy) => {
    var contractMap = resourceIdContractsMap[policy.resourceId]
    var contract = null
    if(contractMap) {
      contract = contractMap[policy.policyId] || null
    }
    policy.contractState = getContractState(contract)
  })
}



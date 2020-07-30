import request from '@/utils/request';

// 创建资源
interface CreateParamsType {
  name: string;
  resourceType: string;
  policies?: any[];
  coverImages?: string[];
  intro?: string;
  tags?: string[];
}

export function create(params: CreateParamsType) {
  return request.post('/v2/resources', params)
}

// 更新资源信息
export interface UpdateParamsType {
  resourceId: string;
  intro?: string;
  tags?: string[];
  coverImages?: string[];
  policyChangeInfo?: {
    addPolicies?: {
      policyName: string;
      policyText: string;
    }[];
    updatePolicies?: {
      policyId: string;
      policyName: string;
      status: 0 | 1;
    }[];
  };
}

export function update(params: UpdateParamsType) {
  return request.put(`/v2/resources/${params.resourceId}`, params);
}

// 查看资源分页列表
interface ListParamsType {
  page?: number;
  pageSize?: number;
  keywords?: string;
  resourceType?: string;
  isSelf?: 0 | 1;
  status?: 0 | 1 | 2;
  isLoadLatestVersionInfo?: 0 | 1;
  projection?: string;
}

export function list(params: ListParamsType) {
  return request.get('/v2/resources', {
    params,
  });
}

// 查看单个资源详情
interface InfoParamsType {
  resourceIdOrName: string;
  isLoadLatestVersionInfo?: 0 | 1;
  projection?: string;
}

export function info(params: InfoParamsType) {
  return request.get(`/v2/resources/${params.resourceIdOrName}`, {
    data: params,
  });
}

// 创建资源版本
export interface CreateVersionParamsType {
  resourceId: string;
  version: string;
  fileSha1: string;
  description?: string;
  dependencies?: {
    resourceId: string;
    versionRange: string;
  }[];
  customPropertyDescriptors?: {
    key: string;
    defaultValue: string;
    type: 'editableText' | 'readonlyText' | 'radio' | 'checkbox' | 'select';
    candidateItems?: string[];
    remark?: string;
  }[];
  baseUpcastResources?: {
    resourceId: string;
  }[];
  resolveResources: {
    resourceId: string;
    contracts: {
      policyId: string;
    }[];
  }[];
}

export function createVersion(params: CreateVersionParamsType) {
  return request.post(`/v2/resources/${params.resourceId}/versions`, params);
}

// 查看资源版本信息
export interface ResourceVersionInfoParamsType1 {
  version: string;
  resourceId: string;
  projection?: string;
}

export interface ResourceVersionInfoParamsType2 {
  versionId: string;
  projection?: string;
}

export function resourceVersionInfo(params: ResourceVersionInfoParamsType1 | ResourceVersionInfoParamsType2) {
  if ((params as ResourceVersionInfoParamsType1).version) {
    return request.get(`/v2/resources/${(params as ResourceVersionInfoParamsType1).resourceId}/versions/${(params as ResourceVersionInfoParamsType1).version}`, {
      params: {
        projection: params.projection,
      }
    });
  }
  return request.get(`/v2/resources/versionss/detail`, {
    params,
  })
}

// 更新资源版本信息
export interface UpdateResourceVersionInfoParamsType {
  version: string;
  resourceId: string;
  description?: string;
  customPropertyDescriptors?: CreateVersionParamsType['customPropertyDescriptors'];
  resolveResources?: CreateVersionParamsType['resolveResources'];
}

export function updateResourceVersionInfo(params: UpdateResourceVersionInfoParamsType) {
  return request.put(`/v2/resources/${params.resourceId}/versions/${params.version}`, params);
}

// 保存或者更新资源版本草稿
export interface SaveVersionsDraft {
  resourceId: string;
  version: string;
  fileSha1: string;
  description: string;
  dependencies: {
    resourceId: string;
    versionRange: string;
    versionRangeType: 1 | 2;
  }[];
  customPropertyDescriptors: {
    key: string;
    defaultValue: string;
    type: 'editableText' | 'readonlyText' | 'radio' | 'checkbox' | 'select';
    candidateItems?: string[];
    remark?: string;
  }[];
  baseUpcastResources: {
    resourceId: string;
  }[];
  resolveResources: {
    resourceId: string;
    contracts: {
      policyId: string;
    }[];
  }
}
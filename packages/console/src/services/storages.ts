import request from '@/utils/request';

export interface bucketListParamsType {
  bucketType: 0 | 1 | 2;
}

export function bucketList(params: bucketListParamsType) {
  return request.get(`/v1/storages/buckets`, {
    params: params,
  });
}

export interface FileIsExistParamsType {
  sha1: string;
}

export function fileIsExist(params: FileIsExistParamsType) {
  return request.get('/v1/storages/files/fileIsExist', {
    params: params,
  });
}

interface UploadFileParamsType {
  file: File;
  resourceType?: string;
}

export function uploadFile(params: UploadFileParamsType) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      formData.append(key, value);
    }
  }
  return request.post('/v1/storages/files/upload', formData);
}

export interface UploadImageParamsType {
  file: File;
}

export function uploadImage(params: UploadImageParamsType) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      formData.append(key, value);
    }
  }
  return request.post('/v1/storages/files/uploadImage', formData);
}

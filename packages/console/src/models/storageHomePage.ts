import {DvaReducer} from '@/models/shared';
import {AnyAction} from 'redux';
import {EffectsCommandMap, Subscription} from 'dva';
import {ConnectState} from '@/models/connect';
import {
  bucketList,
  BucketListParamsType,
  createBucket,
  CreateBucketParamsType, deleteBuckets, DeleteBucketsParamsType,
  spaceStatistics
} from '@/services/storages';

export interface StorageHomePageModelState {
  newBucketName: string;
  bucketList: {
    bucketName: string;
    bucketType: 0 | 1 | 2;
    createDate: string;
    totalFileQuantity: number;
  }[];
  activatedBucket: string;
  totalStorage: number;
  usedStorage: number;

  currentBucketInfo: {
    name: string;
    createTime: string;
    objectQuantity: number;
  } | null;
  objectList: {
    name: string;
  }[];
}

export interface ChangeAction extends AnyAction {
  type: 'change' | 'storageHomePage/change';
  payload: Partial<StorageHomePageModelState>;
}

export interface FetchBucketsAction extends AnyAction {
  type: 'storageHomePage/fetchBuckets' | 'fetchBuckets';
}

export interface CreateBucketAction extends AnyAction {
  type: 'storageHomePage/createBucket';
}

export interface OnChangeActivatedBucketAction extends AnyAction {
  type: 'storageHomePage/onChangeActivatedBucket' | 'onChangeActivatedBucket';
  payload: string;
}

export interface FetchSpaceStatisticAction extends AnyAction {
  type: 'fetchSpaceStatistic';
}

export interface DeleteBucketByNameAction extends AnyAction {
  type: 'storageHomePage/deleteBucketByName';
  payload: string;
}

export interface StorageHomePageModelType {
  namespace: 'storageHomePage';
  state: StorageHomePageModelState;
  effects: {
    fetchBuckets: (action: FetchBucketsAction, effects: EffectsCommandMap) => void;
    createBucket: (action: CreateBucketAction, effects: EffectsCommandMap) => void;
    onChangeActivatedBucket: (action: OnChangeActivatedBucketAction, effects: EffectsCommandMap) => void;
    fetchSpaceStatistic: (action: FetchSpaceStatisticAction, effects: EffectsCommandMap) => void;
    deleteBucketByName: (action: DeleteBucketByNameAction, effects: EffectsCommandMap) => void;
  };
  reducers: {
    change: DvaReducer<StorageHomePageModelState, ChangeAction>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const Model: StorageHomePageModelType = {
  namespace: 'storageHomePage',
  state: {
    newBucketName: '',
    bucketList: [],
    activatedBucket: '',
    totalStorage: -1,
    usedStorage: -1,

    currentBucketInfo: null,
    objectList: [],
  },
  effects: {
    * fetchBuckets({}: FetchBucketsAction, {call, put, select}: EffectsCommandMap) {
      const params: BucketListParamsType = {
        bucketType: 0,
      };
      const {data} = yield call(bucketList, params);
      const {storageHomePage}: ConnectState = yield select(({storageHomePage}: ConnectState) => ({storageHomePage}));
      // console.log(data, 'datadata092834oi');
      yield put<ChangeAction>({
        type: 'change',
        payload: {
          bucketList: data.map((i: any) => ({
            bucketName: i.bucketName,
            bucketType: i.bucketType,
            createDate: i.createDate,
            totalFileQuantity: i.totalFileQuantity,
          })),
          // activatedBucket: (storageHomePage.activatedBucket === '' && data?.length > 0) ? data[0].bucketName : '',
        },
      });
      yield put<OnChangeActivatedBucketAction>({
        type: 'onChangeActivatedBucket',
        payload: data?.length > 0
          ? (data.map((b: any) => b.bucketName).includes(storageHomePage.activatedBucket)
            ? storageHomePage.activatedBucket
            : data[0].bucketName)
          : '',
      });
      yield put<FetchSpaceStatisticAction>({
        type: 'fetchSpaceStatistic',
      });
    },
    * createBucket({}: CreateBucketAction, {call, select}: EffectsCommandMap) {
      const {storageHomePage}: ConnectState = yield select(({storageHomePage}: ConnectState) => ({storageHomePage}));
      // console.log(storageHomePage, 'storageHomePage');
      const params: CreateBucketParamsType = {
        bucketName: storageHomePage.newBucketName,
      };
      yield call(createBucket, params);
    },
    * onChangeActivatedBucket({payload}: OnChangeActivatedBucketAction, {put}: EffectsCommandMap) {
      yield put<ChangeAction>({
        type: 'change',
        payload: {
          activatedBucket: payload,
        },
      });
    },
    * fetchSpaceStatistic({}: FetchSpaceStatisticAction, {put, call}: EffectsCommandMap) {
      const {data} = yield call(spaceStatistics);
      // console.log(data, 'aw89ihnwesdlk');
      yield put<ChangeAction>({
        type: 'change',
        payload: {
          totalStorage: data.storageLimit,
          usedStorage: data.totalFileSize,
        },
      });
    },
    * deleteBucketByName({payload}: DeleteBucketByNameAction, {call, put}: EffectsCommandMap) {
      const params: DeleteBucketsParamsType = {
        bucketName: payload,
      };
      yield call(deleteBuckets, params);
      yield put<FetchBucketsAction>({
        type: 'fetchBuckets',
      });
    },
  },
  reducers: {
    change(state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  subscriptions: {
    setup({}) {

    }
  }
};

export default Model;

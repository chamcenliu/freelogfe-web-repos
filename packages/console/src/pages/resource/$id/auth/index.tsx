import * as React from 'react';

import styles from './index.less';
import FInfoLayout from '@/pages/resource/layouts/FInfoLayout';
import FContentLayout from '@/pages/resource/layouts/FContentLayout';
import FPolicies from '@/pages/resource/components/FPolicies';
import {FTitleText, FContentText} from '@/components/FText';
import FEditorCard from '@/components/FEditorCard';
import FAuthPanel from '@/pages/resource/components/FAuthPanel';
import StatusLabel from '@/pages/resource/components/StatusLabel';
import {Table} from 'antd';
import {connect, Dispatch} from "dva";
import {
  ConnectState,
  ResourceAuthPageModelState,
  ResourceInfoModelState,
} from "@/models/connect";
import {ChangeContractsAuthorizedAction, UpdatePoliciesAction} from "@/models/resourceAuthPage";
import {withRouter} from "umi";
import {i18nMessage} from "@/utils/i18n";

const columns: any[] = [
  {
    title: i18nMessage('contract_name') + '｜' + i18nMessage('contract_id'),
    dataIndex: 'name',
    render: (_: any, record: any) => (<>
      <FContentText text={record.contractName}/>
      <div style={{height: 2}}/>
      <FContentText type="additional2" text={record.contractID}/>
    </>),
  },
  {
    title: i18nMessage('licensee'),
    // className: 'column-money',
    dataIndex: 'authorizedParties',
    // align: 'right',
    render: (_: any, record: any) => (<FContentText text={record.authorizedParty}/>)
  },
  {
    title: i18nMessage('contract_signed_time'),
    dataIndex: 'createTime',
    render: (_: any, record: any) => (<FContentText text={record.createDate}/>)
  },
  {
    title: i18nMessage('contract_state'),
    dataIndex: 'contractStatus',
    render: (_: any, record: any) => (<StatusLabel status={record.status}/>)
  },
];

interface AuthProps {
  dispatch: Dispatch;
  auth: ResourceAuthPageModelState,
  // resourceInfo: ResourceInfoModelState,
  match: {
    params: {
      id: string,
    }
  }
}

function Auth({dispatch, auth, match}: AuthProps) {

  function onAddPolicy(value: { title: string; code: string; }) {
    // console.log(value, 'valuevalue');
    dispatch<UpdatePoliciesAction>({
      type: 'resourceAuthPage/updatePolicies',
      id: match.params.id,
      payload: value,
    });
  }

  function onChangeStatus(value: {}) {
    dispatch<UpdatePoliciesAction>({
      type: 'resourceAuthPage/updatePolicies',
      id: match.params.id,
      payload: value,
    });
  }

  return (<FInfoLayout>
    <FContentLayout header={<FTitleText text={i18nMessage('authorization_infomation')} type={'h2'}/>}>
      <FEditorCard title={i18nMessage('authorization_plan')}>
        <FPolicies
          dataSource={auth.policies || []}
          onChangeStatus={(value) => dispatch<UpdatePoliciesAction>({
            type: 'resourceAuthPage/updatePolicies',
            id: match.params.id,
            payload: value,
          })}
          onAddPolicy={(value) => dispatch<UpdatePoliciesAction>({
            type: 'resourceAuthPage/updatePolicies',
            id: match.params.id,
            payload: value,
          })}
        />
      </FEditorCard>
      <FEditorCard title={i18nMessage('licencee_contract')}>
        <FAuthPanel
          dataSource={auth.contractsAuthorized}
          onChangeActivatedResource={(value) => dispatch<ChangeContractsAuthorizedAction>({
            type: 'resourceAuthPage/changeContractsAuthorized',
            payload: value,
          })}
        />
      </FEditorCard>
      <FEditorCard title={i18nMessage('authorizing_contracts')}>
        <Table
          columns={columns}
          dataSource={auth.contractsAuthorize || []}
          bordered
          // title={() => 'Header'}
          // footer={() => 'Footer'}
        />
      </FEditorCard>
    </FContentLayout>
  </FInfoLayout>);
}

export default withRouter(connect(({resourceAuthPage}: ConnectState) => ({
  auth: resourceAuthPage,
  // resourceInfo: resourceInfo,
}))(Auth));

import * as React from 'react';
import {FTipText, FContentText} from '@/components/FText';
import StatusLabel from '@/pages/resource/components/StatusLabel';
import {FNormalButton, FTextButton, FCircleButton} from '@/components/FButton';
import FDropdown from '@/components/FDropdown';
import FModal from '@/components/FModal';
import FInput from '@/components/FInput';
import FCodemirror from '@/components/FCodemirror';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {PlusOutlined} from '@ant-design/icons';


import styles from './index.less';

interface Policy {
  id: string | number;
  title: string;
  status: 'executing' | 'stopped';
  code: string;
}

interface FPoliciesProps {
  dataSource?: Policy[];
  // onChange?: (value: Policy[]) => void;
  onAddPolicy?: ({title, code}: { title: string; code: string; }) => void;
  onChangeStatus?: ({id, status, title}: { id: string | number; status: Policy['status']; title: string; }) => void;
}

export default function ({dataSource = [], onAddPolicy, onChangeStatus}: FPoliciesProps) {

  const [newVisible, setNewVisible] = React.useState<boolean>(false);
  const [newTitle, setNewTitle] = React.useState<string>('');
  const [newCode, setNewCode] = React.useState<string>('');
  const [previewCode, setPreviewCode] = React.useState<string>('');
  const [previewVisible, setPreviewVisible] = React.useState<boolean>(false);

  function onOkNewPolicy() {
    setNewVisible(false);
    return onAddPolicy && onAddPolicy({
      title: newTitle,
      code: newCode,
    });
  }

  function onPolicyStatusChange(id: string | number, status: Policy['status'], title: string) {
    return onChangeStatus && onChangeStatus({id, status, title});
  }

  function openNewVisible() {
    setNewVisible(true);
  }

  function closeNewVisible() {
    setNewVisible(false);
  }

  function onChangeCode(value: string) {
    setNewCode(value);
  }

  function openPreviewCode(code: string) {
    setPreviewCode(code);
    setPreviewVisible(true);
  }

  function closePreview() {
    setPreviewVisible(false);
  }

  return (<div className={styles.FPoliciesStyles}>
    {dataSource?.length === 0
      ? (<div className={styles.empty}>
        <FTipText type="secondary" text={'未添加策略的资源不会出现在资源市场中'}/>
        <div style={{height: 20}}/>
        <FNormalButton onClick={openNewVisible}>立即添加策略</FNormalButton>
      </div>)
      : (<div className={styles.policies}>
        {
          dataSource?.map((i) => (<PolicyCard
            key={i.id}
            title={i.title}
            status={i.status}
            code={i.code}
            onPreview={() => openPreviewCode(i.code)}
            onChangeStatus={(value) => onPolicyStatusChange(i.id, value, i.title)}
          />))
        }
        <div>
          <FNormalButton
            onClick={openNewVisible}
            theme="weaken"
            shape="circle"
            icon={<PlusOutlined/>}
          />
        </div>
      </div>)}
    <FModal
      title="查看策略"
      visible={previewVisible}
      // onOk={this.handleOk}
      onCancel={closePreview}
      // cancelText={null}
      footer={null}
    >
      <SyntaxHighlighter
        showLineNumbers={true}
      >{previewCode}</SyntaxHighlighter>
    </FModal>
    <FModal
      title="新建策略"
      visible={newVisible}
      onCancel={closeNewVisible}
      onOk={onOkNewPolicy}
      width={768}
    >
      <FInput
        className={styles.newTitle}
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder={'请输入授权策略名称'}
      />
      <div style={{height: 10}}/>
      <FCodemirror
        value={newCode}
        onChange={onChangeCode}
      />
    </FModal>
  </div>);
}

interface PolicyCardProps {
  title: string;
  status: 'executing' | 'stopped';
  code: string;
  onPreview?: () => void;
  onChangeStatus?: (value: PolicyCardProps['status']) => void;
}

function PolicyCard({title, status, code, onPreview, onChangeStatus}: PolicyCardProps) {
  return (<div className={styles.policy}>
    <div className={styles.policyHeader}>
      <FContentText text={title} singleRow={true}/>
      <FDropdown
        onChange={(value: any) => {
          if (value !== status) {
            return onChangeStatus && onChangeStatus(value);
          }
        }}
        text={<StatusLabel status={'executing'}/>}
        options={[{value: 'executing', text: '启用'}, {value: 'stopped', text: '停用'}]}
      />
    </div>
    <div style={{height: 5}}/>
    <div className={styles.policyContent}>
      <pre>{code}</pre>
    </div>
    <div style={{height: 3}}/>
    <div className={styles.fullscreen}>
      <FTextButton onClick={onPreview}>全屏查看</FTextButton>
    </div>
  </div>);
}

// policies

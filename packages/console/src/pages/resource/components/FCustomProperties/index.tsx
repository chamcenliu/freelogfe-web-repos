import * as React from 'react';
import FInput from '@/components/FInput';
import FSelect from '@/components/FSelect';
import styles from './index.less';
import {Space, Switch} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {FTextButton} from '@/components/FButton';
import FHorn from '@/pages/resource/components/FHorn';

interface data {

}

interface FCustomPropertiesProps {
  stubborn?: boolean;
  dataSource?: data[];
}

export default function ({stubborn = false}: FCustomPropertiesProps) {
  return (<div className={styles.styles}>
    <Property stubborn={stubborn} data={{}}/>
  </div>);
}

interface PropertyProps {
  data: data;
  stubborn?: boolean;
}


function Property({stubborn = false, data}: PropertyProps) {

  const [editing, setEditing] = React.useState<'' | 'value' | 'remark'>('remark');

  return (<FHorn
    extra={stubborn || (<a className={styles.delete}>删除</a>)}
    className={styles.FHorn}>

    <div className={styles.row}>
      <Field title={'key'} dot={true}>
        <FInput disabled={stubborn}/>
      </Field>
      <Field status={stubborn ? (editing === 'value' ? 'editing' : 'editable') : 'normal'} title={'value'} dot={true}>
        <FInput disabled={stubborn}/>
      </Field>
      <Field status={stubborn ? (editing === 'remark' ? 'editing' : 'editable') : 'normal'} title={'属性说明'}>
        <FInput disabled={false}/>
      </Field>
      <Field title={'允许展品自定义'}>
        <Switch
          disabled={stubborn}
          className={styles.Switch}
          size="default"
          defaultChecked
        />
      </Field>
    </div>
    <div className={styles.row}>
      <Field className={styles.FSelect} title={'自定义方式'}>
        <FSelect
          disabled={stubborn}
          className={styles.FSelect}
          dataSource={[{value: 1, title: '输入框'}, {value: 2, title: '下拉框'}]}
          placeholder={'请选择'}
        />
      </Field>
      <Field title={'属性说明'} className={styles.customOptions}>
        <FInput disabled={stubborn}/>
      </Field>
    </div>
  </FHorn>);
}


interface FieldProps {
  dot?: boolean;
  title: string;
  children?: React.ReactNode;
  className?: string;
  status?: 'normal' | 'editable' | 'editing';
}

function Field({status = 'normal', className, dot = false, title, children}: FieldProps) {
  return (<div className={styles.Field + ' ' + className}>
      <div className={styles.FieldTitle}>
        {dot && <i className={styles.dot}/>}
        <span>{title}</span>
      </div>
      <div style={{height: 5}}/>

      <FHorn extra={<>
        {
          status === 'editable' && (
            <FTextButton className={styles.editable}>
              <EditOutlined/>
            </FTextButton>
          )
        }
        {
          status === 'editing' && (
            <Space size={10}><FTextButton>取消</FTextButton><FTextButton theme="primary">保存</FTextButton></Space>)
        }
      </>}>
        {children}
      </FHorn>
    </div>
  );
}

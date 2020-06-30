import * as React from 'react';
import styles from './index.less';
import FLayout from '@/layouts/FLayout';
import {FTitle, FContent} from '@/components/FText';
import FEditorCard from '@/components/FEditorCard';
import FInput from '@/components/FInput';
import FSelect from '@/components/FSelect';
import FUploadImage from '@/components/FUploadImage';
import {Input} from 'antd';
import 'antd/es/modal/style';
import 'antd/es/slider/style';

const resourceType = [
  {
    value: 1,
    title: 'image',
  },
  {
    value: 2,
    title: 'zip',
  },
];

export default function () {
  return (<FLayout>
    <div style={{height: 36}}/>
    <FTitle text={'创建资源'} type={'h2'}/>
    <div style={{height: 36}}/>
    <div className={styles.workspace}>
      <FEditorCard title={'资源名称'} dot={true}>
        <div className={styles.resourceName}>
          <FContent text={'yanghongtian /'}/>
          &nbsp;
          <FInput
            className={styles.FInput}
            placeholder={'输入资源名称'}
            suffix={<span className={styles.FInputWordCount}>40</span>}
          />
        </div>
      </FEditorCard>

      <FEditorCard title={'资源类型'} dot={true}>
        <FSelect className={styles.FSelect} dataSource={resourceType} value={1}/>
      </FEditorCard>

      <FEditorCard title={'资源简介'}>
        <div className={styles.introduction}>
          <Input.TextArea className={styles.TextArea}/>
          <span className={styles.FInputWordCount}>200</span>
        </div>
      </FEditorCard>

      <FEditorCard title={'资源封面'}>
        <div className={styles.cover}>
          <FUploadImage/>
          <div className={styles.coverTip}>
              <FContent type="additional2" text={'只支持JPG/PNG/GIF，GIF文件不能动画化，大小不超过5M，建议尺寸为800X600；'}/>
              <FContent type="additional2" text={'未上传封面时，默认使用系统封面。'}/>
          </div>
        </div>
      </FEditorCard>

      <FEditorCard title={'资源标签'}>
      </FEditorCard>
    </div>
    <div style={{height: 100}}/>
  </FLayout>);
}
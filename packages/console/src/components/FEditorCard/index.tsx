import * as React from 'react';
import {FTitle} from '@/components/FText';
import styles from './index.less';

interface FEditorCardProps {
  children?: React.ReactNode;
  title: string;
  dot?: boolean;
}

export default function ({children, title, dot = false}: FEditorCardProps) {
  return (<div className={styles.styles}>
    <div className={styles.title}>
      <i className={styles.dot + ' ' + (dot ? '' : styles.dotHidden)}/>
      <FTitle type={'h4'} text={title}/>
    </div>
    <div style={{height: 30}}/>
    <div className={styles.content}>
      {children}
    </div>
  </div>);
}
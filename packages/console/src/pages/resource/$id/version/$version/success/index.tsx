import * as React from 'react';
import styles from './index.less';
import FLayout from '@/layouts/FLayout';
import {FTipText} from '@/components/FText';
import {FTextButton} from '@/components/FButton';
import {withRouter, router} from "umi";
import FCenterLayout from "@/layouts/FCenterLayout";

interface SuccessProps {
  match: {
    params: {
      id: string;
      version: string;

    };
    url: string;
  }
}

let clear: any = null;
let timeV: number = 3;

function Success({match}: SuccessProps) {
  // console.log(match, 'SSSSSSAAAAA');
  const [time, setTime] = React.useState<number>(timeV);

  React.useEffect(() => {
    clear = setInterval(() => {
      console.log(time, 'EEEEE');
      timeV--;
      setTime(timeV);
      if (timeV === 0) {
        goto();
      }

    }, 1000);
    return function () {
      clearInterval(clear);
      clear = null;
      timeV = 3;
    }
  }, [goto, time]);

  function goto() {

    return router.replace(match.url.replace('/success', ''));
  }

  return (<FCenterLayout>
    <div style={{height: 100}}/>
    <div className={styles.modal}>
      <i className={'freelog fl-icon-shenqingchenggong'}/>
      <div style={{height: 20}}/>
      <FTipText type={'secondary'} text={`版本 ${match.params.version} 创建成功`}/>
      <div style={{height: 40}}/>
      <div className={styles.goto}>
        <FTipText type={'modal'} text={`${time}秒 后跳转至资源信息-最新版本编辑页；`}/>
        <div style={{width: 10}}/>
        <FTextButton
          theme={'primary'}
          onClick={goto}
        >立即跳转</FTextButton>
      </div>
    </div>
  </FCenterLayout>)
}


export default withRouter(Success);
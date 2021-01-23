import React from 'react';
import Icon from "./icon";
// !!raw-loader 代表开启自定义加载方式
const x = require('!!raw-loader!./icon.example.tsx');
console.log(x.default)
const IconExample:React.FC = ()=>{
    return (
        <div>
            <Icon name="alipay"/>
            <Icon name="qq"/>
            <Icon name="wechat"/>
            <pre>
                {x.default}
            </pre>
        </div>
    )
}

export default IconExample;
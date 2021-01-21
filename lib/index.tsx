import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon/Icon';

const fn:React.MouseEventHandler = (e)=>{
    console.log(e.target)
    // 强制断言
    console.log((e.target as SVGUseElement).href)

    // 这句话可能是错的～～～ 因为传递的元素 这里肯定不是div而是 svg
    // console.log((e.target as HTMLDivElement).style)
}
ReactDOM.render(
  (<div>
      <Icon name="wechat" onClick={fn} />
  </div>),
  document.querySelector('#root'));
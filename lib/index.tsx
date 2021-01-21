import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon/Icon';

const fn = ()=>{
    console.log('fn')
}
ReactDOM.render(
  (<div>
      <Icon name="wechat" onClick={fn} />
  </div>),
  document.querySelector('#root'));
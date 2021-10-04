import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Footer from './Footer';

// eslint-disable-next-line import/order
import Aegis from 'aegis-web-sdk';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const aegis = new Aegis({
  id: 'Z4vVGEA6o9pYNaY3Op', // 上报 id
  uin: 'xxx', // 用户唯一 ID（可选）
  reportApiSpeed: true, // 接口测速
  reportAssetSpeed: true, // 静态资源测速
  spa: true, // spa 应用页面跳转的时候开启 pv 计算
});

ReactDOM.render((
  <>
    <Home />
    <Footer />
  </>
), document.getElementById('root'));

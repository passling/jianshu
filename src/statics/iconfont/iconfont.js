import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`



@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1542953906258'); /* IE9*/
  src: url('./iconfont.eot?t=1542953906258#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1542953906258') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1542953906258#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-19:before { content: "\\e600"; }

.icon-aa:before { content: "\\e602"; }

.icon-zan:before { content: "\\e707"; }

.icon-tubiao07:before { content: "\\e60e"; }

.icon-xin:before { content: "\\e789"; }

.icon-nv:before { content: "\\e78d"; }

.icon-nan:before { content: "\\e66c"; }

.icon-yumaobi:before { content: "\\e645"; }

.icon-weibo:before { content: "\\e63d"; }

.icon-shuaxin:before { content: "\\e65f"; }

.icon-you:before { content: "\\e601"; }

.icon-bangzhu:before { content: "\\e606"; }

.icon-xin1:before { content: "\\e621"; }

.icon-pinglun:before { content: "\\e61f"; }

.icon-weixin:before { content: "\\e613"; }

.icon-icon-test:before { content: "\\e61e"; }

.icon-fangdajing:before { content: "\\e65c"; }

.icon-arrow-up:before { content: "\\e603"; }




`

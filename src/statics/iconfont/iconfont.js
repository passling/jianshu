import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`


@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1542679982565'); /* IE9*/
  src: url('./iconfont.eot?t=1542679982565#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1542679982565') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1542679982565#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-aa:before { content: "\\e602"; }

.icon-tubiao07:before { content: "\\e60e"; }

.icon-xin:before { content: "\\e789"; }

.icon-yumaobi:before { content: "\\e645"; }

.icon-shuaxin:before { content: "\\e65f"; }

.icon-fangdajing:before { content: "\\e65c"; }

`

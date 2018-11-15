import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1542266134499'); /* IE9*/
  src: url('./iconfont.eot?t=1542266134499#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1542266134499') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1542266134499#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-aa:before { content: "\\e602"; }

.icon-yumaobi:before { content: "\\e645"; }

.icon-shuaxin:before { content: "\\e65f"; }

.icon-fangdajing:before { content: "\\e65c"; }




`

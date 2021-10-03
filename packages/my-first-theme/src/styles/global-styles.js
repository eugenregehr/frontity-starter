import { css } from "frontity";
import FontText from '../fonts/Roboto-Regular.ttf';
import FontTextMedium from '../fonts/Roboto-Medium.ttf';
import FontTextBold from '../fonts/Roboto-Bold.ttf';
import colors from "./colors";

export const GlobalStyles = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse; 
    border-spacing: 0;
  }

  img, img:focus{
    box-shadow: none;
    outline: none;
  }

  *{
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Body Text';
    src: url('${FontText}') format('truetype');
    font-style: normal;
  }

  @font-face {
    font-family: 'Body Text Medium';
    src: url('${FontTextMedium}') format('truetype');
    font-style: normal;
  }

   @font-face {
    font-family: 'Body Text Bold';
    src: url('${FontTextBold}') format('truetype');
    font-style: normal;
  }
  
  body, html{
    font-family: 'Body Text';
    color: ${colors.text};
    line-height: 1.4;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    line-height: 1.3;
  }

  .title-1{
    font-size: clamp(2.3em, 4.5vw, 3.5em);
  }

  .title-2{
    font-size: clamp(2em, 4vw, 3em);
  }

  .title-3{
    font-size: clamp(1.2em, 1.5vw, 1.75em);
  }

  a{
    text-decoration: none;
    /* color: ${colors.text}; */
    color: inherit;
  }

  a[aria-disabled="true"] {
    pointer-events: none;
  }

  strong{
    font-family: 'Body Text Bold'
  }

`
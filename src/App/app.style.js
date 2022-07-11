import { size } from "App/device";
import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "App/theme";

export const AppContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  .form-error {
    color: red;
  }
  .pointer {
    cursor: pointer;
  }
  .flex {
    display: flex;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${Theme.mainColor};
  }
  .mainDiv {
    height: 89vh;
    padding-top: 1em;
    overflow-y: scroll;
    overflow-x: hidden;
    @media ${size["tablet-max"]} {
      margin-left: 12px;
    }
    ::-webkit-scrollbar {
      width: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f4f5f6;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #777;
      border-radius: 10px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .rowDiv {
    padding: 4.7em 0 1em;
    margin-right: 0 !important;
    .secDiv {
      width: 100%;
      padding: 0 1em;
    }
    .headDiv {
      display: flex;
      margin-left: auto;
      align-items: center;
      margin-bottom: 1em;
      .btnDiv {
        background-color: ${Theme.mainColor};
        cursor: pointer;
        width: 2em;
        height: 2em;
        margin-left: auto;
        align-items: center;
        justify-content: center;
        stroke: #fff;
        stroke-width: 5em;
        font-size: 1.2em;
        border-radius: 50%;
      }
    }
  }
  .btnDiv {
    display: flex;
    .btn {
      margin-left: auto;
    }
    button {
      margin-left: 1em;
    }
  }
  .pDiv {
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    background-color: #fff;
    border-radius: 1em;
    padding: 1em;
    margin-bottom: 1em;
    // .pDiv {
    // @media ${size["tablet-max"]} {
    //   margin-left: 1em;
    // }
    .header {
      font-weight: 700;
    }
    .label {
      font-weight: 400;
      padding-top: 10px;
    }
    .check {
      display: flex;
    }
  }
  .cardDiv {
    display: flex;
    max-width: 18em;
    text-align: center;
    @media ${size["laptop-sm-max"]} {
      display: block;
    }
    .ant-card {
      border-radius: 10px;
      margin-bottom: 5px;
      + .ant-card {
        margin-left: 1em;
        @media ${size["laptop-sm-max"]} {
          margin-left: 0;
        }
      }
      .ant-card-body {
        width: max-content;
      }
      .text {
        cursor: pointer;
        font-size: larger;
        font-weight: 600;
        color: ${Theme.mainColor};
      }
      :hover {
        background-color: ${Theme.mainColor};
        .text {
          color: #fff;
        }
      }
    }
  }
  .ant-menu-light .ant-menu-submenu-title:hover {
    color: ${Theme.mainColor};
  }
`;

const GlobalStyle = createGlobalStyle`
  body{
    color: ${Theme.mainColor};
  }
  .anime{
    opacity: 0;
    position: relative;
    animation: anime-animation 0.4s ease-in-out 0.33333s;
    animation-fill-mode: forwards;
    transform: translateX(50px);     
  }
  @-webkit-keyframes anime-animation {
    to {
      opacity: 1;
      transform: translatex(0);
    }
  }
  @keyframes anime-animation {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .anime:first-child{
    animation-delay: .1s;
  }
  .anime:nth-child(2){
    animation-delay: .2s;
  }
  .anime:nth-child(3){
    animation-delay: .3s;
  }
  .anime:nth-child(4){
    animation-delay: .4s;
  }
  .anime:nth-child(5){
    animation-delay: .5s;
  }
  .anime:nth-child(6){
    animation-delay: .6s;
  }
  .anime:nth-child(7){
    animation-delay: .7s;
  }
  .anime:nth-child(8){
    animation-delay: .8s;
  }
  .anime:nth-child(9){
    animation-delay: .9s;
  }
  .anime:nth-child(10){
    animation-delay: .91s;
  }
  .anime:nth-child(11){
    animation-delay: .92s;
  }
  .anime:nth-child(12){
    animation-delay: .93s;
  }
  .anime:nth-child(13){
    animation-delay: .94s;
  }
  .anime:nth-child(14){
    animation-delay: .95s;
  }
  .anime:nth-child(15){
    animation-delay: .96s;
  }
  .anime:nth-child(16){
    animation-delay: .97s;
  }
  .anime:nth-child(17){
    animation-delay: .98s;
  }
  .anime:nth-child(18){
    animation-delay: .99s;
  }
  .anime:nth-child(19){
    animation-delay: .991s;
  }
  .anime:nth-child(20){ 
    animation-delay: .992s;
  }
  .highZ{z-index: 22;}
  .highZ2{z-index: 20;}
  .highZ3{z-index: 18;}
  .highZ4{z-index: 23;}
`;

export default GlobalStyle;

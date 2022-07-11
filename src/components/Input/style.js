import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const FormWrapper = styled.div`
  padding: 0;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  margin: 10px 0;
  .ant-input{
    border: none;
  }
  .ant-input-affix-wrapper {
    background: #f4f5f6;
    border: 0;
    padding: 0 5px;
    box-shadow: none;
    border-radius: 5px;
  }
  .ant-input-prefix {
    margin-right: 5px;
  }
  .empty {
    border: 1px solid #e81c1c;
    box-shadow: 0 0 10px red !important;
  }
  .ant-input-number{
    width: 100%
  }
  input {
    display: block;
    width: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-appearance: none;
    background: #f4f5f6; //#fff;    
    height: 34px;
    font-size: 15px;
    font-weight: 300;
    padding: 10px 30px;
    border-radius: 5px;
    color: ${Theme.mainColor};
    font-family: "Rubik", sans-serif;
    ::placeholder {
      color: ${Theme.mainColor};
    }
    :-ms-input-placeholder {
      color: ${Theme.mainColor};
    }
    ::-ms-input-placeholder {
      color: ${Theme.mainColor};
    }
    :hover,
    :focus {
      outline: none;
    }
    @media ${size["desktop-sm-max"]} {
      font-size: 13px;
      padding: 5px;
    }
    @media ${size["tablet-max"]} {
      font-size: 14px;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export { FormWrapper };

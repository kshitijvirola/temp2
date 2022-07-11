import styled from "styled-components";

const StyleContainer = styled.div`
  .ant-collapse {
    background-color: #ffffff;
    .ant-card-body {
      word-break: break-all;
    }
    .ant-collapse-item {
      border: none;
      box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      margin-bottom: 2em;
    }
    .ant-collapse-arrow {
      font-size: 15px !important;
      color: #c5c5c5;
      top: 1.4em !important;
    }
    .ant-collapse-item-disabled {
      background-color: #f1f1f1;
    }
  }
`;

export { StyleContainer };

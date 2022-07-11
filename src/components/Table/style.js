import styled from "styled-components";

const TableStyle = styled.div`
  .ant-table-wrapper .ant-table {
    overflow-x: auto;
    .ant-table-container .ant-table-content .ant-table-tbody .ant-table-cell {
      .actionUI {
        display: flex;
        .actionDiv {
          display: flex;
          padding: 5px;
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }
    .ant-table-footer {
      .footerMain {
        display: flex;
        align-items: center;
        justify-content: end;
        font-size: 16px;
        .nameText,
        .colonText {
          font-weight: bold;
        }
        .colonText {
          margin: 0 5px;
        }
      }
    }
  }
  button{
    padding:0 5px;
    font-size: 11px;
    width: 12em;
    +button{margin-left:5px;}
  }
`;
export default TableStyle;

import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";

const ModalStyle = styled.div`
  .ant-modal {
    width: 520px !important;
    .ant-modal-content {
      border-radius: 10px !important;
      @media ${size["tablet-sm-max"]} {
        margin: 5%;
      }
      .ant-modal-header {
        border-radius: 10px;
      }
      .ant-modal-body {
        .fieldDiv {
          margin-bottom: 1em;
          .label {
            margin-bottom: 0.5em;
          }
          .input {
            border-bottom: none;
            background: #f4f5f6;
            padding: 5px 5px;
          }
          .genDiv {
            z-index: 18;
          }
          .switchDiv {
            margin-bottom: 1em;
            .text:first-child {
              margin: 2px 12px 2px 0;
            }
          }
        }
      }
    }
  }
  .countDiv span {
    margin: 0.5em;
    font-size: large;
    padding-top: 10px;
  }
  .weight {
    margin-bottom: 8px;
  }
`;
export { ModalStyle };

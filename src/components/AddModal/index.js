import React, { Component } from "react";
import { Modal } from "antd";

import { ModalStyle } from "./style";
import { AddModConst, kraDrop } from "./constant";
import { Label, Input, Button, Select } from "components/Form";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      common: "",
      commonErroe: false,
      kraType: "",
      kraTypeError: false,
      kra: "",
      kraError: false,
    };
  }
  handleCommon = (val) => {
    try {
      this.setState({
        common: val.target.value,
        commonErroe: val.target.value.trim() === "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  commonSubmit = () => {
    try {
      const { common } = this.state;
      let flag = false;
      if (common.trim() === "") {
        flag = true;
        this.setState({ commonErroe: true });
      }
      if (!flag) this.props.onOk();      
    } catch (error) {
      console.log(error);
    }
  };
  kraSubmit = () => {
    try {
      const { kra, kraType } = this.state;
      let flag = false;
      if (kra.trim() === "") {
        flag = true;
        this.setState({ kraError: true });
      }
      if (kraType.trim() === "") {
        flag = true;
        this.setState({ kraTypeError: true });
      }
      if (!flag) this.props.onOk();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { onOk, onCancel, title } = this.props;
    const { common, commonErroe, kraType, kraTypeError, kra, kraError } =
      this.state;

    let comonFild =
      title.toLowerCase() === "designation" ||
      title.toLowerCase() === "department" ||
      title.toLowerCase() === "location" ||
      title.toLowerCase() === "zone" ||
      title.toLowerCase() === "vertical" ||title.toLowerCase() === "period"||
      title.toLowerCase() === "kra type";
    return (
      <ModalStyle id="addModal-form">
        <Modal
          visible={true}
          onOk={onOk}
          onCancel={onCancel}
          footer={null}
          title={AddModConst.new + title}
          getContainer={() => document.getElementById("addModal-form")}
        >
          {comonFild && (
          <>
            <div className="fieldDiv">
              <Label
                title={`${
                  title.toLowerCase() === "department"
                    ? AddModConst.dept
                    : title.toLowerCase() === "location"
                    ? AddModConst.location
                    : title.toLowerCase() === "zone"
                    ? AddModConst.zone
                    : title.toLowerCase() === "vertical"
                    ? AddModConst.vertical
                    : title.toLowerCase() === "kra type"
                    ? AddModConst.kraType
                    : title.toLowerCase() === "period"
                    ? AddModConst.prd
                    : AddModConst.desg
                } ${AddModConst.st}`}
                className={`label ${commonErroe ? "empty" : ""}`}
              />
              <Input
                value={common}
                handleChange={this.handleCommon}
                className={commonErroe ? "empty" : ""}
              />
            </div>
            <div className="btnDiv">
              <div className="btn">
                <Button onClick={this.commonSubmit}>
                  {AddModConst.crtNew}
                </Button>
              </div>
            </div>
          </>
          )}
          {title.toLowerCase() === "kra" && (
            <>
              <div className="fieldDiv">
                <Label
                  title={AddModConst.kraType + AddModConst.st}
                  className={`label ${kraTypeError ? "empty" : ""}`}
                />
                <Select
                  value={kraType}
                  data={kraDrop}
                  selectClass={kraTypeError ? "empty" : ""}
                  onChange={(value) => {
                    this.setState({
                      kraType: value,
                      kraTypeError: false,
                    });
                  }}
                />
                <Label
                  title={AddModConst.kra + AddModConst.st}
                  className={`label ${kraError ? "empty" : ""}`}
                />
                <Input
                  value={kra}
                  className={kraError ? "empty" : ""}
                  handleChange={(val) => {
                    this.setState({
                      kra: val.target.value,
                      kraError: val.target.value.trim() === "",
                    });
                  }}
                />
              </div>
              <div className="btnDiv">
                <div className="btn">
                  <Button onClick={this.kraSubmit}>{AddModConst.crtNew}</Button>
                </div>
              </div>
            </>
          )}
        </Modal>
      </ModalStyle>
    );
  }
}
export default AddModal;

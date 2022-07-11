import React, { Component } from "react";
import { Select } from "antd";
import { withRouter } from "react-router-dom";

import { SelectContainer } from "./style";

const { Option } = Select;

class FormSelect extends Component {
  getOptions = () => {
    try {
      const { data, withID,noSort  } = this.props;
      if (data && data.length > 0) {
        if (withID) {
          let dArray =noSort ?data: data.sort((a, b) => a.value.localeCompare(b.value));
          return dArray.map((l, i) => {
            return (
              l.value &&
              l.id && (
                <Option value={l.value} key={i} id={l.id}>
                  {l.value}
                </Option>
              )
            );
          });
        } else {
          var dArray2 = data.sort((a, b) => a.localeCompare(b));
          return dArray2.map((a, i) => (
            <Option value={a} key={i}>
              {a}
            </Option>
          ));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { id, onChange, selectClass, defaultValue, className ,disabled } = this.props;
    return (
      <SelectContainer id={ "form-dropdown"} className={className}>
        <Select
          showSearch
          defaultActiveFirstOption
          showArrow={false}
          defaultValue={defaultValue}
          optionFilterProp="children"
          onChange={onChange}
          disabled={disabled}
          dropdownClassName="dropdown-custom"
          className={`select-custom ${selectClass ? selectClass : ""}`}
          // filterSort={(a, b) => a.value.localeCompare(b.value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          getPopupContainer={() =>
            document.getElementById( "form-dropdown")
          }
          dropdownRender={(mountNode, prop) => {
            return (
              <div className="dropdown-section">
                <div>{mountNode}</div>
              </div>
            );
          }}
        >
          {this.getOptions()}
        </Select>
      </SelectContainer>
    );
  }
}
FormSelect.defaultProps = {
  placeholder: null,
  className: "",
  disabled: false,
};
export default FormSelect;

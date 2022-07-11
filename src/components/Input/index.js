import React, { Component } from "react";
import { Input, InputNumber } from "antd";

import { FormWrapper } from "./style";
const { TextArea } = Input;
class FormInput extends Component {
  render() {
    const {
      handleChange,
      className,
      size,
      formClass,
      row,
      password,
      max,
      number,
      defaultVal,
      disabled,num,
      ...props
    } = this.props;
    let length = max ? max : 45;
    return (
      <FormWrapper className={formClass ? formClass : ""}>
        {row ? (
          <TextArea
            rows={row}
            onChange={handleChange}
            className={`form-control ${className}`}
            maxLength={length}
            {...props}
          />
        ) : password ? (
          <Input.Password
            size={size}
            onChange={handleChange}
            className={`form-control ${className}`}
            autoComplete="off"
            maxLength={length}
            {...props}
          />
        ) : number ? (
          <InputNumber
            defaultValue={!defaultVal&&100}            
            min={0}
            max={num?5:100}
            className={`form-control ${className}`}
            formatter={(value) =>num? value:`${value}%`}
            parser={(value) => value.replace(num?" ":"%", "")}
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />
        ) : (
          <Input
            size={size}
            onChange={handleChange}
            className={`form-control ${className}`}
            disabled={disabled}
            maxLength={length}
            {...props}
          />
        )}
      </FormWrapper>
    );
  }
}
FormInput.defaultProps = {
  size: "middle",
  placeholder: "",
  tabIndex: "1",
  className: "",
  readOnly: false,
};
export default FormInput;

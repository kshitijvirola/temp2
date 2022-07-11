import React, { Component } from "react";
import { StyleContainer } from "./style";
import { Collapse } from "antd";

const { Panel } = Collapse;

class CollapseData extends Component {
  render() {
    const { data, disabled, ...props } = this.props; //changeColKey
    return (
      <StyleContainer>
        <Collapse
          accordion
          bordered={false}// onChange={changeColKey}
          expandIconPosition="right"
          {...props}
        >
          {data?.map((a, i) => (
            <Panel header={a.header} className="anime" key={i}>
              {a.body}
            </Panel>
          ))}
        </Collapse>
      </StyleContainer>
    );
  }
}
export default CollapseData;

import React, { Component } from "react";

import { Menu, Header, Row, Col, Card } from "components/Form";
import { StyleContainer } from "./style.js";
import { HomeConst, EmpConst } from "./constant";
import { getAuthRole } from "modules/helper.js";
var userRole = getAuthRole();

class Home extends Component {
  componentDidMount() {
    try {
      userRole = userRole ? userRole : getAuthRole();
      // userRole !== 1 && this.props.history.push("/my-profile");
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    // if (!localStorage.auth) return <></>;
    return (
      <StyleContainer>
        <Header />
        <Row gutter={24} className="rowDiv">
          <Col xs={0} sm={0} md={6} lg={4} xl={4} className="manuDiv">
            <Menu />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={20}
            xl={20}
            className="mainDiv anime"
          >
            <div className="pDiv">
              <h2 className="header">{HomeConst.home}</h2>
              <div className="empDiv">
                <h2>{EmpConst.emp}</h2>
                <div className="cardDiv anime">
                  {EmpConst.map((a, i) => (
                    <Card key={i}>
                      <span
                        className="text"
                        onClick={() => this.props.history.push(a.link)}
                      >
                        {a.txt}
                      </span>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </StyleContainer>
    );
  }
}

export default Home;

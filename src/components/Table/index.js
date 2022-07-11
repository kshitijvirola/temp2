import React, { Component } from "react";
import { Table, Image } from "antd";
import { withRouter } from "react-router-dom";
import {
  FileFilled,
  PlusCircleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import TableStyle from "./style";
import { PageConst } from "./constant";
import { Input, Button } from "components/Form";
import { eye, editPen, fillClose } from "components/Images";
const { Column } = Table;
class TableUI extends Component {
  viewOnClick = (a, type) => {
    try {
      type === "Period" && this.props.viewCall(a);
    } catch (error) {
      console.log(error);
    }
  };
  editOnClick = (a, type) => {
    try {
      if (type === "emp")
        this.props.history.push("/employee/edit/" + window.btoa(a.empid));
      else {
        this.props.rowEdit(a);
      }
    } catch (error) {
      console.log(error);
    }
  };
  removeOnClick = (a, type) => {
    try {
      this.props.remove(type === "emp" ? a.empid : a);
    } catch (error) {
      console.log(error);
    }
  };
  actionUi = (a, type) => {
    try {
      return (
        <div className="actionUI" key="master">
          {(type === "emp" || type === "Period") && (
            <div
              className="actionDiv"
              onClick={() => this.viewOnClick(a, type)}
            >
              <EyeOutlined />
            </div>
          )}
          <div className="actionDiv" onClick={() => this.editOnClick(a, type)}>
            <EditOutlined />
          </div>
          <div
            className="actionDiv"
            onClick={() => this.removeOnClick(a, type)}
          >
            <DeleteOutlined />
          </div>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  columnUI = () => {
    const { type, showAction } = this.props;
    try {
      return (
        <>
          <Column
            width={50}
            title={PageConst.no}
            dataIndex={"sr"}
            sorter={(a, b) => a.sr - b.sr}
          />
          {type === "app" && (
            <>
              <Column
                title={PageConst.k336ra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.no}
                dataIndex={"waight"}
                sorter={(a, b) => a.waight.localeCompare(b.waight)}
              />
            </>
          )}
          {type === "des" && (
            <>
              <Column
                title={PageConst.des}
                dataIndex={"mname"}
                sorter={(a, b) => a.mname.localeCompare(b.mname)}
              />
            </>
          )}
          {(type === "loc" || type === "zone" || type === "vertical") && (
            <Column
              title={
                type === "loc"
                  ? PageConst.location
                  : type === "zone"
                  ? PageConst.zone
                  : PageConst.vertical
              }
              dataIndex={"mname"}
              sorter={(a, b) => a.mname.localeCompare(b.mname)}
            />
          )}
          {type === "kr" && (
            <>
              <Column
                title={PageConst.kraType}
                dataIndex={"mname"}
                sorter={(a, b) => a.mname.localeCompare(b.mname)}
              />
            </>
          )}
          {type === "kraa" && (
            <>
              <Column
                title={PageConst.kraType}
                dataIndex={"mname"}
                sorter={(a, b) => a.mname.localeCompare(b.mname)}
              />
              <Column
                title={PageConst.kra}
                dataIndex={"kraname"}
                sorter={(a, b) => a.kraname.localeCompare(b.kraname)}
              />
            </>
          )}
          {type === "dept" && (
            <>
              <Column
                title={PageConst.dept}
                dataIndex={"mname"}
                sorter={(a, b) => a.mname.localeCompare(b.mname)}
              />
            </>
          )}
          {type === "Period" && (
            <>
              <Column
                title={PageConst.per}
                dataIndex={"periodname"}
                sorter={(a, b) => a.periodname.localeCompare(b.periodname)}
              />
            </>
          )}
          {type === "myapp" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.scEr}
                dataIndex={"score"}
                sorter={(a, b) => a.score - b.score}
              />
            </>
          )}
          {type === "emp" && (
            <>
              <Column
                title={PageConst.empCode}
                dataIndex={"empcode"}
                sorter={(a, b) => a.empcode.localeCompare(b.empcode)}
              />
              <Column
                title={PageConst.empName}
                dataIndex={"name"}
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
              <Column
                title={PageConst.des}
                dataIndex={"designation"}
                sorter={(a, b) => a.designation.localeCompare(b.designation)}
              />
              <Column
                title={PageConst.dept}
                dataIndex={"department"}
                sorter={(a, b) => a.department.localeCompare(b.department)}
              />
              <Column
                title={PageConst.email}
                dataIndex={"email"}
                sorter={(a, b) => a.email.localeCompare(b.email)}
              />
              <Column
                title={PageConst.mob}
                dataIndex={"mobileno"}
                sorter={(a, b) => a.mobileno.localeCompare(b.mobileno)}
              />
            </>
          )}
          {type === "kraKpi" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
              />
              <Column
                width={100}
                title={PageConst.weights}
                dataIndex={"weights"}
                sorter={(a, b) => a.weights.localeCompare(b.weights)}
              />
            </>
          )}
          {type === "kra" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
              />
              <Column
                title={PageConst.weights}
                dataIndex={"waight"}
                sorter={(a, b) => a.waight - b.waight}
              />
              <Column
                title={PageConst.scores}
                dataIndex={"score"}
                sorter={(a, b) => a.score - b.score}
              />
              <Column
                title={PageConst.scEr}
                dataIndex={"scoreEarned"}
                sorter={(a, b) => a.scoreEarned - b.scoreEarned}
              />
            </>
          )}
          {type === "profile" && (
            <>
              <Column
                width={200}
                title={PageConst.empCode}
                dataIndex={"emp"}
                sorter={(a, b) => a.emp.localeCompare(b.emp)}
              />
              <Column
                title={PageConst.name}
                dataIndex={"name"}
                width={200}
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
              <Column
                title={PageConst.weight}
                dataIndex={"weight"}
                sorter={(a, b) => a.weight.localeCompare(b.weight)}
              />
            </>
          )}
          {type === "kratype" && (
            <>
              <Column
                title={PageConst.kraType}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
                width={200}
              />
              <Column
                title={PageConst.weights}
                dataIndex={"weight"}
                sorter={(a, b) => a.weight - b.weight}
              />
            </>
          )}
          {type === "summ" && (
            <>
              <Column
                title={PageConst.kra + PageConst.type}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.sco1}
                dataIndex={"score1"}
                sorter={(a, b) => a.score1 - b.score1}
              />
              <Column
                title={PageConst.sco2}
                dataIndex={"score2"}
                sorter={(a, b) => a.score2 - b.score2}
              />
              <Column
                title={PageConst.finScor}
                dataIndex={"finalScore"}
                sorter={(a, b) => a.finalScore - b.finalScore}
              />
            </>
          )}
          {type === "rpKra" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
              />
              <Column
                title={PageConst.weight}
                dataIndex={"wt"}
                sorter={(a, b) => a.wt - b.wt}
              />
              <Column
                title={PageConst.score}
                dataIndex={"score"}
                sorter={(a, b) => a.score - b.score}
              />
              <Column
                title={PageConst.scEr}
                dataIndex={"scoreEarned"}
                sorter={(a, b) => a.scoreEarned - b.scoreEarned}
              />
              <Column
                title={PageConst.doc}
                render={(record, i) => this.docUI(record, type)}
              />
            </>
          )}
          {type === "appAddEdit" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
              />
              <Column
                title={PageConst.weight}
                dataIndex={"waight"}
                sorter={(a, b) => a.waight - b.waight}
              />
              <Column
                title={PageConst.score}
                dataIndex={"score"}
                sorter={(a, b) => a.score - b.score}
                render={(record, i) => this.inputUI(record, type)}
              />
              <Column
                title={PageConst.doc}
                render={(record, i) => <PlusCircleOutlined />}
              />
            </>
          )}
          {type === "empApp" && (
            <>
              <Column
                title={PageConst.empName}
                dataIndex={"name"}
                sorter={(a, b) => a.name.localeCompare(b.name)}
              />
              <Column
                title={PageConst.dept}
                dataIndex={"department"}
                sorter={(a, b) => a.department.localeCompare(b.department)}
              />
              <Column
                title={PageConst.des}
                dataIndex={"designation"}
                sorter={(a, b) => a.designation.localeCompare(b.designation)}
              />
              <Column
                title={PageConst.sdate}
                dataIndex={"startdate"}
                sorter={(a, b) => a.startdate.localeCompare(b.startdate)}
              />
              <Column
                title={PageConst.edate}
                dataIndex={"enddate"}
                sorter={(a, b) => a.edate.localeCompare(b.enddate)}
              />
              <Column
                width={150}
                title={PageConst.action}
                render={(record, i) => (
                  <div className="actionUI" key="master">
                    <div>
                      {/* {record.giveappraisal&& record.viewappraisal*/}
                      {record.giveappraisal !== 0 && (
                        <div>
                          <Button
                            onClick={() =>
                              this.props.history.push(
                                "/appraisal/junior/add/" +
                                  window.btoa(record.empid)
                              )
                            }
                          >
                            {PageConst.give}
                          </Button>
                        </div>
                      )}
                      <div>
                        <Button
                          onClick={() =>
                            this.props.history.push("/appraisal/junior")
                          }
                        >
                          {PageConst.vj}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              />
            </>
          )}
          {type === "juniorApp" && (
            <>
              <Column
                title={PageConst.kra}
                dataIndex={"kra"}
                sorter={(a, b) => a.kra.localeCompare(b.kra)}
              />
              <Column
                title={PageConst.kpi}
                dataIndex={"kpi"}
                sorter={(a, b) => a.kpi.localeCompare(b.kpi)}
              />
              <Column
                title={PageConst.scores}
                dataIndex={"scores"}
                sorter={(a, b) => a.scores.localeCompare(b.scores)}
              />
              <Column
                title={PageConst.doc}
                dataIndex={"doc"}
                sorter={(a, b) => a.doc.localeCompare(b.doc)}
              />
            </>
          )}
          {showAction && (
            <Column
              width={150}
              title={PageConst.action}
              render={(record, i) => this.actionUi(record, type)}
            />
          )}
        </>
      );
    } catch (error) {
      console.log(error);
    }
  };
  inputUI = (a, type) => {
    try {
      let path = window.location.pathname === "/edit-employee";
      return <Input type="number" key="input" value={path ? a : 0} />;
    } catch (error) {
      console.log(error);
    }
  };
  docUI = (a, type) => {
    try {
      return (
        <div className="docUI" style={{ textAlign: "center" }} key="file">
          {a.doc ? <FileFilled /> : "-"}
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };
  // action = (record, type) => {
  //   try {
  //     return (
  //       <div className="actionUI" key="imgq">
  //         <Image
  //           className="pointer eye"
  //           src={eye}
  //           preview={false}
  //           width={18}
  //           // onClick={() => this.props.showModal(record.userid)}
  //         />
  //         <Image
  //           className="pointer"
  //           src={editPen}
  //           preview={false}
  //           width={15}
  //           // onClick={() =>this.props.getEditId("/edit-" + type + "/" + window.btoa(record.userid))}
  //         />
  //         <Image
  //           className="pointer"
  //           src={fillClose}
  //           preview={false}
  //           width={15}
  //           // onClick={() => this.props.removecol(record.userid)}
  //         />
  //       </div>
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  render() {
    const { data, type, footerUI } = this.props; // data?.forEach((a,i) => {if(!a.sr)a.sr=i+1});
    data?.forEach((a, i) => {
      a.sr = i + 1;
    });
    return (
      <TableStyle>
        <Table
          dataSource={data}
          pagination={data?.length > 10}
          rowClassName="anime"
          onRow={(record) => {
            return {
              // onDoubleClick: (event) => type === "emp" && this.props.redirect(),
            };
          }}
          footer={footerUI}
        >
          {this.columnUI()}
        </Table>
      </TableStyle>
    );
  }
}
export default withRouter(TableUI);

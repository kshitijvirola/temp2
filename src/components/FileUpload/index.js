import React, { Component } from "react";
import { Upload } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { uploadDoc } from "redux/master/action";

class FileUpload extends Component {
  beforeUpload = async (file) => {
    try {
      const {kraID,kpiId } = this.props;
      var formdata = new FormData();
      formdata.append("file", file);
      formdata.append("kpiid", kpiId);
      formdata.append("ktid", kraID);
      await this.props.uploadDoc(formdata)
      this.retunData();
    } catch (error) {
      console.log(error);
    }
  };
  retunData=()=>{
    try {
      const {imgPath} =this.props;
      this.props.setPath(imgPath);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { elements, accept, className } = this.props;
    const props = { beforeUpload: this.beforeUpload };
    return (
      <Upload
        showUploadList={false}
        accept={accept}
        className={className ? className : ""}
        {...props}
      >
        {elements}
      </Upload>
    );
  }
}
const mapStateToProps = (state) => ({
  imgPath: state.master.imgPath,
});
const mapDispatchToProps = (dispatch) => ({
  uploadDoc: (payload) => dispatch(uploadDoc(payload)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FileUpload)
);

// export default withRouter(FileUpload);

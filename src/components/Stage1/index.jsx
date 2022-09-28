import React from "react";
import Add from "./Add/Add";
import Select from "./Select/Select";
import stage1Style from "./index.module.css";
import AddOrSelect from "./../ReUseComponents/AddOrSelect/AddOrSelect";

const componentList = [<Add />, <Select />];

class Stage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
    };
  }
  handleSelect(selectNumber) {
    this.setState({ select: selectNumber });
  }
  render() {
    const { select } = this.state;
    return (
      <section className={stage1Style["body-left-stage1"]}>
        <h3>Nhập những thông tin về Dự án</h3>
        <h4>Chọn dự án trong danh sách đã tạo hoặc tạo mới thông tin dự án</h4>
        <AddOrSelect
          nameType="dự án"
          idTag="DuAn"
          selectedNumber={select}
          onSelect={(selectNumber) => this.handleSelect(selectNumber)}
        />
        {componentList[select]}
      </section>
    );
  }
}
export default Stage1;

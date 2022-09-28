import React from "react";
import Add from "./Add/Add";
import Select from "./Select/Select";
import indexStyle from "./index.module.css";
import AddOrSelect from "./../ReUseComponents/AddOrSelect/AddOrSelect";

class Stage2 extends React.Component {
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
    const componentList = [<Add />, <Select />];
    const { select } = this.state;
    return (
      <section className={indexStyle["body-left-stage2"]}>
        <h3>Nhập thông tin đơn vị giao nộp dự án</h3>
        <h4>
          Chọn đơn vị trong danh sách đã tạo hoặc tạo mới thông tin đơn vị
        </h4>
        <AddOrSelect
          nameType="đơn vị"
          idTag="DonVi"
          selectedNumber={select}
          onSelect={(selectNumber) => this.handleSelect(selectNumber)}
        />
        {componentList[select]}
      </section>
    );
  }
}
export default Stage2;

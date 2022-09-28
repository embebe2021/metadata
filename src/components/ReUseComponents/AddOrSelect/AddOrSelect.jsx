import React from "react";
import radioStyle from "./AddOrSelect.module.css";

class AddOrSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { idTag, selectedNumber, nameType, children, onSelect } = this.props;
    return (
      <>
        {children}
        <div className={radioStyle["radio"]}>
          <input
            id={"nhap" + idTag}
            className={radioStyle["radioInput"]}
            type="radio"
            checked={selectedNumber === 0}
            onChange={() => onSelect(0)}
          />
          <label htmlFor={"nhap" + idTag} className={radioStyle["radioLabel"]}>
            Nhập {nameType} mới
          </label>
        </div>
        <div className={radioStyle["radio"]}>
          <input
            id={"chon" + idTag}
            className={radioStyle["radioInput"]}
            type="radio"
            checked={selectedNumber === 1}
            onChange={() => onSelect(1)}
          />
          <label htmlFor={"chon" + idTag} className={radioStyle["radioLabel"]}>
            Chọn {nameType} trong danh sách
          </label>
        </div>
      </>
    );
  }
}
export default AddOrSelect;

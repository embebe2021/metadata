import React from "react";
import selectorStyle from "./Selector.module.css";

const defaultList = [{ title: "Chọn", isFirstSelect: true }];
class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: defaultList,
    };
  }
  componentDidUpdate(preProps, preState) {
    const { data } = this.props;
    if (data !== preProps.data) {
      this.setState((state) => ({
        ...state,
        dataList: [...defaultList, ...data],
      }));
    }
  }
  render() {
    const { onSelect, selectValue } = this.props;
    const { dataList } = this.state;
    return (
      <div className={selectorStyle["body--long-select"]}>
        <select onChange={(e) => onSelect(e)} value={selectValue}>
          {dataList.map((project, index) => (
            <option key={index + "abc"} value={index}>
              {project.isFirstSelect === true
                ? project.title
                : project.thongTinDuAn.tenDuAn}
            </option>
          ))}
        </select>
        <i className="fa-solid fa-caret-down"></i>
      </div>
    );
  }
}
export default Selector;

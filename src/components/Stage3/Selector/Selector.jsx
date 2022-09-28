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
    const { dataList } = this.state;
    const { onSelect, selectValue } = this.props;
    return (
      <div className={selectorStyle["body--long-select"]}>
        <select onChange={(e) => onSelect(e)} value={selectValue}>
          {dataList.map((vanBan, index) => (
            <option key={index + "abc"} value={index}>
              {vanBan.isFirstSelect === true
                ? vanBan.title
                : `${vanBan.tenVanBanPhapLy} - ${vanBan.kyHieu}`}
            </option>
          ))}
        </select>
        <i className="fa-solid fa-caret-down"></i>
      </div>
    );
  }
}
export default Selector;

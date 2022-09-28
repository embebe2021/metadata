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
    if (this.props.data !== preProps.data) {
      this.setState((state) => ({
        ...state,
        dataList: [...defaultList, ...this.props.data],
      }));
    }
  }
  render() {
    const { dataList } = this.state;
    const { onSelect, stateKey, idTag, selectValue } = this.props;
    return (
      <div className={selectorStyle["body--long-select"]}>
        <select
          onChange={(e) => onSelect(parseInt(e.target.value), stateKey, idTag)}
          value={selectValue}
        >
          {dataList.map((organization, index) => (
            <option key={index + "abc"} value={index}>
              {organization.isFirstSelect === true
                ? organization.title
                : organization.tenDonVi}
            </option>
          ))}
        </select>
        <i className="fa-solid fa-caret-down"></i>
      </div>
    );
  }
}
export default Selector;

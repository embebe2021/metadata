import React from "react";
import { selectTitle } from "../textFields";
import addSelectorStyle from "./AddSelector.module.css";

class AddSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={addSelectorStyle["body--long-select"]}>
        <select
          onChange={(e) => this.props.onSelect(e)}
          value={this.props.selectValue}
        >
          {selectTitle.map((loaiVanBan, index) => (
            <option key={index + "abc"} value={index}>
              {loaiVanBan.ten}
            </option>
          ))}
        </select>
        <i className="fa-solid fa-caret-down"></i>
      </div>
    );
  }
}
export default AddSelector;

import React from "react";
import checkboxStyle from "./Checkbox.module.css";
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { stateKey, idTag, title, checked, onCheck } = this.props;
    return (
      <>
        <div>
          <label htmlFor={idTag}>{title}</label>
          <input
            className={checkboxStyle["checkBox"]}
            type="checkbox"
            id={idTag}
            checked={checked}
            onChange={(e) => onCheck(e, stateKey, idTag)}
          />
        </div>
      </>
    );
  }
}
export default Checkbox;

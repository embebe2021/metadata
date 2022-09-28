import React from "react";
import longInputStyle from "./LongInput.module.css";

class LongInput extends React.Component {
  constructor(props) {
    super(props);
    const { idTag } = this.props;
    let x;
    localStorage.getItem(idTag) ? (x = localStorage.getItem(idTag)) : (x = "");
    this.state = {
      inputValue: x,
    };
  }
  componentDidMount() {
    const { stateKey, onUpdateInput, idTag } = this.props;
    const { inputValue } = this.state;
    if (stateKey !== undefined) {
      onUpdateInput(inputValue, idTag, stateKey);
    } else {
      onUpdateInput(inputValue, idTag);
    }
  }
  handleChange(value, idTag_) {
    const { maxLength, stateKey, onUpdateInput } = this.props;
    const limitLength = maxLength || 255;
    const valueLimit = value.slice(0, limitLength);
    this.setState({ inputValue: valueLimit });
    localStorage.setItem(idTag_, valueLimit);
    if (stateKey !== undefined) {
      onUpdateInput(valueLimit, idTag_, stateKey);
    } else {
      onUpdateInput(valueLimit, idTag_);
    }
  }
  render() {
    const { idTag, mainTitle, placeHolder, inputValue } = this.props;

    return (
      <div className={longInputStyle["input__warpper"]}>
        <label className={longInputStyle["input__label"]} htmlFor={idTag}>
          {mainTitle}
        </label>
        <input
          className={longInputStyle["input__main"]}
          type="text"
          id={idTag}
          value={inputValue || ""}
          placeholder={placeHolder}
          onChange={(e) => this.handleChange(e.target.value, idTag)}
        />
      </div>
    );
  }
}

export default LongInput;

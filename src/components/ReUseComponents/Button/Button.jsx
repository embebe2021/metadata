import React from "react";
import buttonStyles from "./Button.module.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.onActive();
  }
  render() {
    const { isBtnActive, isBtnLoading, icon, mainTitle, isPrimaryColor } =
      this.props;
    let colorClass;
    isPrimaryColor
      ? (colorClass = buttonStyles["body__long-btn--activePrimary"])
      : (colorClass = buttonStyles["body__long-btn--activeSecond"]);
    return (
      <>
        <button
          className={
            isBtnActive
              ? `${buttonStyles["body__long-btn"]} ${colorClass}`
              : `${buttonStyles["body__long-btn"]} ${buttonStyles["body__long-btn--disable"]}`
          }
          onClick={(e) => this.handleClick(e)}
          disabled={isBtnActive ? false : true}
        >
          {isBtnLoading === true ? (
            <div
              className={`${buttonStyles["loader"]} ${buttonStyles["loader--btn"]}`}
            ></div>
          ) : (
            <i className={icon}></i>
          )}

          <span>{mainTitle}</span>
        </button>
      </>
    );
  }
}
export default Button;

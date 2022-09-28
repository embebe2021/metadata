import React from "react";
import Stage1 from "../Stage1";
import Stage2 from "../Stage2";
import Stage3 from "../Stage3";
import Stage4 from "../Stage4";
import StateView from "../StateView";
import navbarStyle from "./NavbarLeft.module.css";

const navBarList = [
  {
    title: "Bước 1",
    component: <Stage1 />,
  },
  {
    title: "Bước 2",
    component: <Stage2 />,
  },
  {
    title: "Bước 3",
    component: <Stage3 />,
  },
  {
    title: "Bước 4",
    component: <Stage4 />,
  },
  {
    title: "Xem số liệu",
    component: <StateView />,
  },
];

class NavBarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStage: 0,
    };
  }
  handleChangeStage(index) {
    this.setState({
      activeStage: index,
    });
  }
  render() {
    const { activeStage } = this.state;
    return (
      <>
        <label
          htmlFor="menuHidden"
          className={navbarStyle["body-left__hidden"]}
        >
          Menu
        </label>
        <input
          type="checkbox"
          id="menuHidden"
          className={navbarStyle["menuHidden"]}
        />
        <ul className={navbarStyle["body-left__navbar"]}>
          {navBarList.map((item, index) => {
            if (index === 4) {
              return (
                <React.Fragment key={index + item.title}>
                  <li
                    key={index + item.title}
                    className={
                      activeStage === index
                        ? navbarStyle["body__navbar--active"]
                        : null
                    }
                    onClick={() => this.handleChangeStage(index)}
                  >
                    <i className="fa-solid fa-file-export"></i>
                    <span>{item.title}</span>
                  </li>
                </React.Fragment>
              );
            }
            return (
              <li
                key={index + item.title}
                className={
                  activeStage === index
                    ? navbarStyle["body__navbar--active"]
                    : null
                }
                onClick={() => this.handleChangeStage(index)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        {navBarList[activeStage].component}
      </>
    );
  }
}
export default NavBarLeft;

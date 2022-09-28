import React from "react";
import { checkValidDate } from "../../../ultils/Validator";
import timeInputStyle from "./LongTimeInput.module.css";

const dateList = [
  {
    title: "Ngày:",
    type: "Ngay",
  },
  {
    title: "Tháng:",
    type: "Thang",
  },
  {
    title: "Năm:",
    type: "Nam",
  },
];
const delayTime = 500;
class LongTimeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstLoad: true,
      values: { Ngay: "", Thang: "", Nam: "", isValidDate: false },
    };
  }
  componentDidMount() {
    const { idTag, stateKey, onUpdateDate } = this.props;
    let x;
    let draftNgay = idTag + "Ngay";
    let draftThang = idTag + "Thang";
    let draftNam = idTag + "Nam";
    let checkNgay = localStorage.getItem(draftNgay);
    let checkThang = localStorage.getItem(draftThang);
    let checkNam = localStorage.getItem(draftNam);
    if (
      checkNgay &&
      checkThang &&
      checkNam &&
      checkValidDate(checkNgay, checkThang, checkNam)
    ) {
      x = {
        Ngay: checkNgay.slice(0, 2),
        Thang: checkThang.slice(0, 2),
        Nam: checkNam.slice(0, 4),
        isValidDate: true,
      };
    } else {
      x = {
        Ngay: "",
        Thang: "",
        Nam: "",
        isValidDate: false,
      };
    }
    this.setState({
      values: x,
    });
    if (stateKey !== undefined) {
      onUpdateDate(null, null, x, stateKey, idTag);
    } else {
      onUpdateDate(null, null, x);
    }
  }
  componentWillUnmount() {
    this.setState({ isFirstLoad: false });
  }
  handleChange(value, type) {
    const { idTag, stateKey, onUpdateDate } = this.props;
    let limitLength;
    let key = idTag + type;
    type === dateList[2].type ? (limitLength = 4) : (limitLength = 2);
    let splitValue = value.slice(0, limitLength);

    this.setState((state) => {
      return {
        ...state,
        values: {
          ...state.values,
          [type]: splitValue,
        },
        isFirstLoad: false,
      };
    });
    localStorage.setItem(key, value);
    if (stateKey !== undefined) {
      onUpdateDate(splitValue, type, null, stateKey, idTag);
    } else {
      onUpdateDate(splitValue, type, null);
    }
  }
  render() {
    const { idTag, mainTitle, dateInputValues, isValidDate } = this.props;
    const { isFirstLoad } = this.state;

    return (
      <>
        <span>{mainTitle}</span>
        <div className={timeInputStyle["body--input-date"]}>
          <div>
            <label htmlFor={idTag + dateList[0].type}>
              {dateList[0].title}
            </label>
            <input
              type="number"
              id={idTag + dateList[0].type}
              value={dateInputValues.Ngay}
              onChange={(e) =>
                this.handleChange(e.target.value, dateList[0].type)
              }
            />
          </div>
          <div>
            <label htmlFor={idTag + dateList[1].type}>
              {dateList[1].title}
            </label>
            <input
              type="number"
              id={idTag + dateList[1].type}
              value={dateInputValues.Thang}
              onChange={(e) =>
                this.handleChange(e.target.value, dateList[1].type)
              }
            />
          </div>
          <div>
            <label htmlFor={idTag + dateList[2].type}>
              {dateList[2].title}
            </label>
            <input
              type="number"
              id={idTag + dateList[2].type}
              value={dateInputValues.Nam}
              onChange={(e) =>
                this.handleChange(e.target.value, dateList[2].type)
              }
            />
          </div>
        </div>
        {isValidDate === false && isFirstLoad === false ? (
          <p className={`${timeInputStyle["body--input-date-status"]}`}>
            Ngày tháng không hợp lệ !
          </p>
        ) : null}
      </>
    );
  }
}
export default LongTimeInput;

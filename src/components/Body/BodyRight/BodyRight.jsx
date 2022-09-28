import Chart from "../../Chart/Chart";
import bodyRightStyle from "./BodyRight.module.css";
const BodyRight = () => {
  return (
    <div className={bodyRightStyle["body-right"]}>
      <div className={bodyRightStyle["body-right__title"]}>
        <i className="fa-solid fa-file-import"></i>
        <h2>Số liệu thời gian thực</h2>
      </div>
      <div className={bodyRightStyle["body-right__body"]}>
        <Chart />
      </div>
    </div>
  );
};
export default BodyRight;

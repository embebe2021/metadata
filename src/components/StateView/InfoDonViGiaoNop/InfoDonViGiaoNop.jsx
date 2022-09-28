import React from "react";
import { connect } from "react-redux";
import convertTimeToVI from "../../../ultils/convertTimeToVI";
import { textFields } from "../../Stage2/textFields";
import infoDonViStyle from "./InfoDonViGiaoNop.module.css";

class InfoDonViGiaoNop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { infoDonViGiaoNop } = this.props;

    return (
      <>
        <div
          className={`${infoDonViStyle["stateView__stage2"]} ${infoDonViStyle["viewStage2"]}`}
        >
          <h4
            className={`${infoDonViStyle["viewStage2"]} ${infoDonViStyle["stateView--titles"]}`}
          >
            Đơn vị giao nộp:
          </h4>
          {Object.keys(infoDonViGiaoNop).length === 0 ? (
            <p>Chưa chọn hoặc nhập đơn vị !</p>
          ) : (
            <table className={infoDonViStyle["viewStage2__table"]}>
              <tbody className={infoDonViStyle["viewStage2__tableBody"]}>
                {textFields.map((item, index) => (
                  <tr
                    key={item + item.idTag + index}
                    className={infoDonViStyle["viewStage2__tableRow"]}
                  >
                    <td
                      className={`${infoDonViStyle["viewStage2__tableCell"]} ${infoDonViStyle["viewStage2__tableCell--firstColumn"]}`}
                    >
                      {item.titles}
                    </td>
                    <td
                      className={`${infoDonViStyle["viewStage2__tableCell"]} ${infoDonViStyle["viewStage2__tableCell--secondColumn"]}`}
                    >
                      {infoDonViGiaoNop[item.idTag]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
}

function mapStateToProps(fullState, ownProps) {
  return fullState.Importer;
}
export default connect(mapStateToProps, null)(InfoDonViGiaoNop);

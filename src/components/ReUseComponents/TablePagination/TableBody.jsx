import React from "react";
import tableStyle from "./Table.module.css";

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    const { rowHeight } = props;
    this.state = {
      rowHeight: {
        height: rowHeight,
      },
      lineHeight: {
        lineHeight: rowHeight,
      },
    };
  }
  componentDidUpdate(preProps, prevState) {
    if (this.props.dataList.length !== preProps.dataList.length) {
      this.setState((state) => ({ ...state }));
    }
  }
  render() {
    const { rowHeight, lineHeight } = this.state;
    console.log(
      "🚀 ~ file: TableBody.jsx ~ line 28 ~ TableBody ~ render ~ lineHeight",
      lineHeight
    );
    console.log(
      "🚀 ~ file: TableBody.jsx ~ line 28 ~ TableBody ~ render ~ rowHeight",
      rowHeight
    );
    const {
      firstColumnTitle,
      secondColumnTitle,
      thirdColumnTitle,
      dataList,
      rowIcon,
      secondColumnKey,
      thirdColumnKey,
      onDeleteItem,
      deleteKey,
    } = this.props;
    return (
      <table className={tableStyle["body__viewer-table"]}>
        <thead
          className={tableStyle["body__viewer-table--head"]}
          style={rowHeight}
        >
          <tr style={lineHeight}>
            <th className={tableStyle["viewer-table__column1"]}>
              {firstColumnTitle}
            </th>
            <th className={tableStyle["viewer-table__column2"]}>
              {secondColumnTitle}
            </th>
            <th className={tableStyle["viewer-table__column3"]}>
              {thirdColumnTitle}
            </th>
            <th className={tableStyle["viewer-table__column4"]}></th>
          </tr>
        </thead>
        <tbody className={tableStyle["body__viewer-table--body"]}>
          {dataList.map((item, index) => (
            <tr key={index} style={lineHeight}>
              <td className={tableStyle["viewer-table__firstColumn"]}>
                {index}
              </td>
              <td
                className={`${tableStyle["viewer-table__middleColumn"]} ${tableStyle["viewer-table__middleColumn--tenVanBan"]}`}
              >
                <i className={rowIcon}></i>
                <span className={tableStyle["body-table__child-title"]}>
                  {item[secondColumnKey]}
                </span>
              </td>
              <td className={tableStyle["viewer-table__middleColumn"]}>
                {item[thirdColumnKey]}
              </td>
              <td
                className={`${tableStyle["viewer-table__lastColumn"]} ${tableStyle["viewer-table__thaoTac--delete"]}`}
                onClick={() => onDeleteItem(item[deleteKey])}
              >
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableBody;

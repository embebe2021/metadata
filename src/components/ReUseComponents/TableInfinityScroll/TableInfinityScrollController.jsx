import React from "react";
import { connect } from "react-redux";
import debounce from "../../../ultils/debounce";
import {
  getItemPerPage,
  getTotalPage,
  dataByCurrentPage,
} from "./tableInfinityScrollFunction";
import tableStyle from "./TableInfinityScroll.module.css";

class TableInfinityScrollController extends React.Component {
  constructor(props) {
    super(props);
    this.table = React.createRef();
    const { data } = props;
    this.state = {
      data: data,
      listingData: [],
      currentPage: 1,
      maxPage: 1,
    };
  }
  componentDidMount() {
    const table = this.table.current;
    const { data } = this.state;
    const { rowHeight } = this.props;
    this.initTableFrom(data, rowHeight);
    table.addEventListener("scroll", (evt) =>
      this.listenToUpdateTableData(evt, data)
    );
    this.resizeObserver.observe(table);
  }
  componentWillUnmount() {
    const table = this.table.current;
    table.removeEventListener("scroll", this.listenToUpdateTableData);
    this.resizeObserver.unobserve(table);
  }
  listenToUpdateTableData(e, data) {
    if (e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight) {
      this.slowUpdateTable(data);
    }
  }
  slowUpdateTable = debounce((data) => {
    this.updateTableFrom(data);
  }, 400);
  reInitTable = debounce(() => {
    this.initTableFrom(this.state.data, this.props.rowHeight);
  }, 400);
  resizeObserver = new ResizeObserver((entries) => {
    if (this.state.currentPage < this.state.maxPage) {
      this.reInitTable();
    }
  });

  initTableFrom(data, rowHeight) {
    const table = this.table.current;
    const tableClientHeight = table.clientHeight;

    // clientHeight cần đáp ứng dựa trên clientHeight của table = số dòng dữ liệu * rowHeight + firstLine + tableLoader
    const tableClientHeightNeed = data.length * rowHeight + 2 * rowHeight;

    const itemCanShowPerPage = getItemPerPage(table, rowHeight);

    if (tableClientHeightNeed > tableClientHeight) {
      const { currentPage } = this.state;
      const getMaxPage = getTotalPage(data, itemCanShowPerPage);

      const getData = dataByCurrentPage(data, currentPage, itemCanShowPerPage);
      this.setState({
        listingData: getData,
        maxPage: getMaxPage,
        currentPage: 1,
      });
    }
    if (tableClientHeightNeed < tableClientHeight) {
      this.setState({ listingData: data, currentPage: 1 });
    }
  }
  updateTableFrom(data) {
    const { currentPage, maxPage } = this.state;
    if (currentPage < maxPage) {
      const { rowHeight } = this.props;
      const table = this.table.current;
      const nextPageData = dataByCurrentPage(
        data,
        currentPage + 1,
        getItemPerPage(table, rowHeight)
      );
      this.setState((state) => {
        return {
          listingData: [...state.listingData, ...nextPageData],
          currentPage: state.currentPage + 1,
        };
      });
    }
  }
  handleHideTable() {
    this.props.handleHide();
  }
  render() {
    const { rowHeight, shouldUnMount, titlesAndTags } = this.props;
    const rowStyle = {
      height: `${rowHeight}px`,
      lineHeight: `${rowHeight}px`,
    };
    let containerClass, rowClass;
    if (!shouldUnMount) {
      containerClass = `${tableStyle["viewStage__tableInfinityContainer"]} ${tableStyle["tableInfinity"]} ${tableStyle["viewStageInfinity--animOn"]}`;
      rowClass = `${tableStyle["tableInfinity--row"]} ${tableStyle["tableRow--animOn"]}`;
    } else {
      containerClass = `${tableStyle["viewStage__tableInfinityContainer"]} ${tableStyle["tableInfinity"]} ${tableStyle["viewStageInfinity--animOff"]}`;
      rowClass = `${tableStyle["tableInfinity--row"]} ${tableStyle["tableRow--animOff"]}`;
    }
    return (
      <>
        <div className={containerClass}>
          <div
            className={tableStyle["tableInfinity__closeIcon"]}
            onClick={this.handleHideTable.bind(this)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div
            className={`${tableStyle["tableInfinity__table"]} ${tableStyle["mainTable"]}`}
            ref={this.table}
          >
            <table className={tableStyle["mainTable__content"]}>
              <thead className={tableStyle["mainTable__head"]}>
                <tr
                  className={tableStyle["mainTable__headRow"]}
                  style={rowStyle}
                >
                  {titlesAndTags.map((item, index) => (
                    <td
                      key={index + item.idTag}
                      className={`${tableStyle["mainTable--headTitle"]} ${tableStyle["mainTable--dataCell"]}`}
                    >
                      {item.title}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.listingData.map((item, index) => (
                  <tr key={index} style={rowStyle} className={rowClass}>
                    {titlesAndTags.map((fItem, fIndex) => {
                      if (fIndex === 0) {
                        return (
                          <td
                            key={fIndex}
                            className={tableStyle["mainTable--dataCell"]}
                          >
                            {index}
                          </td>
                        );
                      }
                      return (
                        <td
                          key={fIndex}
                          className={tableStyle["mainTable--dataCell"]}
                          title={item[fItem.idTag]}
                        >
                          {item[fItem.idTag]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(fullState, ownProps) {
  return fullState.Importer;
}
export default connect(mapStateToProps, null)(TableInfinityScrollController);

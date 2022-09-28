import React from "react";
import { DOTS, paginationCaculator } from "../../../ultils/pagination";
import tableStyle from "./Table.module.css";

class TablePagination extends React.Component {
  constructor(props) {
    super(props);
    const { marginTop } = props;
    console.log(
      "🚀 ~ file: TablePagination.jsx ~ line 9 ~ TablePagination ~ constructor ~ marginTop",
      marginTop
    );
    this.paginationCaculator = paginationCaculator;
    this.state = {
      paginationList: [],
      styleBody: {
        marginTop: marginTop,
      },
    };
  }
  componentDidMount() {
    this.updatePagination();
  }
  componentDidUpdate(preProps, preState) {
    const { currentPage, totalRecord, pageSize } = this.props;
    const { paginationList } = this.state;
    const lastPage = paginationList[paginationList.length - 1];
    if (currentPage * pageSize - totalRecord == 10 && currentPage > 1) {
      this.handleChangePage(currentPage - 1);
    }
    if (lastPage * 10 - totalRecord == 10) {
      this.setState({
        paginationList: this.paginationCaculator(
          totalRecord,
          pageSize,
          1,
          currentPage
        ),
      });
    }
    if (totalRecord !== preProps.totalRecord) {
      this.updatePagination();
    }
  }
  updatePagination() {
    const { totalRecord, pageSize, currentPage } = this.props;
    this.setState(
      (state) => ({
        ...state,
      }),
      () => {
        this.setState((state) => ({
          ...state,
          paginationList: this.paginationCaculator(
            totalRecord,
            pageSize,
            1,
            currentPage
          ),
        }));
      }
    );
  }
  handlePrev() {
    if (this.props.currentPage > 1) {
      this.props.onPageChange(this.props.currentPage - 1);
      this.updatePagination();
    }
  }
  handleNext() {
    const { paginationList } = this.state;
    const lastPage = paginationList[paginationList.length - 1];
    if (this.props.currentPage <= lastPage - 1) {
      this.props.onPageChange(this.props.currentPage + 1);
      this.updatePagination();
    }
  }
  handleChangePage(page) {
    this.props.onPageChange(page);
    this.updatePagination();
  }
  render() {
    const { styleBody, paginationList } = this.state;
    console.log(
      "🚀 ~ file: TablePagination.jsx ~ line 80 ~ TablePagination ~ render ~ styleBody",
      styleBody
    );
    return (
      <>
        <ul className={tableStyle["body__viewer-pagination"]} style={styleBody}>
          <li onClick={() => this.handlePrev()}>
            <i className="fa-solid fa-caret-left"></i>
          </li>
          {paginationList.map((item, index) => {
            if (item === DOTS) {
              return <li key={index}>{DOTS}</li>;
            }
            return (
              <li
                key={index}
                onClick={() => this.handleChangePage(item)}
                className={
                  this.props.currentPage === item
                    ? tableStyle["body__viewer-pagination--active"]
                    : null
                }
              >
                {item}
              </li>
            );
          })}
          <li onClick={() => this.handleNext()}>
            <i className="fa-solid fa-caret-right"></i>
          </li>
        </ul>
      </>
    );
  }
}

export default TablePagination;

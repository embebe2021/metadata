import React from "react";
import { DOTS, paginationCaculator } from "../../../ultils/pagination";
import FinderNavigator from "../FinderNavigator/FinderNavigator";
import paginationStyle from "./ResultsPaginationFooter.module.css";

const TablePaginationControl = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.paginationCaculator = paginationCaculator;
      this.state = {
        paginationList: [],
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
      if (
        totalRecord !== preProps.totalRecord ||
        currentPage !== preProps.currentPage
      ) {
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
      const { onPageChange } = this.props;
      onPageChange(page);
      this.updatePagination();
    }
    render() {
      const { paginationList } = this.state;
      return (
        <Component
          {...this.props}
          paginationList={paginationList}
          handleChangePage={(pageNumber) => this.handleChangePage(pageNumber)}
          handleNext={() => this.handleNext()}
          handlePrev={() => this.handlePrev()}
        />
      );
    }
  };
};

class SearchPaginationUI extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(item) {
    const { handleChangePage } = this.props.paginationControl;
    handleChangePage(item);
  }
  render() {
    const {
      paginationList,
      currentPage,
      handleChangePage,
      handlePrev,
      handleNext,
    } = this.props;
    return (
      <>
        <div className={paginationStyle.paginationWrapper}>
          <ul className={paginationStyle.pagination}>
            <li onClick={() => handlePrev()}>
              <i className="fa-solid fa-caret-left"></i>
            </li>
            {paginationList.map((item, index) => {
              if (item === DOTS) {
                return <li key={item}>{DOTS}</li>;
              }
              return (
                <li
                  key={item}
                  onClick={() => handleChangePage(item)}
                  className={
                    currentPage === item
                      ? paginationStyle.paginationActive
                      : null
                  }
                >
                  {item}
                </li>
              );
            })}
            <li onClick={() => handleNext()}>
              <i className="fa-solid fa-caret-right"></i>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default FinderNavigator(TablePaginationControl(SearchPaginationUI));

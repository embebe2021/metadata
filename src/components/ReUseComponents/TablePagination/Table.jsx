import React from "react";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";
import tableStyle from "./Table.module.css";

function listByCurrentPage(dataList, currentPage, itemPerPage) {
  const firstItemIndex = (currentPage - 1) * itemPerPage;
  const lastItemIndex = firstItemIndex + itemPerPage;
  const result = dataList.slice(firstItemIndex, lastItemIndex);
  return result;
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    const { itemPerPage } = props;
    this.listByCurrentPage = listByCurrentPage;

    this.state = {
      currentPage: 1,
      pageSize: itemPerPage,
      pageData: [],
      sliceData: [],
    };
  }
  componentDidMount() {
    this.updateSliceData(this.props.dataList);
  }
  componentDidUpdate(preProps, prevState) {
    if (this.props.dataList.length !== preProps.dataList.length) {
      this.updateSliceData(this.props.dataList);
    }
  }
  updateSliceData(dataList) {
    const { currentPage, pageSize } = this.state;
    this.setState({
      pageData: dataList,
      sliceData: this.listByCurrentPage(dataList, currentPage, pageSize),
    });
  }
  handlePageChange(page) {
    const { pageData } = this.state;
    this.setState(
      {
        currentPage: page,
      },
      () => {
        this.updateSliceData(pageData);
      }
    );
  }
  handeDeleteItem(doc) {
    const { pageData } = this.state;
    const remainItem = pageData.filter(
      (item, index) => item[this.props.deleteKey] !== doc
    );
    this.props.onReplaceList(remainItem);
    this.updateSliceData(remainItem);
  }
  render() {
    const { currentPage, pageSize, pageData, sliceData } = this.state;

    const {
      rowHeight,
      rowIcon,
      firstColumnTitle,
      secondColumnTitle,
      secondColumnKey,
      thirdColumnTitle,
      thirdColumnKey,
      deleteKey,
    } = this.props;
    console.log(rowHeight * pageSize + rowHeight + 12);
    return (
      <>
        <div className={tableStyle["body__viewer"]}>
          <TableBody
            rowHeight={`${rowHeight}rem`}
            dataList={sliceData}
            rowIcon={rowIcon}
            firstColumnTitle={firstColumnTitle}
            secondColumnTitle={secondColumnTitle}
            secondColumnKey={secondColumnKey}
            thirdColumnTitle={thirdColumnTitle}
            thirdColumnKey={thirdColumnKey}
            deleteKey={deleteKey}
            onDeleteItem={(item) => this.handeDeleteItem(item)}
          />
          <TablePagination
            marginTop={`${rowHeight * pageSize + rowHeight + 5}rem`}
            totalRecord={pageData.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={(page) => this.handlePageChange(page)}
          />
        </div>
      </>
    );
  }
}

export default Table;

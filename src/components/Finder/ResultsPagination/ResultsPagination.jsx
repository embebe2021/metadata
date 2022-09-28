import React from "react";
import FinderNavigator from "../FinderNavigator/FinderNavigator";
import ResultsItem from "../ResultsItem/ResultsItem";
import ResultsPaginationFooter from "../ResultsPaginationFooter/ResultsPaginationFooter";

function listItemByCurrentPage(data, currentPage, itemPerPage) {
  const firstItemInOrder = (currentPage - 1) * itemPerPage;
  let lastItemInOrder = firstItemInOrder + itemPerPage;
  const result = data.slice(firstItemInOrder, lastItemInOrder);
  return result;
}

class ResultsPagination extends React.Component {
  constructor(props) {
    super(props);
    const { pageSize, page } = props.queryInfo;
    this.listItemByCurrentPage = listItemByCurrentPage;
    this.state = {
      currentPage: page,
      pageSize: pageSize,
      srcData: [],
      dataToShow: [],
      updateSuccess: false,
    };
  }
  updateTableData(data) {
    const { page } = this.props.queryInfo;
    const { navigate } = this.props.navigatorController;
    this.setState(
      {
        currentPage: page,
        srcData: data,
        dataToShow: [],
        updateSuccess: false,
      },
      () => {
        const { currentPage, pageSize } = this.state;
        const sliceData = this.listItemByCurrentPage(
          data,
          currentPage,
          pageSize
        );
        this.pushDataInQueue(sliceData);
      }
    );
  }
  pushDataInQueue(dataToPush) {
    let i = 0;
    let timmer = setInterval(() => {
      this.setState((state) => {
        return {
          ...state,
          dataToShow: [...state.dataToShow, dataToPush[i]],
          updateSuccess: state.dataToShow.length + 1 === dataToPush.length,
        };
      });
      i++;
      if (i == dataToPush.length) {
        clearInterval(timmer);
      }
    }, 70);

    this.cancelPushData = () => clearInterval(timmer);
    return timmer;
  }
  componentDidMount() {
    const { data } = this.props;
    this.updateTableData(data);
  }
  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    const { page } = this.props.queryInfo;
    const { currentPage } = this.state;
    if (
      data.length !== prevProps.data.length ||
      // currentPage !== prevState.currentPage ||
      page !== prevProps.queryInfo.page
    ) {
      this.updateTableData(data);
    }
  }
  componentWillUnmount() {
    this.cancelPushData();
  }
  handlePageChange(pageNumber) {
    const { setChangeSearchURLPage } = this.props.navigatorController;
    setChangeSearchURLPage(pageNumber, false);
    // this.setState({ currentPage: pageNumber });
  }
  render() {
    const { pageSize, srcData, currentPage, dataToShow, updateSuccess } =
      this.state;
    const { type, keywords, page } = this.props.queryInfo;
    return (
      <>
        {dataToShow.length > 0 && page && (
          <>
            {dataToShow.map((item, index) => (
              <ResultsItem
                key={item._id}
                item={item}
                index={index}
                type={type}
                keywords={keywords}
              />
            ))}
            {updateSuccess && (
              <ResultsPaginationFooter
                totalRecord={srcData.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={(page) => this.handlePageChange(page)}
              />
            )}
          </>
        )}
      </>
    );
  }
}
export default FinderNavigator(ResultsPagination);

import React from "react";
import resultsStyle from "./SearchResults.module.css";
import { Navigate } from "react-router-dom";
import { getData } from "../../../ultils/callApi";
import API from "./../../../ultils/API";
import { useMemo } from "react";
import shortid from "shortid";
import ResultsPagination from "../ResultsPagination/ResultsPagination";
import FinderNavigator from "../FinderNavigator/FinderNavigator";
import { connect } from "react-redux";
import { aResetData, aUpdateData } from "../FinderWrapper/mainSearchStore";

const SearchResultsWrapper = (props) => {
  let { keywords, type } = props.queryInfo;
  const isOnSearchPage = useMemo(() => {
    const filterType = ["duAn", "donVi", "duLieu", "vanBanPhapLy"];
    let result;
    keywords && keywords.length > 0 && filterType.includes(type)
      ? (result = true)
      : (result = false);
    return result;
  }, [type, keywords]);
  if (!isOnSearchPage) {
    return <Navigate to="/" />;
  }
  return <SearchResultsCore {...props} isOnSearchPage={isOnSearchPage} />;
};

class SearchResultsCore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
      searchTime: 0,
      searchFailed: false,
    };
  }
  AbortController = new AbortController();
  async checkQueryAndSeach() {
    let data;
    let { keywords, type } = this.props.queryInfo;
    try {
      data = await getData(
        API[type] + `?keywords=${keywords}&attribute=true&type=${type}`,
        this.AbortController.signal
      );
    } catch (err) {
      this.setState({ searchFailed: true });
      return;
    }
    if (data) {
      const { updateStoreData } = this.props;
      let { page, pageSize } = this.props.queryInfo;
      const { setChangeSearchURLPage } = this.props.navigatorController;
      document.activeElement.blur();
      let maxPage = Math.ceil(data.results.length / pageSize);
      let currentPage;
      page && page <= maxPage ? (currentPage = page) : (currentPage = 1);
      setChangeSearchURLPage(currentPage, true);
      updateStoreData(data.results);
      this.setState({
        searchData: data.results,
        searchTime: data.searchTime,
        searchFailed: false,
      });
    }
  }
  componentDidMount() {
    this.checkQueryAndSeach();
  }
  componentDidUpdate(prevProps, prevState) {
    let { keywords, type, page } = this.props.queryInfo;
    if (
      keywords !== prevProps.queryInfo.keywords ||
      type !== prevProps.queryInfo.type
    ) {
      this.setState(
        (state) => {
          return { searchData: [] };
        },
        () => {
          this.checkQueryAndSeach();
        }
      );
    }
  }

  render() {
    const { searchData, searchTime, searchFailed } = this.state;
    const { isOnSearchPage } = this.props;
    const { page } = this.props.queryInfo;
    return (
      <>
        {isOnSearchPage && (
          <>
            <div className={resultsStyle.searchResultWrapper}>
              {!searchFailed && searchData.length > 0 && (
                <>
                  <div className={resultsStyle.searchResultEstimate}>
                    <i
                      className={`fa-regular fa-clock ${resultsStyle.estimateIcon}`}
                    ></i>
                    <span className={resultsStyle.estimateTitle}>
                      Tìm thấy {searchData.length} kết quả trong {searchTime}{" "}
                      giây
                    </span>
                  </div>
                </>
              )}
              {searchFailed && (
                <div className={resultsStyle.searchResultEstimate}>
                  <i
                    className={`fa-regular fa-circle-xmark ${resultsStyle.estimateIcon}`}
                  ></i>
                  <span className={resultsStyle.estimateTitle}>
                    Không có kết quả tìm kiếm
                  </span>
                </div>
              )}
              <div className={resultsStyle.searchResultItemWrapper}>
                {searchData.length > 0 && page && (
                  <ResultsPagination data={searchData} />
                )}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    updateStoreData: (payload) => dispatch(aUpdateData(payload)),
    resetStoreData: (payload) => dispatch(aResetData(payload)),
  };
}

const SearchResultsEnhanced = FinderNavigator(
  connect(mapStateToProps, mapDispatchToProps)(SearchResultsWrapper)
);
export default SearchResultsEnhanced;

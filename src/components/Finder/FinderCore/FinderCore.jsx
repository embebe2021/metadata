import finderStyle from "./FinderCore.module.css";
import debounce from "../../../ultils/debounce";
import React from "react";
import { getData } from "../../../ultils/callApi";
import API from "../../../ultils/API";
import SearchBox from "../SearchBox/SearchBox";
import { aActionOnClick, aActionSetLoaded } from "../../../store/loader";
import { connect } from "react-redux";
import FinderNavigator from "../FinderNavigator/FinderNavigator";
const srcHost = process.env.REACT_APP_SRC_HOST;
const homePage = process.env.REACT_APP_HOMEPAGE;

class FinderCore extends React.Component {
  constructor(props) {
    super(props);
    const { searchParams } = props.navigatorController;
    const keywords = searchParams.get("keywords");
    const searchType = searchParams.get("type");
    const filterType = ["duAn", "donVi", "duLieu", "vanBanPhapLy"];
    let filter = "";
    filterType.includes(searchType) ? (filter = searchType) : (filter = "duAn");
    this.state = {
      filter,
      searchValue: keywords || "",
      responseData: {
        results: [],
        searchTime: 0,
      },
      searchKeywordFailed: false,
    };
  }
  AbortController = new AbortController();
  delayGetKeywordResult = debounce((keyword) => {
    if (keyword.length > 0) {
      const { filter } = this.state;
      const { ActionLoaderOnSearch, ActionSetLoaded } = this.props;
      ActionLoaderOnSearch();
      getData(
        API[filter] + `?keywords=${keyword}&attribute=false`,
        this.AbortController.signal
      )
        .then((data) => {
          ActionSetLoaded();
          this.setState({
            responseData: {
              results: data.results,
              searchTime: data.searchTime,
            },
          });
        })
        .catch((err) => {
          this.setState({
            responseData: {
              results: [],
              searchTime: 0,
            },
            searchKeywordFailed: true,
          });
          return err;
        });
    } else {
      this.setState({
        responseData: {
          results: [],
        },
        searchKeywordFailed: false,
      });
    }
  }, 500);
  componentWillUnmount() {
    this.AbortController.abort();
  }

  handleActiveSearch = (e, input) => {
    const { searchValue, filter } = this.state;
    const { navigate, setSearchParams } = this.props.navigatorController;
    if (!input) {
      e.preventDefault();
      if (searchValue.length > 0) {
        // setSearchParams({
        //   keywords: searchValue,
        //   attribute: true,
        //   type: filter,
        // });
        navigate(
          // `search?keywords=${searchValue}&attribute=true&type=${filter}`
          `/${homePage}/search?keywords=${searchValue}&attribute=true&type=${filter}`
        );
      }
    } else {
      this.setState({ searchValue: input });
      // setSearchParams({
      //   keywords: input,
      //   attribute: true,
      //   type: filter,
      // });
      navigate(
        // `search?keywords=${input}&attribute=true&type=${filter}`
        `/${homePage}/search?keywords=${input}&attribute=true&type=${filter}`
      );
    }
  };
  handleChangeFilter = (type) => {
    this.setState(
      {
        filter: type,
      },
      () => {
        const { setSearchParams, navigate } = this.props.navigatorController;
        const { searchValue, filter } = this.state;
        const { onSearchMode } = this.props;
        if (onSearchMode) {
          // navigate(
          //   `/search?keywords=${searchValue}&attribute=true&type=${filter}`
          // );
        }
        this.delayGetKeywordResult(searchValue);
      }
    );
  };
  placeHolder = (type) => {
    let x = {
      duAn: "Dự án",
      donVi: "Đơn vị",
      duLieu: "Dữ liệu",
      vanBanPhapLy: "Văn bản pháp lý",
    };
    return x[type];
  };
  handleChangeInput = (value, getKeywordsResult) => {
    this.setState({ searchValue: value, searchKeywordFailed: false });
    if (getKeywordsResult) {
      this.delayGetKeywordResult(value);
    }
  };
  render() {
    const { searchValue, responseData, filter, searchKeywordFailed } =
      this.state;
    const { onSearchMode } = this.props;
    return (
      <>
        <div
          className={`${finderStyle.searchBoxWrapper} ${
            onSearchMode
              ? finderStyle.searchBoxWrapperOnSearchMode
              : finderStyle.searchBoxWrapperOnHome
          }`}
        >
          <SearchBox
            onSearchMode={onSearchMode}
            filter={filter}
            searchValue={searchValue}
            placeHolder={this.placeHolder}
            keywordResult={responseData.results}
            searchKeywordFailed={searchKeywordFailed}
            handleChangeFilter={this.handleChangeFilter}
            handleChangeInput={this.handleChangeInput}
            handleActiveSearch={this.handleActiveSearch}
            onModifyInput={(modifyValue) =>
              this.handleChangeInput(modifyValue, false)
            }
            onClickKeyword={(value) => this.handleActiveSearch(null, value)}
          />
        </div>
        {onSearchMode && <div className={finderStyle.bodySeparator}></div>}
      </>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    ActionLoaderOnSearch: () => dispatch(aActionOnClick()),
    ActionSetLoaded: () => dispatch(aActionSetLoaded()),
  };
}
export default FinderNavigator(connect(null, mapDispatchToProps)(FinderCore));

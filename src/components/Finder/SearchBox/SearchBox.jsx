import React, { createRef } from "react";
import resultStyle from "./SearchBox.module.css";
import shortid from "shortid";
import SearchFilter from "../SearchFilter/SearchFilter";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.resultRef = createRef();
    this.state = {
      currentSelect: null,
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleNavigateList);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleNavigateList);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.keywordResult !== this.props.keywordResult) {
      this.setState({
        currentSelect: null,
      });
    }
  }
  updateSelectKeyword = (action, nodeList) => {
    const { currentSelect } = this.state;

    let selectNumber;
    switch (action) {
      case 1:
        if (currentSelect === null || currentSelect === nodeList.length - 1) {
          selectNumber = 0;
        } else {
          selectNumber = currentSelect + 1;
        }
        break;
      case -1:
        if (currentSelect === 0 || currentSelect === null) {
          selectNumber = nodeList.length - 1;
        } else {
          selectNumber = currentSelect - 1;
        }
        break;
    }
    this.setState(
      {
        currentSelect: selectNumber,
      },
      () => {
        const { onModifyInput } = this.props;
        onModifyInput(nodeList[this.state.currentSelect].innerText);
      }
    );
  };
  handleNavigateList = (e) => {
    const { keywordResult } = this.props;
    const x = this.resultRef.current;
    if (keywordResult.length > 0) {
      if (e.which === 40) {
        e.preventDefault();
        this.updateSelectKeyword(1, x.childNodes);
      }
      if (e.which === 38) {
        e.preventDefault();
        this.updateSelectKeyword(-1, x.childNodes);
      }
    }
  };
  handeClick = (e) => {
    const { onClickKeyword } = this.props;
    e.preventDefault();
    onClickKeyword(e.target.innerText);
  };
  render() {
    const { currentSelect } = this.state;
    const {
      filter,
      searchValue,
      placeHolder,
      searchKeywordFailed,
      keywordResult,
      handleChangeFilter,
      handleChangeInput,
      handleActiveSearch,
      onSearchMode,
    } = this.props;
    let searchBoxClass;
    onSearchMode
      ? (searchBoxClass = resultStyle.searchBoxOnSearch)
      : (searchBoxClass = resultStyle.searchBoxOnHome);
    return (
      <>
        <form
          className={`${resultStyle.searchBox} ${searchBoxClass}`}
          autoComplete="off"
        >
          <div className={resultStyle.searchWrapper}>
            <SearchFilter filter={filter} onChange={handleChangeFilter} />
            <input
              value={searchValue}
              onChange={(e) => handleChangeInput(e.target.value, true)}
              placeholder={`Tìm kiếm ${placeHolder(filter)} ... `}
              type="text"
              maxLength={255}
              className={resultStyle.searchInput}
            />
            <div
              onClick={() => handleChangeInput("", true)}
              className={resultStyle.searchEraser}
              title="Xóa tìm kiếm"
            >
              {searchValue.length > 0 && <i className="fa-solid fa-xmark"></i>}
            </div>

            <div className={resultStyle.searchSeparator}></div>
            <button
              className={resultStyle.searchPlane}
              title="Tìm kiếm"
              onClick={(e) => handleActiveSearch(e)}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
          {searchKeywordFailed && (
            <ul
              className={resultStyle.keywordResultWrapper}
              ref={this.resultRef}
            >
              <li className={resultStyle.keywordResultItem}>
                Không tìm thấy kết quả...
              </li>
            </ul>
          )}
          {keywordResult.length > 0 && (
            <div
              className={resultStyle.keywordResultWrapper}
              ref={this.resultRef}
            >
              {keywordResult.map((item, index) => (
                <button
                  onClick={(e) => this.handeClick(e)}
                  key={shortid.generate()}
                  title={item}
                  className={
                    currentSelect === index
                      ? `${resultStyle.keywordResultItem} ${resultStyle.keywordResultItemActive}`
                      : resultStyle.keywordResultItem
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </form>
      </>
    );
  }
}

export default SearchBox;

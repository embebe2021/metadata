import React from "react";
import searchFilterStyle from "./SearchFilter.module.css";

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    const { filter } = props;
    this.state = {
      showFilter: false,
      filterUsing: filter,
    };
  }
  handleClick() {
    this.setState((state) => ({
      showFilter: !state.showFilter,
    }));
  }
  handleChangeFilter(type) {
    this.setState({ filterUsing: type }, () => {
      this.props.onChange(type);
    });
  }
  render() {
    const { showFilter, filterUsing } = this.state;
    let searchFilterColor;
    if (filterUsing === "duAn") {
      searchFilterColor = searchFilterStyle.filterRed;
    }
    if (filterUsing === "donVi") {
      searchFilterColor = searchFilterStyle.filterBlue;
    }
    if (filterUsing === "duLieu") {
      searchFilterColor = searchFilterStyle.filterOrange;
    }
    if (filterUsing === "vanBanPhapLy") {
      searchFilterColor = searchFilterStyle.filterGreen;
    }
    return (
      <>
        <div
          className={searchFilterStyle.searchFilter}
          title="Bộ lọc"
          onClick={this.handleClick.bind(this)}
        >
          <i className={`fa-solid fa-filter ${searchFilterColor}`}></i>
          {showFilter && (
            <div className={searchFilterStyle.searchFilterBody}>
              <div
                className={searchFilterStyle.searchFilterWapperA}
                onClick={() => this.handleChangeFilter("duAn")}
              >
                <div className={searchFilterStyle.searchFilterContentA}>
                  Dự án
                </div>
              </div>
              <div
                className={searchFilterStyle.searchFilterWapperB}
                onClick={() => this.handleChangeFilter("donVi")}
              >
                <div className={searchFilterStyle.searchFilterContentB}>
                  Đơn vị
                </div>
              </div>
              <div
                className={searchFilterStyle.searchFilterWapperC}
                onClick={() => this.handleChangeFilter("duLieu")}
              >
                <div className={searchFilterStyle.searchFilterContentC}>
                  Dữ liệu
                </div>
              </div>
              <div
                className={searchFilterStyle.searchFilterWapperD}
                onClick={() => this.handleChangeFilter("vanBanPhapLy")}
              >
                <div className={searchFilterStyle.searchFilterContentD}>
                  Văn bản
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default SearchFilter;

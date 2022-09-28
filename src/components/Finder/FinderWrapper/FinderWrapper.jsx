import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { mainSearchReducer } from "./mainSearchStore";

import { Outlet } from "react-router-dom";
import wrapperStyle from "./FinderWrapper.module.css";
import FinderCore from "../FinderCore/FinderCore";

const SearchStore = combineReducers({
  ResultData: mainSearchReducer,
});

class FinderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(SearchStore);
  }
  render() {
    const { onSearchMode } = this.props;
    return (
      <Provider store={this.store}>
        <div className={wrapperStyle.body}>
          <div className={wrapperStyle.bodyWrapper}>
            <FinderCore onSearchMode={onSearchMode} />
            <Outlet />
          </div>
        </div>
      </Provider>
    );
  }
}
export default FinderWrapper;

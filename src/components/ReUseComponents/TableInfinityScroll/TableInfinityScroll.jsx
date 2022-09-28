import React from "react";
import TableInfinityScrollController from "./TableInfinityScrollController";

class TableInfinityScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      shouldUnMount: false,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isShow !== prevProps.isShow) {
      this.setState({ isShow: true });
    }
    if (
      this.state.shouldUnMount === true &&
      prevState.shouldUnMount === false
    ) {
      setTimeout(() => {
        this.setState({ isShow: false, shouldUnMount: false });
      }, 800);
    }
  }
  handleHideTable() {
    this.setState({ shouldUnMount: true });
  }
  render() {
    const { isShow, shouldUnMount } = this.state;
    const { data, titlesAndTags } = this.props;

    return (
      <>
        {isShow && (
          <TableInfinityScrollController
            data={data}
            titlesAndTags={titlesAndTags}
            rowHeight={40}
            shouldUnMount={shouldUnMount}
            handleHide={this.handleHideTable.bind(this)}
          />
        )}
      </>
    );
  }
}

export default TableInfinityScroll;

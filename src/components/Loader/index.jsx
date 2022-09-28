import React from "react";
import { connect } from "react-redux";
import { aActionOnClick } from "../../store/loader";
import debounce from "../../ultils/debounce";
import loaderStyle from "./Loader.module.css";

class LoaderMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLoader: false,
      isLoading: false,
      shouldUnmountPart1: false,
      isShowPart2: false,
      shouldUnmountPart2: false,
    };
  }
  finishLoad = debounce(() => {
    this.setState({
      isShowLoader: false,
      isLoading: false,
      shouldUnmountPart1: false,
      isShowPart2: false,
      shouldUnmountPart2: false,
    });
  }, this.props.loadTime * 1000);
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isClick !== this.props.isClick) {
      if (!this.state.isLoading) {
        this.setState(
          {
            isShowLoader: true,
            isLoading: true,
            shouldUnmountPart1: false,
          },
          () => {
            this.finishLoad();
          }
        );
      }
    }
    if (prevProps.isLoaded !== this.props.isLoaded) {
      this.finishLoad.cancel();
      this.setState(
        {
          isShowLoader: true,
          isLoading: true,
          shouldUnmountPart1: true,
          isShowPart2: true,
          shouldUnmountPart2: false,
        },
        () => {
          this.finishLoad();
        }
      );
    }
  }
  componentWillUnmount() {
    this.finishLoad.cancel();
  }
  render() {
    const { isClick, isLoaded } = this.props;
    const {
      isShowLoader,
      shouldUnmountPart1,
      shouldUnmountPart2,
      isShowPart2,
    } = this.state;

    return (
      <>
        {isShowLoader && (
          <>
            <section
              className={`${loaderStyle["body__loaderProgress"]} ${loaderStyle["loaderProgress"]}`}
            >
              {shouldUnmountPart1 ? null : (
                <div
                  className={`${loaderStyle["loaderProgress__block"]} ${loaderStyle["loaderProgress__block--wait"]}`}
                ></div>
              )}
              {isShowPart2 && !shouldUnmountPart2 ? (
                <div
                  className={`${loaderStyle["loaderProgress__block"]} ${loaderStyle["loaderProgress__block--done"]}`}
                ></div>
              ) : null}
            </section>
          </>
        )}
      </>
    );
  }
}
function mapStateToProps(fullstate, ownProps) {
  return fullstate.Loader;
}
function mapDispatchToProps(dispatch) {
  return {
    ActionLoaderOnClick: (payload) => dispatch(aActionOnClick(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoaderMain);

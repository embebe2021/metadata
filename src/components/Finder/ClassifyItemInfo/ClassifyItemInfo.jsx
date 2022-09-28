import React from "react";
import FinderNavigator from "./../FinderNavigator/FinderNavigator";
import { connect } from "react-redux";
import { getData } from "../../../ultils/callApi";
import API from "./../../../ultils/API";
import { Navigate } from "react-router-dom";
import InfoDuAn from "../ItemInfo/InfoDuAn";
import InfoDonVi from "../ItemInfo/InfoDonVi";
import InfoDuLieu from "../ItemInfo/InfoDuLieu";
import InfoVanBanPhapLy from "../ItemInfo/InfoVanBanPhapLy";

class ClassifyItemInfo extends React.Component {
  constructor(props) {
    super(props);
    const { searchData } = props.ResultData;
    const { index } = props.navigatorController.params;
    this.state = {
      needUpdate: searchData.length == 0,
      itemInfo: searchData[index] || null,
      failedToFetch: false,
    };
  }
  abortController = new AbortController();
  async fetchItemInfo() {
    const { type, id } = this.props.navigatorController.params;
    try {
      let data = await getData(
        `${API[type]}/${id}`,
        this.abortController.signal
      );
      if (data) {
        return this.setState({ itemInfo: data, failedToFetch: false });
      } else {
        throw new Error("khong co du lieu");
      }
    } catch (err) {
      return this.setState({ failedToFetch: true });
    }
  }
  componentDidMount() {
    const { needUpdate } = this.state;
    if (needUpdate) {
      this.fetchItemInfo();
    }
  }
  componentWillUnmount() {
    this.abortController.abort();
  }
  render() {
    const { itemInfo, failedToFetch } = this.state;
    const { params } = this.props.navigatorController;
    const { type } = params;
    return (
      <>
        {/* {itemInfo && <div>{JSON.stringify(itemInfo)}</div>} */}
        {itemInfo && <SwitchItem type={type} itemInfo={itemInfo} />}
        {failedToFetch && <Navigate to="/" replace={true} />}
      </>
    );
  }
}

function SwitchItem(props) {
  let Element;
  const { type } = props;
  // useEffect(() => {

  // }, [type])
  switch (type) {
    case "duAn": {
      Element = InfoDuAn;
      break;
    }
    case "donVi": {
      Element = InfoDonVi;
      break;
    }
    case "duLieu": {
      Element = InfoDuLieu;
      break;
    }
    case "vanBanPhapLy": {
      Element = InfoVanBanPhapLy;
      break;
    }
  }
  return <Element {...props} />;
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(FinderNavigator(ClassifyItemInfo));

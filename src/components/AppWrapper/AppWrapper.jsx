import Loader from "../Loader";
import Header from "./../Header/Header";
import appWrapperStyle from "./AppWrapper.module.css";

function AppWrapper({ children }) {
  return (
    <div className={appWrapperStyle.appWrapper}>
      <Header></Header>
      <Loader loadTime={0.6}></Loader>
      {children}
    </div>
  );
}
export default AppWrapper;

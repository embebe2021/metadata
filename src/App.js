import "./UI/reset.css";
import "./UI/styles.css";
import Body from "./components/Body/Body";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AuthenticationProvider from "./ultils/AuthenticationProvider";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import SearchResults from "./components/Finder/SearchResults/SearchResults";
import FinderWrapper from "./components/Finder/FinderWrapper/FinderWrapper";
import ClassifyItemInfo from "./components/Finder/ClassifyItemInfo/ClassifyItemInfo";
const APP_LINK = process.env.REACT_APP_HOMEPAGE;

function ProtectedRoute({ children }) {
  const { isUserLoggedIn } = useSelector((state) => state.User);

  if (isUserLoggedIn) {
    return children;
  }
  return <Navigate to="/" replace />;
}

export default function App() {
  const { checkAuthentication } = AuthenticationProvider();
  checkAuthentication();
  return (
    <div className="App">
      <Routes>
        <Route
          path={APP_LINK}
          element={
            <AppWrapper>
              <FinderWrapper onSearchMode={false} />
              <Footer />
            </AppWrapper>
          }
        />
        <Route
          // path="search"
          path={APP_LINK + "/search"}
          element={
            <AppWrapper>
              <FinderWrapper onSearchMode={true} />
              <Footer />
            </AppWrapper>
          }
        >
          <Route path="" element={<SearchResults />} />
          <Route
            path=":type/:id/:index"
            element={<ClassifyItemInfo></ClassifyItemInfo>}
          />
        </Route>
        <Route
          // path="publisher"
          path={APP_LINK + "/publisher"}
          element={
            <ProtectedRoute>
              <AppWrapper>
                <Body />
              </AppWrapper>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

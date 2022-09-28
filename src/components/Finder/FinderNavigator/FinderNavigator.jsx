import React from "react";
import {
  useSearchParams,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

const FinderNavigator = (Component) => {
  return (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const keywords = searchParams.get("keywords");
    const attribute = searchParams.get("attribute");
    const type = searchParams.get("type");
    const page = searchParams.get("page");

    const setChangeSearchURLPage = (number, replace) => {
      setSearchParams(
        {
          keywords,
          type,
          attribute,
          page: number,
        },
        { replace: replace }
      );
    };

    return (
      <Component
        {...props}
        navigatorController={{
          params,
          navigate,
          location,
          searchParams,
          setSearchParams,
          setChangeSearchURLPage,
        }}
        queryInfo={{
          keywords,
          attribute,
          type,
          page: parseInt(page),
          pageSize: 10,
        }}
      />
    );
  };
};

export default FinderNavigator;

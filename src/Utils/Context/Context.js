import React, { useState, useEffect, useContext } from "react";
import InvokeAPI from "../Apicall/Apicall";

// @ts-ignore
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebar, setisSidebar] = useState(false);
  const [isImageLitebox, setIsImageLitebox] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [keyword, setkeyword] = useState("nature");
  const [loading, setloading] = useState(true);
  const [imageIndex, setimageIndex] = useState(0);
  const [indexPage, setIndexPage] = useState(1);
  const [orientation, setOrientation] = useState("");
  const [imageId, setImageId] = useState("");
  const [images, setImages] = useState(null);
  const [image, setImage] = useState(null);
  const [color, setColor] = useState(null);
  const [realted, setRealted] = useState(null);
  const [expand, setExpand] = useState(true);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const [news, setNews] = useState(null);
  const [singleNews, setSingleNews] = useState(null);

  const onclickOpenImageLightBox = (id) => {
    setloading(true);
    // setLightboxData(Data.sampleData.find((data) => data.ID === id));
    setIsImageLitebox(true);
    setloading(false);
  };

  const reqParam = {
    client_id: "i5Kt1JQq4jZRXZeB2oO8D3J8avpZ_Xgy3ShUlYFNHh4",
  };

  let apiGetparam = () => {
    let params = {
      q: "today",
      from: "",
      to: "",
      page: "",
      page_size: "",
      sort_by: "",
      to_rank: "",
      from_rank: "",
      ranked_only: "",
      not_sources: "",
      sources: "",
      topic: "",
      countries: "",
      search_in: "",
      lang: "",
    };
    return params;
  };
  let params = {
    q: "today",
    from: "",
    to: "",
    page: "",
    page_size: "",
    sort_by: "",
    to_rank: "",
    from_rank: "",
    ranked_only: "",
    not_sources: "",
    sources: "",
    topic: "",
    countries: "",
    search_in: "",
    lang: "",
  }
  Object.keys(params).forEach(
    (key) =>
      (params[key] === "" || params[key] == null || params[key] === undefined) &&
      delete params[key]
  );

  const GetNews = async () => {
    let res = await InvokeAPI("search", "get", "", "", params);
    console.log(res);
  };

  // useEffect(() => {
  //   apiCall();
  // }, []);

  const openSidebar = () => {
    setisSidebar(true);
  };
  const closeSidebar = () => {
    setisSidebar(false);
  };

  const calculateDiscount = (original, sale) => {
    let onePercent = original / 100;
    let diff = original - sale;
    return (diff / onePercent).toFixed(1);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isImageLitebox,
        setIsImageLitebox,
        setLightboxData,
        lightboxData,
        imageId,
        setImageId,
        expand,
        setExpand,
        isSidebar,
        setisSidebar,
        images,
        orientation,
        setOrientation,
        error,
        setError,
        setkeyword,
        color,
        setColor,
        calculateDiscount,
        onclickOpenImageLightBox,

        realted,
        setRealted,

        loading,
        reqParam,
        image,
        setImage,

        indexPage,
        keyword,
        setIndexPage,

        imageIndex,
        setimageIndex,
        setloading,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

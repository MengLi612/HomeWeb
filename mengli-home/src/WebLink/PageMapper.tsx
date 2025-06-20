import { useContext } from "react";
import BlogsPage from "../Page/BlogsPage";
import ComponentsPage from "../Page/ComponentsPage";
import LoggingPage from "../Page/LoggingPage";
import MainPage from "../Page/MainPage";
import { PageContext } from "../Context/PageContext";

export default function PageMapper() {
  const { pageId } = useContext(PageContext);

  switch (pageId) {
    case "main-page":
      return (
        <>
          <MainPage />
        </>
      );
    case "logging-page":
      return (
        <>
          <LoggingPage />
        </>
      );
    case "blogs-page":
      return (
        <>
          <BlogsPage />
        </>
      );
    case "components-page":
      return (
        <>
          <ComponentsPage />
        </>
      );
    default:
      break;
  }
}

import { Route, Routes, useSearchParams } from "react-router-dom";
import HeaderBase from "./BaseElements/Header/Header";

import ContentPage from "./BaseElements/ContentPage/ContentPage";
import MenuContent from "./BaseElements/Menu/MenuContent/MenuContent";

import MainPage from "./Pages/MainPage/MainPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

import ProjectBasePage from "./Pages/ProjectBasePage/ProjectBasePage";
import MenuStaticInfo from "./BaseElements/Menu/MenuStaticInfo/MenuStaticInfo";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  let location = searchParams.get("project")

  let projectPage;
  switch (location) {
    case null:
      projectPage = <ProjectsPage />
      break;
    case "Wave Function Collapse":
      projectPage = <ProjectBasePage />
      break;

    default:
      projectPage = <h1>PAGE COULD NOT BE FOUND</h1>
      break;
  }


  return (
    <>
      <HeaderBase />
      <div className="mainContainer">
        <Routes>

          <Route path="/" element={
            <ContentPage content={<MainPage />} pannelContent={<MenuStaticInfo />} />
          }
          />

          <Route path="/projects" element={
            <ContentPage content={projectPage} pannelContent={<MenuContent />} />
          }
          />

          <Route path="/about" element={
            <ContentPage content={<AboutPage />} />
          }
          />

        </Routes>
      </div>

    </>
  );
}

export default App

import { Route, Routes } from "react-router-dom";
import HeaderBase from "./BaseElements/Header/Header";
import ContentPage from "./BaseElements/ContentPage/ContentPage";

import MainPage from "./Pages/MainPage/MainPage";

function App() {

  return (
    <>
      <HeaderBase />
      <div className="mainContainer">
        <Routes>

          <Route path="/" element={
            <ContentPage content={<MainPage />} />
          }
          />

          <Route path="/projects" element={
            <ContentPage content={<a />} />
          }
          />

          <Route path="/about" element={
            <ContentPage content={<a />} />
          }
          />

        </Routes>
      </div>

    </>
  );
}

export default App

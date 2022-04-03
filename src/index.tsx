import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "@/assets/styles/styles.scss";
import App from "@/pages/App/App";
import Resume from "@/pages/Resume/Resume";
import Projects from "@/pages/Projects/Projects";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Resume title="Resume" />} />
          <Route path="projects" element={<Projects title="Projects" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

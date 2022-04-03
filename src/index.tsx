import { StrictMode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "@/assets/styles/styles.scss";
import App from "@/pages/App/App";
import Resume from "@/pages/Resume/Resume";
import Projects from "@/pages/Projects/Projects";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<App />}>
          <Route index element={<Resume title="Resume" />} />
          <Route path="projects" element={<Projects title="Projects" />} />
          <Route path="*" element={<Navigate to="resume" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

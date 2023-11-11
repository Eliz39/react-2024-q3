import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { Layout } from "./layout/Layout";
import { DetailsPage } from "./pages/details/DetailsPage";
import "./styles/App.css";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<MainPage />}>
          <Route path="modal" element={<DetailsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

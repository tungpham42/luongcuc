import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Symptoms from "./pages/Symptoms";
import Types from "./pages/Types";
import Treatments from "./pages/Treatments";
import SelfTest from "./pages/SelfTest";
import Living from "./pages/Living";
import Resources from "./pages/Resources";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="bieu-hien" element={<Symptoms />} />
          <Route path="phan-loai" element={<Types />} />
          <Route path="cach-chua-tri" element={<Treatments />} />

          {/* Định tuyến cho các trang mới */}
          <Route path="trac-nghiem" element={<SelfTest />} />
          <Route path="song-chung" element={<Living />} />
          <Route path="dia-chi" element={<Resources />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

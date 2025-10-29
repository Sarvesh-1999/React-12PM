import Navbar from "./UI/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import CommunityPage from "./pages/CommunityPage";
import ReferencesPage from "./pages/ReferencesPage";
import NotFound from "./pages/NotFound";

const Routing1 = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/references/react" element={<ReferencesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing1;

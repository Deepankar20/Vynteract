import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./page/VideoPage.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/video" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

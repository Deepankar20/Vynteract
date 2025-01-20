import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./page/VideoPage.tsx";
import VideoEdit from "./page/VideoEdit.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/video" element={<VideoPage />} />
          <Route path="/video-edit" element={<VideoEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

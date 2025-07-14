import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApiFeature from "./pages/ApiFeature";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<ApiFeature />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

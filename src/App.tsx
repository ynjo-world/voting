import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./pages/Main";
import Vote from "./pages/Vote";
import Raffle from "./pages/Raffle";
import NotFound from "./pages/NotFound";
import Button from "@mui/material/Button";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route element={<Layout />}>
          <Route path="/vote" element={<Vote />}></Route>
          {/* <Route path="/raffle" element={<Raffle />}></Route> */}
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

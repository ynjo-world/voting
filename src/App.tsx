import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main/Main";
import Result from "./pages/Result/Result";
import Raffle from "./pages/Raffle/Raffle";
import Vote from "./pages/Vote/Vote";
import Check from "./pages/Check/Check";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route element={<Layout />}>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/raffle" element={<Raffle />}></Route>
          <Route path="/vote" element={<Vote />}></Route>
          <Route path="/check" element={<Check />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

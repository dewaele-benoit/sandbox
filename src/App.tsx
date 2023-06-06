import {FC} from "react";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contract from "./pages/Contract.tsx";
import ProtectedRoutes from "./router/ProtectedRoutes.tsx";
import Unauthorize from "./pages/Unauthorize.tsx";

const App: FC = () =>  {
    const isLogin = true;
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoutes isLogin={isLogin} />}>
                    <Route path="contract" element={<Contract />} />
                </Route>
                <Route  path="/" element={<Home />} />
                <Route  path="/unauthorize" element={<Unauthorize />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

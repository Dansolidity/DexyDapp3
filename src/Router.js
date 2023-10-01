import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "./Error";
import MainMint from "./assets/imagen/MainMint";
import Marketplace from "./marketplace";
import NavBar from "./NavBar";
import './App.css';
import { useState } from "react";

export default function Router() {
  const [accounts, setAccounts] = useState([]);
  //TODO: Replace for react context

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<div className="overlay">
          <div className="App">
            <NavBar accounts={accounts} setAccounts={setAccounts} />
            <MainMint accounts={accounts} setAccounts={setAccounts} />
          </div>
          <div className="moving-background"></div>
        </div>}
        />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<Router />, document.getElementById("root"));
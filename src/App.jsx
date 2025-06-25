import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { Countries } from "../src/components/Countries";
import { CountriesPage } from "../src/components/CountriesPage";
import { CountriesDisc } from "../src/components/CountriesDisc";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:countryID" element={<CountriesPage />} />
          <Route path="/countries/:countryID/:medalType" element={<CountriesDisc />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

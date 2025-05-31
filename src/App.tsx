import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sections from "./components/Sections";

const App: React.FC = () => {
  return (
    <div className="bhive-workspace">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
};

export default App;

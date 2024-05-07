import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/Article-list";

function App() {
  return (
    <>
      <Header />
      <ArticleList />
    </>
  );
}

export default App;

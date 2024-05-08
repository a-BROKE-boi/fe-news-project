import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/Article-list";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;

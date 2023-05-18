import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { log } from "./assets";
import { Home, CreatePost } from "./page";

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 sm:px-8 px-4 py-4 ">
      <Link to="/">
        <div className="w-full flex justify-centre text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold gap-3">
          <img src={log} alt="log" className="w-12 rounded-full object-cover" />
          Let's Generate Image{" "}
        </div>
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
    <main className="sm:p-0 w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;

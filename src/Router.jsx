import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@routes/Home";
import PageNotFound from "@routes/PageNotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doc/*" element={<DocRoutes />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function DocRoutes() {
  return (
    <Routes>
      {/* Define your actual document routes here */}
      <Route path="resume.pdf" element={<p>test2</p>} />
      {/* ... other document routes */}
      <Route path="*" element={<PageNotFound />} />
      {/* Catch-all for non-existent paths */}
    </Routes>
  );
}

export default Router;

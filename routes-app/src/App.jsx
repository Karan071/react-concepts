import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
const Dashboard = lazy(() => import("./Components/Dashboard")); //Lazy version of the Dashboard page to make it more optimized
const Landing = lazy(() => import("./Components/Landing"));
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="loading..">
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/landing"
            element={
              <Suspense fallback="Loading..">
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

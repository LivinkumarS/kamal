import { createContext, useState } from "react";
import UserDashboard from "./pages/userDashboard/userDashboard";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signUp/signup";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BugDetailPage from "./components/bug-detail-page/bugDetailPage";
import AddNewCandidate from "./components/add-new-candidate/addNewCandidate";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/" element={<UserDashboard />} />
        <Route path="/bug-detalis/:errorId" element={<BugDetailPage />} />
        <Route path="/add-new-candidate" element={<AddNewCandidate />} />
        <Route
          path="/edit-candidate/:candidateId"
          element={<AddNewCandidate />}
        />
      </Routes>
    </BrowserRouter>
  );
}

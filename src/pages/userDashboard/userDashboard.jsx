import React, { useEffect, useState } from "react";
import MainSidebar from "../../components/mainSidebar/mainSidebar";
import Body from "../../components/body/body";
import { Navigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./userDashboard.css";
import Sidebar from "../../components/sidebar/sidebar";

export default function userDashboard() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [searchParam, setSearchParam] = useSearchParams();

  const [expanded, setexpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const [mastersDropdown, setmastersDropdown] = useState(false);

  useEffect(() => {
    setCurrentPage(searchParam.get("tab") || "dashboard");
  }, [searchParam]);

  const updateCurrentPage = (tab) => {
    setSearchParam({ tab });
    setCurrentPage(tab);
  };

  return isAuthenticated ? (
    <div className="userDashboard">
      <MainSidebar
        expanded={expanded}
        currentPage={currentPage}
        setCurrentPage={updateCurrentPage}
        mastersDropdown={mastersDropdown}
        setmastersDropdown={setmastersDropdown}
      />

      {showSidebar && (
        <Sidebar
          setShowSidebar={setShowSidebar}
          currentPage={currentPage}
          setCurrentPage={updateCurrentPage}
          mastersDropdown={mastersDropdown}
          setmastersDropdown={setmastersDropdown}
        />
      )}

      <Body
        setCurrentPage={updateCurrentPage}
        user={user}
        expanded={expanded}
        setexpanded={setexpanded}
        currentPage={currentPage}
        setShowSidebar={setShowSidebar}
      />
    </div>
  ) : (
    <Navigate to={"/sign-in"} />
  );
}

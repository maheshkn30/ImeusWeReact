import React, { useState } from "react";
import "./Header.css";
import AddMember from "../pages/Addmember.js";
import Logo from "../images/imeuswe.png";
import Bell from "../images/bell.png";
import Man from "../images/M.png";
import Add from "../images/add.png";

const Header = () => {
  const [showAddMember, setShowAddMember] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleButtonClick = () => {
    setShowAddMember(true);
    setIsBlurred(true); // Apply blur effect when button is clicked
  };

  const handleAddMemberCancel = () => {
    setShowAddMember(false);
    setIsBlurred(false); // Remove blur effect when cancel button is clicked
  };

  const handleSuccess = (message) => {
    setSuccessMessage(message);
    setShowAddMember(false);
    setIsBlurred(false);
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className={`Parent ${isBlurred ? "blur" : ""}`}>
      <div className="main">
        <div className="sub">
          <img src={Logo} alt="Logo" className="imeuseLogo" />
        </div>
        <div className="searchProfile">
          <div className="coolinput">
            <label htmlFor="input" className="text">
              Discover Your Family
            </label>
            <input
              type="text"
              placeholder="Search..."
              name="input"
              className="input"
            />
          </div>

          <div className="bell">
            <img
              src={Bell}
              alt="Bell"
              className="Bell"
              title="Welcome to Imeuswe"
            />
          </div>
          <div className="profile">
            <img src={Man} alt="Man" className="Man" title="Mahesh" />
          </div>
        </div>
      </div>
      <br />
      <div className="subMenu">
        <div className="subproperty">
          <h2>My Family</h2>
          <button className="AddButton" onClick={handleButtonClick}>
            <img src={Add} alt="AddUser" className="User" />
            Members
          </button>
        </div>
      </div>

      {successMessage && <div className="successMessage">{successMessage}</div>}
      {showAddMember && (
        <AddMember onCancel={handleAddMemberCancel} onSuccess={handleSuccess} />
      )}
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import "./Addmember.css";
import Arrow from "../images/left-arrow.png";
import AddAvatar from "../images/addAvatar.png";
import axios from "axios";

const AddMember = ({ onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    relationshipType: "",
    firstName: "",
    middleName: "",
    surname: "",
    status: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    birthPlace: "",
    currentPlace: "",
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const isComplete =
      formData.relationshipType.trim() !== "" &&
      formData.firstName.trim() !== "" &&
      formData.surname.trim() !== "" &&
      formData.status.trim() !== "" &&
      formData.birthDay.trim() !== "" &&
      formData.birthMonth.trim() !== "" &&
      formData.birthYear.trim() !== "" &&
      formData.birthPlace.trim() !== "" &&
      formData.currentPlace.trim() !== "";
    setIsFormComplete(isComplete);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/addMember",
        formData
      );
      console.log("Data saved:", response.data);
      setFormData({
        relationshipType: "",
        firstName: "",
        middleName: "",
        surname: "",
        status: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        birthPlace: "",
        currentPlace: "",
      });
      onSuccess("You have successfully added a Member!");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  const generateDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return days;
  };

  const generateMonths = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months.map((month, index) => (
      <option key={index + 1} value={index + 1}>
        {month}
      </option>
    ));
  };

  const generateYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return years;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="AddMemberForm">
        <div className="subone">
          <div className="arrow">
            <img
              src={Arrow}
              alt="cancel"
              className="closeAddMemberForm"
              onClick={handleCancel}
            />
          </div>
          <div className="members">
            <h3 className="NamesofAddMemberForm">Members Details</h3>
          </div>
          <div className="Addmembers">
            <button
              id="AddButton"
              className={isFormComplete ? "addButton enabled" : "addButton"}
              disabled={!isFormComplete}
            >
              Add Member
            </button>
          </div>
        </div>

        <div className="images">
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <label htmlFor="profilePicture" className="profileLabel">
            <img src={AddAvatar} alt="Add profile" className="profilepicture" />
            <h4>Add a Profile Picture</h4>
          </label>
        </div>
        <br />
        <br />

        <div className="main2">
          <div className="input-group">
            <input
              required
              type="text"
              name="relationshipType"
              value={formData.relationshipType}
              onChange={handleChange}
              autoComplete="off"
              className="inputSearch"
            />
            <label className="user-label" htmlFor="relationshipType">
              Relationship Type*
            </label>
          </div>
          <div className="input-group">
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="off"
              className="inputSearch1"
            />
            <label className="user-label" htmlFor="firstName">
              First Name*
            </label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              autoComplete="off"
              className="inputSearch2"
            />
            <label className="user-label" htmlFor="middleName">
              Middle Name
            </label>
          </div>
          <div className="input-group">
            <input
              required
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              autoComplete="off"
              className="inputSearch3"
            />
            <label className="user-label" htmlFor="surname">
              Surname*
            </label>
          </div>

          <h4 className="status">Status</h4>
          <div className="radioBox">
            <label>
              <input
                type="radio"
                name="status"
                value="living"
                className="living"
                checked={formData.status === "living"}
                onChange={handleChange}
              />
              Living
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="status"
                value="deceased"
                className="deceased"
                checked={formData.status === "deceased"}
                onChange={handleChange}
              />
              Deceased
            </label>
          </div>

          <h4 className="DateofBirth">Birth Date</h4>
          <div className="birthDate">
            <select
              name="birthDay"
              value={formData.birthDay}
              onChange={handleChange}
              id="birthSelect"
              className="birthSelect"
            >
              <option value="">Day</option>
              {generateDays()}
            </select>
            <select
              name="birthMonth"
              value={formData.birthMonth}
              onChange={handleChange}
              id="birthSelect1"
              className="birthSelect"
            >
              <option value="">Month</option>
              {generateMonths()}
            </select>
            <select
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
              id="birthSelect2"
              className="birthSelect"
            >
              <option value="">Year</option>
              {generateYears()}
            </select>
          </div>

          <div className="place">
            <input
              type="text"
              className="BirthPlace"
              placeholder="Birth Place"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
            />
          </div>
          <div className="currentplace">
            <input
              type="text"
              className="CurrentPlace"
              placeholder="Current Place"
              name="currentPlace"
              value={formData.currentPlace}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMember;

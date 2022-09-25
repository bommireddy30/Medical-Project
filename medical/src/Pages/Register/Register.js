import { useState } from "react";
import "./Register.css";

function Register() {
  const [titleSelect, setTitleSelect] = useState(null);
  const userTitle = ["Mr", "Ms", "Mrs"];
  return (
    <div className="register">
      <div className="nav-bar">
        Note: Only Patients can be registered here. Doctors and Nurses will be
        created by Admin
      </div>
      <div className="page-title">
        <div>Registration Page:</div>
      </div>
      <div className="container-1">
        <div className="user-title">
          <label className="label">Title:</label>
          <div className="radio-inputs">
            {userTitle.map((title, index) => {
              return (
                <div
                  className={
                    index === titleSelect
                      ? `radio-set-${titleSelect} radio-set`
                      : "radio-set"
                  }
                >
                  <input
                    type="radio"
                    className="radio-field"
                    onChange={() => {
                      setTitleSelect(index);
                    }}
                  />
                  <label className="labels">{title}</label>
                </div>
              );
            })}
            {/* <div className="radio-set">
              <input type="radio" className="radio-field"></input>
              <label className="label">Mr</label>
            </div>
            <div className="radio-set">
              <input type="radio" className="radio-field"></input>
              <label className="label">MS</label>
            </div>
            <div className="radio-set">
              <input type="radio" className="radio-field"></input>
              <label className="label">Mrs</label>
            </div> */}
          </div>
        </div>
        <div className="user-first-name">
          <label className="label">First Name:</label>
          <input type="text" className="input-field"></input>
        </div>
      </div>
      <div className="container-2">
        <div className="user-last-name">
          <label className="label">Last Name:</label>
          <input type="text" className="input-field"></input>
        </div>
        <div className="user-email">
          <label className="label">Email:</label>
          <input type="email" className="input-field"></input>
        </div>
      </div>
      <div className="container-3">
        <div className="user-phone-number">
          <label className="label">Phone:</label>
          <input type="text" className="input-field"></input>
        </div>
        <div className="user-password">
          <label className="label">Password:</label>
          <input type="password" className="input-field" />
        </div>
      </div>
      <div className="container-4">
        <div className="confirm-password">
          <label className="label">Confirm Passaword:</label>
          <input type="password" className="input-field" />
        </div>
      </div>
      <div className="create-user">
        <button className="create-user-btn">Create User</button>
      </div>
    </div>
  );
}

export default Register;

import "./Register.css";

function Register() {
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
        <div className="user-title"></div>
        <div className="user-first-name"></div>
      </div>
      <div className="container-2">
        <div className="user-last-name"></div>
        <div className="user-email"></div>
      </div>
      <div className="container-3">
        <div className="user-phone-number"></div>
        <div className="user-password"></div>
      </div>
      <div className="container-4">
        <div className="confirm-password"></div>
      </div>
      <div className="create-user">
        <button className="create-user-btn">Create User</button>
      </div>
    </div>
  );
}

export default Register;

import { useState } from "react";
import "../styles/Login.css";
import { registerUser, loginUser } from "../api/auth";

import logo from "../assets/oric-logo.png";
import bgImage from "../assets/oric-bg.jpg";

function Login({ onLogin }) {
  const [activeTab, setActiveTab] = useState("existing");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student"
  });

  // ✅ message + continue control
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showContinue, setShowContinue] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔐 LOGIN
  const handleExistingLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({
        email: formData.email,
        password: formData.password
      });

      setMessage("Login Successful as " + res.data.role);
      setMessageType("success");
      setShowContinue(true);

    } catch (err) {
      setMessage(err.response?.data?.message || "Login Error");
      setMessageType("error");
      setShowContinue(false);
    }
  };

  // 🆕 REGISTER
  const handleGeneratePassword = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({
        email: formData.email,
        role: formData.role
      });

      setMessage(
        "User Created! Password: " +
        res.data.generatedPassword
      );

      setMessageType("success");

      // 🔥 show continue button
      setShowContinue(true);

    } catch (err) {
      setMessage(err.response?.data?.message || "Register Error");
      setMessageType("error");
      setShowContinue(false);
    }
  };

  // 🚀 CONTINUE BUTTON CLICK
  const handleContinue = () => {
    if (onLogin) {
      onLogin(); // dashboard open
    }
  };

  return (
    <div
      className="login-container"
      style={{
  backgroundImage: `
    linear-gradient(rgba(5,35,85,0.6), rgba(5,35,85,0.6)),
    url(${bgImage})
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  width: "100%"
}}
      // style={{
      //   backgroundImage: `
      //     linear-gradient(rgba(5,35,85,0.85), rgba(5,35,85,0.85)),
      //     url(${bgImage})
      //   `
      // }}
    >
      <div className="login-card">

        {/* LOGO */}
        <div className="logo-section">
          <img src={logo} alt="ORIC Logo" className="oric-logo" />
          <h1>MUET ORIC Portal</h1>
          <p>Office of Research, Innovation & Commercialization</p>
        </div>

        {/* MESSAGE BOX */}
        {message && (
          <div className={`message-box ${messageType}`}>
            {message}
          </div>
        )}

        {/* ✅ CONTINUE BUTTON */}
        {showContinue && (
          <button
            className="continue-btn"
            onClick={handleContinue}
          >
            Continue to Dashboard →
          </button>
        )}

        {/* TABS */}
        <div className="tabs">
          <button
            className={activeTab === "existing" ? "active" : ""}
            onClick={() => setActiveTab("existing")}
          >
            Existing User
          </button>

          <button
            className={activeTab === "new" ? "active" : ""}
            onClick={() => setActiveTab("new")}
          >
            New User
          </button>
        </div>

        {/* LOGIN */}
        {activeTab === "existing" ? (
          <form onSubmit={handleExistingLogin}>
            <h2>Login</h2>

            <input
              type="email"
              name="email"
              placeholder="University Email"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <button type="submit" className="main-btn">
              Login
            </button>
          </form>
        ) : (
          /* REGISTER */
          <form onSubmit={handleGeneratePassword}>
            <h2>New Registration</h2>

            <input
              type="email"
              name="email"
              placeholder="University Email"
              onChange={handleChange}
              required
            />

            <select
              name="role"
              onChange={handleChange}
              required
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </select>

            <button type="submit" className="main-btn">
              Generate Password
            </button>

            <p className="info-text">
              Temporary password will appear here
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;


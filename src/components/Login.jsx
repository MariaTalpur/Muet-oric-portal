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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔐 LOGIN USER
  const handleExistingLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({
        email: formData.email,
        password: formData.password
      });

      alert("Login Successful as " + res.data.role);

      // ✅ IMPORTANT: go to dashboard
      if (onLogin) {
        onLogin();
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login Error");
    }
  };

  // 🆕 REGISTER USER
  const handleGeneratePassword = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({
        email: formData.email,
        role: formData.role
      });

      alert(
        "User Created!\nTemporary Password: " +
        res.data.generatedPassword
      );

      // optional: auto login after register
      if (onLogin) {
        onLogin();
      }

    } catch (err) {
      alert(err.response?.data?.message || "Register Error");
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(5, 35, 85, 0.80),
            rgba(5, 35, 85, 0.85)
          ),
          url(${bgImage})
        `
      }}
    >
      <div className="login-card">

        {/* LOGO */}
        <div className="logo-section">
          <img src={logo} alt="ORIC Logo" className="oric-logo" />
          <h1>MUET ORIC Portal</h1>
          <p>Office of Research, Innovation & Commercialization</p>
        </div>

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

        {/* LOGIN FORM */}
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
          /* REGISTER FORM */
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
              A temporary password will be sent to your university email.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
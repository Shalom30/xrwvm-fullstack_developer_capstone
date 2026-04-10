import React, { useState } from "react";

function Register() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch("/djangoapp/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        email,
        password,
      }),
    });
    const json = await response.json();
    if (json.status === "Authenticated") {
      sessionStorage.setItem("username", json.userName);
      window.location.href = "/";
    } else {
      setMessage(json.error || "Registration failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "60px auto",
        padding: "40px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "24px",
          fontWeight: "600",
          color: "#1a1a2e",
        }}
      >
        Create an Account
      </h2>

      {message && (
        <div
          style={{
            background: "#f8d7da",
            color: "#721c24",
            padding: "10px 16px",
            borderRadius: "6px",
            marginBottom: "16px",
            fontSize: "14px",
          }}
        >
          {message}
        </div>
      )}

      <form onSubmit={register}>
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            Username
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter username"
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1px solid #dee2e6",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1px solid #dee2e6",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1px solid #dee2e6",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1px solid #dee2e6",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              border: "1px solid #dee2e6",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>

      <p
        style={{
          textAlign: "center",
          marginTop: "16px",
          fontSize: "14px",
          color: "#6c757d",
        }}
      >
        Already have an account?{" "}
        <a href="/login" style={{ color: "#0d6efd" }}>
          Login here
        </a>
      </p>
    </div>
  );
}

export default Register;

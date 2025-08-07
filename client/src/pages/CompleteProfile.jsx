import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const [user, setUser] = useState(null);
  const [studentClass, setStudentClass] = useState("");
  const [stream, setStream] = useState("");
  const [school, setSchool] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/me", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleSubmit = async () => {
    if (!school || !studentClass || (["11", "12"].includes(studentClass) && !stream)) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/api/auth/complete-profile",
        {
          class: studentClass,
          stream: ["11", "12"].includes(studentClass) ? stream : "",
          school,
        },
        { withCredentials: true }
      );
      alert("Profile updated!");
      navigate("/");
    } catch (err) {
      alert("Failed to update profile. Try again.");
    }
  };

  if (!user) return <p style={{ textAlign: "center", marginTop: "40px" }}>Loading...</p>;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#f0f4ff",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "360px",
        }}
      >
        <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#1e3a8a", textAlign: "center" }}>
          Complete Your Profile
        </h2>

        <p style={{ fontSize: "14px", textAlign: "center", color: "#555" }}>
          Welcome, <strong>{user.name}</strong><br />({user.email})
        </p>

        <input
          placeholder="Enter School Name"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          style={inputStyle}
          className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          style={inputStyle}
          className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Class</option>
          {Array.from({ length: 8 }, (_, i) => 5 + i).map((cls) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>

        {(studentClass === "11" || studentClass === "12") && (
          <select
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select Stream</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
        )}

        <button onClick={handleSubmit} style={buttonStyle}>
          Submit
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  width: "100%",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  fontSize: "14px",
  marginTop: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  padding: "10px",
  width: "100%",
  border: "none",
  borderRadius: "6px",
  fontSize: "15px",
  fontWeight: "600",
  marginTop: "20px",
  cursor: "pointer",
};

export default CompleteProfile;

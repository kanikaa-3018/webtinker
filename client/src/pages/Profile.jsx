import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/me", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "40px", fontSize: "18px" }}>
        Loading profile...
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
          marginBottom: "40px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "20px",
        }}
      >
        <img
          src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.name}`}
          alt="avatar"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "2px solid #ccc",
          }}
        />
        <div>
          <h1 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "6px" }}>
            Welcome, {user.name}!
          </h1>
          <p style={{ color: "#666", margin: 0 }}>Here’s your full profile information.</p>
        </div>
      </div>

      {/* User Info */}
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "25px",
          marginBottom: "40px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>
          Personal Information
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            fontSize: "15px",
          }}
        >
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>School:</strong> {user.school || "N/A"}</div>
          <div><strong>Class:</strong> {user.class || "N/A"}</div>
          <div><strong>Enrolled On:</strong> {new Date(user.createdAt).toLocaleDateString()}</div>
          <div><strong>User ID:</strong> {user._id}</div>
        </div>
      </div>

      {/* Courses */}
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>
          Courses Enrolled
        </h2>
        {user.courses?.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {user.courses.map((course, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#555" }}>{course.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#777" }}>You haven’t enrolled in any courses yet.</p>
        )}
      </div>

      {/* Kits */}
      <div>
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>
          Kits Purchased
        </h2>
        {user.kits?.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {user.kits.map((kit, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
                  {kit.name}
                </h3>
                <p style={{ fontSize: "14px", color: "#555" }}>{kit.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#777" }}>No kits purchased yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;

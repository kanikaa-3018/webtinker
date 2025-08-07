import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Confetti from "react-confetti";

const CourseSuccess = () => {
  const [searchParams] = useSearchParams();
  const courseType = searchParams.get("course");

  useEffect(() => {
    document.title = "Enrollment Successful | Tinker Tutor";
    window.scrollTo(0, 0);
  }, []);

  const getCourseName = (type) => {
    const courseMap = {
      iot: "IoT Fundamentals",
      mysql: "SQL Basics",
      appdev: "App Development for Beginners",
      web: "Web Development",
      python: "Python Essentials",
      drone: "Drone based Projects",
      robotics: "Robotics Bootcamp",
      threed: "Three-D Modeling & Design",
    };
    return courseMap[type] || "Your Course";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #d1fae5, #bfdbfe)",
        padding: "40px 16px",
        textAlign: "center",
        marginTop: "48px",
        position: "relative",
      }}
    >
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      <CheckCircle size={80} style={{ color: "#16a34a", marginBottom: "16px" }} />
      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#15803d", marginBottom: "8px" }}>
        Enrollment Successful!
      </h1>
      <p style={{ fontSize: "18px", color: "#374151", marginBottom: "24px" }}>
        You’re now enrolled in <strong>{getCourseName(courseType)}</strong>.
      </p>
      <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "24px", lineHeight: "1.6" }}>
        A confirmation email has been sent to your registered address.
        <br />
        Your course access and kit shipping (if included) will begin shortly.
      </p>

      <Link
        to="/courses"
        style={{
          backgroundColor: "#2563eb",
          color: "#ffffff",
          padding: "12px 24px",
          borderRadius: "9999px",
          textDecoration: "none",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
      >
        Explore More Courses
      </Link>
    </div>
  );
};

export default CourseSuccess;

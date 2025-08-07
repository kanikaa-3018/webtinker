import { motion } from "framer-motion";

const StudentAuth = () => {
  const handleGoogleLogin = () => {
    window.open("http://localhost:8080/api/auth/google", "_self");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "50%",
          background: "linear-gradient(to bottom right, #6366f1, #8b5cf6)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        Welcome to Student Portal
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          gap: "2rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Login / Signup</h2>

        <button
          onClick={handleGoogleLogin}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#4285F4",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#3367D6")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#4285F4")
          }
        >
          Continue with Google
        </button>
      </motion.div>
    </div>
  );
};

export default StudentAuth;

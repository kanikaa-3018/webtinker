import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const itemName = searchParams.get("name");

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#ecfdf5", // light green
    textAlign: "center",
    padding: "1rem",
    marginTop: "3rem",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#16a34a", // green-600
    marginBottom: "1rem",
  };

  const messageStyle = {
    fontSize: "1.125rem",
    color: "#1f2937", // gray-800
    marginBottom: "0.5rem",
  };

  const subTextStyle = {
    color: "#6b7280", // gray-500
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🎉 Payment Successful!</h1>
      <p style={messageStyle}>
        You've successfully purchased the Kit: <strong>{itemName}</strong>
      </p>
      <p style={subTextStyle}>Check your email for confirmation and shipping details.</p>
    </div>
  );
};

export default Success;

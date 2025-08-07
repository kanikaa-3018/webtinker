import React, { useState } from "react";
import { FaBoxOpen, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";

// Stripe public key
const stripePromise = loadStripe(
  "pk_test_51RsSrOFYA6FO0ffZFQOiNhWfO79uCUco4pNnS802Aw0KHKsjBZYeQaORPCBNgPkAE8JRYdJUBTyT4L4jGayNb7WI00TZShLdbK"
);

const KitCard = ({ kit }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = kit.images?.length ? kit.images : [kit.image];
  const includes = kit.includes?.length ? kit.includes : [];

  const originalPrice = kit.price + 1000;
  const discount = Math.round(
    ((originalPrice - kit.price) / originalPrice) * 100
  );
  const handleBuyNow = async () => {
  try {
    const res = await fetch("http://localhost:8080/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item: {
          name: kit.name,
          price: kit.price,
          outcome: kit.outcome,
          image: kit.image,
        }
      }),
    });

    const data = await res.json();
    if (!data?.id) {
      console.error("No session ID returned");
      return;
    }

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.id });
  } catch (err) {
    console.error("Stripe redirect error:", err);
  }
};


  return (
    <>
      <div
        style={{
          backgroundColor: "#f4f9ff",
          borderRadius: "14px",
          padding: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={kit.image}
          alt={kit.name}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "12px",
          }}
        />

        <h3 style={{ color: "#1e3a8a", fontSize: "18px", fontWeight: "600" }}>
          {kit.name}
        </h3>
        <p style={{ margin: "6px 0", fontSize: "14px", color: "#4b5563" }}>
          {kit.outcome}
        </p>

        <ul
          style={{ paddingLeft: "16px", fontSize: "13px", marginBottom: "8px" }}
        >
          {includes.slice(0, 3).map((item, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "4px",
              }}
            >
              <FaBoxOpen style={{ marginRight: "6px", color: "#6366f1" }} />
              {item}
            </li>
          ))}
        </ul>

        <div
          style={{
            marginTop: "8px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{ fontSize: "16px", fontWeight: "bold", color: "#10b981" }}
          >
            ₹{kit.price}
          </span>
          <span style={{ textDecoration: "line-through", color: "#9ca3af" }}>
            ₹{originalPrice}
          </span>
          <span
            style={{
              backgroundColor: "#ef4444",
              color: "#fff",
              padding: "2px 8px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            {discount}% OFF
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "14px",
          }}
        >
          <button
            onClick={handleBuyNow}
            style={{
              padding: "8px 14px",
              backgroundColor: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              flex: 1,
              marginRight: "6px",
              fontSize: "14px",
            }}
          >
            Buy
          </button>
          <button
            onClick={() => {
              setShowModal(true);
              setCurrentImageIndex(0);
            }}
            style={{
              padding: "8px 14px",
              backgroundColor: "#fbbf24",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              flex: 1,
              fontSize: "14px",
            }}
          >
            View
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(6px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "16px 20px",
              width: "90%",
              maxWidth: "580px",
              position: "relative",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex]}
              alt={`Kit Image ${currentImageIndex + 1}`}
              style={{
                width: "100%",
                maxHeight: "280px",
                objectFit: "contain",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            />

            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prev) => (prev - 1 + images.length) % images.length
                )
              }
              style={{
                fontSize: "2rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#555",
              }}
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={() =>
                setCurrentImageIndex((prev) => (prev + 1) % images.length)
              }
              style={{
                fontSize: "2rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                color: "#555",
              }}
            >
              <FaArrowRight />
            </button>

            <p
              style={{
                marginTop: "12px",
                textAlign: "center",
                fontWeight: "bold",
                color: "#4b5563",
              }}
            >
              {kit.name} – Image {currentImageIndex + 1} of {images.length}
            </p>

            <div style={{ marginTop: "20px" }}>
              <h4
                style={{
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: "6px",
                }}
              >
                Usage
              </h4>
              <p style={{ fontSize: "14px", color: "#374151" }}>{kit.usage}</p>

              <h4
                style={{
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginTop: "16px",
                  marginBottom: "6px",
                }}
              >
                Safety
              </h4>
              <p style={{ fontSize: "14px", color: "#374151" }}>{kit.safety}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KitCard;

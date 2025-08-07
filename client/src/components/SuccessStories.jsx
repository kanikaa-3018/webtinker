import React, { useState } from "react";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudHxlbnwwfDF8MHx8fDA%3D",
    name: "Aryan Mehta",
    location: "Delhi Public School",
    title: "Built a Smart Dustbin with IoT Kit",
    description:
      "Aryan used our IoT kit to build a dustbin that opens automatically when you come near! It was showcased at his school science fair.",
    tags: ["IoT", "Innovation", "Automation"],
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1682787494953-33e83bc527d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWRlbnR8ZW58MHwxfDB8fHww",
    name: "Riya Singh",
    location: "Lotus Valley International",
    title: "Designed a Dancing Robot with Robotics Kit",
    description:
      "Riya built a robot that dances to music using the Robotics kit! She even added LED effects and won 1st prize at RoboFest.",
    tags: ["Robotics", "Creativity", "LED Effects"],
  },
  {
    image: "https://images.unsplash.com/photo-1618355776464-8666794d2520?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHwxfDB8fHww",
    name: "Kabir Arora",
    location: "GD Goenka Global",
    title: "Created a Weather Monitor Station",
    description:
      "Kabir made a digital station to monitor weather using temperature and humidity sensors from our IoT kit. It's now used in his school garden!",
    tags: ["Weather", "Sensors", "Practical Learning"],
  },
];

const SuccessStories = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleTransition = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(true);
    }, 200);
  };

  const nextStory = () => {
    handleTransition((index + 1) % stories.length);
  };

  const prevStory = () => {
    handleTransition((index - 1 + stories.length) % stories.length);
  };

  const story = stories[index];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8fafc, #dbeafe)",
        padding: "60px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "40px",
          color: "#0f172a",
        }}
      >
        🚀 Success Stories from Our Young Innovators
      </h2>

      <div
        className={`story-card ${fade ? "fade-in" : "fade-out"}`}
        style={{
          display: "flex",
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
          overflow: "hidden",
          alignItems: "center",
          transition: "all 0.4s ease-in-out",
          cursor: "pointer",
        }}
      >
        {/* Image Section */}
        <div style={{ flex: 1 }}>
          <img
            src={story.image}
            alt={story.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maxHeight: "360px",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>

        {/* Content Section */}
        <div
          style={{
            flex: 1.5,
            padding: "30px",
            position: "relative",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", color: "#0c4a6e" }}>{story.title}</h3>
          <p style={{ fontSize: "1rem", margin: "10px 0" }}>{story.description}</p>
          <p
            style={{
              fontWeight: "bold",
              color: "#1e3a8a",
              marginBottom: "6px",
            }}
          >
            — {story.name}, {story.location}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {story.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  background: "#dbeafe",
                  color: "#1e40af",
                  fontSize: "0.8rem",
                  padding: "4px 10px",
                  borderRadius: "999px",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevStory}
        style={{
          position: "absolute",
          left: "25px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "1.2rem",
          width: "44px",
          height: "44px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "50%",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(-50%)")
        }
        aria-label="Previous"
      >
        ❮
      </button>
      <button
        onClick={nextStory}
        style={{
          position: "absolute",
          right: "25px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "1.2rem",
          width: "44px",
          height: "44px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "50%",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(-50%)")
        }
        aria-label="Next"
      >
        ❯
      </button>

      {/* Fade Animation Styles */}
      <style>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.4s ease-in;
        }
        .fade-out {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease-out;
        }

        .story-card:hover {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
};

export default SuccessStories;

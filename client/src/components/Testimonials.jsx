import React, { useRef } from "react";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "8th Grade Student",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "The Robotics Kit was so much fun! I built my own robot and showed it in our science exhibition. Thank you!",
  },
  {
    name: "Riya Sharma",
    role: "8th Grade Student",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "The Robotics Kit was so much fun! I built my own robot and showed it in our science exhibition. Thank you!",
  },
  {
    name: "Riya Sharma",
    role: "8th Grade Student",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "The Robotics Kit was so much fun! I built my own robot and showed it in our science exhibition. Thank you!",
  },
  {
    name: "Riya Sharma",
    role: "8th Grade Student",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "The Robotics Kit was so much fun! I built my own robot and showed it in our science exhibition. Thank you!",
  },
  {
    name: "Aryan Mehta",
    role: "Parent of 6th Grader",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "My son loved the IoT kit. It’s amazing how hands-on learning made him interested in coding and gadgets.",
  },
  {
    name: "Sneha Rao",
    role: "STEM Teacher",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    feedback:
      "These kits are fantastic for class projects. The manuals are super clear and kids stay engaged for hours!",
  },
  {
    name: "Rahul Verma",
    role: "School Principal",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "Integrating these kits in our STEM curriculum boosted participation and creativity in our classrooms.",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #e0f7fa 0%, #f0f5ff 100%)",
        padding: "80px 20px",
        position: "relative",
      }}
    >
      <style>{`
        .testimonial-container::-webkit-scrollbar {
          display: none;
        }

        .testimonial-track {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 20px 60px;
          scroll-snap-type: x mandatory;
        }

        .testimonial-card {
          min-width: 240px;
          max-width: 240px;
          scroll-snap-align: center;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: transform 0.3s ease;
          flex-shrink: 0;
          cursor: pointer;
        }

        .testimonial-card:hover {
          transform: scale(1.05);
        }

        .arrow-btn {
          font-size: 24px;
          width: 48px;
          height: 48px;
          color: #fff;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .arrow-btn:hover {
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          transform: translateY(-50%) scale(1.1);
        }
      `}</style>

      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "40px",
          color: "#0f172a",
        }}
      >
        💬 What Our Learners Say
      </h2>

      {/* Arrows */}
      <div
        className="arrow-btn"
        style={{ left: "15px" }}
        onClick={() => scroll("left")}
      >
        <i className="fas fa-chevron-left" />
      </div>
      <div
        className="arrow-btn"
        style={{ right: "15px" }}
        onClick={() => scroll("right")}
      >
        <i className="fas fa-chevron-right" />
      </div>

      {/* Scrollable Cards */}
      <div ref={scrollRef} className="testimonial-track testimonial-container">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <img
              src={t.image}
              alt={t.name}
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #0ea5e9",
                marginBottom: "12px",
              }}
            />
            <h3
              style={{
                fontSize: "1.1rem",
                color: "#0f172a",
                marginBottom: "4px",
              }}
            >
              {t.name}
            </h3>
            <p style={{ fontStyle: "italic", fontSize: "0.85rem", color: "#555" }}>
              {t.role}
            </p>
            <p style={{ marginTop: "12px", fontSize: "0.95rem", color: "#334155" }}>
              “{t.feedback}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

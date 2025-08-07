import React from "react";
import KitCard from "../components/KitCard";

const kits = [
  {
    id: "kit_robotics",
    name: "Robotics Starter Kit",
    outcome: "Build logic, programming, and mechanical design skills.",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1558137623-ce933996c730?w=600&auto=format&fit=crop&q=60",
    includes: [
      "1x Microcontroller board (Arduino-compatible)",
      "4x Motors + Wheels",
      "IR & Ultrasonic Sensors",
      "Battery Pack + Wires",
      "Beginner Guide Booklet",
    ],
    images: [
      "https://images.unsplash.com/photo-1558137623-ce933996c730?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1683134129583-dcdc447d36a6?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1612338762643-298feee70520?w=600&auto=format&fit=crop&q=60",
    ],
    safety:
      "Avoid water contact. Supervise children under 10. Do not short-circuit terminals.",
    usage:
      "Use with block-based coding platforms or Arduino IDE. Assemble simple robots like line-followers or obstacle avoiders.",
  },
  {
    id: "kit_iot",
    name: "IoT Smart Home Kit",
    outcome: "Learn WiFi automation, smart devices, and real-world IoT applications.",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&auto=format&fit=crop&q=60",
    includes: [
      "1x NodeMCU WiFi Board",
      "Relay Module",
      "DHT11 Temp/Humidity Sensor",
      "LEDs, Buzzers, and Connectors",
      "Mobile App Setup Guide",
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1688678097473-2ce11d23e30c?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1605387132052-357a341cc515?w=600&auto=format&fit=crop&q=60",
    ],
    safety:
      "Use low-voltage appliances only. Adult supervision required while wiring relays.",
    usage:
      "Create smart fan/light automation systems, temperature alerts, or phone-controlled devices.",
  },
  {
    id: "kit_drone",
    name: "DIY Drone Kit",
    outcome: "Master concepts of aerodynamics, electronics, and wireless control.",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=600&auto=format&fit=crop&q=60",
    includes: [
      "4x Brushless Motors + Propellers",
      "Flight Controller",
      "Li-Po Battery + Charger",
      "Remote Receiver + Frame",
      "Assembly Manual + Safety Checklist",
    ],
    images: [
      "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1486611367184-17759508999c?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1469313785555-277fa0c1dc9e?w=600&auto=format&fit=crop&q=60",
    ],
    safety:
      "Use only in open areas. Keep away from face and fragile objects. Charge battery under supervision.",
    usage:
      "Assemble with manual. Use for indoor hover or outdoor short-range flight (under guidance).",
  },
];

const Kits = () => {
  const sectionStyle = {
    minHeight: "100vh",
    padding: "60px 5vw",
    background: "linear-gradient(to bottom, #fff, #eef2ff)",
  };

  const contentWrapper = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#4F46E5",
    textAlign: "center",
    marginBottom: "40px",
  };

  return (
    <section style={sectionStyle}>
      <div style={contentWrapper}>
        <h2 style={titleStyle}>Explore Our STEM Learning Kits</h2>
        <div style={gridStyle}>
          {kits.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kits;

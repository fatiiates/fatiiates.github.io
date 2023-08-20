import React from "react";
import { Link } from "react-router-dom"; // Import the Link component

const notFoundStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f8f8f8",
};

const imageStyles = {
  maxWidth: "100%",
  height: "auto", // Maintain aspect ratio
};

const textStyles = {
  fontSize: "2rem",
  color: "#f44336", // Red font color
  marginBottom: "1rem",
};

function PageNotFound() {
  return (
    <div style={notFoundStyles}>
      <div>
        <img
          src="/public/img/you_are_here.jpg"
          alt="Nowhere Map"
          style={imageStyles}
        />
        <p style={textStyles}>
          Oops! This page doesn't exist.{" "}
          <Link to="/" style={{ color: "#007bff" }}>
            Go back home
          </Link>
        </p>
        <p>
          For our international friends,{" "}
          <a
            href="https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=Şu%20anda%20buradasınız"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff" }}
          >
            translate
          </a>{" "}
          the sentence.
        </p>
        <p>
          And{" "}
          <a
            href="https://en.wikipedia.org/wiki/Leyla_and_Mecnun"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff" }}
          >
            learn about the TV series
          </a>{" "}
          that inspired this.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;

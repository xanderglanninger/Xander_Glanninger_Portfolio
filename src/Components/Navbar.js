import "./Navbar.css";

const viewCV = () => {
  // Assuming 'cv.pdf' is the name of your CV file
  const url = require("./Xander_Glanninger_CV.pdf");

  // Open the CV in a new tab
  window.open(url, "_blank");
};

const openEmailClient = () => {
  const email = "glanningerxander@gmail.com";
  const subject = "Job Opportunity";

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}`;
};

function Navbar() {
  return (
    <>
      <nav className="navigationbar-container">
        <ul className="list-group">
          <li className="list-group-item">Home</li>
          <li className="list-group-item">About Me</li>
          <li className="list-group-item">Education</li>
          <li className="list-group-item">Work Experience</li>
          <li className="list-group-item">Skills</li>
          <button
            onClick={openEmailClient}
            type="button"
            className="contact-me-btn-primary"
          >
            Contact Me
          </button>
          <button onClick={viewCV} type="button" className="dw-cv-btn-primary">
            View CV
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

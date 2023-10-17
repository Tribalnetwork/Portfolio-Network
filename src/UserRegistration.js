import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

const UserRegistration = ({ email, setIsGoogleSignedIn }) => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [Lname, setLName] = useState("");
  const [bio, setBio] = useState("");
  const [description, setDescription] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [socialLinks, setSocialLinks] = useState("");
  const [profileImage, setProfileImage] = useState(""); // New state for profile image
  const [pinnedSocialLinks, setPinnedSocialLinks] = useState([]); // New state for pinned social media links
  const [displayEmail, setDisplayEmail] = useState(false); // New state for display email checkbox
  const [error, setError] = useState(null);
  const modalRef = useRef(null);
  let Image = profileImage && profileImage.name;
  let userData = {
    name,
    Lname,
    bio,
    description,
    resumeLink,
    pinnedSocialLinks,
    Image,
    email,
  };

  // Handle adding pinned social media links
  const addPinnedSocialLink = () => {
    if (socialLinks.trim() !== "") {
      setPinnedSocialLinks([...pinnedSocialLinks, socialLinks]);
      setSocialLinks(""); // Clear the input field after adding
    }
  };
  useEffect(() => {
    const modal = new window.bootstrap.Modal(
      document.getElementById("userRegistrationModal")
    );
    modal.show();
  }, []);
  const closeButton = document.getElementById("closeButton");
  function addDataDismiss() {
    closeButton.setAttribute("data-dismiss", "close");
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to store the entered values

    // Log the userData object to the console
    console.log(userData);

    // Perform registration logic here, e.g., send data to the server
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log(response);

        if (!response.ok) {
          setError("Email already exist or please try again");
          history.push(`/Portfolio?email=${email}`);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          // Display the error message
          throw new Error("Network response was not ok");
        }
        // Handle the response as needed here
        return response.json(); // Assuming the server returns JSON
      })
      .then((data) => {
        // Handle the data from the server's response
        if (data.error) {
          setError(data.error); // Display the error message
        }
        console.log("Server response:", data);
        // Close the modal or perform other actions as needed
        const modal = new window.bootstrap.Modal(
          document.getElementById("userRegistrationModal")
        );
        modal.hide();

        setIsGoogleSignedIn(false);
        history.push(`/Portfolio?email=${email}`);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        addDataDismiss();
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
        // You can display an error message to the user here if needed
      });
  };

  return (
    <div
      id="userRegistrationModal"
      className="modal"
      tabIndex="-1"
      role="dialog"
      data-backdrop="false"
      backdrop="false"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title text-black" style={{ color: "black" }}>
                Sign Up
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div className="d-flex justify-content-between gap-4">
                <div className="form-group">
                  <label style={{ color: "black" }}>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: "black" }}>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Lname}
                    onChange={(e) => setLName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label style={{ color: "black" }}>Bio</label>
                <textarea
                  className="form-control"
                  placeholder="#AddHashtag"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>Description</label>
                <textarea
                  className="form-control"
                  placeholder="Optional"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>Resume Link</label>
                <input
                  type="text"
                  className="form-control"
                  value={resumeLink}
                  onChange={(e) => setResumeLink(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>Social Links</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={socialLinks}
                    onChange={(e) => setSocialLinks(e.target.value)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={addPinnedSocialLink}
                  >
                    Add
                  </button>
                </div>
                <div className="mt-4">
                  <strong style={{ color: "black" }}>
                    Pinned Social Links:
                  </strong>
                  {pinnedSocialLinks.map((link, index) => (
                    <div style={{ color: "black" }} key={index}>
                      {link}
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProfileImage(e.target.files[0])}
                />
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="displayEmail"
                  checked={displayEmail}
                  onChange={() => setDisplayEmail(!displayEmail)}
                />
                <label
                  className="form-check-label"
                  style={{ color: "black" }}
                  htmlFor="displayEmail"
                >
                  Display Email
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="displayEmail"
                  checked={displayEmail}
                  onChange={() => setDisplayEmail(!displayEmail)}
                />
                <label
                  className="form-check-label"
                  style={{ color: "black" }}
                  htmlFor="displayEmail"
                >
                  I am above the age of 14 and I accept and agree to the{" "}
                  <a
                    style={{
                      display: "unset",
                      height: "unset",
                      width: "unset",
                      color: "blue",
                      fontWeight: "700",
                    }}
                    href="https://docs.google.com/document/d/1GTnjohGtbqz3zDPNYM3AunoHUPpsiSjP/edit?usp=drivesdk&ouid=114539425425751391175&rtpof=true&sd=true"
                    target="_blank"
                  >
                    terms and conditions.
                  </a>
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;

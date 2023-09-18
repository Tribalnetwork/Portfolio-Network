import React, { useState, useEffect } from "react";

const UserRegistration = () => {
  const [name, setName] = useState("");
  const [Lname, setLName] = useState("");
  const [bio, setBio] = useState("");
  const [description, setDescription] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [socialLinks, setSocialLinks] = useState("");
  const [profileImage, setProfileImage] = useState(""); // New state for profile image
  const [pinnedSocialLinks, setPinnedSocialLinks] = useState([]); // New state for pinned social media links
  const [displayEmail, setDisplayEmail] = useState(false); // New state for display email checkbox

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here, e.g., send data to server

    // After registration is successful, close the modal
    const modal = new window.bootstrap.Modal(
      document.getElementById("userRegistrationModal")
    );
    modal.hide();
  };

  return (
    <div
      id="userRegistrationModal"
      className="modal"
      tabIndex="-1"
      role="dialog"
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
                <div>
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
              <button type="submit" className="btn btn-primary">
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

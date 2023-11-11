import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const VideoUpload = ({ onClose, email }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const modal = new window.bootstrap.Modal(
      document.getElementById("videoUploadModal")
    );
    modal.show();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const videoData = { name, thumbnail, link, description, email };

    try {
      const response = await fetch(
        "https://shy-blue-mussel-robe.cyclic.app/api/videos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(videoData),
        }
      );

      if (response.ok) {
        const video = await response.json();
        // Video uploaded successfully, you can redirect to a different page or close the modal

        onClose();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        // Handle the error
        console.error("Video upload failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log("ther");
  return (
    <div
      className="modal fade"
      id="videoUploadModal"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title text-black" style={{ color: "black" }}>
                Upload Video
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
              {/* Video upload form fields */}
              <div className="form-group text-black" style={{ color: "black" }}>
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group text-black" style={{ color: "black" }}>
                <label>Thumbnail</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setThumbnail(e.target.value)}
                />
              </div>

              <div className="form-group text-black" style={{ color: "black" }}>
                <label>Video Link</label>
                <input
                  type="text"
                  className="form-control"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="form-group text-black" style={{ color: "black" }}>
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
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
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;

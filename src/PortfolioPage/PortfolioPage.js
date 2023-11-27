import React from "react";
import poster from "./images/Poster.png";
import profile from "./images/Profile_image.svg";
import left from "./images/LeftV.svg";
import right from "./images/RightV.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import SocialLinks from "../components/SocialLinks";

const PortfolioPage = ({ setEmail }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const email = new URLSearchParams(search).get("email");

  const [loading, setLoading] = useState(true);
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const acceptCookies = () => {
    // Update the state to mark cookies as accepted
    setAcceptedCookies(true);
  };
  const [videos, setVideos] = useState([]);
  const fetchUserData = () => {
    const apiEndpoint = `https://shy-blue-mussel-robe.cyclic.app/api/users?email=${email}`;

    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((userData) => {
        setEmail(email);
        setUserData(userData);
        setLoading(false); // Data has been loaded, so set loading to false
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Data fetch has failed, set loading to false
      });
  };

  const fetchVideos = () => {
    const apiEndpoint = `https://shy-blue-mussel-robe.cyclic.app/api/videos?email=${email}`;

    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        return response.json();
      })
      .then((videos) => {
        // Handle the fetched videos data here
        console.log("Fetched videos:", videos);
        setVideos(videos);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error as needed
      });
  };
  useEffect(() => {
    // Fetch user data after the screen has been refreshed
    fetchUserData();
    fetchVideos();
  }, [email]);
  // The effect will run whenever the 'email' state changes
  return (
    <div>
      <div className="custom_container outerwidthP">
        <div className="row">
          <div className="col-md-4">
            <div
              style={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <img src={left} className="mr-2" /> */}
              <img src={profile} />
              {/* <img src={right} className="ml-2" />{" "} */}
            </div>
          </div>
          <div className="col-md-8">
            {" "}
            {userData ? (
              <>
                <h1 className="-mb-2">
                  Fund us through this link:{" "}
                  <a
                    href="https://www.gofundme.com/f/new-link-in-bio-tool-with-purpose?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source=customer"
                    target="_blank"
                  >
                    Fund Us{" "}
                  </a>
                </h1>{" "}
                <h1 className="portfolioHeading">{userData.name}</h1>
                <h5 className="portfolioHeadingsub">{userData.bio}</h5>
                <p className="portfolioHeadingsubP">
                  {userData.description}
                </p>{" "}
                <div className="video_listing_page_list_single_tabs_data">
                  <button
                    className="btn btn-dark centeerrbtn"
                    style={{ borderRadius: "20px" }}
                  >
                    <a href={userData.resumeLink} target="_blank">
                      Resume
                    </a>
                  </button>
                </div>
                <div>
                  <SocialLinks userData={userData} />
                </div>
              </>
            ) : (
              <p>Loading user data...</p>
            )}
          </div>
        </div>
        {/* <input type="search" className="searchPortfolio" placeholder="Search" /> */}
      </div>
      <ul className=" flex-wrap justify-content-center mt-5 gap-5 flex-row mobileAdjust">
        {videos.map((video) => (
          <li key={video._id}>
            <div className="video_listing_page_product_figure_box">
              <figure>
                <a href={video.link} target="_blank">
                  <img className="lazy" src={poster} alt="Thumbnail" />
                </a>
              </figure>
              <a
                href={video.link}
                className="video_listing_page_product_figure_tag_parent_link"
              >
                <span>
                  <strong>{video.name}</strong>
                  {/* <small>8,964 views</small> */}
                </span>
                {/* <object>
                  <a>
                    <i className="fal fa-plus"></i>
                  </a>
                </object> */}
              </a>
            </div>
          </li>
        ))}
      </ul>
      {!acceptedCookies && (
        <footer className="footer mt-auto py-1 bg-light">
          <div className="container d-flex justify-content-between align-items-center">
            <span className="text-muted">
              {" "}
              This website uses cookies to enhance your experience and provide
              personalized services.
            </span>
            <button className="btn btn-dark" onClick={acceptCookies}>
              Accept
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default PortfolioPage;

import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="rounded overflow-hidden shadow-lg m-4 cursor-pointer">
      <img src={image.webformatURL} alt="random" className="w-full" />
      <div className="px-6 py-4 ">
        <h3 className="font-bold text-purple-500 lg:text-xl mb-2">
          Photo by {image.user}
        </h3>
        <ul style={{ fontSize: 14 }}>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 m-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

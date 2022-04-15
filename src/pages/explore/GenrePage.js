import React from "react";
import { useParams } from "react-router-dom";

function Explore() {
    const { genre } = useParams();
    return (
        <div>
            {genre}
        </div>
    )
}

export default Explore;

import React from "react";
import { useParams } from "react-router-dom";

function Explore() {
    const params = useParams();
    return (
        <div>
            {params.genre};
        </div>
    )
}

export default Explore;

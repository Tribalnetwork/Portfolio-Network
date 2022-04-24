import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Explore() {
    const { genre } = useParams();
    let history = useHistory();
    return (
        <div>
            <IconButton edge="end" color="white" onClick={() => history.goBack()}>
                <ArrowBackIosIcon className="backIcon" style={{ color: "white" }} />
            </IconButton>
            {genre}
        </div>
    )
}

export default Explore;

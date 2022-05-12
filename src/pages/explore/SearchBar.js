import React from "react";

function SearchBar() {
    // Styling objects
    const inputWrapperStyleNorm = {
        paddingLeft: "2vw",
        paddingRight: "2vw",
        justifyContent: "center",
        gridColumn: "1/4",
        gridRow: "1",
        width: "100%",
        height: "16vh",
        backgroundColor: 'black',
        borderRadius: "0px",
    }
    const inputWrapperStyle = inputWrapperStyleNorm;

    const inputStyle = {
        width: "90%",
        margin: "2vh 0 0 0",
        justifyContent: "center",
        gridColumn: "2",
        color: "white",
        postion: "fixed",
        gridRow: "1",
        borderRadius: '10px',
        backgroundColor: "#2C2C2E",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "10px",
        backgroundPositionY : "8px",
        backgroundSize: "16px",
        borderColor: "black"

    }
    
    return (
        <div>
            <div style={inputWrapperStyle}> 
                <input style={inputStyle} placeholder="Search"/>
            </div>
        </div>
    )
}

export default SearchBar;

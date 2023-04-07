import React from "react";
import axios from "axios";
import FilmFrame from "./filmFrame2";

export default class GetFilms {
  // gets a list of film info from RDS for all films
  getAllFilms() {
    axios({
      url: "https://ulqk0b3anh.execute-api.us-east-1.amazonaws.com/default/Get-Film-List",
      method: "get",
    })
      .then((res) => {
        return res.data.body;
      })
      .catch((err) => console.log("error message: " + err));
  }

  //pass the film_id as data to get a url for the film
  getUrl = () => {
    let FilmKey = {
      id: this.id, // put the film id here
    };
    let theData = JSON.stringify(FilmKey);
    axios({
      url: "https://2ajlr7txqa.execute-api.us-east-1.amazonaws.com/default/Get_Film_From_S3",
      method: "post",
      data: theData,
    })
      .then((res) => {
        console.log("the response: " + JSON.stringify(res.data.body.url));
      })
      .catch((err) => console.log("the erreor: " + err));
  };
}

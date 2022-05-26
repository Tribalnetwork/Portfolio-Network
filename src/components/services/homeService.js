import axios from 'axios'

/**
 * 
 * @returns parsed and filmGroups
 */
export async function getAllFilms(){
    const response = await axios.get(
        "https://ulqk0b3anh.execute-api.us-east-1.amazonaws.com/default/Get-Film-List"
        )

        let parsed = JSON.parse(response.data.body);


        console.log(parsed)

        let filmGroups = [];
        let categories = [];
        parsed.forEach((film) => {
            if (film.film_status === 1 || film.film_status === 2) {
                if (film.film_status === 2) { this.setState({ sponsorshipLabel: "This film is or contains an Advertisement, Endorsement, or Sponsorship." }) }
                // add an empty array to each genre, which means each genre is going to be a list of films
                // step1: assign genre to an empty array
                if (!categories.includes(film.genre_desc)) {
                    categories.push(film.genre_desc);
                    filmGroups.push({ genre: film.genre_desc, films: [] });
                }
            }
        });
        // step2: put same films into genre arrays
        filmGroups.forEach((group) => {
            group.films = parsed.filter((data) => data.genre_desc === group.genre);
        });

        return [parsed, filmGroups]
}
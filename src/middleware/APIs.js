
import axios from 'axios';


export const getGenreList = () => {
    const endpoint = 'https://6evel85j84.execute-api.us-east-1.amazonaws.com/default/getGenresList'
    return axios.get(endpoint).then(resp =>{
        //let options = resp.data.body.map(item => { return { value: item.genre_id, label: item.genre_desc } })
        console.log(resp.data.body)
        return resp.data.body;
    }).catch(err => {
        console.error(err)
        return [];
      })
}
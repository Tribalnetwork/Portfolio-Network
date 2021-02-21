import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import "./filmFrame.css"


export default class FilmFrame extends React.Component{
    constructor(){
        super()
    }

    getUrl = () => {
      console.log("film url")
    }

    render(){

        return(
            <Grid key={this.props.film.film_id}>
                <Card  className={"root"}>
                    <Link to={`/watch?id=${this.props.film.film_id}`} style={styles.link}>
                        <CardActionArea>
                            <CardMedia
                                 className={"media"}
                                  image={this.props.film.film_cover_thumb[0]}
                                  title={this.props.film.film_title}
                             />
                            <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.film.film_title}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    {(this.props.film.film_length > 3600) ?
                                      new Date(this.props.film.film_length * 1000).toISOString().substr(11, 8) :
                                      new Date(this.props.film.film_length * 1000).toISOString().substr(14, 5) }
                                  </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                    </Card>
                </Grid>
        )
    }
}

const styles = {
    root: {
      width: 200,
    },
    media: {
      height: 112.5,
    },
    header: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
    container: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left', padding: 20 },
    link: { textDecoration: 'none' },
    film: { width: 200, marginBottom: 15, marginRight: 10 },
    stream: { width: 400 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    filmTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 0 },
    streamText: { fontSize: 14, marginBottom: 0},
    filmDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
  }
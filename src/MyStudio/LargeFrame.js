import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
//import "./LargeFrame.css"


export default class LargeFrame extends React.Component{
    constructor(){
        super()
    }

    render(){

        return(
            <Grid key={this.props.film.id}>
                <Card style={styles.card} className={"root"}>
                    <Link to={`/watch?id=${this.props.film.id}`} style={styles.link}>
                        <CardActionArea>
                            <CardMedia
                                 className={"media"}
                                  image={this.props.film.thumbNailsUrls[0]}
                                  title={this.props.film.name}
                                  style={styles.cardMedia}
                             />
                            <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.film.name}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    {(this.props.film.duration > 3600) ?
                                      new Date(this.props.film.duration * 1000).toISOString().substr(11, 8) :
                                      new Date(this.props.film.duration * 1000).toISOString().substr(14, 5) }
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
    root: {width: 200,},
    media: {height: 112.5,},
    //card: {width: "100%", maxHeight: "50vh", minHeight: "30vh"},
   // cardMedia: {backgroundSize: "cover"},
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
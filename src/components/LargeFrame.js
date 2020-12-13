import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import "./LargeFrame.css"


export default class LargeFrame extends React.Component{
    constructor(){
        super()
    }

    render(){
        if(this.props.type == "film"){
        return(
            <Grid key={this.props.item.id}>
                <Card style={styles.card} className={"root"}>
                    <Link to={`/watch?id=${this.props.item.id}`} style={styles.link}>
                        <CardActionArea>
                            <CardMedia
                                 className={"media"}
                                  image={this.props.item.thumbNailsUrls[0]}
                                  title={this.props.item.name}
                                  style={styles.cardMedia}
                             />
                            <CardContent style={styles.cardContent}>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.item.name}
                                  </Typography>
                                  <Typography variant="body2" color="white" component="p">
                                    {(this.props.item.duration > 3600) ?
                                      new Date(this.props.item.duration * 1000).toISOString().substr(11, 8) :
                                      new Date(this.props.item.duration * 1000).toISOString().substr(14, 5) }
                                  </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                    </Card>
                </Grid>
        )
        } else if (this.props.type == "livestream"){
            return(
                <Grid key={this.props.item.id} item>
                <Card style={styles.card} className={"root"}>
                  <Link to={`/live?id=${this.props.item.id}`} style={styles.link}>
                    <CardActionArea>
                      <CardMedia className={"media"}
                        style={styles.cardMedia}
                        image={`https://image.mux.com/${this.props.item.IDforThumbnail}/thumbnail.png?width=314&height=178`}
                        title={this.props.item.streamerName}
                      />
                      <CardContent style={styles.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {this.props.item.streamerName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {this.props.item.status}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            )
        }
    }
}

const styles = {
    //root: {width: "100%"},
    //media: {height: 112.5,},
    //card: {width: "auto"},
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
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
    cardContent: {backgroundColor: "black", color: "white"}
  }

  /* code to input to component you want largeFrames in

  getFilms = () => {
        API.graphql(graphqlOperation(queries.listFilms))
        .then((result) => { return result.data.listFilms.items})
        .then((result) => { 
            let list = [];
            result.forEach((film) =>{
                let titleObj = {
                   name:  film.title.toUpperCase(),
                   id: film.id,
                   thumbNailsUrls: film.thumbNailsUrls,
                   duration: film.duration,
                   type: "Film"
                }
                list.push(titleObj);
            })
            let frameList = list.map((filmItem) => {
                return <li><LargeFrame film={filmItem}/></li>
            })
            this.setState({largeFrames: frameList})
      })
    }
    
    componentDidMount(){
        this.getFilms();
    }
  
  */

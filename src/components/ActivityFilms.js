// import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import { Link } from "react-router-dom";
// import "./ActivityFilms.css"


import React from 'react'
import "./ActivityFilms.css"
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    CardActionArea,
    CardMedia
} from '@material-ui/core/'

export default class ActivityFilms extends React.Component {

    constructor() {
        super()

    

    }

  

    render() {

       
        const nums = [2, 5, 8, 11, 14, 17, 20];
            if (nums.includes(this.props.film.id)) {
               

                return (
                    <div className={styles.root}>
                        <Grid key={this.props.film.id}>
                            <div className="test">
                            <Card style={{ position: "relative", top: "30px", backgroundColor: 'black' }}>
                                

                                    <CardActionArea >
                                        <CardMedia
                                            className={"media"}
                                            image={this.props.film.thumbNailsUrls[0]}
                                            title={this.props.film.name}
                                        />
                                        <CardContent >

                                        </CardContent>
                                    </CardActionArea>

                                </Card >
                            </div>
                        </Grid >
                    </div>

                )

            } else {
                return (
                    <div className={styles.root}>
                        <Grid key={this.props.film.id}>
                            <div className="test">
                            <Card style={{ backgroundColor: 'black' }}>

                                    <CardActionArea style={styles.cardBottom}>
                                        <CardMedia
                                            className={"media"}
                                            image={this.props.film.thumbNailsUrls[0]}
                                            title={this.props.film.name}
                                        />
                                        <CardContent >
                                        </CardContent>
                                    </CardActionArea>

                                </Card >
                            </div>
                        </Grid >
                    </div>
                )
            }
        }
    }



const styles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
        // padding: theme.spacing(1)

    },

    cardBottom: {
        backgroundColor: 'black'
    }


}))



    // const styles = {
    //     root: {
    //         //   width: 20,
    //         flexGrow: 1,
    //         padding: theme.spacing(1)
    //     },
    //     media: {
    //         //   height: 112.5,

    //     },
    // header: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
    // container: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left', padding: 20 },
    // link: { textDecoration: 'none' },
    // film: { width: 200, marginBottom: 15, marginRight: 10 },
    // stream: { width: 400 },
    // input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    // filmTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 0, backgroundColor: '#ddd' },
    // streamText: { fontSize: 14, marginBottom: 0},
    // filmDescription: { marginBottom: 0 },
    // button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
    // cardBottom: { backgroundColor: 'black' },
    // top: { borderRadius: "10px, 10px, 0px, 0px", padding: "20px" }


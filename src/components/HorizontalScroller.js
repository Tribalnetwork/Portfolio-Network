import React,{Component} from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import './HorizontalScroller.css';

<<<<<<< HEAD
const MenuItem = ({film,filmlistId}) => {
=======
const MenuItem = ({film}) => {
>>>>>>> upstream/master
  return (<div>
    
       <Grid item>
                          <Card style={styles.root}>
                            <Link to={`/watch?id=${film.id}`} style={styles.link}>
                              <CardActionArea>
                                <CardMedia
                                  style={styles.media}
                                  image={film.thumbNailsUrls[0]}
                                  title={film.title}
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    {film.title}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    {(film.duration > 3600) ?
                                      new Date(film.duration * 1000).toISOString().substr(11, 8) :
                                      new Date(film.duration * 1000).toISOString().substr(14, 5) }
                                  </Typography>
                                  
                                </CardContent>
                              </CardActionArea>
                            </Link>
                          </Card>
                        </Grid>

    </div>);
};

export const Menu = (list) =>
  list.map(film => {
 
<<<<<<< HEAD
    return <MenuItem film={film.film} filmlistId={film.id} key={film.film.id}  />;
=======
    return <MenuItem film={film} key={film.id}  />;
>>>>>>> upstream/master
  });
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
  const ArrowLeft = Arrow({ text: '', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '', className: 'arrow-next' });

  export default class HorizontalScroller extends React.Component {
      render(){
          return(
           
                        <ScrollMenu
                        data={Menu(this.props.list)}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
<<<<<<< HEAD
=======
                        alignCenter={false}
>>>>>>> upstream/master
                        />
            

          )
      }

}


const styles = {
  root: {
<<<<<<< HEAD
    width: 150,
=======
    width: 120,
>>>>>>> upstream/master
  },
  media: {
    height: 112.5,
  },
<<<<<<< HEAD
  link: { textDecoration: 'none' },
  header: { width: 1000, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  link: { textDecoration: 'none' },
  film: { width: 150, marginBottom: 15, marginRight: 10 },
  stream: { width: 400 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  filmTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 0 },
  streamText: { fontSize: 14, marginBottom: 0},
  filmDescription: { marginBottom: 0 }

=======
  link: { textDecoration: 'none' }
>>>>>>> upstream/master
}

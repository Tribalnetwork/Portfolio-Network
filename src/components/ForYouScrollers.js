import React,{Component} from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import './ForYouScrollers.css';


const MenuItem = ({prop}) => {
  return (
    <div>
    
       <Grid item>
            <Card style={styles.root2}>
              <Link to={`/gigdetail?id=${prop.id}`} style={styles.link}>
                <CardActionArea>
                  <div style={styles.wrk}>{prop.Title}</div>
                    <CardMedia
                      title= {prop.Title}
                      style={styles.media1}
                      image={prop.imageUrl}
                    />
                </CardActionArea>
              </Link>
            </Card>
        </Grid>      
        
    </div>
    );
};

export const Menu = (list) =>
  list.map(prop => {
 
    return <MenuItem prop={prop} key={prop.id}  />;
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

  export default class ForYouScrollers extends React.Component {
      render(){
          return(
           
                        <ScrollMenu
                        data={Menu(this.props.list)}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        alignCenter={false}
                        />
            

          )
      }

}


const styles = {
  root2: {
    width: "131px",
    heigh: "109px",
    borderRadius: 15,
    marginBottom: "20px",
  },
  wrk: {
      marginBottom: "-25px",
      marginTop: "5px",
      color: "white",
      textDecoration: "none",
      position: "center",
  },
  media1: {
    height: 178,
    width: 175,
  }
}

import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Grid from '@material-ui/core/Grid';
import './HorizontalScrollerCircular.css';
const MenuItem = ({ Item, liveId }) => {
  return (<div className='film-box'>

    <Grid item>
      <div className="profile-wrapper">
        <img src={Item['imgSrc']} alt="Profile" className="profile-img" />
        <div>
          <p className="pTitle">Season {Item.season}</p>
          <p className="pTitle">Episode {Item.epside}</p>
        </div>
      </div>
    </Grid>
  </div>);
};

export const Menu = (list) =>
  list.map(s => {

    return <MenuItem Item={s} key={s.id} />;
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
  render() {
    return (
      <div>
        <div className='title-and-buttons-container'>
          <p className="title__tribalBetaHome">{this.props.title}</p>          
        </div>

        <ScrollMenu
          data={Menu(this.props.list)}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          alignCenter={false}
        />

      </div>
    )
  }

}

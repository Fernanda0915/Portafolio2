

import kakashi from '../assets/images/kakashi.jpg';
//const PlaceholderImage = require('./assets/images/kakashi.jpg')

export default function Image(props){
    return(
      <img style ={styles.reSize} src={kakashi}/>
    );
}

const styles = {
  reSize: {
    width: 320,
    height: 440,
    paddingTop: 58,
  },
    
};
import './Textcomponent.css';
import { Link } from "react-router-dom";

function Text(props){
    return(
        <p className='undername'>{props.text}</p>
    );
}

export default Text;
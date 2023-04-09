import './box1.css';

function Card(props){
    return(
    <div className='cardInfo'>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
        <p>{props.p4}</p>
        <p>it all about me thank-you have a good day</p>
    </div>)
}

export default Card;
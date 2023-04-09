import './box1.css';

function Card2(props){
    return(
    <div className='cardInfo'>
        <p>Hello my name is mohit sarkar</p>
        <p>I have completed  my class 12 at 72% in GIC shaktifarm</p>
        <p>Now i am pursuing BCA from Droan group of college</p>
        <p>My hobbies are singing and playing football</p>
        <p>it all about me thank-you have a good day</p>
        <h2>thank-you for listening me have a nice day</h2>
        <h2> {props.x} </h2>
    </div>)
}

export default Card2;
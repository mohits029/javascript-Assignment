
import './Midbody.css';

function Mid(props){
    return(
        <div className='image1'>
            <p className='sp'> <span className='hi'>Hii,</span><br/> I am <span className='name'>{props.name}</span></p>       
    <img src={props.Img} ></img>
    
    </div>
    );
}
export default Mid;
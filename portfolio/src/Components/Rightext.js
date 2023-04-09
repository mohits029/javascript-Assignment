import './Rightext.css';


function Rightext(props){
    return(
        <div>
        <p className="rightext">{props.text}</p>

        
        <div className='icons'>
            
        {/* <Link href="www.google.com"><i class="fa-brands fa-square-facebook"></i></Link> */}
        <i class="fa-brands fa-square-github"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-instagram"></i>
        </div>
        <a href="#"> Show more <i class="fa-solid fa-arrow-right"></i></a>
        
        </div>
        
    );
}

export default Rightext;
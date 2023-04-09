import './Headder.css';

function Headder(props){
    return(
        <div className='head'>
            <ul className='Headings'>
                <li> <i class="fa-sharp fa-solid fa-face-smile"></i> {props.hest[0]}</li>
                <li>{props.hest[1]}</li>
                <li>{props.hest[2]}</li>
                <li>{props.hest[3]}</li>
                <li>{props.hest[4]}</li>
            </ul>

            <ul className='Headings'>
                <li>{props.hest[5]} </li>
                <li>{props.hest[6]} </li>
                <li>{props.hest[7]} </li>
            </ul>
        </div>
    );
}
export default Headder;
import './Header.css';
import kraken from '../kraken.png'

const Header =()=>{



    return(
        <div className='content'>
            <h1>Let's get Kraken!</h1>
            <img id='floating-kraken' src={kraken}/>
        </div>
    
    )

}


export default Header
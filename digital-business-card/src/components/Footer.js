import react from 'react';
import { ReactDOM } from 'react-dom';
import Logo from '../logo.svg';

export default function Footer(){
    return(
        <div className='footer'>
            <a href='https://medium.com/@Mor_Fall_Diop'>
                <img src={Logo} target="_blank" alt='Medium'/>
            </a>
            <a href='https://www.facebook.com/Mor.Fall.Diop.99'>
                <img src={Logo} target="_blank" alt='Facebook'/>
            </a>
            <a href='https://www.instagram.com/papy_diop/'>
                <img src={Logo} target="_blank" alt='Instagram'/>
            </a>
            <a href='https://github.com/diopmorfall'>
                <img src={Logo} target="_blank" alt='GitHub'/>
            </a>
        </div>
    )
}
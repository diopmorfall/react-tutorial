import react from 'react';
import { ReactDOM } from 'react-dom';
import SocialButtons from './SocialButtons';


export default function Intro(){
    return( 
        <header className='header'>
            <img className='profile-pic' alt='Mor Fall Diop'/>
            <h2>Mor Fall Diop</h2>
            <p>Frontend Developer</p>
            <a href='https://diopmorfall.github.io/portfolio'>Mor's website</a>
            <SocialButtons />
        </header>
    )
}
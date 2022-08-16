import react from 'react';
import { ReactDOM } from 'react-dom';

export default function About(){
    return(
        <div className='infos'>
            <section className='about'>
                <h3>About</h3>
                <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to
                    keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </section>
            <section className='interests'>
                <h3>Interests</h3>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                    fanatic.
                </p>
            </section>
        </div>
    )
}

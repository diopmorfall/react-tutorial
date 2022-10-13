import React from 'react';

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function watchWidth() {
        console.log('Setting up...');
        setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', watchWidth);

        return function () {
        console.log('Cleaning up...');
        window.removeEventListener('resize', watchWidth);
        };
        //* cleanup function: the effect can set it to remove the event listener when the component will unmount (when it's removed)
        //! If I don't do it, it'll fire the resize event on a non existing component, causing a memory leak
        //? If I want to avoid similar cases, I should use the cleanup function
    }, []);

    return <h1>Window width: {windowWidth}</h1>;
}
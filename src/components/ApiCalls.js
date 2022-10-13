import React from 'react';

export default function ApiCalls() {
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1);

    console.log('Component rendered');
    //! But why this is rendered infinite times ?
    //* Because everytime I render the component, I'm calling fetch and use its data to set the state (which re-renders the component with new data)

    //* First I get the data
    //* then I should save it into state, but not directly !

    //* That's because React just interacts with the DOM and the browser to render some elements based on the state
    //! But it cannot handle side effects like localStorage, API calls, subscription; things that React isn't in charge of

    //* To handle side-effects, we should use this hook
    React.useEffect(() => {
        console.log('Effect ran');
        //? here we put the side effect logic we want to handle
        fetch(`https://swapi.dev/api/people/${count}`)
            .then((res) => res.json())
            .then((data) => setStarWarsData(data));
    }, [count]);
    //* If I want to limit the times useEffect will run, I should pass the dependency array as the second parameter
    //? If it's empty it's not looking for changes, so it'll run only once
    //* But if I add something then each time it changes and is different from the previous call, useEffect will run
    //? useEffect depends on its second parameter to run

    //? useEffect will run after the elements will be loaded in the DOM

    //? If I want to use async/await instead of fetch.then(), I have to do it this way:
    //? Declaring an async function inside the useEffect one, and then call it

    /*
    React.useEffect(() => {
        async function getMemes() {
        const res = await fetch(`https://swapi.dev/api/people/${count}`);
        const data = await res.json();
        setStarWarsData(data);
        }
        getMemes();
    }, [count]);
    */

    return (
        <div>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Add
        </button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    );
}
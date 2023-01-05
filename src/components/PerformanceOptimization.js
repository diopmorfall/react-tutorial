import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '../index.css';

import Players from './Players';

export default function PerformanceOptimization() {
    const players = Players;
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    const getMostExpensive = (data) => {
        console.log('calcs');
        return data.reduce((total, player) => {
            const price = player.price;
            if (price >= total) total = price;
            return total;
        }, 0);
    };

    const mostExpensive = useMemo(() => getMostExpensive(players), [players]);

    const addToCart = useCallback(() => {
        console.log(cart);
        setCart((prevCart) => prevCart + 1);
    }, [cart]);

    //* this recreates the function whenever the dependency changes, or we'll get the same issue of rerender
    //? with an empty array of dependencies, the value is updated but not added to the state

    const BigList = React.memo(({ players, addToCart }) => {
        //* memo makes sure that when the props we're passing (players) aren't changing, it won't rerender this component
        useEffect(() => console.log('big list here'), []);
        return (
            <section className="players">
                {players.map((player) => (
                    <Player key={player.jersey} {...player} addToCart={addToCart} />
                ))}
            </section>
        );
    });

    const Player = (player) => {
        useEffect(() => console.log('player details here'), []);
        const { name, price } = player;
        const image = player.image.url;
        return (
            <article className='player'>
                <h4>{name}</h4>
                <img src={image} alt={name} />
                <p>${price}</p>
                <button onClick={player.addToCart}>Sign</button>
            </article>
        );
    };

    return (
        <div>
            <h1>Performance optimization</h1>
            <p>
                React is fast by default, so it's not always needed to optimize our
                apps, there are some use cases where it's better to do so
                <br /><br />
                <ol>
                    <li>
                        If we update the state (count), we're going to rerender the whole
                        component and its children, (and maybe calling again some
                        useEffect). But if they're not changing, then we can use{' '}
                        <code>React.memo</code> to avoid the rerender
                    </li>
                <br />
                    <li>
                        If we want to do the same as above but for functions because the
                        value they manipulate changes (look at the cart state), we can use
                        the <code>useCallback</code> hook to handle this case (we can use it
                        also to manage the fetching of data from a custom hook, and then
                        recreate the function when the url changes and adding that function
                        to the dependencies of the following <code>useEffect</code> hook )
                    </li>
                <br />
                    <li>
                        If there's a function that calculates some kond of value (and maybe
                        it takes a lot of time to do so), I can use the <code>useMemo</code>
                        hook to not run it whenever I rerender the component, by saving the
                        value ans seeing if it'll change
                    </li>
                </ol>
            </p>
            <>
                <h3>Count: {count}</h3>
                <h4>Cart: {cart}</h4>
                <button onClick={() => setCount(count + 1)}>Click here</button>
                <br />
                <br />
                <br />
                <p>Most valuable: ${mostExpensive}</p>
                <BigList players={players} addToCart={addToCart} />
            </>
        </div>
    );
}

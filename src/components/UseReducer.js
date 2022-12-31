import React, { useState, useReducer } from 'react';
import '../index.css';

import Modal from './Modal';

const reducer = (state, action) => {
    //* the state we want to update, and the action we want to do to update it
    //* this will run when dispatch is called
    //* you always must return something here, or the state stays the same
    //? console.log(state, action); this is the prevState value
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'Item added',
        };
    }

    //* always destructure the prevState, and then update it
    if (action.type === 'NO_VALUE') {
        return {
        ...state,
        isModalOpen: true,
        modalContent: 'please enter a value',
        };
    }

    if (action.type === 'CLOSE_MODAL') {
        return { ...state, isModalOpen: false };
    }

    if (action.type === 'DELETE_ITEM') {
        const newPeople = state.people.filter(
        (person) => person.id !== action.payload
        );

        return { ...state, people: newPeople };
    }
    throw new Error('no matching action type');
    //! we can throw an error if we're sure we don't need to handle extra scenarios
};

const defaultState = {
    //? the object describing the default value of the state
    people: [],
    isModalOpen: false,
    modalContent: '',
};

export default function UseReducer() {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);
    //* useReducer returns a state value, and a dispatch function that is used to update state
    //* when we initialize it, it takes the reducer function and the initial state
    //? and when dispatch is called, it'll update the state value
    //* dispatch is only called once and updates the default state, instead of calling many state setter functions

    function handleSubmit(e) {
        e.preventDefault();
        if (name) {
        const newItem = { id: new Date().getSeconds(), name };
        dispatch({ type: 'ADD_ITEM', payload: newItem }); //* this is the action object (type naming convention)
        setName('');
        } else {
        dispatch({ type: 'NO_VALUE' });
        }
    }

    function closeModal() {
        dispatch({ type: 'CLOSE_MODAL' });
    }

    return (
        <div>
            <p>
                This hook is used in more complicated projects, where you could have
                multiple states or the useState holds a complex value that you need to
                structure; but for small projects it's not needed.
                <br /><br />
                The dispatch function is called once to update the whole state object,
                instead of calling several state setter function across the app
            </p>
            <br />
            <>
                {state.isModalOpen && <Modal closeModal={closeModal} content={state.modalContent} />}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">ADD</button>
                </form>
                <br /><br />

                {state.people.map((person) => (
                <div key={person.id} className="item">
                    <h4>{person.name}</h4>
                    <button
                    onClick={() => dispatch({ type: 'DELETE_ITEM', payload: person.id })}
                    >Delete</button>
                </div>
                ))}
            </>
        </div>
    );
}

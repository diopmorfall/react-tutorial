import React from 'react';

export default function FunctionForm() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: false,
        employment: '', //? it should get the value from the selected radio button
        favColor: '',
    });
    //* the name of the inputs is the same as the properties in the state

    function handleChange(event) {
        //* Instead of doing one function for each input field, it's better to create a state object for the form, to handle it better

        //* This way I can add new input fields, with a name that is the same as the property in the state object

        const { name, value, type, checked } = event.target;
        //* to handle better the form, I should destructure the target object

        setFormData((prevFormData) => {
        return {
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
            //* This is a computed property, I can use it since names are the same
            //? And if it's a checkbox, I'll return its boolean value
        };
        });
    }

    //* I need the inputs to be controlled in some way, otherwise they'll kinda hold their own state

    //* And that's why they take their values from the state object

    function handleSubmit(event) {
        event.preventDefault(); //? needed, or the page will be refreshed
        //* sendToApi(formData) I don't need to get all the data
        //* since it's already in the state, I could just pass it
        console.log(formData);
        //* here I can check my data if it's good or not
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
        />
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
        />
        <input
            type="email"
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
        />
        <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Add comments"
        />
        <br />
        <br />
        <br />

        <label htmlFor="1">
            Checkbox into the label
            <input type="checkbox" id="1" />
        </label>

        <input
            type="checkbox"
            id="isFriendly"
            name="isFriendly"
            onChange={handleChange}
            checked={formData.isFriendly}
        />
        <label htmlFor="isFriendly">Are you friendly ?</label>
        <br />
        <br />
        <fieldset>
            <legend>Current employment status</legend>

            <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === 'unemployed'}
            onChange={handleChange}
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br />

            <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === 'part-time'}
            onChange={handleChange}
            />
            <label htmlFor="part-time">Part-time</label>
            <br />

            <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === 'full-time'}
            onChange={handleChange}
            />
            <label htmlFor="full-time">Full-time</label>
            <br />
        </fieldset>
        <br />
        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select
            id="favColor"
            name="favColor"
            value={formData.favColor}
            onChange={handleChange}
        >
            <option value="">- Choose -</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
        </form>
    );

  //? textarea is a self-closing tag in react

  //* I can wrap the checkbox inside the label or not, it works both ways with htmlFor (for in html)

  //* To make that only the right radio is selected, I should check if the state matches the input name

  //* The value of a selection instead is held and set in the select container

  //* A button inside a form triggers the onSubmit event by default
}
function FunctionForm() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    //* the name of the inputs is the same as the properties in the state

    console.log(formData);

    function handleChange(event) {
        //* Instead of doing one function for each input field, it's better to create a state object for the form, to handle it better

        //* This way I can add new input fields, with a name that is the same as the property in the state object
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            //* This is a computed property, I can use it since names are the same
            };
        });
    }

    //* I need the inputs to be controlled in some way, otherwise they'll kinda hold their own state

    //* And that's why they take their values from the state object

    return (
    <form>
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
    </form>
    );
}
import logo from './logo.svg';
import './App.css';
import React from 'react';

import Block from './Block';
//* Here I'm importing this component, in order to use it (usually, they're in a "components" standalone folder)
//* I can import whatever the hell I want

function intro(){
    return "I'm Gol D. Roger, the king of the pirates";
}
//* I can put everything inside the curly braces (kinda interpolation in Angular)

//* after compilation JSX expressions become regular JS functions, so I can use it like this

function greeting(user){
    if(user){
        return <h3>Hi {user}, wassup?</h3>;
    } else {
        return <h3>Wait a minute, who are you ?</h3>; 
    }
}

//* Components and props
//? Components allow us to split the UI in reusable and isolated parts (React components)

function sayhi(props){
    return <p style={"background-color: pink"}>Hi {props.name}, I'm a function component because I'm a regular JS function</p>
}

//* A valid component, because it takes a props object (properties) and returns a React element that describes its appearance

class SayHi extends React.Component {
    render(){
        return  <p>
                    Hi {this.props.name}, I'm a component defined as a class<br/>
                </p>;
    }
}

//* to use the props object and embed components better, this way is better
//? JSX attributes and children are passed into it 

const sayHi = <SayHi name="Mary" />;
//! Always write them with the first capital letter

function App() {
    //* Attributes can be defined as static strings, or embedded in a JSX expression {}
	return (
		<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{intro()}</h2>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React Worororo
                </a>
                <div>{greeting("Savage")}</div>
                <p>
                    The <code>App</code> component is rendered because it's exported from here, and imported in <code>index.js</code>
                </p>
                <h4>Like we see above, a JSX tag can contain children</h4>
                <h6>Also, React DOM escapes the values in JSX before rendering them, preventing XSS attacks</h6>
                <h4>Babel compiles JSX with <code>React.createElement()</code> function</h4>
                <p>
                    It makes some checks and creates an object representing our elements: this below<br/>
                    <code>
                        return (
                            <button className="mama">Loco</button>
                        );
                    </code>
                    <br/>
                    is equal to XX in comments: React elements
                </p>
                <h5>React elements describe what you want to see: they're read and used to build and update the DOM</h5>
            </header>
            <section>
                <h2>Components and Props</h2>
                    {sayHi}
                    <div>
                        <h3>Multiple components inside one</h3>
                        <SayHi name="Jane" />
                        <SayHi name="Fuji" />
                        <SayHi name="Garp" />
                    </div>
                    <h3>If possible, we can split components into smaller ones: this way they're easier to manage</h3>
                    <p>
                        This way, one component doesn't have many tasks and doesn't know who's handling it:<br/>
                        <code>it has to be as generic as possible</code>, making them reusable in other contexts<br/><br/>
                        Also <code>a component mustn't modify its properties</code>: it must be a <code>pure function</code> 
                        (or class) that doesn't alter them; it'll be handled with states
                    </p>
            </section>
            <hr/>
            <section>
                <h2>State and lifecycle (run the clock)</h2>
            </section>
            <hr/>
            <section>
                <h2>Handling events</h2>
                <p>
                    Note that:
                    <ul>
                        <li><code>events are named with camelCase</code>;</li>
                        <li><code>with JSX, we pass a function instead of a string to handle them</code></li>
                    </ul>
                </p>
                <code></code>
                <form onSubmit={handleSubmit}>
                    <p>
                        You can pass a handler method when the component is rendered, instead of using addEventListener.<br/>
                    </p>
                    <input type="text" placeholder="Loco"></input>
                    <button onClick={fire}>Fire it</button>
                </form>
                <Toggle />
            </section>
            <hr/>
            <section>
                <h2>Conditional rendering</h2>
                <LoginControl />
                <Chat msgToRead={msg}/>
                <WarningContainer />
            </section>
            <hr/>
            <section>
                <h2>Lists and keys</h2>
                <p>We can transform arrays in lists of elements, and then render it</p>
                <NumberList numbers= { onis } />
                <KeyNumberList numbers={ digits } />
            </section>
            <hr/>
            <section>
                <h2>Forms</h2>
                <p>
                    Forms are different, because unlike other components they've got an internal state.
                    Usually the default behavior is to browse to the next page when we submit it, but we
                    can control it (for example, by making a proper function that handles the submission)<br />
                    We can do it by using <code>controlled components</code>
                </p>
                <br/>
                <p>
                    Some elements (input, select, textarea) update their state based on user input; but usually
                    the state is updated only by <code>setState()</code><br/>
                    We can make the React state the "official setter", and then make it handle by the component that
                    renders the form. This way we're creating a controlled component
                </p>
                <NameForm /><br/>
                <p>
                    A <code>textarea</code> defines its text by its children, and has a value attribute in its props (making it similar
                    to the previous form)
                </p><br/>
                <p>
                    The <code>select</code> tag instead creates a dropdown list, and the selected value is the one option with that attribute.
                    But in React, we still have the value attribute with the name of the selected option
                </p>
                <SpeakersForm />
                <p>
                    The <code>file</code> input field has a read-only value, that makes it an uncontrolled component
                </p><br />
                <p>
                    If you need to handle multiple controlled input elements, you can give a name to the element and then let the handler
                    function behave basing on it (event.target.name)
                </p>
                <Reservation />
            </section>
            <hr/>
            <section>
                <h2>Lifting State Up</h2>
                <p>
                    Sometimes, multiple components need to show the same updated data: one solution could be to <code>lift the state up to the
                    closest common ancestor</code>
                </p>
                <Calculator />
                <p>
                    Any data that changes must have only a single source of truth (can be changed in <code>only one place</code>).
                    <br />
                    The state is usually added in the component that needs it first; but <code> if another one needs it, then we
                    should move ot to the closest shared ancestor, following the top-down data flow.
                    </code>
                    <br />
                    This way makes bugs easier to find, since they'll surely be in the state of a component (you could track them with
                    <code>React Developer Tools</code>)
                </p>
            </section>
            <hr />
            <section>
                <h2>Composition vs Inheritance</h2>
                <p>
                    React has a composition model that is recomended instead of using inheritance, in order to make the code more reusable
                </p>
                <h4>
                    <code>Containment</code>
                </h4>
                <Box /> <br />
                <h4>
                    <code>Specialization</code>
                </h4>
                <p>
                    Sometimes we have a component that is a "special case" of another one, where the more specific one renders a generic one
                    and sets it with props
                </p>
                <PirateGreet /> <br />
                <p>
                    Inheritance isn't recomended, since composition in React allows us to be very flexible.
                    <br />
                    <code>
                        If you need to share some functionalities between components, it's better to create a JS module that'll be imported where is required
                    </code>
                </p>
            </section>
            <hr />
            <section>
                <h2>Thinking in React</h2>
                    <p>
                        React makes you think about the app you're building, in order to build
                        it in the right way
                    </p>
                <h4>These are the steps you should follow:</h4>
                <ol>
                    <li>
                        <code>Start with a mock</code>: you could have something like a basic
                        design from the designer, and the JSON response with the data you need
                        to render;
                    </li>
                    <br />
                    <li>
                        <code>Define a component hierarchy</code>: try do define each
                        component, ideally each one of them should do only one thing (the
                        outer one renders all the otners inside, and the most internal render
                        their data). So if it's too big, break it down
                        <br />
                        It'll be great if it adheres to the same informational architecture of
                        the JSON response (<code>one component = one piece of data</code>. In
                        a searchable table, you have: the big contaier - the serchbar for all
                        inputs, the table - the heading for each category and the data row)
                    </li>
                    <br />
                    <li>
                        <code>Create a static version</code>: just drop it with zero
                        interactivity/states, only to get the structure done.{' '}
                        <code>
                            Doing this requires a lot of typing and no thinking, while make it
                            interactive is the opposite (a ton of thinking and almost no typing)
                        </code>
                        Since it'll be static, the components will only have the{' '}
                        <code>render()</code> method initially; but the outer one will get all
                        the data in its <code>props</code>
                        <br />
                        You can build it both top-down or bottom-up,
                    </li>
                    <br />
                    <li>
                        <code>
                            Identify the mimimal and complete representation of the UI state
                        </code>
                        : find the minimal set of states that'll change. Something won't be a
                        state if:
                        <br />
                        <ul>
                            <li>is passed from a parent component with props;</li>
                            <li>stays unchanged over time;</li>
                            <li>is computable from any other props/state in the component.</li>
                        </ul>
                        In our case, the searchbar and the checkbox are states because they
                        can change many times (they're input fields)
                    </li>
                    <br />
                    <li>
                        <code>Identify where your state should live</code>: look for the
                        component that changes or owns this state. Look for:
                        <br />
                        <ul>
                            <li>
                            <code>components that render some data based on that state</code>{' '}
                            (the table and the input box);
                            </li>
                            <li>
                            <code>
                                a common ancestor component of all the others that need that
                                state
                            </code>
                            (the table container) ;
                            </li>
                            <li>
                            <code>
                                the common ancestor component or one of the parent ones of this
                                should own the state
                            </code>
                            ;
                            </li>
                            <li>
                            <code>
                                if there's no common ancestor component, create one above it
                                just to store the state
                            </code>
                            </li>
                        </ul>
                        Then we just add the initial state in the <code>constructor()</code>{' '}
                        of the chosen component, and then we can pass its content as props to
                        the children components
                    </li>
                    <br />
                    <li>
                        <code>Add inverse data flow</code>: now we have to implement the
                        bottom-top flow of data. For example, since the state stores the input
                        value, we should update the state up to the new typed value (with the{' '}
                        <code>onChange()</code> event that'll call the <code>setState()</code>{' '}
                        method)
                    </li>
                </ol>
            </section>
            <section>
                <h2>Importing components</h2>
                <p>
                    This below is an imported component
                    <Block />
                </p>
            </section>
            <section>
                <h2>Other tutorials</h2>
                <ul>
                    <li>
                        <a href='https://stackblitz.com/edit/react-elhnua'>Basics and importing a component</a>
                    </li>
                    <li>
                        <a href='https://stackblitz.com/edit/react-eastva'>Project 1: infos about React</a>
                    </li>
                </ul>
            </section>
		</div>
	);
}

function fire(){
    alert("We fired it");
}

function handleSubmit(event){ //* a SyntheticEvent
    event.preventDefault();
    //! this is the only way to prevent an event, return false doesn't work
    //? but here, the React event object is accessible
}

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        this.handleToggle = this.handleToggle.bind(this);
        //! binding is needed to make it work: class methods aren't bound by default (it's not called as handleToggle())
        //? we do all the bindings in the constructor

        //* There are some alternatives to binding, both with arrow functions:
            //? <form onSubmit={(e) => this.handleSubmit(e)}> / this could impact performances
                //? with this, I can also pass arguments
            //? handleToggle = () => {} / this is an experimental way of defining a method
    }

    handleToggle(){
        this.setState(previousState => ({
            isToggleOn: !previousState.isToggleOn
        }))
    }

    render(){
        return(
            <button onClick={this.handleToggle}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

//? XX looks like this
//? const element = {
//?    type: "h1",
//?    props: {
//?        className: 'mama',
//?        children: 'Loco'
//?    }
//?};

//* Conditional rendering

function UserAccess(){
    return <h4>Yeah man, you're back</h4>
}

function GuestAccess(){
    return <h4>Who the heck are you ? Login please</h4>
}

function Access(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserAccess />;
    }

    return <GuestAccess />;
}

function LoginButton(props){
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}
class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        //* Saving an element in a variable and then decide when to show it without messing up with other components
        
        //? this if can be shorten like the alternative below, but it's less obvious
        /*
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} /> ;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} /> ;
        }
        */
        return (
            <div>
                <Access isLoggedIn={isLoggedIn} />
                {isLoggedIn ? 
                    <LogoutButton onClick={this.handleLogoutClick} /> :
                    <LoginButton onClick={this.handleLoginClick} />
                }
            </div>
        )

        //* you can choose what you want to show; better if it's something kinda small
    }
}

//*  if is ok, but there are shorter alternatives
const msg = ["Loco", "Pam"];

function Chat(props){
    const msgToRead = props.msgToRead;
    return(
        <div>
            <h5>Welcome</h5>
            {msgToRead.length > 0 &&
                <p>
                    You have {msgToRead.length} messages to read
                </p>
            }
        </div>
    )

    //* here we're embedding expressions in jsx with the && operator: if the first part is true, then the next operator will be shown
    //* otherwise, it'll return false and show nothing
}

function WarningBanner(props){
    if(!props.warn) return null; //* warn
    //? this prevents the component to not be shown, but the lifecycle methods will still be called (componentDidMount)

    return(
        <div>
            <h3>WARNING!!!</h3>
        </div>
    )
}

class WarningContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

function NumberList(props) {
    const numbers = props.numbers;  
    const numbersList = numbers.map(number => 
        <li key={ number }>
            <i>{ number.toUpperCase() }</i>
        </li>
    )
    //? Like it was previously it'll return an error, because a key is not included when the list is created
    //* that's why we add the key paramter to the li element, to make them unique (if you have it, use an id field X)
    //* or like in this case, the index of the cycle
    //! (but this should be the last resort, they're not reliable if the order of the items changes)
    return(
        <ul>{ numbersList }</ul>
    )
}

function KeyNumberList(props) {
    const numbers = props.numbers;  
    const numbersList = numbers.map(number => 
        <ListItem key={ number.key } value={ number.value }/>
    )
    //? this is already better, since we ue the id of the element X
    //! I can only get the key from here inside the array Z

    //* Keys inside an array must be unique, but not globally unique in all the code
    //? React uses keys as hints, but they're not passed in the components

    /*
    const capitalNumbers = numbers.map(number => 
        <ListItem key={ number.key } value={ number.value.toUpperCase() }/>
    )

    return(
        <div>
            <ul>{ numbersList }</ul>
            <ul>{ capitalNumbers }</ul>
        </div>
    ) */

    //? since JSX allows to embed every expression in braces, we can also write it like this:

    return(
        <div>
            <ul> { numbersList } </ul>
            <ul>
                {numbers.map(number => 
                    <ListItem key={ number.key } value={ number.value.toUpperCase() }/>
                )}
            </ul>
        </div>
    )
}

function ListItem(props){
    //* the key only makes sense in the context of the surrounding array, I can't get it directly here Z
    return <li>{ props.value }</li>
}

const onis = ["Haccha", "Juki", "Fuga", "Jaki", "Inbi"];
const digits = [
    {value: 'a', key: 1},
    {value: 'bari', key: 2},
    {value: 'capitale', key: 3},
    {value: 'digitale', key: 4}
];

//* Forms
class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ""};
        //? value could have a default value that'll be shown like a placeholder
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){ //* the method that sets the state at each change in the input field
        //? modifying its content, the value will be saved in the state AND THEN rendered in the field
        //* this way also the state is updated and driven only by setState()
        this.setState({value: event.target.value});
        alert("State changing at each keystroke");
    }

    handleSubmit(event){
        alert("Submitted: " + this.state.value)
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

class SpeakersForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: "Jessica"};
        //? value could have a default value that'll be shown like a placeholder
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){ //* the method that sets the state at each change in the input field
        //? modifying its content, the value will be saved in the state AND THEN rendered in the field
        //* this way the state is updated and driven only by setState()
        this.setState({value: event.target.value});
        //alert("State changing when changing option");
    }

    handleSubmit(event){
        alert("Submitting: " + this.state.value)
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Choose a speaker you want to get more details about:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Gherardo">Gherardo</option>
                        <option value="Aurora">Aurora</option>
                        <option value="Jessica">Jessica</option>
                        <option value="Luca">Luca</option>
                        <option value="Nicolò">Nicolò</option>
                    </select>
                </label><br />
                <input type="file" /><br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

class Reservation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSpeaker: true,
            minutesOfSpeech: 15
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value, //* an ES6 computed property, updated dynamically
            //? isSpeaker: true/false (possible values)
            //? minutesOfSpeech: any number
        });
        //* basing on the name of the input element, we can make this function behave how we want
    }

    render(){
        return(
            <form>
                <label>
                    Is a speaker
                    <input name='isSpeaker' type="checkbox"
                        checked={this.state.isSpeaker}
                        onChange={this.handleInputChange}
                    />
                </label><br />
                <label>
                    Minutes of speech: 
                    <input name="minutesOfSpeech" type="number"
                        value={this.state.minutesOfSpeech}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        )
    }

    //* setting the value property in controlled components prevents the user to change it
    //! but if you let it be editable, you could have set the value to null/undefined

    //* Using controlled components is cool, but you should write an event handler for every way your data can change
    //? in this cases, uncontrolled ones are an alternative to build forms
    //* there's also Formik, which is an open source library that handles validation, submissions and visited fields
}

//* Lifting state up

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
    k: 'Kelvin',
};

    //? functions to convert between two temperature scales
function celsiusToFahrenheit(c) {
    return (c * 9) / 5 + 32;
}

function celsiusToKelvin(c) {
    return c + 273.15;
}

function fahrenheitToCelsius(f) {
    return ((f - 32) * 5) / 9;
}

function fahrenheitToKelvin(f) {
    return (f - 32) / 1.8 + 273.15;
}

function kelvinToCelsius(k) {
    return k - 273.15;
}

function kelvinToFahrenheit(k) {
    return (k - 273.15) * 1.8 + 32;
}

//* function to convert the temperature
function tryConvert(temperature, converter) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return '';

    let output = converter(input);
    output = Math.round(output * 1000) / 1000;
    return output.toString();
}

class Calculator extends React.Component {
    //* it's the source of truth, keeping the inputs in sync with each other
    //* its state will be up to date with the last changed input
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleKelvinChange = this.handleKelvinChange.bind(this);
        this.state = { temperature: '', scale: 'k' };
    }

    handleCelsiusChange(degrees) {
        this.setState({ temperature: degrees, scale: 'c' });
    }

    handleFahrenheitChange(degrees) {
        this.setState({ temperature: degrees, scale: 'f' });
    }

    handleKelvinChange(degrees) {
        this.setState({ temperature: degrees, scale: 'k' });
    }

    render() {
        //? we need to update each input field when we alter one of them
        //? and we also need to update the BoilingVerdict (currently it can't get the temperature, we need the inputs to kinda output it to the parent)
        const scale = this.state.scale;
        const temperature = this.state.temperature;

        //? setting each input value based
        const celsius =
            scale === 'f'
            ? tryConvert(temperature, fahrenheitToCelsius)
            : scale === 'k'
                ? tryConvert(temperature, kelvinToCelsius)
                : temperature;

        const fahrenheit =
            scale === 'c'
            ? tryConvert(temperature, celsiusToFahrenheit)
            : scale === 'k'
                ? tryConvert(temperature, kelvinToFahrenheit)
                : temperature;

        const kelvin =
            scale === 'f'
            ? tryConvert(temperature, fahrenheitToKelvin)
            : scale === 'c'
                ? tryConvert(temperature, celsiusToKelvin)
                : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <TemperatureInput
                    scale="k"
                    temperature={kelvin}
                    onTemperatureChange={this.handleKelvinChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

class TemperatureInput extends React.Component {
    //* since it's a logic bound to an input field, we moved it here (from Calculator) as a separate component
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = { temperature: '' }; //* this must be shared with the other inputs, lifting it up to the closest shared ancestor of the other component that needs it
    }

    handleChange(e) {
        //? this.setState({ temperature: e.target.value }); before
        this.props.onTemperatureChange(e.target.value);
        //? after: we're making it a controlled component, accepting a method from the parent
        //* onTemperatureChange is in the props of the input,and then is called when the input is edited
    }

    render() {
        //? const temperature = this.state.temperature; before
        //const temperature = this.props.temperature; //? after
        //* since props are read-only, only the parent component can change it
        //const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
                <input value={this.props.temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

//* Composition vs Inheritance

function BigBorder(props) {
    return <div className={'big bold-' + props.color}>{props.children}</div>;
    //* some elements don't know their child elements ahead of time (like generic boxes)
    //* if we need to pass the children as an output, we have to use props.children
}

function InstaTopBar() {
    return <div>title, reactions, direct</div>;
}

function InstaFeed() {
    return <div>stories, posts</div>;
}

function InstaBottomBar() {
    return <div>home, search, new content, market, profile</div>;
}

//? you could even come up with your own convention, if you need to split the child elements in different sections
function InstaHome(props) {
    return (
        <div>
        <div>{props.topbar}</div>
        <div>{props.feed}</div>
        <div>{props.bottombar}</div>
        </div>
    );
}

//* this way other components can add anything to them as their children
function Box() {
    return (
        <div>
            <BigBorder color="lime">
                <h5>The box</h5>
                <p>The children elements are here wororo</p>
                <i>loco</i>
            </BigBorder>
            <InstaHome
                topbar={<InstaTopBar />}
                feed={<InstaFeed />}
                bottombar={<InstaBottomBar />}
            />
        </div>
    );
    //* you can pass anything in props, even other components
}

function Greet(props) {
    return (
        <div>
            <h5>{props.title}</h5>
            <p>{props.message}</p>
            {props.children}
        </div>
    );
}

//* showing title, message and the rest of the content under children
//* the base structure above should be mirrored when we define the component
function PirateGreet() {
    return (
        <Greet
        title="Hi gang, I'm Monkey D. Luffy"
        message="I'll be the king of pirates"
        >
            <ul>
                <li>
                    <b>Role</b>: <i>Captain</i>
                </li>
                <li>
                    <b>Age</b>: <i>19</i>
                </li>
                <li>
                    <b>Bounty</b>: <i>3'000'000'000$</i>
                </li>
                <li>
                    <b>Fruit</b>: <i>Mythical Zoan Devil Fruit - Hito Hito No Mi Model: Nika</i>
                </li>
            </ul>
        </Greet>
    );

//? Composition also works for components defined as classes
}

export default App; //? a regular export after the definition of our component; it'll be available wherever it'll be imported

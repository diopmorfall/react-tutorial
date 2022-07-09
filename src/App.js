import logo from './logo.svg';
import './App.css';
import React from 'react';

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
export default App; //? a regular export after the definition of our component; it'll be available wherever it'll be imported

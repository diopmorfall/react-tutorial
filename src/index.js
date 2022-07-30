import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//* the root element that contains all the elements, then is rendered with its content inside with the following method
//* I choose it as a base, then I make it the root of the whole app
//? makes sense that its in the index file

const app = <React.StrictMode>
                <App />
            </React.StrictMode>;

//! elements !== components

function tick() {
    const element = (
        <div>
            <h1>Timer here!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
            <code>
                Usually, an element that is rendered cannot be changed (this functions is scheduled to render the content each
                second); however, there are more advanced ways to handle this scenario
            </code>
        </div>
    );
    //root.render(element);

    //* State and lifecycle (making the clock working)
    //? a state is needed to make the clock update itself
    //* it's like props, but it's private and handled by the component itself

    root.render(<Clock />);
}

root.render( //* this renders elements, that are unchangeable once they're shown
    app
);
//? react kinda appends the content in the root
//*usually, the root renders an element (<App />) that contains everything, and then handle changes with stateful components

//* React DOM compares each element and its children to the previous one, and it updates the DOM to match the required state
//?  (check the clock example, the DOM always changes)


console.log("A JSX object", app); //* This shows that JSX is an object that describes the DOM element
//* JSX creates objects with many details, that React turns into real DOM elements in the page
//setInterval(tick, 1000);
//* We can make it better, State and Lifecycle (with a component class)
class Clock extends React.Component {

    constructor(props){
        super(props); //* passed to the basic React constructor (always this way)
        this.state = {time: new Date()};
        //? this.state = {posts: [], comments: []}; X
        //* here we're assigning the initial state (current time)
    }
    
    //* we also need lifecycle methods (useful when freeing up resources when components are destroyed)

    componentDidMount(){
        //* runs after the <Clock /> content is rendered to the DOM => mounting
        this.timerId = setInterval(() => this.tick(), 1000);
        //? here we're adding an extra field that won't be used anywhere else
    }

    componentWillUnmount(){
        //* runs when <Clock /> is removed from the dom => unmounting
        clearInterval(this.timerId);
    }

    tick(){
        //* at each call, we're assigning a new state: React knows it changed, then calls render()
        this.setState({time: new Date()});
        //! either we change a state this way, or we set it in the constructor
    }

    //? calling setState merges the object you pass into the current state, and then you can set its properties X

    //? this.setState({posts: response.posts}); => only sets the posts, and leaves the comments (we can set them later on)
    //* the object we pass in setState() replaces the object in this.state.object

    //* Sometimes multiple setState calls will be batched (kinda compressed) into one, to enhance performances
    //* states and props may be updated asynchronously: in that case, we should use this form of setState
    
    withAsyncUpdates(){
        this.setState((state, props) => ({
            update: state.state + props.num //* the counter example, but it could be anything
        }));
    }

    //* Parent or chinld components can't know it a component is stateful/less:
    //* state is local/encapsulated, only the component who defines it can see it

    //* But a component can pass its state as a prop to a child element
    //? an hypothetycal <Date ={this.state.date}> => props.date.dowhatyouwantwithit()
    //* This is a top-down data flow, props go down through childrens

    //? this will be called at each update, but as we render the component in the same dom node we'll only use a single class
    //? react learns what will be displayed, and updates the dom
    render(){
        return(
            <div>
                <h3>Updated clock</h3>
                <h4>{this.state.time.toLocaleTimeString()}</h4>
            </div>
        );
        //? Previously: <h4>{this.props.time.toLocaleTimeString()}</h4>
    }
}

//? root.render(<Clock />); to run the State and Lifecycle section

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

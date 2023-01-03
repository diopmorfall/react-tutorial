const PersonContext = React.createContext();
//* creating the context, we're able to access the Provider (who provides the context) and the Consumer (who uses it)

export default function UseContextComponent() {
    const [people, setPeople] = useState([
        { id: 1, name: 'Itoshi Rin' },
        { id: 2, name: 'Shidou Ryusei' },
        { id: 3, name: 'Isagi Yoichi' },
        { id: 4, name: 'Bachira Meguru' },
        { id: 5, name: 'Mikage Reo' },
        { id: 6, name: 'Chigiri Hyoma' },
        { id: 7, name: 'Kunigami Rensuke' },
        { id: 8, name: 'Yukimiya Kenyu' },
    ]);

    const removeItem = (id) => {
        setPeople(prevPeople => prevPeople.filter(person => person.id !== id));
    };

    const List = () => {
        //* with the context I don't need to pass down removeItem anymore
        const data = useContext(PersonContext);
        console.log(data);
        //* and I can also access our state object with the context
        return (
        <>
            {data.people.map(person => {
            return <Person key={person.id} {...person} />;
            })}
        </>
        );
    };

    const Person = ({ id, name }) => {
        const { removeItem } = useContext(PersonContext);
        //* yes, we can access the context data without some tedious prop drilling from any component
        //* and removeItem will still work fine
        return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove player</button>
        </div>
        );
    };

    return (
        //* this context will wrap our entire app, so that we can access value from any component
        <PersonContext.Provider value={{ removeItem, people }}>
            <p>
                It's an API that allows us to make our child components access some
                values from the top level component, without prop drilling: we need to
                wrap our app in a context element, and then declare a value that'll be
                accessible to any of the components inside it
                <br />
                <br />
                If you only have one level of components, then it's fine to pass data
                with props; but if you need to pass it through many levels, and some of
                them don't need that data, we can use the context to avoid prop drilling
            </p>
            <List />
        </PersonContext.Provider>
    );
}
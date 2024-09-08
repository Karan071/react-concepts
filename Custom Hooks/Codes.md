 ## Class based Components


    class ClassBasedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = { count: 0 };
        }
        incrementCount = () => {
            this.setState({ count: this.state.count + 1 });
        };

        render() {
            return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>increment button</button>
            </div>
            );
        }
    }

 ### Functional based Components

    function FunctionalComponent() {
        const [count, setCount] = useState(0);
            return (
                <div>
                <p>{count}</p>
                <button
                    onClick={() => {
                    setCount(count + 1);
                    }}
                >
                    increment {count}
                </button>
                </div>
            );
    }



## Lifecycle events : using functional components (useEffects)

    const MyComponent = () => {
        useEffect(() => {
        console.error("Component mounted");

        return () => {
        console.log("Component unmounted");
        }
        },[]);

        // render some UI
        return <div>
        From inside my Component
        </div>
    }



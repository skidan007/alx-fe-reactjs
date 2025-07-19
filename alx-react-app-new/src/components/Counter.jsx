import { useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    <div>
        <p>Current Counter: {counter}</p>
        <button onClick={ () => setCount(count +1)} >Increament</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
    
}
export default Counter;

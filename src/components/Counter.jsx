import { useSelector,useDispatch  } from "react-redux";
import { decrement, increment,incrementByAmount } from "../redux/features/counter/counterSlice";


const Counter = () => {

    // const count = useSelector((state) => state.counter.count);
    const {count} = useSelector((state)=>state.counter)
    console.log(count);
    const dispatch = useDispatch()



    return (
        <div>

            <div>
                <button onClick={()=>dispatch(incrementByAmount(10))}>Increment by Amount/value</button>
            </div>
            <button 
            onClick={()=> dispatch(increment())}
            
            >Increment</button>
            <div>
                <h1>{count}</h1>
            </div>

            <button
            onClick={()=>dispatch(decrement())}
            >Decrement</button>
            
        </div>
    );
};

export default Counter;
import { decrement, increment,incrementByAmount } from "../../Pages/redux/features/counter/counterSlice";
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

    const {count} = useSelector((state) =>state.counter)
    console.log(count);
    const dispatch = useDispatch()
    
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <br />
           
                <div className="pt-2">
                <button className="text-3xl"  onClick={()=>dispatch(incrementByAmount(5))}>Increment By Amount</button>
                </div>
            
        </div>
    );
};

export default Counter;
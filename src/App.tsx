import { useState } from 'react';

import Header from "./components/Header";

function App() {
    const firstName = 'City';

    const [count, setCount] = useState(0);
    const [color, setColor] = useState<string>('')

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {

        if (count) {
            setCount(count - 1);
        }
    };

    const startCountdown = () => {
        if (count > 0) {
            // Start an interval (store it so we can clear it)
            // In the code block, decrease count by one every second (1000 milliseconds)
            const timer = setInterval(() => {
                // if count has reached zero, clear the interval

                setCount(prevCount => {
                    if (prevCount <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prevCount - 1;
                });
            }, 1000);
        }
    }

    return (
        <>
            <Header color={color} count={count} userName={firstName} />

            <h2>{count}</h2>

            <div>
                <input type="text" placeholder="Enter a color value" />
            </div>

            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>

            <button onClick={startCountdown}>Start Countdown</button>
        </>
    )
}


export default App

// function useState(initialValue) {
//     const updateFunction = (newVal) => {
//         initialValue = newVal;
//     }

//     return [initialValue, updateFunction]
// }

// const [count, setCount] = useState(0);
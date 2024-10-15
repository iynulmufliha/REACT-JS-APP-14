import React, { useState } from 'react';
function App() {
    const [input, setInput] = useState('');
    const [evenCount, setEvenCount] = useState(0);
    const [oddCount, setOddCount] = useState(0);
    const countEvenOdd = () => {
        const array = input.split(',');
        let evens = 0;
        let odds = 0;
        for (let i = 0; i < array.length; i++) {
            const num = Number(array[i]); 
            if (num % 2 === 0) {
                evens++;
            } else {
                odds++;}}
        setEvenCount(evens);
        setOddCount(odds); };
    return (
        <div> <h1>Even and Odd Counter</h1>
            <input type="text" value={input}  onChange={(e) => setInput(e.target.value)}placeholder="Enter numbers with commas"/>
            <button onClick={countEvenOdd}>Count</button>
            <p>Even Count: {evenCount}</p>
            <p>Odd Count: {oddCount}</p> </div>  );}
export default App;


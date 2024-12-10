import React, { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0)

    const handlerCounter = () => {
        setCounter(counter + 1);
    }
    const handlerCounterMinus = () => {
        if (counter == 0)
        {
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <div style={{backgroundColor:'#aed6f1', padding:'20px', borderRadius:'14px'}}>
            <h1 style={{ color: 'black' }}>Counter</h1>
            <h1 style={{ color: 'green' }}>{counter}</h1>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}> 
                <button
                    style={{ backgroundColor: 'lightgreen', paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', paddingBottom: '15px', fontSize: '20px' }}
                    onClick={handlerCounter}
                >
                    <text>
                        Add 1 in Counter
                    </text>
                </button>
                <button
                    style={{ backgroundColor: 'red', paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', paddingBottom: '15px', fontSize: '20px', color:'white' }}
                    onClick={handlerCounterMinus}
                >
                    <text>
                        Remove 1 from Counter
                    </text>
                </button>
            </div>
        </div>
    )
}

export default Counter
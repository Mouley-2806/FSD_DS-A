import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(200)
    const [size, setsize] = useState(200)

    function inc() {
        if (count < 400) {
            setCount(count + 20)
        }
        else {
            console.log("Max reached")
        }
    }

    function dec() {
        if (count < 20) {
            console.log("Limit reached")
        }
        else {
            setCount(count - 10)
        }
    }
    function hinc(){
        if(size<20) setsize(size+20)
        else console.log("Max reached")
    }
    function hdec(){
        if(size<20) console.log("Limit Reached")
            else setsize(size-10)
    }

    return (
        <div>
            <h3>Image Resizer</h3>

            <button onClick={inc}>r+</button>
             <button onClick={dec}>r-</button>

            <span> {  <img
                src="https://imgs.search.brave.com/PBCdXUz-WT4ao1BrUxi6LPFJHvV3GaxQ68D3Mfr2R-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3NtaWxpbmct/Y2xvc2UtdXAtb2dn/eS1hbmQtdGhlLWNv/Y2tyb2FjaGVzLTcx/bmpocW9ha2JhdTdu/Ym0uanBn"
                alt="Example"
                width={count}
                height={count}
            />} </span>
            <button onClick={dec}>-</button>

           

           
            <button onClick={hinc}>h+</button>
            <button onClick={hdec}>h-</button>
        </div>
    )
}

export default Counter
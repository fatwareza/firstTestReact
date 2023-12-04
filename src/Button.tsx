import { useState } from 'react'
export default function Button() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
            <h1>Hello world</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            </div>
        </>
    )
}

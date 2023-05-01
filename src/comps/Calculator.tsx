import { useState, useEffect } from "react"

const Calculator = (): JSX.Element => {

    const [result, setResult] = useState<number>();
    const [first, setFirst] = useState<number>();
    const [second, setSecond] = useState<number>();
    const [operator, setOperator] = useState<string>();
    const [turnFirst, setTurnFirst] = useState<boolean>(true);

    const handleTurn = (num: number) => {
        if(turnFirst == true) { 
            handleFirst(num)
        }
        else {
            handleSecond(num)
        }
    }

    const handleFirst = (num: number) => {
        if (first !== undefined) {
            const firstString = first.toString()
            const sumString = `${first}${num}`
            setFirst(parseInt(sumString))
        }
        else {
            setFirst(num)
        }
    }

    const handleSecond = (num: number) => {
        if (second !== undefined) {
            const secondString = second.toString()
            const sumString = `${second}${num}`
            setSecond(parseInt(sumString))
        }
        else {
            setSecond(num)
        }
    }

    const handleOperator = (op: string, num?: number) => {
        if (turnFirst) {
            setOperator(op)
        }
        setTurnFirst(!turnFirst)
        console.log(turnFirst)
    }

    const handleEquals = () => {
        if (operator === '+' && first && second) {
            setResult(first + second)
        }
        if (operator === '-' && first && second) {
            setResult(first - second)
        }
        if (operator === '/' && first && second) {
            setResult(first / second)
        }
        if (operator === '*' && first && second) {
            setResult(first * second)
        }
    }

    useEffect(() => {
        console.log(result)
    },
        [result]
    )
    return (
        <div className="calculator">
            <div className="display">
                <input type="number" value={result} disabled />
            </div>
            <div className="keypad">
                <button onClick={() => handleTurn(1)}>1</button>
                <button onClick={() => handleTurn(2)}>2</button>
                <button onClick={() => handleTurn(3)}>3</button>
                <button onClick={() => handleOperator('+')}className="operator">+</button>
                <button onClick={() => handleTurn(4)}>4</button>
                <button onClick={() => handleTurn(5)}>5</button>
                <button onClick={() => handleTurn(6)}>6</button>
                <button className="operator">-</button>
                <button onClick={() => handleTurn(7)}>7</button>
                <button onClick={() => handleTurn(8)}>8</button>
                <button onClick={() => handleTurn(9)}>9</button>
                <button className="operator">*</button>
                <button onClick={() => handleTurn(0)}>0</button>
                <button className="decimal">.</button>
                <button className="operator">/</button>
                <button className="clear">Clear</button>
                <button onClick={() => handleEquals()}className="equal">=</button>
            </div>
        </div>


    )
}
export default Calculator
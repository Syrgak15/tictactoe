
import style from './TablePage.modules.css'
import Square from "../../components/Square/Square";
import {useState} from "react";
function TablePage(props) {
    const[xIsNext,setXIsNext]=useState(true)
    const[squares,setSquares] = useState(Array(9).fill(null))
    const[isClicked,setIsClicked]=useState(true)
    function handleClick(index){
            if(squares[index] || calculateWinner(squares)){
                return;
            }
        const nextSquares=squares.slice()
        if(xIsNext){
            nextSquares[index]='X'
        }else{
            nextSquares[index]='O'
        }
        setXIsNext(!xIsNext)
        setSquares(nextSquares)
    }

    function calculateWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i = 0;i<lines.length;i++){
            const[a,b,c]=lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner= calculateWinner(squares);
    let status;
    if(winner){
        status = "Winner : " + winner
    }else{
        status = "Next player is : " + (xIsNext?"X":"O")
    }
    function resetGame(){
        if(isClicked)
            setXIsNext(xIsNext)
            setSquares(Array(9).fill(null))

    }
    return (
        <div className='tablePage'>
            <div className='status'>{status}</div>
            <div className="tableContent">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
            <button onClick={resetGame} className="btnReset">RESET GAME</button>
        </div>
    );
}

export default TablePage;
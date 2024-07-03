import {useEffect, useState} from "react";

function Square({value,onSquareClick}) {
    return (
        <div>
            <button
                onClick={onSquareClick}
                className='cell'>
                {value}
            </button>
        </div>
    );
}

export default Square;
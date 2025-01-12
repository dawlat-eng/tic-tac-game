import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((_, move) => (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>
        {move > 0 ? `Go to move #${move}` : 'Go to game start'}
      </button>
    </li>
  ));

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}






























































// import React, { useState } from 'react'
// import Square from './Square'

// export default function Game() {
//     const [xIsNext, setXIsNext] = useState(true);
//     const [squares, setSquares] = useState(Array(9).fill(null));
  
//     function getRandomColor() {
//       const letters = '0123456789ABCDEF';
//       let color = '#';
//       for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
//     }
  
//     function handleClick(i) {
//       if (squares[i] || calculateWinner(squares)) {
//         return;
//       }
//       const nextSquares = squares.slice();
//       const color = getRandomColor(); 
//       if (xIsNext) {
//         nextSquares[i] = { value: "X", color };
//       } else {
//         nextSquares[i] = { value: "O", color };
//       }
//       setSquares(nextSquares);
//       setXIsNext(!xIsNext);
//     }
  
//     const winner = calculateWinner(squares);
//     const winnerClass = winner ? 'animate__animated animate__backInDown' : '';
//     let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else {
//       status = "Player: " + (xIsNext ? "X" : "O");
//     }
  
//     const rows = [0, 3, 6];
//     return (
//       <div className="game-container">
//         <div className={`status ${winnerClass}`}>{status}</div>
//         {rows.map((rowStart) => (
//           <div className="row" key={rowStart}>
//             {Array(3).fill(null).map((_, index) => {
//               const squareIndex = rowStart + index;
//               return (
//                 <Square 
//                   key={squareIndex} 
//                   value={squares[squareIndex]?.value} 
//                   buttonClick={() => handleClick(squareIndex)} 
//                   squareColor={squares[squareIndex]?.color}
//                 />
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     );
//   }
  
//   function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[b] && squares[c] && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
//         return squares[a].value;
//       }
//     }
//     return null;
//   }

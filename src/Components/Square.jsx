import React from 'react';

export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}






















// import React from 'react';


// export default function Square({ value, buttonClick, squareColor }) {
//     return (
//       <button 
//         className='square' 
//         style={{ backgroundColor: squareColor }} 
//         onClick={buttonClick}
//       >
//         {value}
//       </button>
//     );
//   }
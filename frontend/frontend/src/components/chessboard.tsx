import {Chess, Color, PieceSymbol,Square} from "chess.js"
import {useState} from "react"
import { MOVE } from "../screens/Game";
export const Chessboard = ({ chess, board ,socket,setboard}: {
  chess:any;
  setboard:any;
    board: ({
      square: Square;
      type: PieceSymbol;
      color: Color;
    } | null)[][];
    socket:WebSocket;
  }) => {
    const [from,setfrom]=useState<null|Square>(null);
    

    return (
      <>
        <div className="tex-white-200">
         
          {board.map((row, i) => (
            <div className="flex" key={i}>
              {row.map((square, j) => 
              { const squareRepresentation =String.fromCharCode(65+(j%8))+""+(8-i)as Square 
                 return <div onClickCapture={()=>{
                  if(!from){
                    setfrom(squareRepresentation);
} else{
  socket.send(JSON.stringify({
    type:MOVE,
    payload:{
      move:{
      from,
      to:squareRepresentation
      }
    }
  }))
  console.log({
    from,
    to:squareRepresentation
  })
  setfrom(null)
  chess.move({
    move:{
    from,
    to:squareRepresentation
}});
  setboard(chess.board());
  console.log({
    from,
    to:squareRepresentation
  })
}
                }}
                  key={j}
                  className={`w-16 h-16 ${(i+j)%2 ===0?'bg-green-500' : 'bg-white-300'}`}
                >
                  <div className="w-full justify-center flex h-full">
                    <div className="h-full justify-center flex flex-col bg-red-200">
                  {square?<img  className="w-4" src={`/${square?.color === "b"? square?.type:`${square?.type?.toUpperCase()} copy`}.png`}/> :null }
                  </div>
                  </div>
                </div>
  })}
            </div>
          ))}
        </div>
      </>
    );
  };
  


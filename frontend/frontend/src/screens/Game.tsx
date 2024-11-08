import {Chessboard} from "../components/chessboard"
import { useSocket } from "../hooks/useSocket";
import { Button } from "../components/Button";
import{useEffect,useState} from "react"
import {Chess} from "chess.js"


export const GAME_OVER="game_over";
export const MOVE="move";
export const INIT_GAME="init_game";

export const Game=()=>{
    const socket=useSocket();
    const [chess,setChess]=useState(new Chess());
const [board,setboard]=useState(chess.board());
const [started,setstarted]=useState(false)

 useEffect(()=>{
if(!socket){
    return;
}
socket.onmessage=(event)=>{
    const message =JSON.parse(event.data);
    console.log(message);
    switch(message.type){
        case INIT_GAME:
            setboard(chess.board())
            setstarted(true)
            console.log("game initialized");
            break;
            case MOVE:
                const move=message.payload;
                chess.move(move);
setboard(chess.board())
                console.log("move made");
                break;
        case  GAME_OVER:
console.log("game over");
            break;    
    }
}
 },[socket])
    if(!socket) return <div> Connecting....</div>



    return<div className="justify-center flex">
        <div className="pt-8 max-w-screen-lg">
<div className="grid grid-cols-6 gap-4 w-full">
    
    <div className="col-span-4 bg-red-200 w-full">
        <Chessboard chess={chess} setboard={setboard}  socket={socket} board={board}/>
    </div>
    <div className="col-span-2 bg-slate-800 w-full flex justify-center">
   { !started && <Button  onClick ={()=>{
    socket.send(JSON.stringify({
        type:INIT_GAME
    }))
 }}>
Play
</Button>}
</div>
        </div>
    </div>
</div>
}

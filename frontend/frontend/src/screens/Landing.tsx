import {useNavigate} from "react-router-dom"
import { Button } from "../components/Button";

export const Landing=()=>{
    const navigate=useNavigate();// we use this to transfer user when click the button to anohter page 
    return <div>
        <div className ="pt-2">
<div className="grid grid -cols-1 gap-4 md:gris-cols-2">
    <div>
        <img src={"chess.png"}/>
    </div>tend
    <div>
        <h1 className="text-4xl font-bold text-white"> welcome to chess</h1>
        <p className ="text-lg mt-2 text-white" >Play chess  with computer </p>
   <div className="my-4">
    <Button  onClick ={()=>{ navigate("/game")}}>
        Play</Button>
   </div>
   <div className="my-5">
<Button onClick={()=>{navigate("/game")}}>
    watch the game
</Button>
   </div>
    </div>
</div>
        </div>
    </div>
}
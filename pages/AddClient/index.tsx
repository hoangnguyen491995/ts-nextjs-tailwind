import { Button } from "antd";
import {  useRef, useState } from "react";
import ClientList from "./clientList";
import WalkedInList from "./WalkedInList";

function Clients() {
  const [tab,setTab]=useState<number>(1)
  const handleClient =(id : number)=>{
    setTab(id)
  }
  

  return (
    <div >
      <div className=" flex-1 row-span-1 w-11/12  ">
  
          <Button  onClick={()=>{handleClient(1)}} id='button1' className= " text-blue-500  hover:bg-cyan-200 font-semibold w-[205px] bg-white h-10 border-b-2 border-x-2 ">
            CLIENT LIST  
          </Button>
          <Button onClick={()=>{handleClient(2)}} id='button2'  className="  text-purple-600   hover:bg-cyan-200 font-semibold w-[205px] bg-white h-10 border-b-2 ">
            WALKED-IN LIST
          </Button>
         </div>
          {tab==1 && <ClientList/>} 
          {tab==2 && <WalkedInList/>}
      <div></div>
    </div>
  );
}
export default Clients

import { useState } from "react";
import ClientList from "./clientList";
import WalkedInList from "./WalkedInList";

function Clients() {
  const [tab,setTab]=useState<number>(1)
  const handleClient =(id : number)=>{
    setTab(id)
  }
  return (
    <div >
      <div className=" flex-1 row-span-1 w-[450px] ml-3 ">
          <button  onClick={()=>{handleClient(1)}} id='button1' className=  { `hover:bg-cyan-200 text-sky-500 font-semibold  bg-white h-10 border-r-2 w-[225px] ${ tab==1? "border-b-2" :""} `  } >
            CLIENT LIST  
          </button>
          <button onClick={()=>{handleClient(2)}} id='button2'  className=  {`hover:bg-cyan-200 text-violet-500  font-semibold    bg-white h-10  w-[225px] ${ tab==2? "border-b-2" :""}       `  }>
            WALKED-IN LIST
          </button>
          {tab==1 && <ClientList/>} 
          {tab==2 && <WalkedInList/>}
         </div >
      
    </div>
  );
}
export default Clients
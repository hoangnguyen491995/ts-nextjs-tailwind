import { Button, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs'
interface Client {
  salePrice: number;
  id: number;
}
function ClientList() {
  const [clients, setClients] = useState<Client[]>([]);
  useEffect(() => {
    axios
      .get(`https://js-post-api.herokuapp.com/api/products?limit=20&offset=50`)
      .then(function (response) {
        setClients(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <form className="w-full max-w-sm">
         <div className="relative"> 
        <Input
          className="w-96 bg-white h-14 border-b-2 outline-none   "
          placeholder="Search client"
          type="text"
          aria-label="Full name"
        >
          
        </Input>

        < BsSearch className=" h-6 w-6  absolute inset-y-0 right-2 top-5   " />
         </div>

      </form>
      <div className="overflow-auto h-[500px] w-[410px] ">
        <Button className="  text-blue-500   font-semibold  w-96 h-10 hover:bg-cyan-100 border-b-2  ">
          + ADD NEW CLIENT
        </Button>
        {clients != [] &&
          clients.map((client: Client, index: number) => {
            return (
              <div key={index} className="overflow-auto  ">
                <Button className="   hover:bg-cyan-100 border-b-2  w-96 bg-white h-12 ">

                  <div className=" relative justify-end flex flex-row">
                    <p className="  absolute inset-y-0 left-1 bottom-2">{client.salePrice}</p>
                    <p className="  absolute inset-y-0 right-2 bottom-2  "> {client.id}</p>
                  </div>
                </Button>
              </div>
            );
          })}
      </div>

    </div>
  );
}

export default ClientList;

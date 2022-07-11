import { Button, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

interface Client {
  salePrice: number;
  id: number;
}
function ClientList() {
  const [clients, setClients] = useState<Client[]>([]);
  useEffect(() => {
    axios
      .get(`https://js-post-api.herokuapp.com/api/products`)
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
        <Input
          className="w-96 bg-white h-14 border-b-2 "
          placeholder="Search client"
          type="text"
          aria-label="Full name"
        />
      </form>
    <div className="overflow-auto h-[600px] w-[410px] ">
      <Button className="  text-blue-400   font-semibold  w-96 h-10 hover:bg-cyan-100 border-b-2  ">
        + ADD NEW CLIENT
      </Button>
      {clients != [] &&
        clients.map((client: Client, index: number) => {
          return (
            <div key={index} className="overflow-auto  ">
              <Button className=" overflow-visible  hover:bg-cyan-100 border-b-2  w-96 bg-white h-12 ">
                <div className="justify-end flex flex-row">
                  <p className="justify-start basis-1/2 ">{client.salePrice}</p>
                  <p className="justify-end basis-1/2"> {client.id}</p>
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

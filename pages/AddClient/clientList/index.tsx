import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiDeleteBack2Fill } from "react-icons/ri";
interface Client {
  salePrice: number;
  id: number;
}
function ClientList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [icons, setIcons] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get(`https://js-post-api.herokuapp.com/api/products?limit=20&offset=50`)
      .then(function (response) {
        setClients(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  const handleIconsInput = () => {
    setIcons(false);
  }
  const handleIconsInput2 = () => {
    setIcons(true);
  }
  return (
    <div>
      <div className="overflow-auto h-[700px] w-[460px] ">
        <div className="relative">
          <input
            className=" focus-auto  w-[450px] h-10 hover:bg-cyan-100 outline-none  border-b-2 "
            placeholder=" Search client "
            onFocus={handleIconsInput}
            onBlur={handleIconsInput2}
          ></input>
          {icons && (
            <BsSearch className=" absolute inset-y-0 right-2 top-4 h-4 w-4  " />
          )}
          {icons == false && (
            <RiDeleteBack2Fill className=" absolute inset-y-0 right-2 top-4 h-4 w-4  " />
          )}
        </div>
        <button className=" text-sky-500  font-semibold w-[450px] h-10   hover:bg-cyan-100 border-b-2 ">
          + ADD NEW CLIENT
        </button>
        {clients != [] &&
          clients.map((client: Client, index: number) => {
            return (
              <div key={index}>
                <button className=" w-[450px] bg-white h-12  hover:bg-cyan-100 border-b-2  ">
                  <div className=" relative justify-end flex flex-row">
                    <p className="  absolute inset-y-0 left-1">
                      {client.salePrice}
                    </p>
                    <p className=" absolute inset-y-0 right-2 ">{client.id}</p>
                  </div>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default ClientList;
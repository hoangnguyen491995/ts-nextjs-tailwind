import axios from "axios";
import { useEffect, useState } from "react"

interface Techs {
    id: number
    images: string
}
function AddTech() {
    const [techs, setTechs] = useState<Techs[]>([])
    useEffect(() => {
        axios
            .get(`https://js-post-api.herokuapp.com/api/products?limit=30&offset=50`)
            .then(function (response) {
                setTechs(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    return (
        <div >
           <p className='ml-4 font-semibold '> ADD TECH</p>
        <div className="ml-5  w-[540px] h-[500px] overflow-auto mt-2 grid grid-cols-4   ">
            {techs != [] && techs.map((tech: Techs, index: number) => {
                return (
                    <div key={index} className='relative h-[96px] w-[106px] bg-yellow-100  rounded-md  mt-7 mb-4  '>
                        <img className="absolute inset-x-0 inset-y-0 left-5 -top-7  rounded-full w-[65px] h-[60px] " src={tech.images[0]} alt="ảnh nhân viên" />
                        <p className='absolute inset-y-0 inset-x-0 left-6   top-10  '>{tech.id}</p>
                       
                    </div>
                    
                )
            })}
        </div>
        </div>
    )
}
export default AddTech
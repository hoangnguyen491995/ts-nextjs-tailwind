import axios from "axios";
import { useEffect, useState } from "react";

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
                console.log(error);
            });
    }, [])
    return (
        <div className="justify-center ">
            ADD TECH
            {techs != [] && techs.map((tech: Techs, index: number) => {
                return (
                    <div key={index} className='relative h-24 w-24  bg-yellow-100  mx-0.5 my-0.5  rounded  '>
                        <img className=" absolute h-12 w-12 -left-4 -top-6  inset-y-0 left-1 rounded-full w-[60px] h-[60px]" src={tech.images[0]} alt="ảnh nhân viên" />
                        <p className='absolute inset-y-0 left-3  inset-x-0  top-10'>{tech.id}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AddTech
import { useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'

export default function ImagesCarausel(){
useEffect(() => {
    axios.get(`${process.env.HOST_API}/api/carausel`).then((res) => {
      setData(res.data.data,value);
    })
  }, []);

    console.log(data ,"hiiiiiiiii")

     const Images = data.map((img)=>{
        return(
          <>
          <Image
          src={img.url}
          alt="Picture of the author"
          width={100}
          height={100}
        />
          </>
        )
       })

    return(
        <>
        {Images}
        </>
    )
}

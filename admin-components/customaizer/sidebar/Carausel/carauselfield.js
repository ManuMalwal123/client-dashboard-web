import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
// import ImagesCarausel from './image-carausel-DB';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [fetchdata, setFetchData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.HOST_API}/api/carausel`).then((res) => {
      setFetchData(res.data);
      console.log(fetchdata.data);
    });
  }, []);

  const Data = fetchdata.data;

  //-------------------------------------form-------------------------------//

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("files", file);

    if (Data === null) {
      try {
        const response = await fetch(`${process.env.HOST_API}/api/carausel`, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    } else if (Data.value.length >= 1) {
      console.log(Data.value.length);
      try {
        const response = await fetch(`${process.env.HOST_API}/api/carausel`, {
          method: "PATCH",
          body: formData,
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log(Data, "map");
  let CarauselImages;
  if (Data) {
    CarauselImages = Data.value.map((img, index) => {
      return (
        <Image
          key={index}
          src={img.url}
          alt="Picture of the author"
          width={100}
          height={100}
        />
      );
    });
  }

  return (
    <>
      {CarauselImages}
      {/* {ImagesCarausel} */}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

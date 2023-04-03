import { Button, Container,DivBlock, DivFlex,Image,Input,Label } from "@common/styled/index";
import { useEffect, useState } from "react";
import { Menu } from "@admin-components/customaizer/styled";
import { HeaderField } from "./Header/headerfields";
import useSWR from 'swr';
import UploadForm from "./Carausel/carauselfield";

const Sidebar = () => {

  const [showDasboard,setShowDashboard] = useState(true)
  const [showHeader , setShowHeader] = useState(false)
  const [showCarausel , setShowCarausel] = useState(false)
  const [fieldData , setFieldData] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const HeaderShow = ()=>(setShowHeader(true))
  const HideDashboard = ()=>(setShowDashboard(false))
  const HideHeader = ()=>(setShowHeader(false))
  const DashboardShow = ()=>(setShowDashboard(true))
  const HideCarausel = ()=>(setShowCarausel(false))
  const CarauselShow = ()=>(setShowCarausel(true))



  //***************fetch data to input fields****************

  const id = "Header";
  const { data, error } = useSWR(`${process.env.HOST_API}/api/header/${id}`, async function(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });
  useEffect(() => {
    if(data) {
      setFieldData(prev => ({ ...prev, ...data.getdatabyid}))
    }
  }, [data])

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>
  const value = data.getdatabyid.value


  const handleChange = (e) =>{
    setFieldData((prev) => ({
      ...prev,[e.target.name]:e.target.value}));
  };



  //****************update data**********************
  
  
  const handleSubmit = async () => {
    // e.preventDefault();
    setIsLoading(true);
    const id = "Header"
   
    try {
      const response = await fetch(`${process.env.HOST_API}/api/header/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fieldData),
      });
      if (response.ok) {
        const updatedData = response;
        console.log(updatedData,"update");
        console.log("data updated")
      } else {
        console.log("not update")
      }
    } catch (error) {
      console.log(error,"error in fetching data")
    }
    setIsLoading(false);
  };

   const HeaderFieldData = HeaderField.map((field)=>{
      return(
        <>
        <Label for ={field.label}>{field.name}</Label>
      <Input type = {field.type} id = {field.id} name = {field.name} 
      defaultValue={value[field.name]} 
      onChange={handleChange}
      />
        </>
      )
  })

  return (
    <>


{/* ********Dashboard********* */}

    {showDasboard && (
      <Container className="border-right" boxShadow>
      <h2 className="text-center p-2">Dashboard</h2>
         < Menu className="p-1" onClick ={()=>{HeaderShow();HideDashboard()}}>Header</Menu>
        < Menu className="p-1" onClick ={()=>{CarauselShow();HideDashboard()}}>Carausel</Menu>
    </Container>
    )}

{/* *************Header************ */}

    {showHeader && (
      <Container className="border-right" boxShadow>
        <DivFlex>
        <Image src={"/images/backicon.png"}
        width ={"25px"} height={"20px"} style = {{marginTop : "12px"}}
        onClick={()=>{HideHeader();DashboardShow()}}/>
      <h2 className="text-center p-2">Header</h2>
      </DivFlex>
      <DivBlock>
      <form onSubmit={handleSubmit}>
      {HeaderFieldData}
      <Button type="submit">

         {isLoading ? "Updating..." : "Update"}
         </Button>
      </form>
      </DivBlock>
    </Container>
    )}


{/* ***********Carausel*********** */}


    {showCarausel && (
      <Container className="border-right" boxShadow>
        <DivFlex>
        <Image src={"/images/backicon.png"}
        width ={"25px"} height={"20px"} style = {{marginTop : "12px"}}
        onClick={()=>{HideCarausel();DashboardShow()}}/>
      <h2 className="text-center p-2">Carausel</h2>
      </DivFlex>
      <DivBlock>
      <h1>Upload a file</h1>
      <UploadForm />
        </DivBlock>
      </Container>
    )}
    </>
  );
};

export default Sidebar;


import Navbar from "../../components/Navbar/index";
 
const myData = ({data}) => {
    return(
        <>
        <Navbar/> 
        </>
    )
}

export default myData

export  const getStaticPaths = async() => {
    const res = await fetch('http://localhost:3002/api/web/product/get')
    const data = await res.json();

 const paths = data.data.map((item)=>{
    return{
        params : {
            pageno : item.id
        }
    }
 })

 return{
    paths,
    fallback : false,
 }
}

export const getStaticProps = async(context) => {
    const id = context.params.pageno
    const res = await fetch({
        url: 'http://localhost:3002/api/web/product/get',
        method: 'GET',
        body: {
            id
        }
    })
    const data = await res.json()

 return {
    props : {
        data,
    }
 }
 }
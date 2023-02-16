import styled from "styled-components";
import theme from "../themes/default";

export const ContainerHar = styled.div.attrs(()=>({
    className : "container-fluid text-center text-white m-0 p-0"
}))``

export const TableContainer = styled.div.attrs(()=>({
    className : "row table_container mt-4 d-flex"
}))`
 margin-left: 4%;
`
export const Nav = styled.nav.attrs(()=>({
   " aria-label" : "breadcrumb"
}))`
--bs-breadcrumb-divider: ">";
color: black;
`
export const Ol = styled.ol.attrs(()=>({
    className : "breadcrumb d-flex justify-content-center"
}))``

export const Li = styled.li.attrs(()=>({
    className : "breadcrumb-item"
}))``

export const Span = styled.span.attrs(()=>({
    className : "mx-4"
}))``

export const Li2 = styled.li.attrs(()=>({
    className : "breadcrumb-item text-black" ,
   " aria-current" : "page"
}))``

export const Col1 = styled.div.attrs(()=>({
    className : "col-8"
}))``

export const Table = styled.table.attrs(()=>({
    className : "table text-center p-0"
}))`
 width: 100% !important;
`
export const Thead = styled.thead.attrs(()=>({
    className : "table_heading"
}))``

export const TdTabComp = styled.td.attrs(()=>({
    className : "table_comp py-4"
}))`
color: #626262;
  font-size: 14px;
  font-weight: 700;
`
export const TdProdName = styled.td.attrs(()=>({
    className : "prod_name"
}))`
text-align: center;
  color: #b5211a;
  font-size: 14px;
  font-weight: 700;
  font-family: ${theme.font.defaultfont};
`
export const TdProDis = styled.td.attrs(()=>({
    className : "prod_dis py-4"
}))`
color: #626262;
  font-size: 14px;
  font-weight: 700;
`
export const TdTabData3 = styled.td.attrs(()=>({
    className : "table_data pt-3"
}))`
text-align: center;
  color: #b5211a;
  font-size: 14px;
  font-weight: 700;
  font-family: arial, tahoma, sans-serif;
`
export const TdTabName3 = styled.td.attrs(()=>({
    className : "table_name pt-3"
}))

export const TdTabData4 = styled.td.attrs(()=>({
    className : "table_data pt-4"
}))`
text-align: center;
  color: #b5211a;
  font-size: 14px;
  font-weight: 700;
  font-family: ${theme.font.defaultfont};
`
export const TdProName4 = styled.td.attrs(()=>({
    className : "prod_name pt-4"
}))`
text-align: center;
  color: #b5211a;
  font-size: 14px;
  font-weight: 700;
  font-family: ${theme.font.defaultfont};
`

export const TdTabData2= styled.td.attrs(()=>({
    className : "table_data pt-2"
})) `
text-align: center;
  color: #b5211a;
  font-size: 14px;
  font-weight: 700;
  font-family: ${theme.font.defaultfont};
`

export const Tr = styled.tr.attrs(()=>({
}))`
background-color: rgba(0, 0, 0, 0.01);
`

export const TdProName3 = styled.td.attrs(()=>({
    className : "prod_name pt-3"
}))`
text-align: center;
  color: #b5211a;
  font-size: 14px;
  font-weight: 700;
  font-family:${theme.font.defaultfont};
`
export const Col2 = styled.div.attrs(()=>({
    className : "col-lg-4 col-12"
}))``

export const ProH3 = styled.h3.attrs(()=>({
    className : "prod_catg mx-4"
}))``

export const Range = styled.div.attrs(()=>({
    className : "range"
}))``

export const Ul = styled.ul`
list-style: none;
`
export const RangeLi = styled.li` 
background-color: #b5211a;
padding: 10px 0px !important;
text-align: center;
width: 65%;
margin: 15px 0% 0% -5%;`

export  const RangeLink = styled.a`
 text-decoration: none;
  color: #fff;
  font-size: 14px;
  font-family: ${theme.font.defaultfont};

  &:hover{
    cursor: pointer;
  color: #fff;
  text-decoration: underline;
  }
`

export const ContactForm = styled.div.attrs(()=>({
    className : "contact_form mt-5"
}))`background-color: #bab5b5;
width: 80%;
height: 52%;
margin-left: 0;`

export const ContactMenu = styled.div.attrs(()=>({
    className : "contact_menu"
}))``

export const TeaxtH3 = styled.h3.attrs(()=>({
    className : "cf text-center pt-4"
}))`
 color: #fff;
  font-size: 25px;
  font-weight: 500;`

export const Name = styled.input.attrs(()=>({
    className :"fill",
    type : "text",
    name : "name",
    placeholder : "Your Name"
}))`
width: 80%;
  height: 40px;
  padding-left: 10px;
  font-family: ${theme.font.defaultfont};
  border-style: solid;
  border-color: #ebebeb;
  margin: 4% 0% 0% 10%;
  font-size: 12px;
  outline: none;`

export const Email = styled.input.attrs(()=>({
    className : "fill",
    type : "text",
    name : "email",
    placeholder : "Email"
}))`
width: 80%;
  height: 40px;
  padding-left: 10px;
  font-family: ${theme.font.defaultfont};
  border-style: solid;
  border-color: #ebebeb;
  margin: 4% 0% 0% 10%;
  font-size: 12px;
  outline: none;`

export const Phone = styled.input.attrs(()=>({
    className : "fill",
    type : "text",
    name : "phone",
    placeholder : "Phone Number"
}))`
width: 80%;
  height: 40px;
  padding-left: 10px;
  font-family: ${theme.font.defaultfont};
  border-style: solid;
  border-color: #ebebeb;
  margin: 4% 0% 0% 10%;
  font-size: 12px;
  outline: none;`

export const City = styled.input.attrs(()=>({
    className : "fill",
    type : "text",
    name : "city",
    placeholder : "City"
}))`
width: 80%;
  height: 40px;
  padding-left: 10px;
  font-family: ${theme.font.defaultfont};
  border-style: solid;
  border-color: #ebebeb;
  margin: 4% 0% 0% 10%;
  font-size: 12px;
  outline: none;`

export const TextArea = styled.input.attrs(()=>({
    className : "fill",
    placeholder : "Message",
}))`
height : 70px;
width: 80%;
  height: 40px;
  padding-left: 10px;
  font-family: ${theme.font.defaultfont};
  border-style: solid;
  border-color: #ebebeb;
  margin: 4% 0% 0% 10%;
  font-size: 12px;
  outline: none;
`
export const Submit = styled.input.attrs(()=>({
    type : "submit",
     value : "send", 
     className : "send"
}))`
background-color: #0095eb;
  color: #ffffff;
  margin-left: 45px;
  padding: 5px 15px;
  border-style: none;
  border-radius: 5px;
  margin-top: 20px;`
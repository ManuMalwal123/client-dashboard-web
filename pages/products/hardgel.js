import Header from "../../components/Header/index";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/footer/footer";
import Link from "next/link";
import {TableContainer,Nav,Ol,Li,Li2,Span,Col1,Table,Thead,Tr,TdTabComp,TdProdName,TdProDis,TdTabData3,TdTabName3,TdTabData4,TdProName4,TdTabData2, TdProName3,
Col2,ProH3,Range,ContactForm,ContactMenu,TeaxtH3,Name,Email,Phone,City,TextArea,Submit, ContainerHar,Ul,RangeLi,RangeLink} from "../../styles/hardgel.styled";

function Hardgel() {
  return (
    <>
      <Header />
      <Navbar />
      <ContainerHar>
        <h3>HARDGEL CAPSULES</h3>
        <Nav>
          <Ol>
            <Li>
              <Link href="/">Home</Link>
            </Li>
            <Span>&gt;</Span>
            <Li2>
              HARDGEL CAPSULES
              </Li2>
            </Ol>
        </Nav>
        </ContainerHar>

      <TableContainer>
        <Col1>
          <Table>
            <Thead>
              <tr>
                <th style={{ width: "22%" }}>Brand Name</th>
                <th style={{ width: "55%" }}>Composition</th>
                <th>Category</th>
                </tr>
              </Thead>
            <tbody>
              <tr>
                <td className="table_data">
                  GINSENG EXTRACT & MULTIVITAMINS CAPSULES
                </td>
                <TdTabComp>GINWIN</TdTabComp> 
                <TdTabComp>HARDGEL CAPSULES</TdTabComp>
                </tr>
              <Tr>
                <TdProdName>
                  PREGABALIN & METHYLCOBALAMIN CAPSULES
                  </TdProdName>
                <TdProDis>MIN-PG</TdProDis>
                <TdProDis>HARDGEL CAPSULES</TdProDis>
                </Tr>
              <tr>
                <TdTabData3>PROPRANOLOL CAPSULES</TdTabData3>
                <TdTabComp>PROLAR SR-40</TdTabComp>
                <TdTabComp>HARDGEL CAPSULES</TdTabComp>
              </tr>
              <Tr>
                <TdProName3>
                  PROPRANOLOL FLUNARAZINE CAPSULES
                </TdProName3>
                <TdProDis> PROLAR-F</TdProDis>
                <TdProDis>HARDGEL CAPSULES</TdProDis>
                </Tr>
              <tr>
                <TdTabData4>FLUOXETINE CAPSULES</TdTabData4>
                <TdTabComp>PSYCOTENE-20 </TdTabComp>
                <TdTabComp>HARDGEL CAPSULES</TdTabComp>
              </tr>
              <Tr>
                <TdProName4>PSYCOTENE-40</TdProName4>
                <TdProDis>FLUOXETINE CAPSULES</TdProDis>
                <TdProDis>HARDGEL CAPSULES</TdProDis>
                </Tr>
              <tr>
                <TdTabData4>FLUPIRTINE CAPSULES</TdTabData4>
                <TdTabComp>PIRTINE</TdTabComp>
                <TdTabComp>HARDGEL CAPSULES</TdTabComp>
              </tr>
              <Tr>
                <TdProName4>DULOXETINE CAPSULES</TdProName4>
                <TdProDis>TINE-20</TdProDis>
                <TdProDis>HARDGEL CAPSULES</TdProDis>
              </Tr>
              <tr>
                <TdTabData4>TINE 30</TdTabData4>
                <TdTabComp>DULOXETINE CAPSULES</TdTabComp>
                <TdTabComp>HARDGEL CAPSULES</TdTabComp>
              </tr>
              <Tr>
                <TdProName4>TINE 40</TdProName4>
                <TdProDis>DULOXETINE CAPSULES</TdProDis>
                <TdProDis>HARDGEL CAPSULES</TdProDis>
              </Tr>
              <tr>
                <TdTabData2>Levosulpiride and Rabeprazole Capsules</TdTabData2>
                <TdTabComp>V-Pride-R</TdTabComp>
                <TdTabComp>HARDGEL CAPSULES</TdTabComp>
              </tr>
            </tbody>
            </Table>
          </Col1>

        <Col2>
          <ProH3>Product Category</ProH3>
           <Range>
            <Ul>
              <RangeLi>
                <RangeLink href="/products/hardgel">Hardgel Capsules</RangeLink>
              </RangeLi>
              <RangeLi>
                <RangeLink href="/products/injection">Injection</RangeLink>
              </RangeLi>
              <RangeLi>
                <RangeLink href="/products/softgel">Softgel Capsules</RangeLink>
              </RangeLi>
              <RangeLi>
                <RangeLink href="/products/syrup">Syrup</RangeLink>
              </RangeLi>
              <RangeLi>
                <RangeLink href="/products/tablet">Tablet</RangeLink>
              </RangeLi>
              </Ul>
            </Range>
          <ContactForm>
            <ContactMenu>
              <TeaxtH3>Contact us</TeaxtH3>
              <Name/>
              <br />
              <Email/>
              <br />
              <Phone/>
              <br />
             <City/>
              <br />
             <TextArea/>
              <br />
              <Submit/>
              </ContactMenu>
            </ContactForm>
          </Col2>
        </TableContainer>
      <Footer />
    </>
  );
}

export default Hardgel;

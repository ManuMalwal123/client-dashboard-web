import { Product,ProductContainer,Column1,ProductH2,ProductPara,ProductRow,Column2,Image1,Image2,ParaA } from "./Styled/Product.styled";

function Products() {
  return (
    <>
    <Product>
      <ProductContainer>
        <Column1>
          <ProductH2>
            Offering A Widest Range of Pharmaceutical Products
            </ProductH2>
          <ProductPara>
            Psycogen Captabl has their own GMP GLP certified manufacturing
            units, where our highly dedicated experts works under the
            regualtions of WHO guidelines to products the highly effecitve
            medicine ranges. To know more find out our
            <ParaA href="https://www.psycogen.in/best-neuropsychiatry-products-list-in-india/">
              neuropsychiatry products list
            </ParaA>
            </ProductPara>
          </Column1>
        <marquee behavior="scroll" direction="left">
          <ProductRow>
            <Column2>
              <div>
                <Image1
                  src="https://www.psycogen.in/wp-content/uploads/continuous-image-carousel-with-lightbox/product-images_0000s_0161_Psycogen_Product_Images_PDF-003-removebg-preview62e4bd311781d.jpg"
                />
              </div>
              <div>
                <Image2
                  src="https://www.psycogen.in/wp-content/uploads/continuous-image-carousel-with-lightbox/product-images_0000s_0160_Psycogen_Product_Images_PDF-004-removebg-preview62e4bd330078d.jpg"
                
                />
              </div>
              <div>
                <Image2
                  src="https://www.psycogen.in/wp-content/uploads/continuous-image-carousel-with-lightbox/product-images_0000s_0138_Psycogen_Product_Images_PDF-026-removebg-preview62e4bd35d84f1.jpg"
                  
                />
              </div>
              <div>
                <Image2
                  src="https://www.psycogen.in/wp-content/uploads/continuous-image-carousel-with-lightbox/product-images_0000s_0117_Psycogen_Product_Images_PDF-047-removebg-preview62e4bd3a6cf1b.jpg"
              
                />
              </div>
              <div>
                <Image2
                  src="https://www.psycogen.in/wp-content/uploads/continuous-image-carousel-with-lightbox/product-images_0000s_0139_Psycogen_Product_Images_PDF-025-removebg-preview62e4bd37391cf.jpg"
                
                />
              </div>
              <div>
                <Image2
                  src="https://www.psycogen.in/wp-content/uploads/continuous-image-carousel-with-lightbox/product-images_0000s_0126_Psycogen_Product_Images_PDF-038-removebg-preview62e4bd383ed23.jpg"
              
                />
              </div>
              <div>
                <Image2
                  src="https://www.psycogen.in/wp-content/uploads/continuous-image-carousel-with-lightbox/product-images_0000s_0119_Psycogen_Product_Images_PDF-045-removebg-preview62e4bd39487b8.jpg"
      
                />
              </div>
              <div>
                <Image2
                  src="https://www.psycogen.in/wp-content/uploads/continuous-image-carousel-with-lightbox/product-images_0000s_0117_Psycogen_Product_Images_PDF-047-removebg-preview62e4bd3a6cf1b.jpg"
        
                />
              </div>
              </Column2>
            </ProductRow>
        </marquee>
        </ProductContainer>
      </Product>
      </>
  );
}

export default Products;

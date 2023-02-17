import React, { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import {
  NavbarContainer,
  Container,
  Col,
  Logo,
  NavbarCollapse,
  NavbarCollapseInner,
  Ullist,
  MenuLinkdiv,
  ToggleButton,
  MainDiv,
  SideBar,
  CloseDiv,
  Menu,
  Dropdown,
  DropdownContent,
  MenuLink,
  DropdownLink,
  Searchbar,
  Btn,
  Searchbtn,
  ModalBody,
  Items,
  Itemsbox,
  SideBarLink,
  IconsDiv,
  Facebook,
  Instagram,
  Linkedin,
  Pinterest,
  Twitter,
  SearchIcon,
} from "../Navbar/Styles/Navbar.styled";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    "http://localhost:3002/api/web/product/type/get",
    fetcher
  );
  if (!data) return " I am loading....";
  if (error) return "error";

  const result = data.data.map((item) => {
    return (
      <>
        <SideBarLink href="/products">{item.name}</SideBarLink>
        <br />
      </>
    );
  });

  return (
    <>
      <NavbarContainer>
        <Container>
          <Col>
            <Logo>
              <a href="https://www.psycogen.in/">
                <img src="https://www.psycogen.in/wp-content/uploads/2022/07/captab-logo.png" />
              </a>
            </Logo>
            <ToggleButton onClick={() => setToggle(true)}>&#9776;</ToggleButton>
            {toggle && (
              <MainDiv>
                <SideBar>
                  <CloseDiv onClick={() => setToggle(false)}>&#10005;</CloseDiv>
                  <IconsDiv>
                    <SearchIcon />
                  </IconsDiv>
                  <Items>
                    <SideBarLink href="/">Home</SideBarLink>
                  </Items>
                  <Items>
                    <SideBarLink href="/about">About</SideBarLink>
                  </Items>
                  <Items>
                    <SideBarLink href="/products/products">
                      Products &#43;
                    </SideBarLink>
                    <Itemsbox>{result}</Itemsbox>
                  </Items>
                  <Items>
                    <SideBarLink href="/"> Services &#43;</SideBarLink>
                    <Itemsbox>HARDGEL CAPSULES</Itemsbox>
                  </Items>
                  <Items>
                    <SideBarLink href="/products">Product Gallary</SideBarLink>
                  </Items>
                  <Items>
                    <SideBarLink href="/contact">Contact Us</SideBarLink>
                  </Items>
                  <IconsDiv>
                    <Facebook />
                    <Twitter />
                    <Linkedin />
                    <Pinterest />
                    <Instagram />
                  </IconsDiv>
                </SideBar>
              </MainDiv>
            )}

            <NavbarCollapse>
              <NavbarCollapseInner>
                <Ullist>
                  <Menu>
                    <MenuLink href="/">Home</MenuLink>
                  </Menu>
                  <Menu>
                    <MenuLink href="/about">About</MenuLink>
                  </Menu>
                  <Dropdown>
                    <Menu>
                      <MenuLinkdiv href="/products">Products</MenuLinkdiv>
                    </Menu>
                    <DropdownContent>
                      <DropdownLink href="/products/hardgel">
                        {result}
                      </DropdownLink>
                    </DropdownContent>
                  </Dropdown>
                  <Dropdown>
                    <Menu>
                      <MenuLinkdiv href="/">Services</MenuLinkdiv>
                    </Menu>
                    <DropdownContent>
                      <DropdownLink href="/neuropsychiatry">
                        Neuropsychiatry Franchise{" "}
                      </DropdownLink>
                    </DropdownContent>
                  </Dropdown>
                  <Menu>
                    <MenuLink href="/products">Product Gallary</MenuLink>
                  </Menu>
                  <Menu>
                    <MenuLink href="/contact">Contact Us</MenuLink>
                  </Menu>
                </Ullist>
              </NavbarCollapseInner>
              <Searchbtn variant="primary" onClick={handleShow}>
                <Image
                  src="/images/iconsearch.png"
                  width={20}
                  height={20}
                  alt="Icon Search"
                />
              </Searchbtn>

              <Btn>Product List</Btn>
            </NavbarCollapse>
          </Col>
        </Container>
      </NavbarContainer>
    </>
  );
}

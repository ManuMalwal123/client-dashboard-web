import React from "react";
import {
  Sticky,
  StickyDownload,
  Whatsapp,
  WhatsappDownload,
  Email,
  EmailDownload,
} from "./Styled/Buttons.styled";
import Image from "next/image";

export default function StickyButton() {
  return (
    <>
      <Sticky>
        <Image
          src={"/images/down-arrow.png"}
          width={30}
          height={20}
          alt="Down Arrow"
        />
        <StickyDownload>Download Product List</StickyDownload>
      </Sticky>
      <Whatsapp>
        <Image src={"/images/whatsapp.png"} width={30} height={30} />
        <WhatsappDownload>Whatsapp</WhatsappDownload>
      </Whatsapp>
      <Email>
        <Image src={"/images/email.png"} width={30} height={30} />
        <EmailDownload>Email</EmailDownload>
      </Email>
    </>
  );
}

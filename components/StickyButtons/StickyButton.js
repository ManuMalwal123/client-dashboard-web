import React from 'react'
import { Sticky,StickyDownload,Whatsapp,WhatsappDownload,Email,EmailDownload } from './Styled/Buttons.styled' 
import Image from 'next/image'


export default function StickyButton() {
  return (
    <>
      <Sticky>
        <Image
        src = {"/../public/down-arrow.png"}
        width={30}
        height={20} />
        <StickyDownload>
        Download Product List
        </StickyDownload>
      </Sticky>
      <Whatsapp>
        <Image
        src = {"/../public/whatsapp.png"}
        width={30}
        height={30} />
        <WhatsappDownload>
        Whatsapp
        </WhatsappDownload>
      </Whatsapp>
      <Email>
        <Image
        src = {"/../public/email.png"}
        width={30}
        height={30} />
        <EmailDownload>
        Email
        </EmailDownload>
      </Email>
    </>
  )
}

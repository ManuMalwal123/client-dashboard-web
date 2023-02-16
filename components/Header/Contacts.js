import React from 'react'
import Link from 'next/link'

import { Contact,Contactdetails,Iconphone,Iconemail,Touch } from './Styled/Contact.style'

export default function Contacts() {
  return (
    <>
        <Contact>
           <Touch>
                <Iconphone>
                  <Link href="tel:+919216513000|+91-9988899209">
                    <Contactdetails>
                    +91 9216513000 | +91-9988899209
                    </Contactdetails>
                  </Link>
                  </Iconphone>
                </Touch>
                <Touch>
                <Iconemail>
                  <Link href="mailto:klifesciences1991@gmail.com">
                  <Contactdetails>
                    klifesciences1991@gmail.com
                    </Contactdetails>
                  </Link>
                  </Iconemail>
                </Touch>
              </Contact>
    </>
  )
}

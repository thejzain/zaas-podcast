import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Sidebar} from 'primereact/sidebar'
import {Button} from 'primereact/button'
import { useState } from 'react'
import 'primeicons/primeicons.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"   

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [visible,setVisible] = useState(false);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-white">
    <main className='flex min-h-screen p-6 bg-white'>
      <header className='flex gap-4 w-full h-10'>
        {/* <Button className='sm:hidden' icon="pi pi-arrow-right" onClick={() => setVisible(true)} /> */}
        <button className='sm:invisible' onClick={() => setVisible(true)}><span className='pi pi-arrow-right'></span></button>
        <div>Listen Now</div>
        <div className='ml-auto'>User's name</div>
        <img src='' alt='user_image'></img>
      </header>
      <Sidebar visible={visible} position='left' onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Sidebar>
    </main>
  )
}
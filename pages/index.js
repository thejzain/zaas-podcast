import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Sidebar} from 'primereact/sidebar'
import { useState } from 'react'
// import 'primeicons/primeicons.css'
// import "primereact/resources/themes/lara-light-indigo/theme.css"
// import "primereact/resources/primereact.min.css"   
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  //const [visible,setVisible] = useState(false);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-white">
    // <main className='flex min-h-screen p-6 bg-white'>
    //   <header className='flex gap-4 w-full h-10'>
    //     <button className='sm:hidden' onClick={() => setVisible(true)}><span className='pi pi-arrow-right'></span></button>
    //     <div>Listen Now</div>
    //     <div className='ml-auto'>User's name</div>
    //     <img src='' alt='user_image'></img>
    //   </header>
    //   <Sidebar visible={visible} position='left' onHide={() => setVisible(false)}>
    //     <h2>Music</h2>
    //     <div>Listen Now</div>
    //     <div>Browse</div>
    //     <div>Search</div>
    //     <Link href="/test">Test page</Link>
    //   </Sidebar>
    // </main>
    <div>Main page initial</div>
  )
}
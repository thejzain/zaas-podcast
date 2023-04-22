import {Sidebar} from 'primereact/sidebar'
import Link from 'next/link'
import 'primeicons/primeicons.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"   
import { useState } from 'react'

function Layout({children}) {

    const [visible,setVisible] = useState(false);

    return(
        <div className='min-h-screen p-5 bg-white sm:grid sm:grid-cols-[1fr_3fr]'>
            <div className='hidden sm:block'>
                <div className='font-bold text-xl'>Music</div>
                <div className='flex flex-col'>
                    <Link href='/'>Home</Link>
                    <Link href='/test'>Test page</Link>
                </div>
            </div>
            <div>
                <header className='flex gap-4'>
                    <button className='sm:hidden' onClick={() => setVisible(true)}><span className='pi pi-bars'></span></button>
                    <div className='font-extrabold text-xl'>Listen Now</div>
                    <div className='ml-auto'>User's name</div>
                    <img src='' alt='user_image'></img>
                </header>
                <main>{children}</main>
            </div>
            <Sidebar visible={visible} position='left' onHide={() => setVisible(false)} >
                <h2 className='font-bold text-xl'>Music</h2>
                <div className='flex flex-col'>
                    <Link href="/" onClick={()=> setVisible(false)}>Home</Link>
                    <Link href="/test" onClick={() => setVisible(false)}>Test page</Link>
                </div>
            </Sidebar>
        </div>
    );
}

export default Layout;
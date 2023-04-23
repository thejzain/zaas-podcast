import {Sidebar} from 'primereact/sidebar'
import Link from 'next/link'
import 'primeicons/primeicons.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"   
import { useState } from 'react'

function Layout({children}) {

    const [visible,setVisible] = useState(false);

    return(
        <div className='min-h-screen p-6 bg-white sm:grid sm:grid-cols-[1fr_3fr] sm:gap-14 font-poppins'>
            <div className='hidden sm:block bg-slate-200 p-5 rounded-2xl'>
                <div className='font-bold text-xl mb-4'>Music</div>
                <div className='flex flex-col'>
                    <Link href='/'><span className='pi pi-home text-rose-500'></span> Home</Link>
                    <Link href='/test'>Test page</Link>
                </div>
            </div>
            <div className='p-6 border border-slate-300 rounded-2xl bg-white max-[640px]:min-h-screen'>
                <header className='flex gap-4 mb-6'>
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
                    <Link href="/" onClick={()=> setVisible(false)}><span className='pi pi-home text-rose-500'></span> Home</Link>
                    <Link href="/test" onClick={() => setVisible(false)}>Test page</Link>
                </div>
            </Sidebar>
        </div>
    );
}

export default Layout;
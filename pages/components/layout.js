import {Sidebar} from 'primereact/sidebar'
import Link from 'next/link'
import 'primeicons/primeicons.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"   
import { useState } from 'react'

function Layout({children}) {

    const [visible,setVisible] = useState(false);

    return(
        <div className='min-h-screen p-6 bg-white'>
            <header className='flex gap-4 w-full h-10'>
                <button className='sm:hidden' onClick={() => setVisible(true)}><span className='pi pi-arrow-right'></span></button>
                <div>Listen Now</div>
                <div className='ml-auto'>User's name</div>
                <img src='' alt='user_image'></img>
            </header>
            <main>{children}</main>
            <Sidebar visible={visible} position='left' onHide={() => setVisible(false)}>
                <h2>Music</h2>
                <Link href="/" onClick={()=> setVisible(false)}>Home</Link>
                <div>Listen Now</div>
                <div>Browse</div>
                <div>Search</div>
                <Link href="/test" onClick={() => setVisible(false)}>Test page</Link>
            </Sidebar>
        </div>
    );
}

export default Layout;
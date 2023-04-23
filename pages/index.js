import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'primeicons/primeicons.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"   
import {Carousel} from 'primereact/carousel'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [items,setItems] = useState([
    {
      image: 'https://picsum.photos/200',
      title: 'Title 1',
      id:1,
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 2',
      id:2,
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 3',
      id:3,
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 4',
      id:4,
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 5',
      id:5,
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 6',
      id:6,
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 7',
      id:7,
    },
    {
      image: 'https://picsum.photos/200',
      title: 'Title 8',
      id:8,
    },
  ]);

  const responsiveOptions = [
    {
      breakpoint: '640px',
      numVisible: 2,
      numScroll:1,
    },
  ];

  const itemTemplate = (item) => {
    return(
      <div className='flex flex-col items-center mr-2' >
        <Link href={`/podcast/${item.id}`}>
          <img src={item.image} alt={item.title}></img>
          <div>{item.title}</div>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className='font-semibold mb-2'>Main page</div>
      <Carousel value={items} numScroll={1} numVisible={5} responsiveOptions={responsiveOptions} itemTemplate={itemTemplate}/>
    </div>
  )
}
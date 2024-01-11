import { Sidebar } from '@/components/Sidebar';
import {Footer} from '@/components/Footer';
import { Home as ChevronLeft, ChevronRight, Play} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-4xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={120} height={120} alt="Capa album Bob Marley" />
              <strong>Reggae 4:20</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album2.jpg" width={120} height={120} alt="Capa album Bob Marley" />
              <strong>HouseTronika</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album3.jpg" width={120} height={120} alt="Capa album Bob Marley" />
              <strong>TechTronika</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/matue.jpg" width={120} height={120} alt="Capa album Bob Marley" />
              <strong>Rap Nacional</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/chorao.jpg" width={80} height={100} alt="Capa album Bob Marley" />
              <strong>Brazuca</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/matalica.jpg" width={120} height={120} alt="Capa album Bob Marley" />
              <strong>Rock Classics</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Daniel Thielmann</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa album Bob Marley" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Bob Marley calling to smok</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa album Bob Marley" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-400'>Bob Marley calling to smok</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa album Bob Marley" />
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-400'>Bob Marley calling to smok</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa album Bob Marley" />
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-400'>Bob Marley calling to smok</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa album Bob Marley" />
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-400'>Bob Marley calling to smok</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa album Bob Marley" />
              <strong className='font-semibold'>Daily Mix 6</strong>
              <span className='text-sm text-zinc-400'>Bob Marley calling to smok</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa album Bob Marley" />
              <strong className='font-semibold'>Daily Mix 7</strong>
              <span className='text-sm text-zinc-400'>Bob Marley calling to smok</span>
            </a>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  )
}

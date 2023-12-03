import Image from 'next/image'
 
export default function HeroBanner() {
  return (
    <div style={{width: '100%', height: '410px', position: 'relative'}}>
    <Image
      src="/herobanner.jpg"
      fill
      objectFit='cover'
      sizes='100vw'
      alt="Picture of the author"
    />
    </div>
  )
}
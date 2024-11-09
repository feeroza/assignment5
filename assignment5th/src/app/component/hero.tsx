import Image from 'next/image'
const Hero = () => {
  return (
    
         <div className='flex items-start justify-between'>
      <div className='mi-16 mt-24 '>
        <h1 className='text-[#000000] text-[40px] font-bold w-[496px] h-[189px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
<p className='text-[#787054] text-[30px] w-[90px]h-[147px]'>An example of intricate workmanship and detail, elegant<br/>necklaces and long and short chains form a part of<br/>our desirable collection.

</p>
<button className='bg-[#A29875] w-[288px] h-58px] text-[#FFFFFF]'>Explore Now</button>
      </div>
      <div className='mr-16 mt-8'>
        <Image
         src={"/image/jewlary-image.svg"}
        alt='jewlary-img'
        width={462}
        height={647}/>

      </div>
   
      
    </div>
  )
}

export default Hero

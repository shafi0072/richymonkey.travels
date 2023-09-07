import Title, { SubTitle } from '../Shared/Title';

export default function YourHotel() {
  return (
    <section className='pt-[100px]'>
      <Title
        titleBlack='Why List Your Hotel On '
        titleRed='Suva'
        titleGreen='Trip'
        titleSymbol='?'
      />
      <SubTitle subTitle='Our partners’ businesses boom when they list on our platform, here’s why!' />

      <div className='grid md:grid-cols-2 max-w-screen-xl mx-auto pt-[37px] gap-6'>
        <div className='grid grid-cols-2 yourHotelShadow p-[35px] order-2 md:order-1'>
          <p className='text-[50px] text-[#F62619] flex justify-center font-bold items-center'>
            2k
          </p>
          <div>
            <h4 className='text-[24px] font-bold'>Properties listed</h4>
            <p className='text-[#858585] text-[18px]'>
              From hotels to outdoor <br /> lodges, we offer it all!
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 yourHotelShadow p-[35px] order-3 md:order-2'>
          <p className='text-[50px] text-[#29B547] flex justify-center font-bold items-center'>
            1m
          </p>
          <div>
            <h4 className='text-[24px] font-bold'>Properties listed</h4>
            <p className='text-[#858585] text-[18px]'>
              From hotels to outdoor <br /> lodges, we offer it all!
            </p>
          </div>
        </div>
        <div className='order-1 md:order-3 grid grid-cols-2 yourHotelShadow p-[35px]'>
          <p className='text-[50px] text-[#29B547] flex justify-center font-bold items-center'>
            30k
          </p>
          <div>
            <h4 className='text-[24px] font-bold'>Properties listed</h4>
            <p className='text-[#858585] text-[18px]'>
              From hotels to outdoor <br /> lodges, we offer it all!
            </p>
          </div>
        </div>
        <div className='order-4 grid grid-cols-2 yourHotelShadow p-[35px]'>
          <p className='text-[50px] text-[#F62619] flex justify-center font-bold items-center'>
            99%
          </p>
          <div>
            <h4 className='order-4 md:order-4 text-[24px] font-bold'>
              Properties listed
            </h4>
            <p className='text-[#858585] text-[18px]'>
              From hotels to outdoor <br /> lodges, we offer it all!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

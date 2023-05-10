const SectionText = () => {
  return (
    <section className=' mt-10 ml-24 ' m>
      <h2 className='text-left text-[#0f172a] max-w-[45rem]  font-extrabold text-[2rem] sm:px-3 md:text-[3.3rem] tracking-[-0.11rem] leading-[3.2rem]  md:leading-[3.5rem] pt-20 '>
        Hermosos componentes de interfaz de usuario, creados con Tailwind CSS.
      </h2>

      <div className='flex gap-6 mt-3'>
        <div className='flex gap-2 items-center'>
          <svg
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            class='h-8 w-8 flex-none stroke-current text-slate-400'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <path d='M5 4.15h22.5l-2 20.5-9.25 4-9.25-4-2-20.5Z' />
            <path d='M20.5 9.15H12v5.5h8.5v6l-4.25 2-4.25-2v-2.5' />
          </svg>
          <span className='text-medium text-gray-500 text-sm'>.HTML</span>
        </div>

        <div className='flex gap-2 items-center'>
          <svg
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            class='h-8 w-8 flex-none stroke-current text-slate-400'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <ellipse cx='16' cy='16' rx='13' ry='5' />
            <ellipse
              cx='16'
              cy='16'
              rx='13'
              ry='5'
              transform='rotate(60 16 16)'
            />
            <ellipse
              rx='13'
              ry='5'
              transform='matrix(-.5 .86603 .86603 .5 16 16)'
            />
            <circle cx='16' cy='16' r='2' />
          </svg>
          <span className='text-medium text-gray-500 text-sm'>React</span>
        </div>
      </div>
    </section>
  )
}
export default SectionText

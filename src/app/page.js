import Desplegable from "@/components/Desplegable";
import SectionText from "@/components/SectionText";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-principal w-screen overflow-x-hidden h-screen">
			<h1 className='text-center text-[#0f172a] max-w-[40rem] mx-auto font-extrabold text-[3rem] sm:px-3 md:text-[4.5rem] tracking-[-0.11rem] leading-[3.2rem]  md:leading-[4.5rem] pt-20 '>
				Construye tu próxima idea aún más rápido
			</h1>

			<p className='font-medium text-[1.125rem] text-left text-[#0f172a] max-w-[45rem] mx-auto p-x py-7'>
				DeusUi es una librería de componentes de Tailwind para React que ofrece
				una variedad de componentes personalizables y escalables para crear
				interfaces de usuario modernas y atractivas de manera eficiente.
			</p>

			<div className='flex flex-col sm:flex-row items-center gap-4 mt-3  justify-center'>
				<Link
					className='block w-[90%]  sm:w-64
            bg-[#0f172b] text-white p-3 rounded-[.5rem] text-center font-medium leading-6'
					href='/components'
				>
					Examinar componentes
				</Link>
				<Link
					className='block w-[90%]  sm:w-64 bg-transparent border border-gray-300 text-[#0f172b] p-3 rounded-[.5rem] text-center font-medium leading-6'
					href='/components'
				>
					Examinar plantillas
				</Link>
			</div>
			<section className=' flex gap-6 justify-evenly items-start'>
				<SectionText />
				<Desplegable />
			</section>

			<section className='h-screen w-screen bg-gradient-to-b from-white/5 to-white flex justify-start m-[6.875rem]'>
				<fieldset className='w-[30%] md:ml-60 '>
					<input
						type="text"
						placeholder='Buscar componente'
						className='mt-5 py-2.5  px-4 w-full bg-white/80 rounded-md shadow-sm border border-gray-300/50 outline-none focus:border-gray-400/60
						placeholder:text-gray-400 placeholder:font-light font-medium text-[#0f172a] 
						'
					/>
				</fieldset>
			</section>
		</main>
	);
}

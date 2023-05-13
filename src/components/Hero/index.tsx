'use client';
import Image from 'next/image';
import Button from '../common/Button';

const Hero = () => {
	return (
		<div className='mt-4 px-6 pb-44 lg:pb-[110px] md:px-24 flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
			<div className='flex flex-col item-start gap-1'>
				<h1 className='text-xl xs:text-2xl sm:text-4xl md:text-6xl leading-tight font-black text-very-dark-blue max-w-[650px]'>
					More than just shorter links
				</h1>
				<p className='text-grayish-violet max-w-lg'>
					Build your brand’s recognition and get detailed insights on
					how your links are performing.
				</p>
				<Button
					title='Get Started'
					onClick={() => {}}
					className='w-36 py-2.5 mt-4 rounded-3xl'
					isLarge
				/>
			</div>
			<Image
				src={require('../../../public/images/illustration-working.svg')}
				alt='bg-boost-desktop'
				width={500}
				className='lg:-mr-44'
			/>
		</div>
	);
};

export default Hero;

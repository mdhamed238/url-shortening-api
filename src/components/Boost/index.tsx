'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../common/Button';

const Boost = () => {
	const [screen, setScreen] = useState<'mobile' | 'desktop'>();

	useEffect(() => {
		if (window.innerWidth < 768) {
			setScreen('mobile');
		} else {
			setScreen('desktop');
		}
	}, []);

	const imageSRC =
		screen === 'desktop'
			? require('../../../public/images/bg-boost-desktop.svg')
			: require('../../../public/images/bg-boost-mobile.svg');

	return (
		<div className='relative w-full max-h-56 py-40 md:py-12 flex flex-col items-center justify-center gap-4 bg-dark-violet'>
			<Image
				src={imageSRC}
				alt='boost'
				className='absolute h-full object-cover'
			/>
			<h1 className='text-2xl font-bold text-white z-10 '>
				Boost your links today
			</h1>
			<Button
				title='Get Started'
				onClick={() => {}}
				className='w-36 py-2.5 mt-4 rounded-3xl z-10'
				isLarge
			/>
		</div>
	);
};

export default Boost;

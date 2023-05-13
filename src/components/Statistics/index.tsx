import { useState } from 'react';
import Card from './Card';
import dynamic from 'next/dynamic';

const Form = dynamic(() => import('@/components/Form'));

const Statistics = () => {
	const cards = [
		{
			title: 'Brand Recognition',
			desc: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
			icon: require('../../../public/images/icon-brand-recognition.svg'),
		},
		{
			title: 'Detailed Records',
			desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
			icon: require('../../../public/images/icon-detailed-records.svg'),
		},
		{
			title: 'Fully Customizable',
			desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
			icon: require('../../../public/images/icon-fully-customizable.svg'),
		},
	];

	return (
		<div className='w-full xs:px-2 sm:px-auto pt-44 pb-12 flex flex-col gap-6 bg-gray bg-opacity-20'>
			<Form />
			<header className='flex flex-col items-center gap-3'>
				<h1 className='text-2xl text-very-dark-blue font-bold'>
					Advanced Statistics
				</h1>
				<p className='text-grayish-violet w-80 md:w-[420px] text-center text-sm'>
					Track how your links are performing across the web with our
					advanced statistics dashboard.
				</p>
			</header>
			<div className='relative mt-8 flex-1 flex flex-col items-center lg:flex-row gap-24 lg:gap-8 mx-auto h-auto'>
				<div className='absolute left-1/2 -translate-x-1/2 rotate-90 lg:rotate-0 top-1/2 -z-10 w-[700px] lg:w-1/2 h-2 bg-cyan'></div>
				{cards.map((el, idx) => (
					<Card
						key={idx}
						title={el.title}
						desc={el.desc}
						icon={el.icon}
						idx={idx}
					/>
				))}
			</div>
		</div>
	);
};

export default Statistics;

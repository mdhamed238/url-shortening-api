import { classNames } from '@/utils';
import Image from 'next/image';

type Props = {
	title: string;
	desc: string;
	icon: any;
	className?: string;
	idx?: number;
};

const Card = ({ title, desc, icon, className, idx }: Props) => {
	return (
		<div
			className={classNames(
				'relative w-[310px] h-60 rounded-md shadow hover:shadow-md cursor-pointer duration-200 bg-white px-8 pb-12 flex flex-col items-center md:items-start justify-end gap-3',
				className,
				idx === 1 ? 'lg:mt-[70px]' : idx == 2 ? 'lg:mt-[140px]' : ''
			)}
		>
			<h3 className='text-lg font-bold text-very-dark-blue'>{title}</h3>
			<p className='text-sm text-grayish-violet text-center md:text-left'>
				{desc}
			</p>
			<span className='absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-5 -top-10 w-[80px] h-[80px] rounded-full bg-dark-violet flex items-center justify-center'>
				<Image
					src={icon}
					alt='icon'
					width={32}
					height={32}
				/>
			</span>
		</div>
	);
};

export default Card;

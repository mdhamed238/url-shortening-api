import { classNames } from '@/utils';
import { useState } from 'react';

type Props = {
	title: string;
	short: string;
};

const Card = ({ title, short }: Props) => {
	const [clicked, setClicked] = useState(false);

	const onClick = () => {
		navigator.clipboard.writeText(short);
		setClicked(true);
	};

	return (
		<div className='w-full flex-1 rounded-md flex justify-between items-center p-4 bg-white'>
			<span className='text-sm text-very-dark-violet'>{title}</span>
			<div className='flex gap-2 items-center'>
				<span className='text-sm text-cyan'>{short}</span>
				<button
					className={classNames(
						'rounded-md w-28 flex items-center justify-center py-2 px-8 text-white font-semibold bg-cyan focus:outline-none hover:bg-sky-300 focus:bg-very-dark-blue duration-200',
						clicked && 'bg-very-dark-blue'
					)}
					onClick={onClick}
				>
					{clicked ? 'Copied!' : 'Copy'}
				</button>
			</div>
		</div>
	);
};

export default Card;

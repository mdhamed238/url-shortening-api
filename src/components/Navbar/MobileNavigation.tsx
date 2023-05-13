'use client';

import Button from '../common/Button';

type Props = {
	isMenuCollapsed: boolean;
	navLinks: Array<{ title: string; path: string }>;
};

const MobileNavigation = ({ isMenuCollapsed, navLinks }: Props) => {
	return (
		<div
			className={`${
				isMenuCollapsed ? 'flex' : 'hidden'
			} absolute top-28 left-1/2 -translate-x-1/2 flex-col items-center py-12 w-[300px] gap-6 rounded-lg bg-dark-violet md:hidden`}
		>
			<ul className='flex flex-col items-center gap-6'>
				{navLinks.map((link) => (
					<li
						key={link.title}
						className='font-bold text-body text-white hover:text-gray duration-200'
					>
						<a href={link.path}>{link.title}</a>
					</li>
				))}
			</ul>
			<div className='w-64 h-[2px] bg-gray bg-opacity-20' />
			<div className='flex flex-col items-center gap-6'>
				<Button
					title='Login'
					onClick={() => {}}
					isLink
					isLarge
				/>
				<Button
					title='Sign Up'
					onClick={() => {}}
					isLarge
				/>
			</div>
		</div>
	);
};

export default MobileNavigation;

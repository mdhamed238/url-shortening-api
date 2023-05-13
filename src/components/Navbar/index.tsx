'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../common/Button';
import Menu from './Menu';
import dynamic from 'next/dynamic';
import { classNames } from '@/utils';

const MobileNavigation = dynamic(() => import('./MobileNavigation'));

const Navbar = () => {
	const [isMenuCollapsed, setMenuCollapsed] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition >= 100) {
				setMenuCollapsed(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMenuCollapsed(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const navLinks = [
		{
			title: ' Features',
			path: '#',
		},
		{
			title: ' Pricing',
			path: '#',
		},
		{
			title: ' Resources',
			path: '#',
		},
	];

	return (
		<nav
			className={classNames(
				'relative px-6 sm:px-12 md:px-24 py-12 w-full flex items-center',
				isSticky && 'sticky top-0'
			)}
		>
			<Image
				width={100}
				height={100}
				src={require('/public/images/logo.svg')}
				alt='shortly'
			/>
			<ul className='hidden md:flex items-center flex-1 gap-6 ml-10'>
				{navLinks.map((link) => (
					<li
						key={link.title}
						className='font-bold text-sm text-grayish-violet hover:text-very-dark-blue duration-200'
					>
						<a href={link.path}>{link.title}</a>
					</li>
				))}
			</ul>
			<div className='hidden md:flex items-center gap-6'>
				<Button
					title='Login'
					onClick={() => {}}
					isLink
					isDark
				/>
				<Button
					title='Sign Up'
					onClick={() => {}}
				/>
			</div>
			{/* Menu button */}
			<Menu onClick={() => setMenuCollapsed(!isMenuCollapsed)} />
			{/* Mobile navigation */}
			<MobileNavigation
				navLinks={navLinks}
				isMenuCollapsed={isMenuCollapsed}
			/>
		</nav>
	);
};

export default Navbar;

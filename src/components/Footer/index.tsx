import Image from 'next/image';

const Footer = () => {
	const footerLinks = [
		{
			title: 'Features',
			links: [
				{
					name: 'Link Shortening',
					url: '#',
				},
				{
					name: 'Branded Links',
					url: '#',
				},
				{
					name: 'Analytics',
					url: '#',
				},
			],
		},
		{
			title: 'Resources',
			links: [
				{
					name: 'Blog',
					url: '#',
				},
				{
					name: 'Developers',
					url: '#',
				},
				{
					name: 'Support',
					url: '#',
				},
			],
		},
		{
			title: 'Company',
			links: [
				{
					name: 'About',
					url: '#',
				},
				{
					name: 'Our Team',
					url: '#',
				},
				{
					name: 'Careers',
					url: '#',
				},
				{
					name: 'Contact',
					url: '#',
				},
			],
		},
	];
	const icons = [
		{
			name: 'Facebook',
			url: '#',
			src: require('../../../public/images/icon-facebook.svg'),
		},
		{
			name: 'Twitter',
			url: '#',
			src: require('../../../public/images/icon-twitter.svg'),
		},
		{
			name: 'Pinterest',
			url: '#',
			src: require('../../../public/images/icon-pinterest.svg'),
		},
		{
			name: 'Instagram',
			url: '#',
			src: require('../../../public/images/icon-instagram.svg'),
		},
	];

	return (
		<footer className='w-full h-auto px-6 py-12 md:pb-16 lg:px-24 flex flex-col justify-between items-center gap-20 lg:gap-0 lg:flex-row lg:items-start bg-very-dark-violet'>
			<span>
				<Image
					src={require('../../../public/images/logo-white.svg')}
					alt='logo'
				/>
			</span>
			<div className='flex gap-20 flex-col items-center md:flex-row md:items-start'>
				{footerLinks.map((link, index) => (
					<div
						key={index}
						className='flex flex-col gap-4 items-center md:items-start'
					>
						<h4 className='text-white font-bold text-sm cursor-pointer'>
							{link.title}
						</h4>
						<div className='flex flex-col gap-2'>
							{link.links.map((item, index) => (
								<a
									key={index}
									href={item.url}
									className='text-sm text-center md:text-left text-grayish-violet hover:text-cyan duration-300'
								>
									{item.name}
								</a>
							))}
						</div>
					</div>
				))}
				<div className='flex gap-6 items-center'>
					{icons.map((icon, index) => (
						<a
							key={index}
							href={icon.url}
							className='hover:outline-cyan'
						>
							<Image
								src={icon.src}
								alt={icon.name}
								width={20}
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;

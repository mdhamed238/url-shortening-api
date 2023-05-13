import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'));
const Hero = dynamic(() => import('@/components/Hero'));
const Statistics = dynamic(() => import('@/components/Statistics'));
const Boost = dynamic(() => import('@/components/Boost'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
	return (
		<main className='w-full h-screen overflow-x-hidden'>
			<Navbar />
			<Hero />
			<Statistics />
			<Boost />
			<Footer />
		</main>
	);
}

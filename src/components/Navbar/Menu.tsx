type Props = {
	onClick: () => void;
};
const Menu = ({ onClick }: Props) => {
	return (
		<button
			className='flex flex-col gap-1 md:hidden absolute right-6'
			onClick={onClick}
		>
			<span className='w-6 h-[3px] bg-gray'></span>
			<span className='w-6 h-[3px] bg-gray'></span>
			<span className='w-6 h-[3px] bg-gray'></span>
		</button>
	);
};

export default Menu;

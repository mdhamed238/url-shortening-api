import { classNames } from '@/utils';

type Props = {
	isLarge?: boolean;
	hasLargeText?: boolean;
	isDark?: boolean;
	isLink?: boolean;
	title: string;
	className?: string;
	onClick: () => void;
};

const Button = ({
	hasLargeText,
	className,
	isDark,
	isLink,
	title,
	onClick,
}: Props) => {
	const linkStyles = `${
		isDark
			? 'text-grayish-violet hover:text-very-dark-blue'
			: 'text-white hover:text-gray'
	}`;

	const buttonStyles =
		'px-4 py-1.5 rounded-2xl text-white bg-cyan hover:bg-opacity-70 duration-200';

	return (
		<button
			className={classNames(
				'font-bold',
				className,
				hasLargeText ? 'text-body' : 'text-sm',
				isLink ? linkStyles : buttonStyles
			)}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default Button;

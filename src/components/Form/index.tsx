'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { classNames, getShortUrl } from '@/utils';
import Card from './Card';

type FormValues = {
	url: string;
};

const schema = yup.object().shape({
	url: yup.string().url().required('Please add a link'),
});

type Url = {
	original: string;
	short: string;
};

const Form = () => {
	const [screen, setScreen] = useState<'mobile' | 'desktop'>();
	const [urls, setUrls] = useState<Url[]>([]);

	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitSuccessful },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		if (window.innerWidth < 768) {
			setScreen('mobile');
		} else {
			setScreen('desktop');
		}
	}, []);

	const imageSRC =
		screen === 'desktop'
			? require('../../../public/images/bg-shorten-desktop.svg')
			: require('../../../public/images/bg-shorten-mobile.svg');

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		const url = getShortUrl(data.url);
		setUrls([...urls, url]);
	};

	const hasError = !!errors.url;

	return (
		<div className='px-6 sm:px-12 md:px-24'>
			<div className='relative overflow-hidden -translate-y-64 lg:-translate-y-60 p-5 lg:p-8 h-auto rounded-lg bg-dark-violet flex gap-6 justify-center items-center lg:items-start flex-col lg:flex-row'>
				<Image
					src={imageSRC}
					alt='image'
					className='object-fill -translate-y-10 -translate-x-2 w-full h-full absolute -z-10'
				/>
				<div className='flex flex-col gap-2 w-full lg:w-4/5'>
					<Controller
						control={control}
						render={({ field }) => (
							<>
								<input
									{...field}
									type='text'
									placeholder='Shorten a link here...'
									className={classNames(
										'rounded-lg h-12 px-6 py-6 focus:outline-none border-2 border-transparent caret-dark-violet',
										hasError && 'border-red'
									)}
								/>
							</>
						)}
						name='url'
						defaultValue=''
					/>
					{hasError && (
						<p className='text-red text-sm font-medium'>
							{errors.url?.message}
						</p>
					)}
				</div>
				<button
					className='rounded-lg w-full lg:w-40 px-8 py-3 text-white font-semibold bg-cyan focus:outline-none hover:bg-sky-300 duration-200 border-2 border-transparent'
					onClick={handleSubmit(onSubmit)}
				>
					Shorten It!
				</button>
			</div>
			<div className='flex flex-col gap-4 items-center -translate-y-48'>
				{urls.slice(-3).map((url, idx) => (
					<Card
						key={idx}
						title={url.original}
						short={url.short}
					/>
				))}
			</div>
		</div>
	);
};

export default Form;

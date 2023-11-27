import React from 'react';
import Buttons from '../components/Buttons';
import portCover from '../assets/portfolio-cover.png';
import realestateCover from '../assets/realestate-cover.png';

const Projects = () => {
	return (
		<div
			name='projects'
			className='w-full h-screen md:h-full mt-[20rem] lg:mt-0 landscape:mt-[30rem] mb-[20rem]'
		>
			<div className='max-w-[1000px] h-full mx-auto px-8 lg:px-0 flex flex-col justify-center space-y-10'>
				<div className='space-y-8'>
					<p className='text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-b-[#000080] dark:border-b-[#37cdbe]'>
						Projects
					</p>
					<p className='text-lg lg:text-xl font-bold'>
						Projects I worked on! Other projects will be listed here soon!
					</p>
				</div>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 text-center md:text-left items-center justify-center gap-y-8 md:gap-x-8'>
					<div className='w-[300px] items-center justify-center space-y-4'>
						<img
							alt='portfolio-project'
							src={portCover}
							className='border-2 rounded-2xl w-[300px] h-auto hover:scale-150 transition-all duration-300'
						/>
						<p className='text-xl font-bold'>This Portfolio</p>
						<p>
							This sites code. Portfolio used to showcase skills and projects
						</p>
						<p>Stack used: React, Tailwind, React Scroll, and more</p>
						<Buttons
							style='float-left'
							onClick={'http://www.github.com/otrumbore/portfolio'}
						>
							View Code
						</Buttons>
						<button
							className='border-2 py-2 px-4 border-gray-500 bg-gray-500 float-right rounded-lg text-white'
							disabled
						>
							View Demo
						</button>
					</div>
					<div className='w-[300px] items-center justify-center space-y-4'>
						<img
							alt='realestate-project'
							src={realestateCover}
							className='border-2 rounded-2xl w-[300px] h-[200px] hover:scale-150 transition-all duration-300'
						/>
						<p className='font-bold text-xl'>Real Estate</p>
						<p>
							Using Axios, pulls API data from MLS Router, demo version, to
							display results in app. No demo active at this time!
						</p>
						<p>
							Stack used: React, Tailwind, Daisy-UI, Axios, MLS Router API from
							RapidAPI, React Router, and more
						</p>
						<div className=''>
							<Buttons
								style='float-left'
								onClick={'http://www.github.com/otrumbore/realestate'}
							>
								View Code
							</Buttons>
							<Buttons style='hidden float-right' disbaled>
								View Demo
							</Buttons>
							<button
								className='border-2 py-2 px-4 border-gray-500 bg-gray-500 float-right rounded-lg text-white'
								disabled
							>
								View Demo
							</button>
						</div>
					</div>
					<div className='hidden w-[300px] items-center justify-center space-y-4'>
						<img
							alt='portfolio-project'
							src={portCover}
							className='border-2 rounded-2xl w-[300px] h-auto hover:scale-150 transition-all duration-300'
						/>
						<p>Project 3</p>
						<p>Description</p>
						<Buttons style='float-left'>View Code</Buttons>
						<Buttons style='float-right'>View Demo</Buttons>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

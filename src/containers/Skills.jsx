import React from 'react';
import { Tooltip } from 'react-tooltip';
import {BsGithub, BsThreeDots} from 'react-icons/bs';
import {AiFillHtml5} from 'react-icons/ai';
import {BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoNodejs, BiLogoMongodb} from 'react-icons/bi';
import {TbBrandVscode, TbBrandFigma, TbBrandVite} from 'react-icons/tb';

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen md:h-full'>
        <div className='flex flex-col items-center justify-center px-8'>
            <div className='flex flex-row max-w-[1000px] w-full'>
                <div className='w-[100%] md:w-5/12 pb-10'>
                    <p className='text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-b-[#000080] dark:border-b-[#37cdbe]'>Skills</p>
                </div>
                <div className='hidden md:block w-7/12'></div>
            </div>
            <div className='max-w-[1000px] w-full flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0'>
                <div className='md:w-5/12 text-lg lg:text-xl font-bold'>
                    <p>&lt;!-- Juicy stuff we love --&gt;</p>
                </div>
                <div className='hidden md:block md:w-7/12'>
                </div>
            </div>
        </div>
        <div className='flex mt-10 items-center justify-center px-8'>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center max-w-[1000px] w-[100%] gap-x-12 md:gap-x-16 gap-y-8'>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl' data-tooltip-id="html5-tip"
                    data-tooltip-content="HTML5" data-tooltip-place="top"><Tooltip id="html5-tip" /><AiFillHtml5 size={50} /></div>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl' data-tooltip-id="css-tip"
                    data-tooltip-content="CSS3" data-tooltip-place="top"><Tooltip id="css-tip" /><BiLogoCss3 size={50} /></div>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl'  data-tooltip-id="js-tip"
                    data-tooltip-content="Javascript" data-tooltip-place="top"><Tooltip id="js-tip" /><BiLogoJavascript size={50} /></div>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl'  data-tooltip-id="react-tip"
                    data-tooltip-content="React.js" data-tooltip-place="top"><Tooltip id="react-tip" /><BiLogoReact size={50} /></div>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl'  data-tooltip-id="git-tip"
                    data-tooltip-content="Git & GitHub" data-tooltip-place="top"><Tooltip id="git-tip" /><BsGithub size={50}/></div>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl'  data-tooltip-id="tw-tip"
                    data-tooltip-content="Tailwind" data-tooltip-place="top"><Tooltip id="tw-tip" /><BiLogoTailwindCss size={50} /></div>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl'  data-tooltip-id="node-tip"
                    data-tooltip-content="Node.js" data-tooltip-place="top"><Tooltip id="node-tip" /><BiLogoNodejs size={50} /></div>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl'  data-tooltip-id="mongo-tip"
                    data-tooltip-content="MongoDB" data-tooltip-place="top"><Tooltip id="mongo-tip" /><BiLogoMongodb size={50} /></div>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl'  data-tooltip-id="vite-tip"
                    data-tooltip-content="Vite" data-tooltip-place="top"><Tooltip id="vite-tip" /><TbBrandVite size={50} /></div>
                    <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl'  data-tooltip-id="figma-tip"
                    data-tooltip-content="Figma" data-tooltip-place="top"><Tooltip id="figma-tip" /><TbBrandFigma size={50} /></div>
                <div className='flex justify-center py-4 border-4 border-[#000080] dark:border-[#37cdbe] hover:ease-in-out duration-300 hover:scale-125 rounded-2xl'  data-tooltip-id="more-tip"
                    data-tooltip-content="And more..." data-tooltip-place="top"><Tooltip id="more-tip" /><BsThreeDots size={50} /></div>
            </div>
        </div>
        <div className='flex flex-cols px-8 items-center justify-center'>
            <div className='max-w-[1000px] w-full mt-10 flex md:flex-row'>
                <div className='text-lg lg:text-xl font-bold'>
                    <p>&lt;!-- End juicy stuff --&gt;</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
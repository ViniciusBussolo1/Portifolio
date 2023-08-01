import { FaHtml5, FaReact, FaCss3 } from 'react-icons/fa'
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'

import Skill from './Skill'

export default function Skills() {
  return (
    <section className="w-full bg-black-800 flex flex-col items-center py-32 gap-20">
      <h1 className="text-purple-600 text-5xl font-bold">Habilidades</h1>
      <div className="grid grid-cols-3 gap-36">
        <Skill icon={FaReact} name="React" />
        <Skill icon={FaHtml5} name="HTML" />
        <Skill icon={FaCss3} name="CSS" />
        <Skill icon={BiLogoJavascript} name="JavaScript" />
        <Skill icon={BiLogoTypescript} name="TypeScript" />
        <Skill icon={TbBrandNextjs} name="Next.JS" />
        <Skill icon={BiLogoTailwindCss} name="TailwdCSS" />
      </div>
    </section>
  )
}

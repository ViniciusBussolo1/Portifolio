import { ElementType } from 'react'

interface SkillProps {
  icon: ElementType
  name: string
}

export default function Skill({ icon: Icon, name }: SkillProps) {
  return (
    <div className="text-white-300 shadow-lg shadow-black-900/80 text-lg bg-black-500 w-48 h-48 flex flex-col items-center justify-center gap-5 rounded cursor-pointer transition ease-in-out delay-150 hover:bg-black-300 hover:text-purple-500 hover:shadow-purple-500/50">
      <Icon className="w-20 h-20" />
      <span>{name}</span>
    </div>
  )
}

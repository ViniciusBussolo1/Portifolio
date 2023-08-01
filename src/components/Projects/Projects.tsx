import Image from 'next/image'

import Link from 'next/link'

import Blizzard from '../../../public/Blizzard.svg'
import Paqueta from '../../../public/Paqueta.svg'
import EmpireBurguer from '../../../public/EmpireBurguer.svg'
import ToDoList from '../../../public/ToDoList.svg'

export default function Projects() {
  return (
    <section className="w-full bg-black-500 py-32 flex flex-col items-center justify-start gap-20">
      <h1 className="text-purple-600 text-5xl font-bold">Projetos</h1>
      <div className="grid grid-cols-2 gap-36">
        <Link
          href={'https://blizzard-nine.vercel.app/'}
          target="_blank"
          className="flex flex-col justify-center items-center gap-8"
        >
          <Image src={Blizzard} alt="Blizzard Image" width={619} height={363} />
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-base text-white-300 uppercase">
              Desafio plataforma BrChallenges
            </span>
            <h1 className="text-3xl text-white-300 font-bold uppercase">
              Landing page da empresa Blizzard
            </h1>
          </div>
        </Link>
        <Link
          href={'https://paqueta-calcados-coral.vercel.app/'}
          target="_blank"
          className="flex flex-col justify-center items-center gap-8"
        >
          <Image src={Paqueta} alt="Paqueta Image" width={619} height={363} />
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-base text-white-300 uppercase">
              Desafio plataforma BrChallenges
            </span>
            <h1 className="text-3xl text-white-300 font-bold uppercase">
              Redesign do site da empresa Paquetá Calçados
            </h1>
          </div>
        </Link>
        <Link
          href={'https://br-challenges-empire-burger-nine.vercel.app/'}
          target="_black"
          className="flex flex-col justify-center items-center gap-8"
        >
          <Image
            src={EmpireBurguer}
            alt="EmpireBurguer Image"
            width={619}
            height={363}
          />
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-base text-white-300 uppercase">
              Desafio plataforma BrChallenges
            </span>
            <h1 className="text-3xl text-white-300 font-bold uppercase">
              Landing page de uma hamburgueria Empire Burger
            </h1>
          </div>
        </Link>
        <Link
          href={'https://to-do-list-pi-vert.vercel.app/'}
          target="_blank"
          className="flex flex-col justify-center items-center gap-8"
        >
          <Image src={ToDoList} alt="ToDoList Image" width={619} height={363} />
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="text-base text-white-300 uppercase">
              Projeto Pessoal
            </span>
            <h1 className="text-3xl text-white-300 font-bold uppercase">
              Projeto desenvolvido para gerenciar tarefas
            </h1>
          </div>
        </Link>
      </div>
    </section>
  )
}

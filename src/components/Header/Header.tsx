import Link from 'next/link'
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="h-screen w-screen bg-gradient flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-purple-500 uppercase font-bold ">
          Oi 👋 eu sou o Vinícius
        </h1>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-2">
            <h1 className="text-white-300 text-[12.5rem] leading-[9.375rem] uppercase font-bold">
              Frontend
            </h1>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="https://www.linkedin.com/in/vinicius-bussolo/"
                target="_blank"
              >
                <FaLinkedin className="text-purple-500 h-16 w-16 cursor-pointer transition duration-500 transform hover:translate-y-[-20px] hover:text-purple-400" />
              </Link>
              <Link href="https://github.com/ViniciusBussolo1" target="_blank">
                <FaGithub className="text-purple-500 h-16 w-16 cursor-pointer transition duration-500 transform hover:translate-y-[-20px] hover:text-purple-400" />
              </Link>
              <a
                href="http://localhost:3000/curriculo.pdf"
                download={'curriculo.pdf'}
              >
                <FaFileAlt className="text-purple-500 h-16 w-16 cursor-pointer transition duration-500 transform hover:translate-y-[-20px] hover:text-purple-400" />
              </a>
            </div>
          </div>
          <h1 className="text-white-300 text-[12.5rem] leading-[9.375rem] uppercase font-bold">
            Developer
          </h1>
          <div className="w-full pt-4 flex justify-end">
            <p className="w-[800px] text-lg text-white-300 uppercase text-justify indent-14">
              Tenho 22 anos sou formado em Ciência da Computação e desenvolvedor
              Frontend. Tenho experiência no desenvolvimento de páginas e
              sistemas web responsivos, com foco em criar layouts atrativos.
              Busco oportunidades no mercado como desenvolvedor e tenho como
              objetivo me tornar um desenvolvedor Frontend.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

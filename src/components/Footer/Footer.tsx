'use client'

import { useRef, useState } from 'react'

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false)
  const emailRef = useRef<HTMLElement>(null)

  const handleEmailCopy = () => {
    const email = emailRef?.current?.textContent
    if (email) {
      navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => {
        setEmailCopied(false)
      }, 2000)
    }
  }

  return (
    <footer className="flex justify-center items-center bg-black-500 py-20">
      <div className="flex flex-col justify-center items-center gap-16">
        <h2 className="text-3xl text-white-300 font-bold">Me mande um email</h2>

        <div>
          <div className="w-[950px] h-10 bg-black-800 flex justify-center items-center text-base text-white-300 font-bold rounded">
            <span ref={emailRef}>vinicius.buss13@gmail.com</span>
          </div>
          <button
            className="w-[950px] uppercase h-10 bg-purple-600 flex justify-center items-center text-base text-black font-bold rounded hover:bg-purple-500"
            onClick={handleEmailCopy}
          >
            {emailCopied ? (
              <span>Email Copiado!</span>
            ) : (
              <span>Copiar Email</span>
            )}
          </button>
        </div>
      </div>
    </footer>
  )
}

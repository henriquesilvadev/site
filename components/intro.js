import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between">
      <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        Henrique Silva.Dev
      </h3>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Para entrar em contato, envie email para <b>contato@henriquesilva.dev</b>.{' '}
        {/* <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}. */}
      </h4>
    </section>
  )
}

import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <p className="text-4xl lg:text-2xl tracking-tighter leading-tight text-center lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
            © 2022 Henrique Silva. Todos os Direitos Reservados.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/henriquesilvadev/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Meu LinkedIn
            </a>
            <a
              target="_blank"
              href="https://github.com/henriquehsilva"
              className="mx-3 font-bold hover:underline"
            >
              Meu GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

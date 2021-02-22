import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        👨🏿‍ Olá, sou o <strong className={`${utilStyles.h5MktgFluid} ${utilStyles.h4SmMktgFluid} ${utilStyles.textGrayMktg} ${utilStyles.lhCondensed} ${utilStyles.textSemiboldMktg} ${utilStyles.mb5Fluid}`} >Henrique 🖖🏽</strong>, estudante e engenheiro de software.<br />
          <a className={`${utilStyles.textGradientPurpleCoral } ${utilStyles.noWrap}`} href="https://www.linkedin.com/in/henriquesilvadev" target="_blank">LinkedIn</a> |
          <a className={`${utilStyles.textGradientPurpleCoral} ${utilStyles.noWrap}`} href="https://github.com/henriquehsilva" target="_blank"> GitHub</a> |
          <a className={`${utilStyles.textGradientPurpleCoral} ${utilStyles.noWrap}`} href="https://twitter.com/henriquesdev" target="_blank"> Twitter</a> |
          <a className={`${utilStyles.textGradientPurpleCoral} ${utilStyles.noWrap}`} href="https://www.instagram.com/henriquesilvadev" target="_blank"> Instagram</a>.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
      <b> 👨🏽‍🚀 Principais interesses</b>
      <ul>
        <li>Matemática,</li>
        <li>Programação,</li>
        <li>Ciência de Dados,</li>
        <li>Artificial Intelligence,</li>
        <li>Cyber Segurança,</li>
        <li>Cultura ágil.</li>        
      </ul>
      <b> 🛸 Em que costumo trabalhar</b>
      <ul>
        <li>Projetos não tradicionais,</li>
        <li>Suporte educacional fora dos padrões,</li>
        <li>Criação de desastres eletrônicos.</li>
      </ul>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}> 🗞 Últimas postagens</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={`${utilStyles.textGradientPurpleCoral } ${utilStyles.noWrap}`}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

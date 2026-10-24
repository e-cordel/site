import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import type {ReactNode} from 'react';

import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Literatura de cordel para todos"
      description="O e-cordel preserva e compartilha gratuitamente a literatura de cordel.">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <img src="/img/media/ecordel-white.png" alt="e-cordel" className={styles.logo} />
            <p className={styles.eyebrow}>Do Cariri Cearense para o mundo</p>
            <h1>Literatura de cordel para todos</h1>
            <p>
              Preservamos, catalogamos e divulgamos cordéis digitais para que esse
              patrimônio cultural continue vivo, acessível e gratuito.
            </p>
            <div className={styles.actions}>
              <a className="button button--primary button--lg" href="https://ler.ecordel.com.br/">
                Ler cordéis
              </a>
              <Link className="button button--secondary button--lg" to="/como-contribuir/">
                Quero contribuir
              </Link>
            </div>
          </div>
        </section>
        <section className={`container ${styles.intro}`}>
          <div>
            <p className={styles.eyebrow}>Um projeto voluntário</p>
            <h2>Leitura, memória e colaboração</h2>
            <p>
              O e-cordel é um projeto de código aberto e sem fins lucrativos. A
              plataforma de leitura reúne histórias para explorar on-line ou pelo
              aplicativo, enquanto esta página compartilha o projeto, sua história e
              as formas de participar.
            </p>
            <Link to="/inicio/">Conheça o projeto</Link>
          </div>
          <img src="/img/media/ebook.png" alt="Ilustração de um folheto de cordel" />
        </section>
        <section className={`container ${styles.cards}`} aria-label="Caminhos para conhecer o e-cordel">
          <article>
            <h2>Leia on-line</h2>
            <p>Encontre cordéis na plataforma de leitura gratuita.</p>
            <a href="https://ler.ecordel.com.br/">Abrir a plataforma</a>
          </article>
          <article>
            <h2>Conheça o cordel</h2>
            <p>Descubra a história dessa expressão da cultura popular brasileira.</p>
            <Link to="/breve-historia-do-cordel/">Ler a história</Link>
          </article>
          <article>
            <h2>Faça parte</h2>
            <p>Há espaço para revisão, desenvolvimento, pesquisa e comunicação.</p>
            <Link to="/como-contribuir/">Ver formas de contribuir</Link>
          </article>
        </section>
      </main>
    </Layout>
  );
}

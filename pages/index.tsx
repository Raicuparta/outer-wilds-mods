import Head from 'next/head'

import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css';
import { getSortedPostsData } from '../lib/posts'
import { DownloadButton } from '../components/download-button'
import useModDatabase from '../hooks/useModDatabase';

type Props = {
  allPostsData: any;
}

const Home: React.FunctionComponent<Props> = ({ allPostsData }) => {
  const modDatabase = useModDatabase();

  const isDatabaseLoaded = modDatabase !== undefined;

  const handleDownloadClick = () => {

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Outer Wilds Mods</title>
      </Head>
      <header className={styles.header}>
        <h1 className={utilStyles.heading2Xl}>Outer Wilds Mods</h1>
      </header>
      <section className={utilStyles.headingMd}>
        <DownloadButton
          href={isDatabaseLoaded ? modDatabase?.modManager.downloadUrl : '#'}
          disabled={!isDatabaseLoaded}
        >
          {isDatabaseLoaded ? (
            'Download Outer Wilds Mod Manager'
          ) : (
            'Getting latest version of Mod Manager...'
          )}
        </DownloadButton>
      </section>
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

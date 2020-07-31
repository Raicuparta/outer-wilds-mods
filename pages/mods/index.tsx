import { GetStaticProps } from 'next';
import Head from 'next/head';

import styles from '../../styles/layout.module.scss';
import {
  ListItemCard,
  DownloadButton,
  PageSection,
  SmartLink,
  TextLink,
} from '../../components';
import { ModDatabase, getModDatabase } from '../../services';

const modManagerDefaultDownloadUrl =
  'https://github.com/Raicuparta/ow-mod-manager/releases/latest';

type Props = {
  modDatabase?: ModDatabase;
};

export const getModPathName = (modName: string) =>
  modName.replace(/ /g, '').toLowerCase();

const getModPath = (modName: string) => `mods/${getModPathName(modName)}`;

const Mods: React.FunctionComponent<Props> = ({ modDatabase }) => {
  const mods = modDatabase?.releases;
  const modManagerDownloadUrl = modDatabase?.modManager?.downloadUrl;

  return (
    <div className={styles.container}>
      <Head>
        <title>Outer Wilds Mods</title>
        <meta name="Description" content="Full list of mods for Outer Wilds" />
      </Head>
      <TextLink href="/">{'< Home page'}</TextLink>
      <PageSection
        id="mod-manager"
        description="All of the following mods can be downloaded and installed using the Outer Wilds Mod Manager."
      >
        <DownloadButton
          href={modManagerDownloadUrl ?? modManagerDefaultDownloadUrl}
          target={modManagerDownloadUrl ? undefined : '_blank'}
          rel="noopener noreferrer"
        >
          Download Outer Wilds Mod Manager
        </DownloadButton>
      </PageSection>
      <PageSection title="Available mods" id="mods">
        {mods?.map((mod) => (
          <SmartLink
            key={mod.repo}
            href="/mods/[mod]"
            as={getModPath(mod.manifest.name)}
          >
            <ListItemCard
              title={mod.manifest.name}
              description={mod.manifest.description}
            />
          </SmartLink>
        ))}
      </PageSection>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const modDatabase = await getModDatabase();

  return {
    props: { modDatabase },
  };
};

export default Mods;

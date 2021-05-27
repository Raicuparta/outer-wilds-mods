const DATABASE_URL =
  'https://raw.githubusercontent.com/Raicuparta/ow-mod-db/master/database.json';
import axios from 'axios';

export type Manifest = {
  name: string;
  author: string;
  uniqueName: string;
  version: string;
  description: string;
};

export type Mod = {
  repo: string;
  downloadUrl: string;
  downloadCount: number;
  manifest: Manifest;
  required?: boolean;
};

export type ModManager = {
  version: string;
  downloadUrl: never; // Legacy download URL, shouldn't be used.
  installerDownloadUrl: string;
  zipDownloadUrl: string;
  downloadCount: number;
}

export type ModDatabase = {
  modManager: ModManager;
  releases: Mod[];
};

export async function getModDatabase() {
  const response = await axios.get<ModDatabase>(DATABASE_URL);
  if (response.status !== 200) {
    console.error(
      'Response not OK, status:',
      response.status,
      response.statusText
    );
    return;
  }

  return {
    ...response.data,
    releases: response.data.releases.sort(
      (releaseA, releaseB) => releaseB.downloadCount - releaseA.downloadCount
    ),
  };
}

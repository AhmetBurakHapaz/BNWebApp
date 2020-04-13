import Head from 'next/head';

import Sankeys from '../../demos/vis/showcase-sections/sankeys-showcase';

const SankeysPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/static/react-vis.css" />
    </Head>
    <Sankeys />
  </>
);

export default SankeysPage;

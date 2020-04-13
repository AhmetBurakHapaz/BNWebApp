import Head from 'next/head';

import Treemap from '../../demos/vis/showcase-sections/treemap-showcase';

const TreemapPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/static/react-vis.css" />
    </Head>
    <Treemap />
  </>
);

export default TreemapPage;

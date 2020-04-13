import Head from 'next/head';

import Misc from '../../demos/vis/showcase-sections/misc-showcase';

const MiscPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/static/react-vis.css" />
    </Head>
    <Misc />
  </>
);

export default MiscPage;

import Head from 'next/head';

import Sunburst from '../../demos/vis/showcase-sections/sunburst-showcase';

const SunburstPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/static/react-vis.css" />
    </Head>
    <Sunburst />
  </>
);

export default SunburstPage;

import Head from 'next/head';
import Overview from '../components/Overview';

const OverviewPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/static/react-vis.css" />
    </Head>
    <Overview />
  </>
);

export default OverviewPage;

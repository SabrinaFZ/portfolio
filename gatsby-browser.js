require('./src/styles/global.scss');

const React = require('react');
const Layout = require('./src/components/layout').default;
const Header = require('./src/components/Header').default;

exports.wrapRootElement = ({element}) => (
  <Layout>
    <Header />
    {element}
  </Layout>
);
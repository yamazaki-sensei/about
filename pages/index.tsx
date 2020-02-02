const IndexPage = ({ userAgent }) => (
  <h1>Hello world! - userAgent: {userAgent}</h1>
);

IndexPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default IndexPage;

import "bulma";
import React from "react";
import { Link } from "gatsby";
import CoinTable from "../components/CoinTable";
import Layout from "../components/layout";
const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }} />
    <Link to="/coin/">Go to page 2</Link>
    <CoinTable />
  </Layout>
);

export default IndexPage;

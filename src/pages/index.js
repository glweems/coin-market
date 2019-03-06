import "bulma";
import React from "react";
import CoinTable from "../components/CoinTable";
import Layout from "../components/layout";
import { Header } from "../components/SmallComponents";
const IndexPage = () => (
  <Layout>
    <Header title="Coin Markets" />
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }} />
    <CoinTable />
  </Layout>
);

export default IndexPage;

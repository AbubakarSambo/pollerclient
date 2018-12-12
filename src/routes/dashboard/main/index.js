import React from "react";
import { Layout } from "../../../components";

const Main = ({ match }) => {
    return (
        <Layout match={match} pageTitle="Dashboard" pageDesc="Ok what am suppose to do here?">
            <h2>Main content</h2>
        </Layout>

    )
}

export default Main
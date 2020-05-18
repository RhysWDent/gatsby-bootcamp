import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>The Great Gatsby Bootcamp</h1>
      <p>
        Need a developer? <a href="/contact">Contact me.</a>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}
export default IndexPage

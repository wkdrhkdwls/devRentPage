import * as React from "react"
import Layout from "../components/Layout/layout"
import Banner from "../container/home/banner"
import Project from "../container/home/project"
import Vision from "../container/home/vision"
import useHook from "../hooks/hook"

const IndexPage = () => {
  const {data} = useHook();
  return (
    <main>
      <Layout>
        <Banner title={data.site.siteMetadata.title} />
        <Project />
        <Vision />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

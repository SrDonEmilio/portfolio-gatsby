import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const pageData = data.educationJson
  return (
    <div>
      <header>
        <h2>{pageData.title}</h2>
      </header>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    educationJson(slug: { eq: $slug }) {
      title
      description
      items {
        name
        degree
      }
    }
  }
`

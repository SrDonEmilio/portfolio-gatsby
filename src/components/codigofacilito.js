import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Grid from './grid'
import Certificates from "./certificates"
import Courses from "./courses"

export default () => {
  const data = useStaticQuery(graphql`
    {
      codigofacilitoJson {
        data {
          username
          certificates {
            title
            score
          }
          courses {
            title
            progress
          }
        }
      }
    }
  `)

  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
            <Grid title="Mis Certificados de Código Facilito" data={data.codigofacilitoJson.data.certificates} card={Certificates}/>
            <Grid title="Mis cursos de Código Facilito" data={data.codigofacilitoJson.data.courses} card={Courses}/>
        </div>
      </div>
    </section>
  )
}

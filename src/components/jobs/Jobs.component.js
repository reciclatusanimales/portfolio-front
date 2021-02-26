import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Title from "../layout/title/Title.component"

import {
  JobsCenter,
  BtnContainer,
  JobInfo,
  JobDescription,
  JobIcon,
  JobButton,
} from "./Jobs.styles"

const query = graphql`
  {
    allJobs(sort: { fields: id, order: DESC }) {
      nodes {
        id
        company
        date
        position
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date } = jobs[value]
  const desc = []

  return (
    <section className="section">
      <Title title="expierence" />
      <JobsCenter>
        <BtnContainer>
          {jobs.map((item, index) => {
            return (
              <JobButton
                key={item.id}
                onClick={() => setValue(index)}
                active={index === value}
              >
                {item.company}
              </JobButton>
            )
          })}
        </BtnContainer>
        <JobInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p>{date}</p>
          {desc.map(item => {
            return (
              <JobDescription key={item.id}>
                <JobIcon />
                <p>{item.name}</p>
              </JobDescription>
            )
          })}
        </JobInfo>
      </JobsCenter>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs

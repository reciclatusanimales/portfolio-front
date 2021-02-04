import React from "react"
import { graphql, useStaticQuery } from "gatsby"


import { TimelineCenter, TimelineItem, Number } from './Timeline.styles'

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

  return (
    <section className="section">      
      
      <div className="section-title">
        <h2>timeline</h2>
        <div className="underline"></div>
      </div>

      <TimelineCenter className="section-center">
        {jobs.map((job, index) => {

          const job_date = new Date(job.date)
          const year = job_date.getFullYear()

          return (          
            <TimelineItem key={job.id}>
              <h4>{year} {job.company}</h4>
              <p>{job.position}</p>
              <Number>
                {index + 1}
              </Number>
            </TimelineItem>     
          )
        })}
      </TimelineCenter>
         
    </section>
  )
}

export default Jobs

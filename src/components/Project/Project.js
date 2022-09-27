import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomTimeline, { CustomerTimelineSeperator } from '../Timeline/Timeline';
import SchoolIcon from '@mui/icons-material/School';
import resumeData from '../utils/resumeData';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import './Project.css';

const Project = () => {
  return (
    <>
      <Grid container className='section pb_30'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h1 className='section_title_text'>Project</h1>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <CustomTimeline title='My Project'
                icon={<SchoolIcon />}>
                {resumeData.projects.map((project) => (
                  <TimelineItem>
                    <CustomerTimelineSeperator />
                    <TimelineContent>
                      <Typography><h5>Title: {project.title}</h5></Typography>
                      <Typography className='timeline_description'><span>Description:</span>{project.description}</Typography>
                      <Typography className='timeline_link'><span>Link:</span><a href={project.link} target='_blank'> {project.title}</a></Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Project;


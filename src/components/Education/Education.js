import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomTimeline, { CustomerTimelineSeperator } from '../Timeline/Timeline';
import SchoolIcon from '@mui/icons-material/School';
import resumeData from '../utils/resumeData';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import "./Education.css";

const Education = () => {
  return (
    <>
      <Grid container className='section pb_30'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h1 className='section_title_text'>Education</h1>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <CustomTimeline title='Academics'
                icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomerTimelineSeperator />
                    <TimelineContent>
                      <Typography className='timeline_title'>{education.title}</Typography>
                      <Typography className='timeline_date'>{education.date}</Typography>
                      <Typography className='timeline_description'>{education.description}</Typography>
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

export default Education;

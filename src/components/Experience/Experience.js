import React from 'react';
import { Grid, Typography } from '@mui/material';
import CustomTimeline, { CustomerTimelineSeperator } from '../Timeline/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import resumeData from '../utils/resumeData';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import './Experience.css';

const Experience = () => {
    return (
        <>
            <Grid container className='section pb_30'>

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <CustomTimeline title='Work Experience'
                                icon={<WorkIcon />}>
                                {resumeData.experiences.map((experience) => (
                                    <TimelineItem>
                                        <CustomerTimelineSeperator />
                                        <TimelineContent>
                                            <h2 className='timeline_title'>Department: Home Loans</h2>
                                            <Typography className='timeline_date'>{experience.date}</Typography>
                                            <Typography className='timeline_description'>Process: {experience.description}</Typography>
                                            <Typography className='timeline_responsibilities'>Roles and Responsibilities:</Typography>
                                            <ul>
                                                <li>Performing initial appraisal of potential borrowers by thoroughly examining their applications (Document review).</li>
                                                <li>Review and complete task assigned in workflow management system.</li>
                                                <li>Manage the team and delivering the associate performance reports.</li>
                                                <li>Responds to inquiries and requests in a timely and efficient manner ensuring quality standards are considered.</li>
                                                <li>Conducting training sessions with PPT presentation on monthly basis.</li>
                                                <li>Providing floor support to OJT (On the job training) batch.</li>
                                                <li>Preparing (PKT) process knowledge test on monthly basis.Updates daily reports with accuracy.Manages work quality and error Management.</li>
                                            </ul>
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

export default Experience;

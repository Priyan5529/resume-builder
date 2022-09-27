import { TimelineDot } from '@mui/lab';
import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import resumeData from '../utils/resumeData';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import './Skills.css';

const Skills = () => {
    return (
        <>
            <Grid container className='section pb_30'>
                <Grid item className='section_title mb_30' >
                    <span></span>
                    <h1 className='section_title_text' >Skills</h1>
                </Grid>
                <Grid container spacing={6} justify='space-between'
                    className='section graybg pb_45'>
                    {resumeData.skills.map(skill => (
                        <Grid item xs={12} sm={6} md={3} >
                            <Paper elevation={0} className='skill'>
                                <Typography variant='h6' className='skills_title'>
                                    {skill.title}
                                </Typography>
                                {skill.description.map((element) => (
                                    <Typography variant='body2' className='skill_description'>
                                        <TimelineDot variant={'outlined'} className='timeline_dot' />
                                        {element}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>

    )
}

export default Skills;


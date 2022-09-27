import React from 'react';
import { Grid, Typography } from '@mui/material';
import resumeData from '../utils/resumeData';
import TImeline from '../Timeline/Timeline';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_30'>
        <Grid item className='section_title mb_30' >
          <span></span>
          <h1 className='section_title_text'>About Me</h1>
        </Grid>
        <Grid item xs={12} className='aboutme_text'>
          {/* <Typography className='aboutme_text'>{resumeData.about}</Typography> */}
          <ul>
            <li>Looking for challenging career which demands the best of my professional ability in terms of technical and analytical skills, and helps me in developing my current skill and knowledge.</li>
            <br/>
            <li>A competent and amp; Graduate, offering 3yrs of experience in Banking Industry.</li>
            <br />
            <li>Seeking Middle Level assignments in Operations/Migrations/Risk and amp;Quality Management/Training and amp; Development with an organization of high repute.</li>
            <br />
            <li>3 years of experience of banking experience associated with KFintech Pvt LTD as a Sr.Associate.</li>
          </ul>
        </Grid>
      </Grid>
    </>

  )
}

export default Home;

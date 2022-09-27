import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import resumeData from '../utils/resumeData';
import CustomButton from '../Button/Button';
import './Contact.css';


const Contact = () => {
  return (
    <>
      <Grid container className='section pt_45 pb_45'>
        {/* Contact Form */}
       {/* <Grid item xs={12} lg={7} >
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h2 className='section_title_text'>Contact Form</h2>
            </Grid>

            <Grid item xs={10}>
              <Grid container spacing={3}>
                <Grid item xs={10} sm={5}>
                  <TextField fullWidth name='name' label='Name' />
                </Grid>
                <Grid item xs={10} sm={5}>
                  <TextField fullWidth name='emai' label='Email' />
                </Grid>
                <Grid item xs={10}>
                  <TextField fullWidth name='message' label='Message' multiline rows={4} />
                </Grid>
                <Grid item xs={10}>
                  <CustomButton text='Submit' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
  </Grid>*/}

        {/* Contact Information */}
        <Grid item xs={12} >
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h2 className='section_title_text'>Contact Information</h2>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                
                <Grid Item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Phone:</span>{resumeData.phone}
                  </Typography>
                </Grid>
                <Grid Item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Email:</span>{resumeData.email}
                  </Typography>
                </Grid>
                <Grid Item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Address:</span>{resumeData.address}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container className='contactInfo_socialsContainer'>
                  {Object.keys(resumeData.socials).map(key => (
                    <Grid item className='contactInfo_social'>
                      <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default Contact;

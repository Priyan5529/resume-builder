import { Typography } from '@mui/material';
import React from 'react';
import './Profile.css';
import CustomTimeline, { CustomerTimelineSeperator } from '../Timeline/Timeline';
import resumeData from '../utils/resumeData';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import CustomButton from '../Button/Button';
import GetAppIcon from '@mui/icons-material/GetApp';

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomerTimelineSeperator />
        <TimelineContent className="timeline_content">
            {link ? (<Typography className="timelineItem_text">
                <span>{title}:</span>{""} <a href={link} target='_blank'>{text}</a>
            </Typography>) : (
                <Typography className="timelineItem_text">
                    <span>{title}:</span>{text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>
            <figure className='profile_image'>
                <img src={require('../../images/photo 11.jpg')} alt='' />
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                    <CustomTimelineItem title='Name' text={resumeData.name} />
                    <CustomTimelineItem title='Title' text={resumeData.title} />
                    <CustomTimelineItem title='Email' text={resumeData.email} />

                    {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                    ))}
                </CustomTimeline>   
              <div className='button_container'>
                <a href='https://docs.google.com/document/d/1jMt9V9rfPW_qkDzJ7umZYFVLhPLL1Vjc/edit?usp=sharing&ouid=108079862070408075228&rtpof=true&sd=true' target='_blank'><CustomButton text={'Download CV'} icon={<GetAppIcon />}/> </a>
              
              </div>
               
            </div>
        </div>
    );
};
export default Profile;

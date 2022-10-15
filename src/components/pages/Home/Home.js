// Type rafce and tab
import React from 'react'
import { Box } from "@mui/material";

import './Home.scss'
import me from './../../../images/self.jpg';
import SocialIcon from './SocialIcon';
import Emoji from './Emoji';
import { info } from "../../../info/info";


const Home = () => {
  return (
    <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
      justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>

      <Box className="avatar animate__animated animate__shakeX" alt={'Fiona Feng'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '20vh', md: '23vh' }}
        height={{ xs: '25vh', md: '30vh' }}
        borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />

      <Box>
        <h1> Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', justifyContent: "space-around" }}>{info.firstName}</span>
        </h1>
        <Box component={'ul'} justifyContent={'left'} >
          {info.miniBio.map((bio, index) => (
            <Emoji key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box className='icons' p={'0.8rem'} gap={'1.5rem'} justifyContent={'space-around'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
          {info.socials.map((social, index) => (
            <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
          ))}

        </Box>
      </Box>
    </Box>
  )
}

export default Home



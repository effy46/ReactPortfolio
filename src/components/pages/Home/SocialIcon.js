import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

function SocialIcon(props) {
    const { link, label } = props;

    // if (label === 'fionabfeng@gmail.com') {
    //     return <button id="email" onClick={() => window.location.href = link} aria-label={label}>  <MdMailOutline /> </button>

    // }

    return (
        <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
            {label === 'github' ? <FaGithub />
                : label === 'linkedin' ? <FaLinkedin />
                    : <MdMailOutline />}
        </a>
    )



}


export default SocialIcon;
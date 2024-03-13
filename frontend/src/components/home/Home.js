import React from 'react'
import profile from '../../assets/DSC_3437.JPG';
import './style.css'
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className="home">
      <div className="first">
        <img src={profile} alt="profile-pic"/>
      </div>
      <div className="second">
        <h2>Hi, I'm <span> Ashutosh Kumar. </span> A Full Stack Developer.</h2>
        <p>
          I'm an aspiring Full Web Developer with a passion for creating
          innovative and user-friendly websites and applications.
        </p>
      </div>
      <div className="third">
        <ul className='button-row'>
        <Link to="/home"><li><HomeIcon/></li></Link>
        <Link to="/contact"><li><AccountBoxIcon/></li></Link>
        <Link to="/work"><li><WorkOutlineTwoToneIcon/></li></Link>
        <li><ContactMailIcon/></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Home
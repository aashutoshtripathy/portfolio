import React from 'react'
import './style.css'
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div>
    
    <div className="home">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me for any inquiries or collaborations.</p>

      <div>
        <h2>Email</h2>
        <p>
          You can email me at{' '}
          <a href="mailto:your.email@example.com">your.email@example.com</a>.
        </p>
      </div>

      <div>
        <h2>LinkedIn</h2>
        <p>
          Connect with me on LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/your-linkedin-profile">
            Your LinkedIn Profile
          </a>
        </p>
      </div>

      <div>
        <h2>GitHub</h2>
        <p>
          Check out my projects on GitHub:{' '}
          <a href="https://github.com/your-github-username">
            Your GitHub Profile
          </a>
        </p>
      </div>

      <div>
        <h2>Twitter</h2>
        <p>
          Follow me on Twitter:{' '}
          <a href="https://twitter.com/your-twitter-handle">
            @YourTwitterHandle
          </a>
        </p>
      </div>

      <div>
        <h2>Form</h2>
        <p>
          Alternatively, you can use the form below to send me a message:
        </p>
        {/* Include your contact form component here */}
      </div>
      
    <ul>
        <Link to="/home"><li><HomeIcon/></li></Link>
        <Link to="/contact"><li><AccountBoxIcon/></li></Link>
        <Link to="/work"><li><WorkOutlineTwoToneIcon/></li></Link>
        <li><ContactMailIcon/></li>
    </ul>
  </div>
</div>
  )
}

export default Contact
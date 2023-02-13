import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const footer = () => {
  return (
    <div>
          <div className="footer">
              <h5 className='footer-name'>To connect :</h5>
              <div className="footer-right">
              
              <div className="footer-right0">
                  Linkdein
                  < Link to={'https://www.linkedin.com/in/yashskaskar9/'}>
                  <i className="fab fa-linkedin" style={{color: '#0081B4'}}></i>
                  </Link>
              </div>

              <div className="footer-right1">
                  Twitter
                  < Link to={'https://twitter.com/kaskar_yash'}>
                  <i className="fab fa-twitter" style={{color: '#AEE2FF'}} />
                  </Link>
              </div>

              <div className="footer-right2">
                  Github
                  < Link to={'https://github.com/YashKaskar'}>
                  <i className=" fab fa-github" style={{color: '#FFFBF5'}}/>
                  </Link>
                  </div>
                  
              </div>
              
          </div>
    </div>
  )
}

export default footer

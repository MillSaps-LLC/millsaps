import './App.css';
import './Responsive.css';

import main_logo from './media/main-logo.png';
import millsaps_international from './media/millsaps-international.png';
import text_logo_fff from './media/text-logo-wh.png';
import text_logo from './media/text-logo.png';
import linkedin from './media/linkedin.svg';
import twitter from './media/twitter.svg';

export default function App() {
  return (
    <div className="App">
        <div className='navbar'>
          <img src={text_logo} />
        </div>

        <div className='c-1'>
          <div className='c-1_main'>
            <p className='c-1_header'>Feel the power of code.</p>
            <p className='c-1_sub'>
              As MillSaps, our goal is to bring together people working in the field of software between different projects and create the opportunity
              to work together. You can contribute to projects by participating completely voluntarily by people with junior level knowledge of software.
            </p>
            <p className='c-1_sub'>
              Our mission is to grow into a tech company and train people with development potential by recruiting them.
            </p>
            <a href='https://github.com/MillSaps-LLC'><div className='c-1_btn'><p>Join us on GitHub</p></div></a>
          </div>
        </div>

        <div className='c-2'>
          <p className='c-2_header'>See what we're doing.</p>
          <div className='c-2_projects'>
            <a href='https://github.com/orgs/MillSaps-LLC/repositories'><div className='project'>
              <div className='project-info'>
                <p className='c-2_upper'>VOLUNTEER</p>
                <p className='c-2_project'>MillSaps Projects</p>
                <hr />
              </div>
              <p className='c-2_desc'>
                Check out the projects that volunteers have done together.
                If you're also interested or if it is a project you want to participate, join us.
              </p>
            </div></a>

            <a href='https://github.com/orgs/MillSaps-LLC/projects?type=beta'><div className='project'>
              <div className='project-info'>
                <p className='c-2_upper'>COMPANY</p>
                <p className='c-2_project'>MillSaps Projects</p>
                <hr />
              </div>
              <p className='c-2_desc'>
                You can review the projects created by the MillSaps main development team.
                You can apply to be among these projects or to help develop them.
              </p>
            </div></a>
          </div>
        </div>

        <div className='c-3'>
          <div className='c-3_box box_1'>
            <div className='box_info'>
              <p className='box-upper'>COMMUNITY</p>
              <img src={text_logo_fff} />
            </div>
            <p className='box-desc'>
              Join our completely free community and get the opportunity to be involved in different projects.
            </p>
            <a href='https://github.com/orgs/MillSaps-LLC/teams'><div className='box_btn'>Go</div></a>
          </div>

          <div className='c-3_box box_2'>
            <div className='box_info'>
              <p className='box-upper'>COMPANY</p>
              <img src={text_logo_fff} />
            </div>
            <p className='box-desc'>
              If you feel ready, if you want to take your carreer to the next level, we are waiting for you.
            </p>
            <a href='https://github.com/orgs/MillSaps-LLC/people'><div className='box_btn'>Go</div></a>
          </div>
        </div>

        <div className='footer'>
          <img className='millsaps-intl' src={millsaps_international} />
          <div className='footer-social'>
            <a href='https://www.linkedin.com/company/79804070/'><img className='footer-social-item' src={linkedin} /></a>
            <a href='#'><img className='footer-social-item' src={twitter} /></a>
          </div>
        </div>
    </div>
  );
}

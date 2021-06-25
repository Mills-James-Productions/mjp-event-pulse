import React from 'react';
import styled from 'styled-components';
import MJP__SVG from '../globals/MJP__SVG';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';

const MyFooter = styled.div`
  && a {
    color: white;
    margin: 0;
    padding: 0;
  }
  font-family: Avenir;
  width: 100%;
  background-color: black;
  color: white;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  align-items: center;
  justify-content: center;
  && > div {
    text-align: center;
    margin: 0 auto;
  }
  && .icons {
    display: flex;
    justify-content: space-around;
    width: 80%;

    margin: auto;
  }

  && .icons svg {
    margin: 0 0.5rem;
    font-size: 1.75rem;
  }
`;

const LogoWrap = styled.div`
  max-width: 200px;
  height: 60%;
  text-align: center;
  margin: 0 auto;
  && svg {
    height: auto;
    width: 100%;
    margin: 10px auto;
  }
`;

const Footer = () => {
  return (
    <MyFooter>
      <div>
        <a href="/">{`Having Tech Issues?`} </a>
      </div>
      <div>
        <div>Virtual Experiences Brought To You By</div>
        <a href="https://millsjames.com">
          <LogoWrap>
            <MJP__SVG />
          </LogoWrap>
        </a>
      </div>
      <div>
        <div className="icons">
          <a>
            <EmailIcon />
          </a>
          <a>
            <LinkedInIcon />
          </a>
          <a>
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </MyFooter>
  );
};

export default Footer;
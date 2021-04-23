import React from 'react';
import styled from 'styled-components';

import Banner_ImgBg from 'components/Banners/Banner_ImgBg.js';

const Wrap = styled.div`
  margin-top: 3rem;
  margin-bottom: 3srem;
`;
const Inner = styled.div`
  min-height: 600px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 2.5rem;
  }
  && p {
    max-width: 480px;
    margin: 2rem auto;
    font-size: 1.75rem;
  }
  && button {
    background-color: ${(props) => props.theme.blue};
    color: white;
    min-width: 150px;
    font-size: 1rem;
    padding: 1rem 2rem;
  }
  @media all and (max-width: 900px) {
    h2 {
      font-size: 2rem;
    }
    && p {
      max-width: 60%;
      margin: 1rem auto;
      font-size: 1.5rem;
    }
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media all and (max-width: 768px) {
    min-height: 300px;
  }
  @media all and (max-width: 500px) {
    && p {
      max-width: 90%;
      margin: 1rem auto;
      font-size: 1.5rem;
    }
  }
`;

const MainProgram = ({ theme, main_event }) => {
  return (
    <Wrap>
      <Banner_ImgBg
        color={theme.blue}
        imgSrc={`https://storage.googleapis.com/mjp-stream-public/2021-jfcs-faces-of-inspiration/main-event.png`}
      >
        <Inner>
          <h2>Main Program</h2>
          <p style={{}}>
            {main_event.Description
              ? main_event.Description
              : 'We will need the description for the thank you message, this is placeholder for the main program.'}
          </p>
          <button
            onClick={() =>
              (window.location.href = main_event.streamLinks[0].url)
            }
          >
            JOIN US
          </button>
        </Inner>
      </Banner_ImgBg>
    </Wrap>
  );
};

export default MainProgram;
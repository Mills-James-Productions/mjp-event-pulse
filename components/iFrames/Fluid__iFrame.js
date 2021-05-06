import React from 'react';
import styled from 'styled-components';

const FrameWrap = styled.div`
  position: relative;
  height: 100%;
  min-height: ${(props) => props?.minHeight || 'inherit'};
  width: 100%;
  && iframe {
    height: 100%;
    width: 100%;
  }
`;
const Fluid__iFrame = ({ src = '/', options, minHeight }) => {
  return (
    <FrameWrap minHeight={minHeight}>
      <iframe src={src} frameborder="0"></iframe>
    </FrameWrap>
  );
};

export default Fluid__iFrame;

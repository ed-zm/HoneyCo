/**
 *
 * VimeoJumbotron
 *
 */

import React from 'react';
import FontAwesome from 'react-fontawesome';
import ReactPlayer from 'react-player';
import { Button, Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';
import { HoneyCoDarkGray, HoneyCoYellow } from '../../constants';

const StyledJumbotron = styled.div`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 56.2%; /* (img-height / img-width * 100) */
  position: relative;
`;

const JumbotronContainer = styled.div`
  position: absolute;
  ${(props) => props.w === 'topLeft' || props.w === 'topRight' ? 'top: 0;' : ''}
  ${(props) => props.w === 'bottomLeft' || props.w === 'bottomRight' ? 'bottom: 0;' : ''}
  ${(props) => props.w === 'bottomRight' || props.w === 'topRight' ? 'right: 0;' : ''}
  ${(props) => props.w === 'bottomLeft' || props.w === 'topLeft' ? 'left: 0;' : ''}
  padding: 1rem;
`;

const StyledCTAButton = styled(Button)`
  background-color: ${(props) => props.buttonBackgroundColor};
  border: none;
  color: ${(props) => props.buttonTextColor};
`;

const ScalableModal = styled(Modal)`
  @media (min-width: 576px) {
    max-width: 90vw
  }
`;

class VimeoJumbotron extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isPlaying: false,
    };
  }

  toggle() {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  }

  render() {
    const { image, buttonLocation, buttonBackgroundColor, buttonTextColor, buttonText, useModal } = this.props;
    if (this.state.isPlaying && !useModal) {
      const vimeoConfig = {};
      return (
        <ReactPlayer
          playing url="https://vimeo.com/197954655" vimeoConfig={vimeoConfig} width="100vw"
          height="56.2vw" onEnded={this.toggle}
        />
      );
    }
    return (
      <StyledJumbotron image={image}>
        <JumbotronContainer w={buttonLocation}>
          <StyledCTAButton
            buttonBackgroundColor={buttonBackgroundColor}
            buttonTextColor={buttonTextColor}
            onClick={this.toggle}
          >
            <FontAwesome name="play" /> {buttonText}</StyledCTAButton>
        </JumbotronContainer>
        <ScalableModal isOpen={this.state.isPlaying && useModal} toggle={this.toggle} style={{ marginTop: '25vh' }}>
          <ModalBody style={{ padding: '0' }}>
            <ReactPlayer
              url={this.props.videoUrl} vimeoConfig={{}} width="90vw"
              height="50.6vw" onEnded={this.toggle}
            />
          </ModalBody>
        </ScalableModal>
      </StyledJumbotron>
    );
  }
}

VimeoJumbotron.propTypes = {
  image: React.PropTypes.string.isRequired,
  videoUrl: React.PropTypes.string.isRequired,
  buttonLocation: React.PropTypes.oneOf(['topLeft', 'bottomRight', 'topRight', 'bottomLeft']),
  buttonText: React.PropTypes.string,
  buttonTextColor: React.PropTypes.string,
  buttonBackgroundColor: React.PropTypes.string,
  useModal: React.PropTypes.bool,
};

VimeoJumbotron.defaultProps = {
  buttonLocation: 'topLeft',
  buttonText: 'Play Video',
  buttonTextColor: HoneyCoDarkGray,
  buttonBackgroundColor: HoneyCoYellow,
  useModal: false,
};

export default VimeoJumbotron;

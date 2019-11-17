import PropTypes from 'prop-types';
import styled from 'styled-components';

import { remCalc } from '../../utils/remCalc';

const BaseButton = styled.button`
  border-radius: ${remCalc('100')};
  border-width: ${remCalc('2')};
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${remCalc('14')};
  font-style: normal;
  line-height: ${remCalc('40')};
  margin: ${remCalc('0', '12')};
  padding: ${remCalc('0', '40')};
  text-align: center;
  transition: 0.3s;

  &:hover,
  &:active {
    text-decoration: none;
  }
  &:focus,
  &:active,
  &:visited {
    outline: none;
  }

  ${({ size }) => {
    if (size === 'tiny') {
      return `
          font-size: ${remCalc(12)};
          line-height: ${remCalc(25)};
          padding: ${remCalc(0, 12)};
          `;
    }
    if (size === 'small') {
      return `
          line-height: ${remCalc(35)};
          padding: ${remCalc(0, 35)};
          `;
    }
    if (size === 'large') {
      return `
          font-size: ${remCalc(20)};
          `;
    }
    if (size === 'block') {
      return `
          display: block;
          width: 100%;
          `;
    }
  }}
`;

const defaultProps = {
  children: null,
  disable: false,
  size: 'normal',
  onClick: null
};
const propTypes = {
  children: PropTypes.node,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['normal', 'tiny', 'small', 'large', 'block'])
};
BaseButton.defaultProps = defaultProps;
BaseButton.propTypes = propTypes;
export default BaseButton;

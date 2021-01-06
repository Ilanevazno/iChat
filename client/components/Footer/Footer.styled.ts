import styled, { css } from 'styled-components';

const Container = styled.header`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      background: ${colors.primary};
      min-height: 4rem;
      display: flex;
      align-items: center;
      color: white;
    `;
  }};
`;

export { Container };
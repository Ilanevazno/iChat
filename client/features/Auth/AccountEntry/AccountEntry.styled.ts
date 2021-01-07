import styled from 'styled-components';

import { titles } from '../../../shared/mixins/titles.styled';
const FormElement = styled.div`
    width: 21rem;
    margin: 1rem auto;
    text-align: center;

  & > div {
    width: 100%;
  }
`;

const Title = styled.h1`
  ${titles.h3({})};
`;

export { FormElement, Title };

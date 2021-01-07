import styled from 'styled-components';

import { titles } from '../../../shared/mixins/titles.styled';
const FormElement = styled.div`
    width: 25rem;
    margin: 1.5rem auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;

  & > div {
    width: 100%;
  }
`;

const Title = styled.h1`
  ${titles.h3({})};
`;

const Text = styled.span`
  ${titles.text()};
`;

const FieldsSection = styled.div`
  display: flex;
  align-items: center;
`;

export { FormElement, FieldsSection, Title, Text };

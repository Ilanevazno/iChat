import { css } from 'styled-components';
import { mainTheme } from '../theme';

type Title = {
  color?: string;
};

const { typography } = mainTheme;

const h1 = ({ color }: Title) => css`
  color: ${color || 'black'};
  font-weight: bold;
  font-family: ${typography.secondaryFontName};
  font-size: 1.7rem;
  line-height: 2rem;
`;

const h2 = ({ color }: Title) => css`
  color: ${color || 'black'};
  font-weight: bold;
  font-family: ${typography.secondaryFontName};
  font-size: 1.5rem;
  line-height: 1.7rem;
`;

const h3 = ({ color }: Title) => css`
  color: ${color || 'black'};
  font-weight: bold;
  font-family: ${typography.secondaryFontName};
  font-size: 1.3rem;
  line-height: 1.5rem;
`;

const titles = { h1, h2, h3 };

export { titles };

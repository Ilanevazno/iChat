type Theme = {
  colors: {
    primary: string,
    secondary: string,
    lightDark: string,
  },
  shadows: {
    primary: string;
  },
  typography: {
    fontName: string;
    secondaryFontName: string;
    fontSize: string;
    lineHeight: string;
  };
};

const colors = {
  primary: '#009688',
  secondary: '#607d8b',
  lightDark: '#463c3c',
}

const shadows = {
  primary: `0.1875rem 0.1875rem 0.5625rem 0rem ${colors.lightDark}`
};

const typography = {
  fontName: 'Montserrat, Arial, sans-serif',
  secondaryFontName: '"Open Sans", Arial, sans-serif',
  fontSize: '14px',
  lineHeight: '1.7142',
};

const mainTheme: Theme = {
  colors,
  shadows,
  typography,
}

export { mainTheme };

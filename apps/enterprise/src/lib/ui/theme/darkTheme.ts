import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    success: 'deepskyblue',
    alert: 'darkviolet',
    idle: 'blue',
    foreground: 'white',
    background: 'black',
    text: 'white',
    textSupporting: 'white',
    textShy: 'white',
    mist: 'lightgray',
    mistExtra: 'rgba(85, 93, 132, 0.6)',
    overlay: 'hsla(60, 28%, 100%, 0.8)',
    contrast: 'white',
  },
  shadows: {
    small: 'rgb(248 231 23 / 20%) 0px 0px 0px 1px, rgb(248 231 23 / 20%) 0px 2px 4px',
    medium: 'rgb(248 231 23 / 10%) 0px 0px 0px 1px, rgb(248 231 23 / 20%) 0px 3px 6px, rgb(248 231 23 / 40%) 0px 9px 24px',
  },
};

export const gradientBackground = {
  background: 'linear-gradient(300deg, deepskyblue, darkviolet, blue)',
  backgroundSize: '180% 180%',
  animation: 'gradient-animation 18s ease infinite',
};

export const gradientKeyframes = {
  '@keyframes gradient-animation': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
};

import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import 'assets/scss/styles.scss';
import { theme } from 'assets/muiStyles/styles';
import { ThemeProvider } from '@material-ui/core';
import ViewCount from 'utility/ViewCount';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    ViewCount();
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
      cursor?.setAttribute('style', 'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;');
    });
    document.addEventListener('click', () => {
      cursor?.classList.add('expand');
      setTimeout(() => {
        cursor?.classList.remove('expand');
      }, 500);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="cursor" />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};
export default MyApp;

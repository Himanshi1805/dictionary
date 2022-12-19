import React from 'react';
import styles from './Header.module.css';
import categories from '../../data/Category';

import {TextField, ThemeProvider, createTheme, MenuItem} from '@mui/material';
import {useTranslation} from 'react-i18next';

const Header = ({category, setCategory, word, setWord, lightMode}) => {

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? '#000' : '#fff',
      },
      mode: lightMode ? 'light' : 'dark',
    },
  });

  const {t, i18n} = useTranslation();

  const changeHandler = (language) => {
    i18n.changeLanguage(language);
    setCategory(language);
    setWord('');
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{word ? word : t('Heading.1')} </h1>
      <div className={styles.inputs}>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className={styles.search}
            label={t('Word.1')}
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className={styles.select}
            select
            label={t('Lang.1')}
            value={category}
            onChange={(e) => changeHandler(e.target.value)}
            variant="standard"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;

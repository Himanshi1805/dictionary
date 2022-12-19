import {useEffect, useState} from 'react';

import axios from 'axios';
import {Container, Switch} from '@mui/material';
import {alpha, styled} from '@mui/material/styles';
import {grey} from '@mui/material/colors';
import {useTranslation} from 'react-i18next';

import Header from './Components/Header/Header';
import Definitions from './Components/Definitions/Definitions';
import Footer from './Components/Footer/Footer';

function App() {

  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [lightMode, setLightMode] = useState(false);

  const ThemeSwitch = styled(Switch)(({theme}) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[600],
      '&:hover': {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
  }));

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  const {t} = useTranslation();

  return (
    <div className={lightMode ? 'App-lightMode' : 'App'}>
      <Container className="Container" maxWidth="md">
        <div className="btn-top">
          <span className="mode">{lightMode ? t('Mode.1') : t('Mode.2')}</span>
          <ThemeSwitch
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>

        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            category={category}
            lightMode={lightMode}
          />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;

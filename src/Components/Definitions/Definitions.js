import React from 'react';
import styles from './Definitions.module.css';
import { useTranslation } from 'react-i18next';

const Definitions = ({word, category, meanings, lightMode}) => {

  const { t } = useTranslation();

  return (
    <div className={styles.meanings}>
      {/* audio */}
      {meanings[0] && word && category === 'en' && (
        <audio
         
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{backgroundColor: '#fff', borderRadius: 10}}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {/* audio */}

      {word === '' ? (
        <span className={styles.subTitle}>
        {t('Text')}
        </span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className={styles.singleMean}
                style={{backgroundColor: lightMode ? "#3b5360" : 'white', color: lightMode ? "white" : 'black'}}
              >
                <b>{def.definition}</b>
                <hr style={{backgroundColor: lightMode ? "whilte" :'black', width: '100%'}} />
                {def.example && (
                  <span>
                    <b>Example : </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;

import React from 'react';

import {Word} from "../../domain/model/word-model";

import './WordList.css';

interface Props {
  words: Array<Word>;
}

export const WordList: React.FC<Props> = ({words}) => {
  return (
    <ul className="list">
      {words.map((word, index) =>
        <li key={index} className="listItem">
          <div className="listItem__container">
            <div className="listItem__header">
              <h3 className="listItem__word">
                {word.word}
              </h3>
              <h3 className="listItem__pos">
                {word.pos}
              </h3>
            </div>
            {word.synonyms !== undefined ? <p className="listItem__synonyms">{word.synonyms}</p> : <br/>}
            <p className="listItem__definition">
              {word.definitions.map((def) => <span>{def}<br/></span>)}
            </p>
          </div>
        </li>
      )}
    </ul>
  );
}
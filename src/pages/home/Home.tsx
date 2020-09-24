import React, {useState} from 'react';

import {WordList} from '../../components/WordList/WordList';

import './Home.css';
import {SearchBar} from "../../components/SearchBar/SearchBar";
import {Word} from "../../domain/model/word-model";

interface Props {}

export const Home: React.FC<Props> = () => {
  const [words, setWords] = useState<Array<Word>>([]);
  const getWords: Function = (data: Array<Word>) => {
    setWords(data);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="searchbar__container">
          <SearchBar setWords={getWords}/>
        </div>
        <div className="wordlist__container">
          <WordList words={words}/>
        </div>
      </div>
    </div>
  );
}
import React, {useEffect, useState} from 'react';

import './SearchBar.css';
import axios from "../../infra/http/axios-http-client/axios";
import {Word} from "../../domain/model/word-model";

interface Props {
  setWords: Function;
}

export const SearchBar: React.FC<Props> = ({setWords}) => {
  const [wordName, setWordName] = useState<string>('');

  const searchWords: Function = async (): Promise<void> => {
    try {
      const {data, status} = await axios.get<Array<Word>>(`/word?name=${wordName}`);
      if (status === 200) setWords(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    searchWords();
  }, [wordName]);

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search words"
        onChange={
          ({target}) => setWordName(target.value)
        }
        className="searchbar__input"
      />
    </div>
  );
}
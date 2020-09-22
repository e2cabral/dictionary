import React, { useEffect, useState } from 'react';

import axios from '../../infra/http/axios-http-client/axios';

import './WordList.css';

interface Props {
    words: Array<any>
}

export const WordList: React.FC<Props> = () => {
    const [words, setWords] = useState<Array<Word>>([]);

    const getWordList = async () => {
        try {
            const { data, status } = await axios.get<Array<Word>>('/');
            if (status === 200) setWords(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getWordList();
    }, []);

    return (
        <ul className="list">
            {words.map((word) =>
                <li className="listItem">
                    <div className="listItem__container">
                        <div className="listItem__header">
                            <h3 className="listItem__word">
                                { word.word }
                            </h3>
                            <h3 className="listItem__pos">
                                { word.pos }
                            </h3>
                        </div>
                        <p className="listItem__synonyms">
                            { word.synonyms }
                        </p>
                        <p className="listItem__definition">
                            { word.definitions.map((def) => <span>{ def }<br /></span>) }
                        </p>
                        <i className="listItem__icon"></i>
                    </div>
                </li>
            )}
        </ul>
    );
}

export type Word = {
    word: string,
    pos: string,
    synonyms: string,
    definitions: Array<string>,
}
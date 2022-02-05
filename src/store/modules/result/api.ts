import axios from "axios";

export interface IResponse {
  word: string;
  origin: string;
  phonetics: { [key: string]: string }[];
  meanings: [
    {
      partOfSpeech: string;
      definitions: {
        definition: string;
        example: string;
        synonyms: string[];
        antonyms: string[];
      }[];
    }
  ];
}

export const API = {
  searchWord(word: string) {
    return axios.get<IResponse>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
  },
};

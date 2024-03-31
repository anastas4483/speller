import axiosDefault from "axios";

export const axios = axiosDefault.create({
  baseURL: 'https://speller.yandex.net/services/spellservice.json'
});
import { axios } from "@/api/axios-config";
import { checkTextUrl } from "@/api/urls";
import { TextErrors } from "@/models/text-errors";
import { AxiosResponse } from "axios";

export class Requests {

  static checkText(text: string): Promise<AxiosResponse<TextErrors[]>> {
    return axios.get(checkTextUrl, { params: { text } });
  }

}

export const checkText = (text: string): Promise<AxiosResponse<TextErrors[]>> => {
  return axios.get(checkTextUrl, { params: { text } });
};

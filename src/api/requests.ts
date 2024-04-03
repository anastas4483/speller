import { axios } from "@/api/axios-config";
import { checkTextUrl } from "@/api/urls";
import { AxiosResponse } from "axios";

export class Requests {

  static checkText(text: string): Promise<AxiosResponse<TextErrors[]>> {
    return axios.get(checkTextUrl, { params: { text } });
  }

}
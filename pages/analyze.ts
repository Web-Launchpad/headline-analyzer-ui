import { HeadlineAnalytics } from "./headline.interface";
import axios from "axios";

export function analyze(headline: string): Promise<HeadlineAnalytics> {
  const api = `https://headlineanalyzer.azurewebsites.net/api/headlineanalyzer?code=MOqBshlq_tdcySS2vUgRWRJxahUooYmMTtosb8f01QBFAzFuVIEdHw%3D%3D&headline=${headline}`;
  const dummyApi = `https://jsonplaceholder.typicode.com/todos/1`;

  return axios
    .get(dummyApi)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

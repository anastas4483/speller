import { Requests } from "@/api/requests";

onmessage = function (event) {

  Requests.checkText(event.data)
    .then((res) => {
      this.postMessage(res.data);
    });
};
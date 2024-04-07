import CheckTextWorker from '@/workers/check-text-worker?worker';

export class WorkerService {

  private static checkTextWorker = new CheckTextWorker();

  private constructor() { }

  static postMessage(message: any) {
    this.checkTextWorker.postMessage(message);
  }

  static setOnMessage(cb: (message: any) => void) {
    this.checkTextWorker.onmessage =
      (res) => cb(res.data);
  }

  static terminate() {
    this.checkTextWorker.terminate();
  }

};
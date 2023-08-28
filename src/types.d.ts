interface Window {
  sendMsg: Function;
  add: Function;
  remove: Function;
  message: MessagePort;
  webReceivePort: MessagePort;
  sendToWeb: Function;
}

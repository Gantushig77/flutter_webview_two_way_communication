import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/app.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [port1Msg, setPort1Msg] = useState<String>('');

  // TODO: The web client side cannot check or see user authentication token.
  // Since it is not possible, the developer can check or see the token on serving app
  // Eg : Node JS server.

  function sendMsg(msg: String) {
    console.log(`Sending msg at port2 : ${msg}`);
    window.message.postMessage(`Got the count in native : ${count}`);
  }

  function sendToWeb(msg: String) {
    console.log(`Web message ${msg}`);
    setPort1Msg(msg ?? '');
  }

  function increment(): String {
    setCount((count) => count + 1);
    alert('test');
    return `The count: ${count}`;
  }

  function decrement(): String {
    setCount((count) => count - 1);
    return `The count: ${count}`;
  }

  useEffect(() => {
    // The mobile app will use these methods to add or remove the count state
    window.add = increment;
    window.remove = decrement;
    window.sendToWeb = sendToWeb;
  }, []);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={() => sendMsg(`Sending count : ${count}`)}>
        Sending the count
      </button>

      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <p className='read-the-docs'>Message from app : {port1Msg}</p>
    </>
  );
}

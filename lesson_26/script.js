// const EXMO_WS_BASE_URL = 'wss://ws-api.exmo.com:443/v1/public';

// const data = {
//   id: 1,
//   method: 'subscribe',
//   topics: ['spot/trades:BTC_USD', 'spot/ticker:LTC_USD'],
// };

// const ws = new WebSocket(EXMO_WS_BASE_URL);

// ws.onopen = () => {
//   console.log('Connected to the server');
// };

// ws.onmessage = (event) => {
//   console.log(`Message from server: `, JSON.parse(event.data));
// };

// const btn = document.createElement('button');
// btn.textContent = 'Subscribe';
// document.body.appendChild(btn);

// class WebSocketClient {
//   constructor(url, onMessage) {
//     this.url = url;
//     this.onMessage = onMessage;
//     this.ws = new WebSocket(url);

//     this.ws.onmessage = this.onMessage;
//     this.#applyHandlers();
//   }

//   #applyHandlers() {
//     this.ws.onerror = this.onerror;
//     this.ws.onclose = this.onclose;
//   }

//   #reconnect() {
//     this.ws = new WebSocket(this.url);
//     this.#applyHandlers();
//   }

//   send(data) {
//     this.ws.send(JSON.stringify(data));
//   }

//   onerror(...data) {
//     console.warn(...data);
//   }

//   onclose(event) {
//     if (event.code === 1006) {
//       this.#reconnect(); //
//     }
//   }
// }

// const client = new WebSocketClient(EXMO_WS_BASE_URL, (event) => {
//   console.log(`Message from server: `, JSON.parse(event.data));
// });

// btn.addEventListener('click', () => {
//   if (client.ws.readyState === WebSocket.OPEN) {
//     client.send(data);
//   } else {
//     console.warn('WebSocket is not open');
//   }
// });

// ------------------------------------------------------------------------ map test
const map = new Map();

map.set({ test: 'name' }, 'Object');

console.log(map.get({ test: 'name' })); // ------------ Object, undefined,

// 1) Использовать Open Weather map
// 2) ключ через инпун для погоды
// 3) после загрузки ключей - спросить геолокацию у пользователя.
// 4) состояние хранить

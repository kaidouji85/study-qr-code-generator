import './style.css'
import QRCode from 'qrcode'

(async () => {
  const data = 'hello';
  QRCode.toCanvas(document.querySelector<HTMLCanvasElement>('#qr-code')!, data, (error) => {
    const message = error ? error : 'success!';
    console.log(message);
  });
})();

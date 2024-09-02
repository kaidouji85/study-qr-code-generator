import './style.css'
import QRCode from 'qrcode'

(async () => {
  QRCode.toCanvas(document.querySelector<HTMLCanvasElement>('#qr-code')!, 'hello', function (error) {
    const message = error ? error : 'success!';
    console.log(message);
  });
})();

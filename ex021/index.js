var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 600, 400)

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(300, 30);
pincel.lineTo(40, 200);
pincel.lineTo(560, 200);
pincel.fill();

pincel.beginPath();
pincel.moveTo(300, 370);
pincel.lineTo(40, 200);
pincel.lineTo(560, 200);
pincel.fill();

pincel.fillStyle = 'darkblue';
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2 * 3.14);
pincel.fill();
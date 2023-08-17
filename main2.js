const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let cols = Math.floor(window.innerWidth / 20) + 1;
let ypos = Array(cols).fill(0);

ctx.fillStyle = 'rgba(24, 24, 31, 0.1)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function matrix () {
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  if (canvas.width !== w) {
    canvas.width = w;
    cols = Math.floor(window.innerWidth / 20) + 1;
    ypos = Array(cols).fill(0);
  }
  if (canvas.height !== h) {
    canvas.height = h;
  }

  ctx.fillStyle = 'rgba(24, 24, 31, 0.1)';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = 'rgba(0, 130, 0, 1)';
  ctx.font = '15pt monospace';

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);
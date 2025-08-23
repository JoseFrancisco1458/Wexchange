const container = document.getElementById('snow-container');

for (let i = 1; i <= 50; i++) {
  const flake = document.createElement('div');
  flake.className = 'snowflake';
  if (i % 6 === 0) flake.classList.add('blur');

  const size = (Math.random() * 5) * 0.2; // 0 a 1vw
  const leftIni = (Math.random() * 20 - 10) + 'vw';
  const leftEnd = (Math.random() * 20 - 10) + 'vw';
  const left = Math.random() * 100 + 'vw';
  const duration = 5 + Math.random() * 10; // 5 a 15 s
  const delay = -Math.random() * 10;

  flake.style.setProperty('--size', size + 'vw');
  flake.style.setProperty('--left-ini', leftIni);
  flake.style.setProperty('--left-end', leftEnd);
  flake.style.left = left;
  flake.style.animationDuration = duration + 's';
  flake.style.animationDelay = delay + 's';

  container.appendChild(flake);
}



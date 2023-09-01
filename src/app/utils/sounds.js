import short from '/public/short-beep-1s-ceaceb1616a2f4d17d369a69c137ef9c.mp3';
import long from '/public/long-beep-1s-9cdd90ffb3c17e8fcef63882954d3e46.mp3';

export function shortBeep() {
  const audio = new Audio(short);
  audio.play();
}

export function longBeep() {
  const audio = new Audio(long);
  audio.play();
}

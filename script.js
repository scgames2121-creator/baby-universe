// === Music Tap-to-Play ===
const music = document.getElementById('music');
document.body.addEventListener('click', () => {
  music.play();
}, { once: true });

// === Floating Hearts ===
setInterval(() => {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.fontSize = (15 + Math.random() * 30) + "px";
  heart.style.animationDuration = (4 + Math.random() * 6) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

// === Full lyrics + sweet messages (with offset) ===
const musicOffset = 12; // seconds intro before vocals

const lyrics = [
  // Sweet messages intro
  { text: "Hi Baby Jeff! 🥰", time: 1 + musicOffset },
  { text: "You are my universe 💖", time: 4 + musicOffset },
  { text: "Thinking of you makes me smile 😊", time: 7 + musicOffset },

  // Universe lyrics by Thuy (estimated timing + offset)
  { text: "Oh, yeah (oh, yeah)", time: 10 + musicOffset },
  { text: "Just hold me close (just hold me close)", time: 13 + musicOffset },
  { text: "You keep me afloat (keep me)", time: 16 + musicOffset },
  { text: "With you, I feel stronger, oh", time: 19 + musicOffset },
  { text: "Just imagine all the little things we could do", time: 22 + musicOffset },
  { text: "Just imagine if I put my trust in you", time: 25 + musicOffset },
  { text: "Oh I, oh I (oh I)", time: 28 + musicOffset },
  { text: "'Cause you are my universe, my everything, my sunset", time: 31 + musicOffset },
  { text: "You still give me butterflies", time: 34 + musicOffset },
  { text: "My lullaby, you are", time: 37 + musicOffset },
  { text: "Everything I wanted (I wanted)", time: 40 + musicOffset },
  { text: "When you see me runnin' (runnin', runnin')", time: 43 + musicOffset },
  { text: "Run after me, don't let me go (oh)", time: 46 + musicOffset },
  { text: "Just imagine all the little things we could do", time: 49 + musicOffset },
  { text: "Just imagine if I put my trust into you", time: 52 + musicOffset },
  { text: "Oh I, oh I, run after me", time: 55 + musicOffset },
  { text: "I was down bad in a place where the sun don't shine", time: 58 + musicOffset },
  { text: "Had my head down, looked up, then you fell in my life", time: 61 + musicOffset },
  { text: "I was ducking all signs (oh), but look at how the stars aligned", time: 64 + musicOffset },
  { text: "You give me fever, you give me chills", time: 67 + musicOffset },
  { text: "Started as strangers, now look what we built", time: 70 + musicOffset },
  { text: "Oh I, oh I (oh I)", time: 73 + musicOffset },
  { text: "'Cause you are my universe, my everything, my sunset", time: 76 + musicOffset },
  { text: "You still give me butterflies", time: 79 + musicOffset },
  { text: "My lullaby, you are", time: 82 + musicOffset },
  { text: "Everything I wanted", time: 85 + musicOffset },
  { text: "When you see me runnin' (see me runnin')", time: 88 + musicOffset },
  { text: "Run after me, don't let me go, oh", time: 91 + musicOffset },
  { text: "Just imagine all the little things we could do", time: 94 + musicOffset },
  { text: "Just imagine if I put my trust into you", time: 97 + musicOffset },
  { text: "Oh I, oh I (oh I)", time: 100 + musicOffset },
  { text: "My universe, my everything, my sunset", time: 103 + musicOffset },
  { text: "You still give me butterflies, oh", time: 106 + musicOffset },
  { text: "Everything I wanted", time: 109 + musicOffset },
  { text: "When you see me runnin', run after me", time: 112 + musicOffset },

  // Sweet outro messages
  { text: "I love you forever, Baby Jeff 💖", time: 115 + musicOffset },
  { text: "You make my world brighter 🌸", time: 118 + musicOffset },
  { text: "I’m always yours 🥰", time: 121 + musicOffset }
];

// === Show chat bubbles synced to music ===
const shown = new Set();
setInterval(() => {
  const currentTime = music.currentTime;
  lyrics.forEach((line, i) => {
    if (currentTime >= line.time && !shown.has(i)) {
      shown.add(i);
      const bubble = document.createElement('div');
      bubble.className = 'floating-lyric';
      bubble.textContent = line.text;
      bubble.style.left = Math.random() * 60 + "vw";
      bubble.style.top = Math.random() * 70 + "vh";
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 5000);
    }
  });
}, 200);

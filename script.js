// SET YOUR START DATE HERE (Year, Month - 1, Day)
const startDate = new Date(2023, 6, 14); // Feb 14, 2023

function startAnimation() {
    document.getElementById('heart-btn').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
    
    typeWriter("headline", "For the love of my life:", 50);
    setTimeout(() => {
        typeWriter("footer-msg", "Every second with you is a gift. I Love You Baba! ", 50);
    }, 3000);

    updateTimer();
    setInterval(updateTimer, 300);
}

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById('clock').innerHTML = 
        `${days} days ${hours}h ${mins}m ${secs}s`;
}

function typeWriter(id, text, speed) {
    let i = 0;
    const element = document.getElementById(id);
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }}
    type();
}

document.addEventListener('mousemove', function(e) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️'; // You can change this to any emoji
    heart.className = 'cursor-heart';
    
    // Position the heart at the mouse coordinates
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    
    // Randomize the size slightly for a better effect
    const size = Math.random() * 20 + 10 + 'px';
    heart.style.fontSize = size;

    document.body.appendChild(heart);

    // Remove the heart from the document after the animation ends (2 seconds)
    setTimeout(() => {
        heart.remove();
    }, 2000);
});


function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = "❤"; // You can use "♥" or any heart emoji
    
    // Randomize position and speed
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 seconds
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.body.appendChild(heart);

    // Remove heart after it falls to keep the site fast
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start the rain! (Creates a heart every 300ms)
setInterval(createFallingHeart, 300);

function startPeeking() {
    const boy = document.getElementById('peeping-boy');
    if (!boy) return;

    // Slide him in
    setTimeout(() => {
        boy.classList.add('peek');
    },2500);


    // Slide him out after 5 seconds
    setTimeout(() => {
        boy.classList.remove('peek');
    }, 5000);

    // Random wait time (5-12 seconds) for the next peek
    const nextDelay = Math.random() * 7000 + 5000;
    setTimeout(startPeeking, nextDelay);
}

window.onload = startPeeking;

// This waits for the user to click anywhere on the page ONE time
document.addEventListener('click', function() {
    var audio = document.getElementById("valentineMusic");
    audio.play();
}, { once: true }); // The 'once: true' ensures it doesn't restart every time they click
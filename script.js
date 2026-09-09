const screen = document.getElementById("letterScreen"), site = document.getElementById("site"), btn = document.getElementById("openBtn"), music = document.getElementById("bgMusic"), musicBtn = document.getElementById("musicBtn");
btn.addEventListener("click", async () => { try { await music.play(); musicBtn.textContent = "♫ Music on" } catch (e) { musicBtn.textContent = "♫ Add song.mp3" } screen.style.opacity = "0"; screen.style.transition = "opacity .8s ease"; setTimeout(() => { screen.remove(); site.classList.remove("hidden"); scrollTo(0, 0) }, 800) });
musicBtn.addEventListener("click", async () => { if (music.paused) { try { await music.play(); musicBtn.textContent = "♫ Music on" } catch (e) { musicBtn.textContent = "♫ Add song.mp3" } } else { music.pause(); musicBtn.textContent = "♫ Music off" } });

// Birthday countdown
function updateCountdown() {
    const now = new Date();
const birthday = new Date(2026, 8, 13, 0, 0, 0);

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// Birthday countdown
function updateCountdown() {
    const now = new Date();

    let year = now.getFullYear();

    let birthday = new Date(year, 8, 13, 0, 0, 0);

    if (now > birthday) {
        birthday = new Date(year + 1, 8, 13, 0, 0, 0);
    }

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);
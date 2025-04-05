// Only show loader once per session
if (!sessionStorage.getItem('loaderShown')) {
    var loader = document.querySelector("#loader");
    
    // Hide loader after animations complete (3s delay + 1s animation)
    setTimeout(function() {
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
        }, 700); // Match CSS transition time
    }, 4000);
    
    // Set flag so loader won't show again
    sessionStorage.setItem('loaderShown', 'true');
} else {
    // If loader was already shown, hide it immediately
    document.getElementById('loader').style.display = 'none';
}

// Hero media scroll transformation
const heroMedia = document.querySelector('.hero-media');
const maxScroll = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / maxScroll;
    
    // Move upward (translateY from 0 to -100vh)
    const translateY = -scrollPercentage * 100;
    
    // Tilt (rotate from 20deg to -10deg)
    const rotate = 20 - (scrollPercentage * 30);
    
    heroMedia.style.transform = `rotate(${rotate}deg) translateY(${translateY}vh)`;
});

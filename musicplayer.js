window.onload = () => {
    const audio = document.getElementById("my-audio");
    const muteControl = document.getElementById("mute-toggle");
    const muteIcon = document.getElementById("mute-icon");
    
    // Set volume to 70% (0.7)
    audio.volume = 0.2;
    
    // Set initial icon
    updateMuteIcon();
    
    muteControl.addEventListener("click", () => {
        // Toggle mute
        audio.muted = !audio.muted;
        
        // Update icon
        updateMuteIcon();
        
        // Optional: If audio isn't playing and we unmute, try to play
        if (!audio.muted && audio.paused) {
            audio.play().catch(e => console.log("Play failed:", e));
        }
    });
    
    function updateMuteIcon() {
        if (audio.muted) {
            muteIcon.src = "/images/icons/sound off.png";
            muteIcon.alt = "Unmute";
        } else {
            muteIcon.src = "/images/icons/sound on.png";
            muteIcon.alt = "Mute";
        }
    }
    
    // Handle autoplay
    audio.play().catch(e => {
        console.log("Autoplay prevented - user needs to interact");
        audio.muted = true;
        updateMuteIcon();
    });
};
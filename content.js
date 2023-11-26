// Function to display subtitles
function displaySubtitle(time) {
    const videoPlayer = document.querySelector('video'); // Assuming the video player element has 'video' tag
    const subtitleContainer = document.createElement('div');
    subtitleContainer.classList.add('subtitle-container');
    
    // Find the subtitle for the current time
    const currentSubtitle = subtitles.find(subtitle => time >= subtitle.start && time <= subtitle.end);
    
    if (currentSubtitle) {
        subtitleContainer.textContent = currentSubtitle.text;
        // Position the subtitle container within the video player (customize as needed)
        // Example positioning:
        subtitleContainer.style.position = 'absolute';
        subtitleContainer.style.bottom = '20px';
        subtitleContainer.style.left = '50%';
        subtitleContainer.style.transform = 'translateX(-50%)';
        
        // Add the subtitle container to the video player
        videoPlayer.parentNode.appendChild(subtitleContainer);
    }
}

// Listen for video time updates to synchronize subtitles
document.querySelector('video').addEventListener('timeupdate', function() {
    displaySubtitle(this.currentTime);
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.subtitles) {
        // Process received subtitle data (message.subtitles)
        // Here, assuming message.subtitles contains an array of subtitle objects
        const subtitles = message.subtitles;
        // Perform subtitle synchronization logic here
        // Update the 'subtitles' variable or synchronize subtitles with the video player
    }
});

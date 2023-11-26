// Function to send subtitle data to content script
function sendSubtitleToContentScript(subtitleData) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { subtitles: subtitleData });
    });
}

document.getElementById('submitBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('subtitleFile');
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('subtitle', file);

    fetch('http://localhost:5000/upload_subtitle', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Subtitle upload failed');
    })
    .then(result => {
        console.log('Subtitle upload result:', result);
        // Assuming result contains subtitle data (parsed subtitle info)
        sendSubtitleToContentScript(result); // Send subtitle data to content script
    })
    .catch(error => {
        console.error('Error uploading subtitle:', error);
    });
});

// Listen for messages from content script and handle them if needed
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Handle messages from content script (if required)
    // For example, receive confirmation or additional data from content script
});

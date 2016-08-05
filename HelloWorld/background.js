chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'outerBounds': {
            'width': 400,
            'height': 500
        }
    });
});

chrome.app.runtime.onInstalled.addListener(function() {
  // Set up database
});

chrome.app.runtime.onSuspend.addListener(function() {
  // Close connections
});


document.addEventListener('DOMContentLoaded', function () {
    let currentLanguage = 'en-US'; // Default language is English

    // Function to start speech recognition with the current language
    function startSpeechRecognition() {
        const recognition = new window.webkitSpeechRecognition(); // Create a new instance of SpeechRecognition

        // Set properties for language detection and continuous recognition
        recognition.continuous = true;
        recognition.interimResults = true;

        // Set language to the current language
        recognition.lang = currentLanguage;

        // Event listener for when speech is recognized
        recognition.onresult = function(event) {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    transcript += event.results[i][0].transcript;
                }
            }
            document.getElementById('myTextArea').value = transcript; // Put the transcript in the textarea
            // Set textarea language and direction based on the language being spoken
            setLanguageForTextarea(currentLanguage);
        };

        // Event listener for when speech recognition encounters an error
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
        };

        // Start speech recognition
        recognition.start();
    }

    // Function to set language and text direction for the textarea
    function setLanguageForTextarea(language) {
        const textarea = document.getElementById('myTextArea');
        textarea.setAttribute('lang', language); // Set textarea language

        // Set text direction to right-to-left for Arabic
        if (language === 'ar-EG') {
            textarea.setAttribute('dir', 'rtl');
        } else {
            textarea.setAttribute('dir', 'ltr'); // Set text direction to left-to-right for other languages
        }
    }

    // Add event listener to the microphone button for language selection
    document.getElementById('microphoneBtn').addEventListener('click', function () {
        // Toggle between languages
        if (currentLanguage === 'en-US') {
            currentLanguage = 'fr-FR'; // Change to French
        } else if (currentLanguage === 'fr-FR') {
            currentLanguage = 'ar-EG'; // Change to Arabic
        } else {
            currentLanguage = 'en-US'; // Change to English
        }

        // Start speech recognition with the updated language
        startSpeechRecognition();
    });

    // Add event listener to the copy button
    document.getElementById('copyButton').addEventListener('click', function () {
        const textarea = document.getElementById('myTextArea');
        textarea.select();
        document.execCommand('copy'); // Copy the selected text
        console.log('Text copied to clipboard:', textarea.value);
    });

    // Start speech recognition with the default language on page load
    startSpeechRecognition();
});

# text-speech
Language Selection: The application allows users to toggle between three languages: English (en-US), French (fr-FR), and Arabic (ar-EG). Clicking the microphone button switches between these languages in a cyclic manner.

Speech Recognition: Upon selecting a language, the application initiates speech recognition using the Web Speech API (webkitSpeechRecognition). The selected language is configured for the recognition process.

Continuous Recognition: Speech recognition is set to continuous mode (recognition.continuous = true), allowing it to continuously detect speech input.

Transcript Display: When speech is recognized, the transcript is displayed in a textarea element (myTextArea). The textarea is updated with the recognized speech, and its language and text direction are adjusted based on the detected language.

Text Copy: Users can copy the recognized text to the clipboard by clicking the copy button (copyButton). The selected text in the textarea is copied to the clipboard using the document.execCommand('copy') method.

Error Handling: The application includes error handling for speech recognition errors, logging any encountered errors to the console.

Default Language: The default language for speech recognition is English (en-US), set at page load. Speech recognition starts automatically with the default language.

Text Direction: For Arabic language (ar-EG), the text direction in the textarea is set to right-to-left (dir="rtl"), while for other languages, it's set to left-to-right (dir="ltr").

Event Listeners: Event listeners are added to the microphone button for language selection and the copy button for copying text to the clipboard.

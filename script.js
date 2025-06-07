// Quote database organized by categories
const quotes = {
    inspirational: [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
        { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
    ],
    motivational: [
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
        { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
        { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
        { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" }
    ],
    success: [
        { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
        { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
        { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
        { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
        { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
        { text: "The way to achieve your own success is to be willing to help somebody else get it first.", author: "Iyanla Vanzant" }
    ],
    life: [
        { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
        { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
        { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
        { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
        { text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "Alan Watts" }
    ],
    wisdom: [
        { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bill Keane" },
        { text: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.", author: "Bruce Lee" },
        { text: "The fool doth think he is wise, but the wise man knows himself to be a fool.", author: "William Shakespeare" },
        { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" }
    ],
    love: [
        { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
        { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
        { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
        { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
        { text: "The greatest happiness of life is the conviction that we are loved.", author: "Victor Hugo" },
        { text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", author: "Unknown" }
    ]
};

// DOM Elements
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteContainer = document.getElementById('quoteContainer');
const generateBtn = document.getElementById('generateBtn');
const categorySelect = document.getElementById('categorySelect');
const quoteInput = document.getElementById('quoteInput');
const authorInput = document.getElementById('authorInput');
const applyEditBtn = document.getElementById('applyEditBtn');

// Style controls
const fontFamily = document.getElementById('fontFamily');
const fontSize = document.getElementById('fontSize');
const fontSizeValue = document.getElementById('fontSizeValue');
const textColor = document.getElementById('textColor');
const bgColor = document.getElementById('bgColor');
const bgImage = document.getElementById('bgImage');
const clearBgImage = document.getElementById('clearBgImage');
const textAlign = document.getElementById('textAlign');

// Export controls
const downloadBtn = document.getElementById('downloadBtn');
const copyBtn = document.getElementById('copyBtn');
const shareBtn = document.getElementById('shareBtn');

// Current quote data
let currentQuote = {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
};

// Background image data
let backgroundImageData = null;

// Initialize the app
function init() {
    setupEventListeners();
    updateFontSizeDisplay();
    generateRandomQuote();
}

// Event Listeners
function setupEventListeners() {
    generateBtn.addEventListener('click', generateRandomQuote);
    applyEditBtn.addEventListener('click', applyCustomQuote);
    
    // Style controls
    fontFamily.addEventListener('change', updateQuoteStyle);
    fontSize.addEventListener('input', updateFontSize);
    textColor.addEventListener('change', updateQuoteStyle);
    bgColor.addEventListener('change', updateQuoteStyle);
    bgImage.addEventListener('change', handleImageUpload);
    clearBgImage.addEventListener('click', clearBackgroundImage);
    textAlign.addEventListener('change', updateQuoteStyle);
    
    // Export controls
    downloadBtn.addEventListener('click', downloadQuoteAsImage);
    copyBtn.addEventListener('click', copyQuoteText);
    shareBtn.addEventListener('click', shareQuote);
    
    // Auto-update inputs when editing
    quoteInput.addEventListener('input', previewEdit);
    authorInput.addEventListener('input', previewEdit);
}

// Generate random quote from selected category
function generateRandomQuote() {
    const category = categorySelect.value;
    const categoryQuotes = quotes[category];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    const selectedQuote = categoryQuotes[randomIndex];
    
    // Add loading animation
    quoteContainer.classList.add('loading');
    
    setTimeout(() => {
        currentQuote = selectedQuote;
        updateQuoteDisplay();
        quoteContainer.classList.remove('loading');
        
        // Clear edit inputs
        quoteInput.value = '';
        authorInput.value = '';
    }, 500);
}

// Update quote display
function updateQuoteDisplay() {
    quoteText.textContent = `"${currentQuote.text}"`;
    quoteAuthor.textContent = `- ${currentQuote.author}`;
    
    // Trigger animation
    quoteContainer.style.animation = 'none';
    quoteContainer.offsetHeight; // Trigger reflow
    quoteContainer.style.animation = 'fadeIn 0.5s ease';
}

// Apply custom quote from user input
function applyCustomQuote() {
    const customText = quoteInput.value.trim();
    const customAuthor = authorInput.value.trim() || 'Unknown';
    
    if (customText) {
        currentQuote = {
            text: customText,
            author: customAuthor
        };
        updateQuoteDisplay();
        
        // Clear inputs
        quoteInput.value = '';
        authorInput.value = '';
    } else {
        alert('Please enter a quote text.');
    }
}

// Preview edit in real-time
function previewEdit() {
    const customText = quoteInput.value.trim();
    const customAuthor = authorInput.value.trim();
    
    if (customText) {
        quoteText.textContent = `"${customText}"`;
        quoteAuthor.textContent = `- ${customAuthor || 'Unknown'}`;
    }
}

// Update font size display
function updateFontSize() {
    const size = fontSize.value;
    fontSizeValue.textContent = `${size}px`;
    updateQuoteStyle();
}

function updateFontSizeDisplay() {
    fontSizeValue.textContent = `${fontSize.value}px`;
}

// Update quote styling
function updateQuoteStyle() {
    const quoteTextElement = document.querySelector('.quote-text');
    const quoteAuthorElement = document.querySelector('.quote-author');
    const container = document.querySelector('.quote-content');
    
    // Apply font and alignment to container
    container.style.fontFamily = fontFamily.value;
    container.style.textAlign = textAlign.value;
    
    // Apply color and size to text elements specifically
    quoteTextElement.style.color = textColor.value;
    quoteTextElement.style.fontSize = `${fontSize.value}px`;
    quoteAuthorElement.style.color = textColor.value;
    quoteAuthorElement.style.fontSize = `${Math.max(14, fontSize.value * 0.75)}px`;
    
    // Update background
    const quoteSection = document.querySelector('.quote-section');
    if (backgroundImageData) {
        quoteSection.style.background = `url(${backgroundImageData}) center/cover, ${bgColor.value}`;
        quoteSection.style.backgroundBlendMode = 'overlay';
    } else {
        quoteSection.style.background = bgColor.value;
        quoteSection.style.backgroundBlendMode = 'normal';
    }
}

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            backgroundImageData = e.target.result;
            updateQuoteStyle();
            savePreferences();
        };
        reader.readAsDataURL(file);
    }
}

// Clear background image
function clearBackgroundImage() {
    backgroundImageData = null;
    bgImage.value = '';
    updateQuoteStyle();
    savePreferences();
}

// Download quote as image
function downloadQuoteAsImage() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = 800;
    canvas.height = 600;
    
    // Function to draw the quote after background is ready
    function drawQuote() {
        // Set text properties
        ctx.fillStyle = textColor.value;
        ctx.font = `${Math.max(24, fontSize.value * 0.8)}px ${fontFamily.value}`;
        ctx.textAlign = textAlign.value === 'center' ? 'center' : textAlign.value;
        
        // Calculate text position
        let x = textAlign.value === 'center' ? canvas.width / 2 : 
                textAlign.value === 'right' ? canvas.width - 50 : 50;
        
        // Draw quote text (with word wrapping)
        const maxWidth = canvas.width - 100;
        const lineHeight = parseInt(fontSize.value) * 1.4;
        const words = currentQuote.text.split(' ');
        let line = '';
        let y = canvas.height / 2 - 50;
        
        // Add text shadow for better readability on images
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        
        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            
            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(`"${line}"`, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(`"${line}"`, x, y);
        
        // Draw author
        ctx.font = `${Math.max(18, fontSize.value * 0.6)}px ${fontFamily.value}`;
        ctx.fillText(`- ${currentQuote.author}`, x, y + lineHeight + 20);
        
        // Download the image
        const link = document.createElement('a');
        link.download = 'quote.png';
        link.href = canvas.toDataURL();
        link.click();
    }
    
    // Handle background
    if (backgroundImageData) {
        const img = new Image();
        img.onload = function() {
            // Draw background image
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            // Add color overlay
            ctx.fillStyle = bgColor.value;
            ctx.globalAlpha = 0.3;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1;
            
            drawQuote();
        };
        img.src = backgroundImageData;
    } else {
        // Fill solid background
        ctx.fillStyle = bgColor.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawQuote();
    }
}

// Copy quote text to clipboard
async function copyQuoteText() {
    const textToCopy = `"${currentQuote.text}" - ${currentQuote.author}`;
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Show feedback
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text to clipboard');
    }
}

// Share quote
function shareQuote() {
    const shareText = `"${currentQuote.text}" - ${currentQuote.author}`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Quote.Io - Inspirational Quote',
            text: shareText,
            url: shareUrl
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        copyQuoteText();
        alert('Quote copied to clipboard! You can now paste it anywhere to share.');
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 'g':
                e.preventDefault();
                generateRandomQuote();
                break;
            case 'c':
                if (e.shiftKey) {
                    e.preventDefault();
                    copyQuoteText();
                }
                break;
            case 's':
                if (e.shiftKey) {
                    e.preventDefault();
                    downloadQuoteAsImage();
                }
                break;
        }
    }
    
    if (e.key === 'Enter' && (quoteInput === document.activeElement || authorInput === document.activeElement)) {
        applyCustomQuote();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', init);

// Add some visual feedback for interactions
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Auto-save user preferences to localStorage
function savePreferences() {
    const preferences = {
        fontFamily: fontFamily.value,
        fontSize: fontSize.value,
        textColor: textColor.value,
        bgColor: bgColor.value,
        textAlign: textAlign.value,
        category: categorySelect.value,
        backgroundImage: backgroundImageData
    };
    localStorage.setItem('quoteIoPreferences', JSON.stringify(preferences));
}

function loadPreferences() {
    const saved = localStorage.getItem('quoteIoPreferences');
    if (saved) {
        const preferences = JSON.parse(saved);
        fontFamily.value = preferences.fontFamily || 'Inter';
        fontSize.value = preferences.fontSize || '24';
        textColor.value = preferences.textColor || '#333333';
        bgColor.value = preferences.bgColor || '#f8f9fa';
        textAlign.value = preferences.textAlign || 'center';
        categorySelect.value = preferences.category || 'inspirational';
        backgroundImageData = preferences.backgroundImage || null;
        
        updateFontSizeDisplay();
        updateQuoteStyle();
    }
}

// Save preferences when changed
[fontFamily, fontSize, textColor, bgColor, textAlign, categorySelect].forEach(element => {
    element.addEventListener('change', savePreferences);
});

// Load preferences on startup
document.addEventListener('DOMContentLoaded', loadPreferences);
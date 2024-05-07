const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");
    
        const textArray = ["you are the most chutya person on the earth as u have taken admission in Enigineering , why bro ? why ?  neque? Similique, nostrum?"];
        const typingDelay = 12;
        const newTextDelay = 500; // Delay before starting to type
        let textArrayIndex = 0;
        let charIndex = 0;
    
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove("typing");
            }
        }
    
        document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
            if (textArray.length) setTimeout(type, newTextDelay);
        });
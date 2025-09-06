// Week 7 Assignment - JavaScript Functions and Animation Triggers
// This file contains all the JavaScript functionality

// ===== PART 1: FUNCTION SCOPE, PARAMETERS, AND RETURN VALUES =====

// Global scope variable
const globalMessage = "I'm global!";

// Function demonstrating different scopes
function demonstrateScope(localParam) {
    // Local scope variable
    let localMessage = "I'm local!";
    
    if (true) {
        // Block scope variable (ES6)
        let blockMessage = "I'm block scoped!";
        console.log(blockMessage); // Accessible here
    }
    
    // console.log(blockMessage); // Error: blockMessage is not defined
    console.log(localMessage); // Accessible here
    console.log(globalMessage); // Accessible here
    
    return `Parameter: ${localParam}, Local: ${localMessage}, Global: ${globalMessage}`;
}

// Function with default parameters
function calculateArea(width = 10, height = 5) {
    return width * height;
}

// Function that returns another function (closure)
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

// Demo functions for the UI
function runScopeDemo() {
    const result = demonstrateScope("Hello from parameter!");
    document.getElementById('functionOutput').textContent = result;
}

function runAreaCalculation() {
    const area = calculateArea(15, 8);
    document.getElementById('functionOutput').textContent = `Area: ${area}`;
}

function runMultiplierDemo() {
    const double = createMultiplier(2);
    const triple = createMultiplier(3);
    
    document.getElementById('functionOutput').textContent = 
        `Double of 5: ${double(5)}, Triple of 5: ${triple(5)}`;
}

// ===== PART 4: JAVASCRIPT ANIMATION TRIGGERS =====

// Function to trigger CSS animations
function triggerAnimation(animationName) {
    const element = document.getElementById('animatedBox');
    
    // Remove any existing animation classes
    element.classList.remove('animate-slideIn', 'animate-bounce', 'animate-pulse', 
                            'animate-colorChange', 'animate-rotate');
    
    // Force reflow to restart animation
    void element.offsetWidth;
    
    // Add the requested animation class
    element.classList.add(`animate-${animationName}`);
    
    const output = `Started ${animationName} animation`;
    document.getElementById('animationOutput').textContent = output;
    return output;
}

// Function to stop all animations
function stopAnimations() {
    const element = document.getElementById('animatedBox');
    element.classList.remove('animate-slideIn', 'animate-bounce', 'animate-pulse',
                           'animate-colorChange', 'animate-rotate');
    
    const output = "Stopped all animations";
    document.getElementById('animationOutput').textContent = output;
    return output;
}

// Function to toggle transition class
function toggleTransitionClass() {
    const boxes = document.querySelectorAll('.animation-box');
    boxes.forEach(box => {
        box.classList.toggle('no-transition');
    });
    
    const output = boxes[0].classList.contains('no-transition') 
        ? "Transitions disabled" 
        : "Transitions enabled";
        
    document.getElementById('transitionOutput').textContent = output;
    return output;
}

// Additional animation functions for JS-controlled animations
function animateWithJS() {
    const element = document.getElementById('jsAnimatedBox');
    element.style.transition = 'all 0.5s ease';
    element.style.transform = 'translateX(200px) rotate(180deg)';
    element.style.backgroundColor = '#e74c3c';
    
    document.getElementById('jsAnimationOutput').textContent = 
        'Animation started with JavaScript';
}

function animateWithDelay() {
    const element = document.getElementById('jsAnimatedBox');
    element.style.transition = 'all 0.5s ease 1s'; // 1s delay
    element.style.transform = 'translateX(0) rotate(0deg)';
    element.style.backgroundColor = '#3498db';
    
    document.getElementById('jsAnimationOutput').textContent = 
        'Animation with 1s delay started';
}

function chainAnimations() {
    const element = document.getElementById('jsAnimatedBox');
    
    // First animation
    element.style.transition = 'all 0.5s ease';
    element.style.transform = 'translateX(200px)';
    
    // Second animation after a delay
    setTimeout(() => {
        element.style.transform = 'translateX(200px) translateY(100px)';
        
        // Third animation after another delay
        setTimeout(() => {
            element.style.transform = 'translateX(0) translateY(0)';
            document.getElementById('jsAnimationOutput').textContent = 
                'Chained animations completed';
        }, 500);
    }, 500);
    
    document.getElementById('jsAnimationOutput').textContent = 
        'Chained animations started';
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Animations & Functions page loaded');
    
    // Add hover event listeners to transition examples
    const transitionBoxes = document.querySelectorAll('.animation-box');
    transitionBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        box.addEventListener('mouseleave', function() {
            // Reset styles with transition if not disabled
            if (!this.classList.contains('no-transition')) {
                this.style.transform = '';
                this.style.backgroundColor = '';
                this.style.borderRadius = '';
            }
        });
    });
});
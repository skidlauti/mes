onload = () =>{
        document.body.classList.remove("container");
};

// Funcionalidades adicionales para la página romántica

// Efecto de partículas de corazones
function createHeartParticle() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.opacity = '0.7';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '999';
    heart.style.transition = 'all 3s linear';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.top = '-50px';
        heart.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 3000);
}

// Crear partículas de corazones cada 2 segundos
setInterval(createHeartParticle, 2000);

// Efecto de escritura para el mensaje personal
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efecto de escritura al mensaje personal cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.querySelector('.personal-message');
    if (messageElement) {
        const originalText = messageElement.textContent;
        setTimeout(() => {
            typeWriter(messageElement, originalText, 80);
        }, 2000);
    }
});

// Efecto de confeti cuando se hace clic en el botón
function createConfetti() {
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3c1', '#ffd1dc'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = '❤️';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.fontSize = (Math.random() * 15 + 10) + 'px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (document.body.contains(confetti)) {
                document.body.removeChild(confetti);
            }
        }, 5000);
    }
}

// Agregar animación de caída para el confeti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(${window.innerHeight}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Agregar evento de clic al botón para crear confeti
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.romantic-button');
    if (button) {
        button.addEventListener('click', function() {
            createConfetti();
        });
    }
});

// Efecto de brillo en el contador
function addGlowEffect() {
    const counterElements = document.querySelectorAll('.time-unit span:first-child');
    counterElements.forEach(element => {
        element.style.animation = 'glow-pulse 2s ease-in-out infinite';
    });
}

// Agregar animación de pulso brillante
const glowStyle = document.createElement('style');
glowStyle.textContent = `
    @keyframes glow-pulse {
        0%, 100% {
            text-shadow: 0 0 10px rgba(255, 107, 157, 0.5);
        }
        50% {
            text-shadow: 0 0 20px rgba(255, 107, 157, 0.8), 0 0 30px rgba(255, 107, 157, 0.6);
        }
    }
`;
document.head.appendChild(glowStyle);

// Aplicar efecto de brillo cuando se carga la página de flores
if (window.location.pathname.includes('FLORES.html')) {
    setTimeout(addGlowEffect, 1000);
}

// Nuevos efectos divertidos

// Efecto de "bug" gracioso - hace que los elementos se muevan aleatoriamente
function createBugEffect() {
    const elements = document.querySelectorAll('.floating-heart, .funny-floating-message');
    elements.forEach(element => {
        if (Math.random() < 0.1) { // 10% de probabilidad
            element.style.animation = 'bug-wiggle 0.5s ease-in-out';
            setTimeout(() => {
                element.style.animation = '';
            }, 500);
        }
    });
}

// Animación de "bug"
const bugStyle = document.createElement('style');
bugStyle.textContent = `
    @keyframes bug-wiggle {
        0%, 100% { transform: translateX(0px) rotate(0deg); }
        25% { transform: translateX(5px) rotate(5deg); }
        50% { transform: translateX(-5px) rotate(-5deg); }
        75% { transform: translateX(3px) rotate(3deg); }
    }
`;
document.head.appendChild(bugStyle);

// Ejecutar efecto de bug cada 3 segundos
setInterval(createBugEffect, 3000);

// Efecto de "overflow de amor" - hace que aparezcan corazones extra
function createOverflowEffect() {
    const overflowHearts = ['💕', '💖', '💗', '💓', '💝'];
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = overflowHearts[Math.floor(Math.random() * overflowHearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '997';
        heart.style.animation = 'overflow-fade 2s ease-in-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (document.body.contains(heart)) {
                document.body.removeChild(heart);
            }
        }, 2000);
    }
}

// Animación de overflow
const overflowStyle = document.createElement('style');
overflowStyle.textContent = `
    @keyframes overflow-fade {
        0% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0; transform: scale(1); }
    }
`;
document.head.appendChild(overflowStyle);

// Ejecutar overflow cada 5 segundos
setInterval(createOverflowEffect, 5000);

// Efecto de "variable importante" - resalta elementos aleatoriamente
function highlightImportantVariable() {
    const elements = document.querySelectorAll('.floating-heart, .funny-floating-message, .message-box');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    
    if (randomElement) {
        randomElement.style.boxShadow = '0 0 20px rgba(255, 107, 157, 0.8)';
        randomElement.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            randomElement.style.boxShadow = '';
            randomElement.style.transform = '';
        }, 1000);
    }
}

// Ejecutar highlight cada 4 segundos
setInterval(highlightImportantVariable, 4000);

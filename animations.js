// Animações e efeitos visuais

// Efeito de partículas douradas
function createGoldenParticles() {
    const container = document.body;
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, #FFD700, transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${Math.random() * window.innerWidth}px;
                top: -10px;
                animation: fall ${3 + Math.random() * 2}s linear forwards;
            `;
            
            container.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 5000);
        }, i * 200);
    }
}

// Animação de queda das partículas
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes fall {
        to {
            transform: translateY(${window.innerHeight + 20}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyles);

// Efeito de hover nos botões
function addButtonEffects() {
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
}

// Efeito de digitação
function typeWriter(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Efeito de shake para erros
function shakeElement(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Animação de shake
const shakeStyles = document.createElement('style');
shakeStyles.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeStyles);

// Efeito de pulse para elementos importantes
function pulseElement(element, duration = 2000) {
    element.style.animation = `pulse ${duration}ms ease-in-out infinite`;
}

const pulseStyles = document.createElement('style');
pulseStyles.textContent = `
    @keyframes pulse {
        0%, 100% { 
            transform: scale(1);
            opacity: 1;
        }
        50% { 
            transform: scale(1.05);
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(pulseStyles);

// Efeito de brilho nos inputs em foco
function addInputEffects() {
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 0 3px rgba(255, 215, 0, 0.2), 0 0 20px rgba(255, 215, 0, 0.1)';
            this.style.borderColor = 'rgba(255, 215, 0, 0.6)';
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = '';
            this.style.borderColor = 'rgba(255, 215, 0, 0.2)';
        });
    });
}

// Efeito de loading suave
function showLoading(element) {
    const original = element.innerHTML;
    element.innerHTML = '<span class="loading"></span>';
    element.disabled = true;
    
    return () => {
        element.innerHTML = original;
        element.disabled = false;
    };
}

// Efeito de contador animado
function animateCounter(element, start, end, duration = 1000) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current);
    }, 16);
}

// Efeito de reveal ao scroll
function addScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('.feature, .step, .message-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Efeito de confetti para sucessos
function createConfetti() {
    const colors = ['#FFD700', '#FFA500', '#FF6347', '#DC143C'];
    const container = document.body;
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * window.innerWidth}px;
                top: -10px;
                z-index: 10000;
                pointer-events: none;
                animation: confettiFall ${2 + Math.random() * 3}s ease-out forwards;
            `;
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 50);
    }
}

const confettiStyles = document.createElement('style');
confettiStyles.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(${window.innerHeight + 20}px) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyles);

// Inicializar efeitos quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    addButtonEffects();
    addInputEffects();
    addScrollReveal();
    
    // Partículas ocasionais
    setInterval(createGoldenParticles, 10000);
});

// Exportar funções para uso global
window.AnimationEffects = {
    typeWriter,
    shakeElement,
    pulseElement,
    showLoading,
    animateCounter,
    createConfetti,
    createGoldenParticles
};

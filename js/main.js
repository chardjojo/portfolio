const typedEl = document.getElementById("typed-text");
 
if (typedEl) {
    const words = ["My Portfolio"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
 

    const cursorEl = document.createElement("span");
    cursorEl.classList.add("cursor");
    typedEl.parentNode.insertBefore(cursorEl, typedEl.nextSibling);
 
    function typeEffect() {
        const current = words[wordIndex];
 
        if (!deleting) {
            typedEl.textContent = current.slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(typeEffect, 1800);
                return;
            }
        } else {
            typedEl.textContent = current.slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
 
        setTimeout(typeEffect, deleting ? 55 : 100);
    }
 
    typeEffect();
}
 
 

const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });
 
document.querySelectorAll(".fade-in").forEach(function(el) {
    fadeObserver.observe(el);
});
 
 

const skillsSection = document.querySelector("#skills");
 
if (skillsSection) {
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                document.querySelectorAll(".skill-fill").forEach(function(bar) {
                    bar.style.width = bar.dataset.level + "%";
                });
            }
        });
    }, { threshold: 0.2 });
 
    skillObserver.observe(skillsSection);
}
 
 

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});
 
function Menu() {
    const sidebar = document.getElementById("mobileSidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.add("show");
    overlay.classList.add("show");
}

function closeSidebar() {
    const sidebar = document.getElementById("mobileSidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.remove("show");
    overlay.classList.remove("show");
}

// Reveal elements on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if (top < trigger) el.classList.add("active");
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Mobile Sidebar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".mobile-sidebar");
  const overlay = document.querySelector(".overlay");
  const openBtn = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");

  openBtn?.addEventListener("click", () => {
    sidebar.classList.add("show");
    overlay.classList.add("show");
  });

  closeBtn?.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  });

  overlay?.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  });
});

// Function to type and erase text in a loop
function typingEffect() {
  const textElement = document.getElementById('dynamicText');
  const text = 'Hitesh';  // The name you want to type
  let index = 0;
  let typing = true;
  let typingSpeed = 100; 
  let erasingSpeed = 50; 
  let pause = 2000; 

  function type() {
      if (index < text.length) {
          textElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, typingSpeed);
      } else {
          setTimeout(erase, pause);
      }
  }

  function erase() {
      if (index > 0) {
          textElement.textContent = textElement.textContent.slice(0, -1);
          index--;
          setTimeout(erase, erasingSpeed);
      } else {
          setTimeout(type, typingSpeed);
      }
  }

  type();
}

window.onload = function() {
  typingEffect();

  setTimeout(function() {
    document.getElementById('loading').style.display = 'none';
  }, 100);
};

setTimeout(() => {
    const popup = document.getElementById("successPopup");
    if (popup) popup.style.display = "none";
}, 3000);
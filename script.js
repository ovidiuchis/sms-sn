// SMS Fundraising Campaign Landing Page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the page
  initPage();

  // Add scroll animations
  addScrollAnimations();

  // Add smooth scrolling for navigation
  addSmoothScrolling();
});

function initPage() {
  console.log("LUMINA DE LA ÎNCEPUTUL CLASEI - Campaign initialized");

  // Add loading animation
  document.body.classList.add("loaded");

  // Initialize counters if needed
  initCounters();
}

function addScrollAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe all sections for animation
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
}

function addSmoothScrolling() {
  // Smooth scroll for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

function initCounters() {
  // Animated counter for impact numbers (if needed)
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current);
    }, 16);
  });
}

// SMS Functionality
function sendSMS() {
  // Check if running on mobile device
  if (isMobileDevice()) {
    // Open SMS app with pre-filled message
    openSMSApp();
  } else {
    // Show instructions for desktop users
    showSMSInstructions();
  }
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function openSMSApp() {
  const phoneNumber = "8846";
  const message = "LOC";

  // Create SMS URL with proper encoding for different platforms
  let smsUrl;

  // For iOS devices
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    smsUrl = `sms:${phoneNumber}&body=${encodeURIComponent(message)}`;
  } else {
    // For Android and other devices
    smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  }

  try {
    // Try to open SMS app
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.location.href = smsUrl;
    } else {
      window.open(smsUrl, "_blank");
    }

    // Show success message after a short delay
    setTimeout(() => {
      showSuccessMessage();
    }, 1000);
  } catch (error) {
    console.error("Error opening SMS app:", error);
    // Fallback: show instructions
    showSMSInstructions();
  }
}

// Enhanced mobile detection
function isMobileDevice() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    window.innerWidth <= 768 ||
    "ontouchstart" in window
  );
}

function showSMSInstructions() {
  const instructions = `
        <div class="sms-instructions">
            <h3>Instrucțiuni pentru donație prin SMS:</h3>
            <ol>
                <li>Deschide aplicația de mesaje pe telefonul tău</li>
                <li>Compune un nou mesaj</li>
                <li>Scrie textul: <strong>LOC</strong></li>
                <li>Trimite la numărul: <strong>8864</strong></li>
                <li>Vei dona 4 euro lunar pentru educația copiilor</li>
            </ol>
            <p><em>Poți anula donația oricând prin trimiterea unui SMS cu textul "STOP" la același număr.</em></p>
        </div>
    `;

  showModal(instructions, "Cum să donezi prin SMS");
}

function showSuccessMessage() {
  const message = `
        <div class="success-message">
            <div class="success-icon">✅</div>
            <h3>Mulțumim pentru donație!</h3>
            <p>Ai trimis cu succes SMS-ul "LOC" la 8864.</p>
            <p>Vei dona 4 euro lunar pentru educația copiilor din mediul rural.</p>
            <p><strong>Impactul tău:</strong> Un copil va avea un loc în bancă și acces la educație.</p>
        </div>
    `;

  showModal(message, "Donație confirmată");
}

function showModal(content, title) {
  // Create modal overlay
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-content">
                ${content}
            </div>
        </div>
    `;

  // Add modal to page
  document.body.appendChild(modal);

  // Show modal with animation
  setTimeout(() => modal.classList.add("show"), 10);

  // Close modal on overlay click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) {
    modal.classList.remove("show");
    setTimeout(() => modal.remove(), 300);
  }
}

// Add modal styles dynamically
function addModalStyles() {
  const style = document.createElement("style");
  style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .modal-overlay.show {
            opacity: 1;
        }
        
        .modal {
            background: white;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }
        
        .modal-overlay.show .modal {
            transform: scale(1);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 25px;
            border-bottom: 2px solid var(--campaign-yellow);
            background: var(--campaign-blue);
            color: white;
            border-radius: 20px 20px 0 0;
        }
        
        .modal-header h3 {
            margin: 0;
            color: white;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.3s ease;
        }
        
        .modal-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .modal-content {
            padding: 25px;
        }
        
        .sms-instructions ol {
            margin: 20px 0;
            padding-left: 20px;
        }
        
        .sms-instructions li {
            margin-bottom: 10px;
            line-height: 1.6;
        }
        
        .success-message {
            text-align: center;
        }
        
        .success-icon {
            font-size: 4rem;
            margin-bottom: 20px;
        }
        
        .success-message h3 {
            color: var(--campaign-blue);
            margin-bottom: 15px;
        }
        
        .success-message p {
            margin-bottom: 15px;
            color: var(--text-light);
        }
        
        .success-message strong {
            color: var(--campaign-blue);
        }
    `;

  document.head.appendChild(style);
}

// Initialize modal styles when page loads
document.addEventListener("DOMContentLoaded", addModalStyles);

// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to the SMS box
  const smsBox = document.querySelector(".sms-box");
  if (smsBox) {
    smsBox.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    smsBox.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }

  // Add click effect to donate button
  const donateBtn = document.querySelector(".donate-btn");
  if (donateBtn) {
    donateBtn.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  }
});

// Add scroll progress indicator
function addScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--campaign-yellow), var(--campaign-blue));
        z-index: 1001;
        transition: width 0.1s ease;
    `;

  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });
}

// Initialize scroll progress
document.addEventListener("DOMContentLoaded", addScrollProgress);

// Back to Top functionality
const backToTopButton = document.getElementById("back-to-top");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

// Smooth scroll to top when clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Kiosk Mode - Auto-scroll for coffee shop display
function initKioskMode() {
  const urlParams = new URLSearchParams(window.location.search);
  const isKiosk = urlParams.get("kiosk") === "1";

  if (!isKiosk) return;

  console.log("Kiosk mode activated - Auto-scrolling enabled");

  // Request fullscreen for kiosk mode
  function requestFullscreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      // Safari
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      // IE11
      elem.msRequestFullscreen();
    }
  }

  // Create fullscreen request button instead of auto-requesting
  function createFullscreenButton() {
    const fullscreenBtn = document.createElement("button");
    fullscreenBtn.innerHTML = "🖥️ Fullscreen pentru Kiosk";
    fullscreenBtn.className = "kiosk-fullscreen-btn";
    fullscreenBtn.onclick = () => {
      requestFullscreen();
      fullscreenBtn.style.display = "none";
    };

    // Add styles for the button
    const btnStyles = document.createElement("style");
    btnStyles.textContent = `
      .kiosk-fullscreen-btn {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--campaign-yellow);
        color: var(--campaign-blue);
        border: none;
        padding: 15px 25px;
        border-radius: 25px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
      }
      .kiosk-fullscreen-btn:hover {
        background: var(--campaign-blue);
        color: var(--white);
        transform: translateX(-50%) translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }
      .kiosk-fullscreen-btn:active {
        transform: translateX(-50%) translateY(0);
      }
    `;
    document.head.appendChild(btnStyles);
    document.body.appendChild(fullscreenBtn);
  }

  // Show fullscreen button instead of auto-requesting
  createFullscreenButton();

  // Handle fullscreen change events
  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
  document.addEventListener("msfullscreenchange", handleFullscreenChange);

  function handleFullscreenChange() {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      // If user exits fullscreen, show the button again
      const existingBtn = document.querySelector(".kiosk-fullscreen-btn");
      if (existingBtn) {
        existingBtn.style.display = "block";
      }
    }
  }

  // Add kiosk-specific styles
  const kioskStyles = document.createElement("style");
  kioskStyles.textContent = `
    .kiosk-mode .back-to-top {
      display: none !important;
    }
    .kiosk-mode .donate-btn,
    .kiosk-mode .sms-box {
      pointer-events: none;
      opacity: 0.7;
    }
    .kiosk-mode .donate-btn:hover,
    .kiosk-mode .sms-box:hover {
      transform: none !important;
    }
    .kiosk-mode {
      overflow: hidden;
    }
    .kiosk-mode body {
      overflow: hidden;
    }
  `;
  document.head.appendChild(kioskStyles);
  document.body.classList.add("kiosk-mode");

  // Get all sections for scrolling
  const sections = [
    ".header",
    ".main-content",
    ".how-it-works",
    ".testimonial",
    ".call-to-action",
    ".footer",
  ];

  let currentSectionIndex = 0;
  let isScrolling = false;

  function scrollToSection(index) {
    if (isScrolling) return;

    const section = document.querySelector(sections[index]);
    if (!section) return;

    isScrolling = true;

    // Smooth scroll to section
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Wait for scroll to complete, then wait a bit
    setTimeout(() => {
      isScrolling = false;

      // Calculate wait time based on section
      let waitTime = 4000; // Default 4 seconds

      if (index === sections.length - 1) {
        // Wait longer on footer, then restart
        waitTime = 8000;
      } else if (index === 0) {
        // Wait a bit on header
        waitTime = 3000;
      }

      setTimeout(() => {
        if (index === sections.length - 1) {
          // Back to top and restart
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setTimeout(() => {
            currentSectionIndex = 0;
            scrollToSection(0);
          }, 2000);
        } else {
          // Move to next section
          currentSectionIndex = index + 1;
          scrollToSection(currentSectionIndex);
        }
      }, waitTime);
    }, 2000); // Wait for scroll animation
  }

  // Start kiosk mode after page loads
  setTimeout(() => {
    scrollToSection(0);
  }, 3000);

  // Pause on user interaction (optional)
  let userInteractionTimeout;
  function resetUserInteraction() {
    clearTimeout(userInteractionTimeout);
    userInteractionTimeout = setTimeout(() => {
      if (!isScrolling) {
        scrollToSection(currentSectionIndex);
      }
    }, 10000); // Resume after 10 seconds of no interaction
  }

  // Listen for user interactions
  document.addEventListener("touchstart", resetUserInteraction);
  document.addEventListener("click", resetUserInteraction);
  document.addEventListener("scroll", resetUserInteraction);
}

// Initialize kiosk mode
initKioskMode();

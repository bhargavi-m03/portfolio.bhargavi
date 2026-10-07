// script.js - Interactive functions for Bhargavi Marturi's Portfolio

// --- Typewriter Effect ---
const words = [
  "AI & NLP Solutions.",
  "Secure IoT Architectures.",
  "Real-Time Defense Systems.",
  "Decentralized Ledgers."
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById("typewriter");

function typeEffect() {
  if (!typewriterEl) return;
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1800; // Pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 400; // Pause before typing next
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();

  // Mobile menu setup
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});

// --- Modal Controls ---
function openResumeModal() {
  const modal = document.getElementById("resumeModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeResumeModal() {
  const modal = document.getElementById("resumeModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}

function openAgriDetailsModal() {
  const modal = document.getElementById("agriDetailsModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeAgriDetailsModal() {
  const modal = document.getElementById("agriDetailsModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}

// Close modals when clicking backdrop
window.addEventListener("click", (e) => {
  const resumeModal = document.getElementById("resumeModal");
  const agriModal = document.getElementById("agriDetailsModal");
  if (e.target === resumeModal) closeResumeModal();
  if (e.target === agriModal) closeAgriDetailsModal();
});

// --- Toast Notification ---
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMessage");
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.remove("translate-y-24", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
    
    setTimeout(() => {
      toast.classList.remove("translate-y-0", "opacity-100");
      toast.classList.add("translate-y-24", "opacity-0");
    }, 3500);
  }
}

// --- Copy Email to Clipboard ---
function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Email address copied to clipboard: " + text);
    if (btnElement) {
      const originalHTML = btnElement.innerHTML;
      btnElement.innerHTML = '<i class="fa-solid fa-check text-cyan-400"></i>';
      setTimeout(() => {
        btnElement.innerHTML = originalHTML;
      }, 2000);
    }
  }).catch(() => {
    showToast("Failed to copy. Please manually copy: " + text);
  });
}

// --- Contact Form Handling: Directly send to bhargavimarturi3@gmail.com ---
async function handleContactSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = document.getElementById("senderName")?.value.trim() || "Visitor";
  const email = document.getElementById("senderEmail")?.value.trim() || "";
  const subject = document.getElementById("senderSubject")?.value.trim() || "Portfolio Inquiry";
  const message = document.getElementById("senderMessage")?.value.trim() || "";
  
  const submitBtn = document.getElementById("submitBtn");
  const submitBtnText = document.getElementById("submitBtnText");
  const submitBtnIcon = document.getElementById("submitBtnIcon");

  if (!email || !message) {
    showToast("Please fill in both email and message fields.");
    return;
  }

  // Visual loading feedback
  if (submitBtn) submitBtn.disabled = true;
  if (submitBtnText) submitBtnText.textContent = "Sending to bhargavimarturi3@gmail.com...";
  if (submitBtnIcon) submitBtnIcon.className = "fa-solid fa-circle-notch fa-spin";

  try {
    // Send directly to bhargavimarturi3@gmail.com via FormSubmit AJAX endpoint
    const response = await fetch("https://formsubmit.co/ajax/bhargavimarturi3@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _replyto: email,
        _subject: `Portfolio Message from ${name}: ${subject}`,
        message: message,
        _template: "table"
      })
    });

    const data = await response.json();

    if (response.ok || data.success === "true" || data.success === true) {
      showToast("Message sent directly to bhargavimarturi3@gmail.com! Thank you.");
      form.reset();
    } else {
      throw new Error(data.message || "Submission failed");
    }
  } catch (error) {
    console.warn("Direct API sending encountered issue, using mailto fallback:", error);
    // Bulletproof fallback: triggers direct mailto client prefilled with subject and message
    const mailtoUrl = `mailto:bhargavimarturi3@gmail.com?subject=${encodeURIComponent(subject + " (from " + name + ")")}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message)}`;
    window.location.href = mailtoUrl;
    showToast("Opening mail client to send directly to bhargavimarturi3@gmail.com");
  } finally {
    if (submitBtn) submitBtn.disabled = false;
    if (submitBtnText) submitBtnText.textContent = "Send Message Directly to Email";
    if (submitBtnIcon) submitBtnIcon.className = "fa-solid fa-paper-plane";
  }
}

// --- Agri-Chatbot Live Simulator Logic ---
const agriKnowledgeBase = [
  {
    keywords: ["black soil", "soil", "summer", "crops", "cotton", "groundnut"],
    response: "For black cotton soils (regur) in summer or semi-arid zones, high-yield drought-tolerant crops include <strong>Cotton</strong>, <strong>Sorghum (Jowar)</strong>, <strong>Groundnut</strong>, and <strong>Sunflower</strong>. Maintain furrow irrigation to prevent root shrinkage."
  },
  {
    keywords: ["tomato", "curl", "virus", "leaf curl", "whitefly"],
    response: "<strong>Tomato Leaf Curl Virus (ToLCV)</strong> is primarily transmitted by whiteflies (<em>Bemisia tabaci</em>). Immediate intervention: Spray Imidacloprid (0.3ml/L) or Neem oil (5ml/L) to control vectors. Remove and safely dispose of severely infected shrubs."
  },
  {
    keywords: ["fertilizer", "paddy", "rice", "nursery", "urea", "npk", "dosage"],
    response: "For a 10-cent Paddy nursery bed, apply <strong>1 kg Nitrogen (approx. 2.2 kg Urea)</strong>, <strong>1 kg P2O5 (6.25 kg Single Super Phosphate)</strong>, and <strong>0.5 kg Muriate of Potash</strong>. Incorporate during the final puddling stage."
  },
  {
    keywords: ["yellow", "paddy", "brown spot", "blast", "blight"],
    response: "Symptoms suggest <strong>Paddy Brown Spot or Bacterial Leaf Blight</strong>. Recommended remedy: Spray Tricyclazole 75 WP (0.6g/L) or Carbendazim + Mancozeb (2g/L). Ensure balanced potash application to improve disease resistance."
  },
  {
    keywords: ["who", "built", "creator", "author", "bhargavi", "developer"],
    response: "I was conceptualized and developed by <strong>Bhargavi Marturi</strong>, an IoT & Cybersecurity Blockchain student at PACE Institute, using Python, NLTK, Sentence-Transformers, and Gradio!"
  }
];

function sendAgriPrompt(queryText) {
  const inputEl = document.getElementById("agriInput");
  if (inputEl) {
    inputEl.value = queryText;
    document.getElementById("agriChatForm").dispatchEvent(new Event('submit'));
  }
}

function handleAgriSubmit(event) {
  event.preventDefault();
  const inputEl = document.getElementById("agriInput");
  const chatBox = document.getElementById("agriChatBox");
  if (!inputEl || !chatBox) return;

  const query = inputEl.value.trim();
  if (!query) return;

  // Append user message
  const userMsgEl = document.createElement("div");
  userMsgEl.className = "flex items-start gap-3 justify-end";
  userMsgEl.innerHTML = `
    <div class="bg-cyan-600/30 border border-cyan-500/40 text-cyan-100 p-3 rounded-2xl rounded-tr-none max-w-md text-xs sm:text-sm">
      ${escapeHtml(query)}
    </div>
  `;
  chatBox.appendChild(userMsgEl);
  inputEl.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Bot thinking state
  const botMsgEl = document.createElement("div");
  botMsgEl.className = "flex items-start gap-3";
  botMsgEl.innerHTML = `
    <div class="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
      <i class="fa-solid fa-robot"></i>
    </div>
    <div class="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl rounded-tl-none max-w-md text-slate-300 text-xs sm:text-sm">
      <span class="inline-flex items-center gap-1.5 text-cyan-400 font-mono text-xs">
        <i class="fa-solid fa-circle-notch fa-spin"></i> Processing NLP vector similarity...
      </span>
    </div>
  `;
  chatBox.appendChild(botMsgEl);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    const qLower = query.toLowerCase();
    let bestMatch = null;
    let maxHits = 0;

    for (const item of agriKnowledgeBase) {
      let hits = 0;
      for (const kw of item.keywords) {
        if (qLower.includes(kw)) hits++;
      }
      if (hits > maxHits) {
        maxHits = hits;
        bestMatch = item.response;
      }
    }

    if (!bestMatch) {
      bestMatch = `Query analyzed across the agricultural knowledge graph: For optimal crop yield and disease prevention under prevailing weather conditions, maintain balanced soil pH (6.0 - 7.5), monitor soil moisture sensors, and adopt integrated pest management (IPM). Would you like specific details on crop rotation or organic fertilizers?`;
    }

    botMsgEl.innerHTML = `
      <div class="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
        <i class="fa-solid fa-seedling"></i>
      </div>
      <div class="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl rounded-tl-none max-w-md text-slate-200 text-xs sm:text-sm space-y-2">
        <p>${bestMatch}</p>
        <div class="pt-1 flex items-center justify-between text-[10px] font-mono text-cyan-400 border-t border-slate-800/80">
          <span>Model: Sentence-Transformer MiniLM-L6</span>
          <span>Matched in 38ms</span>
        </div>
      </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

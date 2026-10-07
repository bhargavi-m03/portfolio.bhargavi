# Bhargavi Marturi — Professional Portfolio & Resume Website

A modern, high-performance, responsive portfolio website crafted specifically for **Bhargavi Marturi**, B.Tech student specialized in **Internet of Things, Cybersecurity & Blockchain** at PACE Institute of Technology & Sciences (CGPA: 8.12/10), former **AI Technologies Intern at DRDO (DLRL Hyderabad)**, and developer of the **Agri Chatbot (NLP & Sentence-Transformers)**.

---

## 🌐 Live Deployment

- **Production URL:** [https://bhargavi-marturi.surge.sh](https://bhargavi-marturi.surge.sh)
- **Direct Resume View / Print:** [https://bhargavi-marturi.surge.sh/resume.html](https://bhargavi-marturi.surge.sh/resume.html)
- **Deployment Platform:** Surge CDN (Global Edge Network with SSL)

---

## ✨ Features & Highlights

1. **Cyber & AI Aesthetic:**
   - Dark-mode-first aesthetic with glowing ambient backdrops, glassmorphism cards, and tech accents.
   - Dynamic typewriter effect emphasizing her core engineering domains.
   - Quick stats badges highlighting **8.12 CGPA**, **DRDO Research Internship**, and **600/600 (100%) Board Topper**.

2. **Career Objective & About:**
   - Direct integration of her personal objective: *"To secure a challenging position where I can apply my skills, learn new technologies, and contribute to the growth of the organization while developing myself professionally."*
   - Leadership & service spotlights: **NSS Coordinator** and **Health Watch Committee Member** at PACE Institute.

3. **DRDO Experience Showcase:**
   - Dedicated timeline card for her **DLRL DRDO** internship in Hyderabad focusing on AI technologies, real-time defense computing architectures, and baseline security implementations.

4. **Interactive Agri Chatbot NLP Simulator:**
   - An interactive in-browser conversational simulator replicating her flagship project (*Python, NLTK, Sentence-Transformers, Gradio*).
   - Visitors and hiring managers can test queries like crop recommendations, pest symptoms, and fertilizer calculations in real-time.
   - Architectural modal explaining semantic vector embeddings and pipeline design.

5. **Complementary Projects:**
   - **Smart IoT Telemetry & Blockchain Ledger**: Encrypted sensor metrics and tamper-proof ledger hashing.
   - **Full-Stack Django & MySQL Web Platform**: Authenticated portal with MVC design and secure session management.

6. **Comprehensive Technical Skills Matrix:**
   - Categorized by Programming, AI/NLP & Frameworks, Web Technologies, Databases, Security & IoT, and Developer Utilities with visual proficiency bars.

7. **Printable Resume Modal & Dedicated Resume Page:**
   - Quick modal preview with instant 1-click **Print / Save as PDF** styling.
   - Standalone `/resume.html` page formatted to industry standards.

8. **Direct Contact Integrations:**
   - 1-click email copy with clipboard feedback.
   - Direct `mailto:` and `tel:` buttons for phone (+91 7702793953).
   - Interactive message form simulation with toast alerts.

---

## 📁 Project Structure

```
bhargavi-marturi-portfolio/
├── index.html                  # Main interactive portfolio page
├── style.css                   # Custom animations, glassmorphism, and print rules
├── script.js                   # Interactive typewriter, modal controls, and Agri-bot simulator
├── resume.html                 # Standalone ATS-friendly printable resume page
├── vercel.json                 # Vercel zero-config routing
├── netlify.toml                # Netlify deployment and security headers
├── CNAME                       # Custom domain routing for Surge
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated CI/CD pipeline
└── README.md                   # Documentation and remote hosting guide
```

---

## 🚀 Running Locally

To run or preview locally on your machine:

1. **Directly open in browser:**
   Double-click `index.html` or right-click and choose "Open with Chrome / Edge".

2. **Or run with a local lightweight server:**
   ```powershell
   cd C:\Users\urmad\.gemini\antigravity\scratch\bhargavi-marturi-portfolio
   npx.cmd serve .
   ```

---

## 🌐 Remote Hosting Options

### 1. Surge.sh (Currently Live & Active)
Already deployed and live globally on Surge edge CDN:
- **Production URL:** [https://bhargavi-marturi.surge.sh](https://bhargavi-marturi.surge.sh)
- **Direct Resume Page:** [https://bhargavi-marturi.surge.sh/resume.html](https://bhargavi-marturi.surge.sh/resume.html)

To redeploy with any future updates:
```powershell
cd C:\Users\urmad\.gemini\antigravity\scratch\bhargavi-marturi-portfolio
npx.cmd surge . bhargavi-marturi.surge.sh
```

### 2. GitHub Pages (Automated CI/CD)
1. Push this directory to a new GitHub repository (e.g. `bhargavi-marturi-portfolio`).
2. Go to repository **Settings** &rarr; **Pages** &rarr; **Build and deployment Source** &rarr; select **GitHub Actions**.
3. The included workflow `.github/workflows/deploy.yml` will automatically build and publish the site to `https://<username>.github.io/<repo>/`.

### 3. Vercel (1-Click Static Deploy)
1. Install Vercel CLI (`npm i -g vercel`) or import the repo via [vercel.com](https://vercel.com).
2. The included `vercel.json` provides zero-config routing.
3. Run `vercel --prod` to deploy.

### 4. Netlify (Drop-in or Git)
1. Drag and drop the `bhargavi-marturi-portfolio` folder into [Netlify Drop](https://app.netlify.com/drop), or connect your Git repository.
2. The included `netlify.toml` automatically configures the publish root and security headers.

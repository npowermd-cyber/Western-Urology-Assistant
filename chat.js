/* ============================================================
   Western Urology Patient Assistant – Stylesheet
   Colors: Western Purple #4F2683 / Gold #807F40 / White
   ============================================================ */

:root {
  --purple: #4F2683;
  --purple-dark: #3a1a63;
  --purple-light: #6b3ba8;
  --purple-xlight: #f3eeff;
  --gold: #807F40;
  --gold-light: #b5b46a;
  --gold-xlight: #f9f8ee;
  --white: #ffffff;
  --gray-50: #f8f9fa;
  --gray-100: #f1f3f5;
  --gray-200: #e9ecef;
  --gray-300: #dee2e6;
  --gray-400: #ced4da;
  --gray-500: #adb5bd;
  --gray-600: #6c757d;
  --gray-700: #495057;
  --gray-800: #343a40;
  --gray-900: #212529;
  --red: #c0392b;
  --red-light: #fff5f5;
  --green: #2d6a4f;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(79,38,131,0.10);
  --shadow-lg: 0 8px 32px rgba(79,38,131,0.14);
  --radius: 12px;
  --radius-sm: 8px;
  --radius-lg: 20px;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'DM Mono', monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--gray-50);
  color: var(--gray-800);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ============================================================
   EMERGENCY BANNER
   ============================================================ */

.emergency-banner {
  background: linear-gradient(135deg, #c0392b, #e74c3c);
  color: white;
  text-align: center;
  padding: 10px 48px 10px 16px;
  font-size: 0.85rem;
  font-weight: 500;
  position: relative;
  z-index: 100;
  letter-spacing: 0.02em;
}

.emergency-banner a { color: white; font-weight: 700; text-decoration: underline; }
.emergency-icon { margin-right: 6px; }

.banner-close {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  background: none; border: none; color: white; cursor: pointer;
  font-size: 1rem; opacity: 0.8; padding: 4px 8px;
  transition: opacity 0.2s;
}
.banner-close:hover { opacity: 1; }

/* ============================================================
   HEADER
   ============================================================ */

.site-header {
  background: white;
  border-bottom: 1px solid var(--gray-200);
  position: sticky; top: 0; z-index: 50;
  box-shadow: var(--shadow-sm);
}

.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-svg { height: 56px; width: auto; }

.header-badge {
  display: flex; align-items: center; gap: 8px;
  background: var(--purple-xlight);
  color: var(--purple);
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.badge-dot {
  width: 8px; height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}

/* ============================================================
   HERO
   ============================================================ */

.hero {
  background: var(--purple);
  position: relative;
  overflow: hidden;
  padding: 64px 24px 72px;
  text-align: center;
}

.hero-bg {
  position: absolute; inset: 0; pointer-events: none;
}

.hero-orb {
  position: absolute; border-radius: 50%;
  opacity: 0.12; filter: blur(60px);
}

.hero-orb-1 {
  width: 500px; height: 500px;
  background: var(--gold);
  top: -150px; right: -100px;
}

.hero-orb-2 {
  width: 350px; height: 350px;
  background: #8e5fb5;
  bottom: -100px; left: -50px;
}

.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}

.hero-content {
  position: relative; z-index: 2;
  max-width: 680px; margin: 0 auto;
}

.hero-eyebrow {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 16px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 700;
  color: white;
  line-height: 1.15;
  margin-bottom: 20px;
}

.gradient-text {
  background: linear-gradient(135deg, #d4af37, #f5d98a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  color: rgba(255,255,255,0.78);
  font-size: 1.05rem;
  line-height: 1.65;
  max-width: 520px;
  margin: 0 auto 32px;
}

.hero-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.trust-item {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.82rem; color: rgba(255,255,255,0.72);
  font-weight: 500;
}

/* ============================================================
   APP CONTAINER
   ============================================================ */

.app-container {
  flex: 1;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 32px 24px;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  align-items: start;
}

/* ============================================================
   SIDEBAR
   ============================================================ */

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 90px;
}

.sidebar-card {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s;
}

.sidebar-card:hover { box-shadow: var(--shadow-md); }

.sidebar-card-header {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 10px;
}

.sidebar-icon {
  font-size: 1.1rem;
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  background: var(--purple-xlight);
  border-radius: 8px;
}

.sidebar-card-header h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--purple-dark);
}

.sidebar-hint {
  font-size: 0.78rem;
  color: var(--gray-600);
  line-height: 1.5;
  margin-bottom: 12px;
}

/* Doctor select */
.doctor-select {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid var(--gray-300);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.88rem;
  color: var(--gray-800);
  background: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%234F2683' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px;
  padding-right: 36px;
  transition: border-color 0.2s;
}

.doctor-select:focus {
  outline: none;
  border-color: var(--purple);
  box-shadow: 0 0 0 3px rgba(79,38,131,0.12);
}

.selected-doctor-badge {
  margin-top: 10px;
  display: flex; align-items: center; gap: 8px;
  background: #f0fdf4;
  border: 1px solid #86efac;
  color: #166534;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.82rem;
  font-weight: 600;
}

.checkmark { font-size: 1rem; }

/* Email input */
.email-input {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid var(--gray-300);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.88rem;
  color: var(--gray-800);
  transition: border-color 0.2s;
  margin-bottom: 8px;
}

.email-input:focus {
  outline: none;
  border-color: var(--purple);
  box-shadow: 0 0 0 3px rgba(79,38,131,0.10);
}

.privacy-note {
  font-size: 0.72rem;
  color: var(--gray-500);
  line-height: 1.5;
}

/* Quick topics */
.quick-topics {
  display: flex; flex-direction: column; gap: 6px;
}

.quick-btn {
  text-align: left;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  padding: 9px 12px;
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--purple-dark);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.15s;
  line-height: 1.4;
}

.quick-btn:hover {
  background: var(--purple-xlight);
  border-color: var(--purple);
  color: var(--purple);
  transform: translateX(3px);
}

/* Emergency card */
.emergency-card {
  border-color: #fca5a5;
  background: linear-gradient(135deg, #fff5f5, #fff);
}

.emergency-card .sidebar-icon {
  background: #fee2e2;
}

.emergency-card .sidebar-card-header h3 {
  color: #b91c1c;
}

.emergency-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 14px;
}

.emergency-list li {
  font-size: 0.8rem;
  color: var(--gray-700);
  padding-left: 16px;
  position: relative;
  line-height: 1.4;
}

.emergency-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #dc2626;
  font-size: 0.7rem;
  top: 2px;
}

.emergency-btn {
  display: block;
  background: #dc2626;
  color: white;
  text-align: center;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
  letter-spacing: 0.02em;
}

.emergency-btn:hover { background: #b91c1c; }

/* ============================================================
   CHAT SECTION
   ============================================================ */

.chat-section {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  min-height: 600px;
  max-height: calc(100vh - 160px);
  overflow: hidden;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--gray-100);
  background: linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.chat-header-left { display: flex; align-items: center; gap: 12px; }

.ai-avatar {
  width: 40px; height: 40px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.ai-avatar svg { display: block; width: 100%; height: 100%; }

.chat-agent-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: white;
}

.chat-agent-status {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.7);
}

.status-dot {
  width: 7px; height: 7px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.clear-chat-btn {
  display: flex; align-items: center; gap: 6px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  color: rgba(255,255,255,0.85);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--font-body);
  transition: all 0.15s;
}

.clear-chat-btn:hover {
  background: rgba(255,255,255,0.22);
  color: white;
}

/* Messages */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-behavior: smooth;
}

.chat-messages::-webkit-scrollbar { width: 5px; }
.chat-messages::-webkit-scrollbar-track { background: transparent; }
.chat-messages::-webkit-scrollbar-thumb { background: var(--gray-300); border-radius: 99px; }

/* Message bubbles */
.message {
  display: flex;
  gap: 10px;
  animation: slideIn 0.25s ease-out;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.message.user-message { flex-direction: row-reverse; }

.message-avatar {
  width: 32px; height: 32px;
  border-radius: 10px;
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 700;
}

.ai-message .message-avatar {
  background: linear-gradient(135deg, var(--purple-dark), var(--purple));
  color: white;
}

.user-message .message-avatar {
  background: var(--gold);
  color: white;
}

.message-bubble {
  max-width: 75%;
  padding: 13px 16px;
  border-radius: 16px;
  font-size: 0.88rem;
  line-height: 1.65;
  position: relative;
}

.ai-message .message-bubble {
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-bottom-left-radius: 4px;
  color: var(--gray-800);
}

.user-message .message-bubble {
  background: linear-gradient(135deg, var(--purple-dark), var(--purple));
  color: white;
  border-bottom-right-radius: 4px;
}

.message-bubble strong { font-weight: 700; }

.message-bubble ul {
  margin: 8px 0 8px 16px;
}

.message-bubble li { margin-bottom: 4px; }

.message-bubble p { margin-bottom: 8px; }
.message-bubble p:last-child { margin-bottom: 0; }

.emergency-alert-bubble {
  background: linear-gradient(135deg, #fff5f5, #fee2e2);
  border: 1.5px solid #fca5a5 !important;
}

.emergency-alert-bubble .alert-header {
  color: #dc2626;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 8px;
  display: flex; align-items: center; gap: 6px;
}

.message-time {
  font-size: 0.68rem;
  color: var(--gray-400);
  margin-top: 4px;
  text-align: right;
}

.ai-message .message-time { text-align: left; }

/* Typing indicator */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  color: var(--gray-400);
  font-size: 0.78rem;
}

.typing-dot {
  width: 6px; height: 6px;
  background: var(--purple-light);
  border-radius: 50%;
  animation: bounce 1.2s infinite;
}

.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-8px); }
}

/* Send summary bar */
.send-summary-bar {
  border-top: 1px solid var(--gray-100);
  padding: 12px 20px;
  background: var(--gold-xlight);
}

.summary-bar-inner {
  display: flex; align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.summary-bar-text {
  font-size: 0.82rem;
  color: var(--gray-700);
  flex: 1;
}

.send-summary-btn {
  display: flex; align-items: center; gap: 6px;
  background: var(--purple);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
}

.send-summary-btn:hover { background: var(--purple-dark); }

/* Input area */
.chat-input-area {
  border-top: 1px solid var(--gray-100);
  padding: 16px 20px;
  background: white;
}

.input-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  background: var(--gray-50);
  border: 1.5px solid var(--gray-300);
  border-radius: 14px;
  padding: 8px 8px 8px 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input-wrapper:focus-within {
  border-color: var(--purple);
  box-shadow: 0 0 0 3px rgba(79,38,131,0.10);
  background: white;
}

.chat-textarea {
  flex: 1;
  border: none;
  background: none;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--gray-800);
  resize: none;
  max-height: 120px;
  line-height: 1.5;
  padding: 4px 0;
}

.chat-textarea:focus { outline: none; }
.chat-textarea::placeholder { color: var(--gray-400); }

.send-btn {
  width: 38px; height: 38px;
  background: var(--purple);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;
}

.send-btn:hover {
  background: var(--purple-dark);
  transform: scale(1.05);
}

.send-btn:disabled {
  background: var(--gray-300);
  cursor: not-allowed;
  transform: none;
}

.input-disclaimer {
  font-size: 0.7rem;
  color: var(--gray-400);
  text-align: center;
  margin-top: 8px;
  line-height: 1.5;
}

/* ============================================================
   TOAST
   ============================================================ */

.toast {
  position: fixed;
  bottom: 32px; right: 32px;
  background: var(--gray-900);
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  z-index: 1000;
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.25s;
  pointer-events: none;
  max-width: 360px;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

/* ============================================================
   FOOTER
   ============================================================ */

.site-footer {
  background: var(--gray-900);
  color: rgba(255,255,255,0.6);
  padding: 32px 24px;
  margin-top: auto;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.footer-left { flex: 2; min-width: 240px; }
.footer-right { flex: 1; min-width: 200px; }

.footer-logo {
  font-family: var(--font-display);
  font-size: 1rem;
  color: white;
  margin-bottom: 10px;
}

.footer-disclaimer {
  font-size: 0.75rem;
  line-height: 1.6;
}

.footer-links {
  display: flex; flex-direction: column; gap: 6px;
  margin-bottom: 16px;
}

.footer-links a {
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  font-size: 0.82rem;
  transition: color 0.15s;
}

.footer-links a:hover { color: white; }

.footer-emergency {
  font-size: 0.82rem;
  color: #fca5a5;
}

.footer-emergency a { color: white; font-weight: 700; }

/* ============================================================
   RESPONSIVE
   ============================================================ */

@media (max-width: 900px) {
  .app-container {
    grid-template-columns: 1fr;
    padding: 16px;
  }

  .sidebar {
    position: static;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .chat-section {
    max-height: 70vh;
    border-radius: var(--radius);
  }
}

@media (max-width: 600px) {
  .sidebar {
    grid-template-columns: 1fr;
  }

  .hero { padding: 40px 16px 48px; }

  .hero-trust { gap: 12px; }

  .summary-bar-inner { flex-direction: column; align-items: flex-start; }

  .footer-inner { flex-direction: column; gap: 20px; }
}

/* ============================================================
   WELCOME MESSAGE SPECIAL STYLING
   ============================================================ */

.welcome-bubble {
  border-left: 3px solid var(--purple) !important;
  background: white !important;
}

.welcome-bubble .welcome-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--purple);
  margin-bottom: 8px;
}

.welcome-bubble .capability-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  margin: 12px 0;
}

.capability-item {
  display: flex; align-items: center; gap: 6px;
  background: var(--purple-xlight);
  border-radius: 8px;
  padding: 7px 10px;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--purple-dark);
}

.disclaimer-box {
  background: #fffbeb;
  border: 1px solid #fcd34d;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.78rem;
  color: #78350f;
  margin-top: 10px;
  line-height: 1.55;
}

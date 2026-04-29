// ============================================================
//  Western Urology Patient Assistant – Chat Engine
//  Powered by Claude AI (Anthropic) + CUA Guidelines
// ============================================================

// ── State ────────────────────────────────────────────────────
let conversationHistory = [];
let messageCount = 0;
let selectedDoctor = null;

// ── CUA Brochure Knowledge Base ──────────────────────────────
// These are the CUA patient information brochures the AI knows about.
// The AI is instructed to reference their content when answering.
const CUA_BROCHURES = {
  general: [
    { title: "Clean Intermittent Self-Catheterization for Men", url: "https://www.cua.org/system/files/PIB/PIB%201_en_web2023.pdf" },
    { title: "Clean Intermittent Self-Catheterization for Women", url: "https://www.cua.org/system/files/PIB/PIB%202_en_web2023%20Final%20%281%29.pdf" },
    { title: "Cystoscopy", url: "https://www.cua.org/system/files/PIB/PIB%203_en_web2025click.pdf" },
    { title: "Hematuria (Blood in Urine)", url: "https://www.cua.org/system/files/PIB/PIB%205_en_web2022_0.pdf" },
    { title: "Laparoscopic Surgery in Urology", url: "https://www.cua.org/system/files/PIB/PIB06_en_0.pdf" },
    { title: "Palliative Care", url: "https://www.cua.org/system/files/PIB/PIB07_en%202023.pdf" },
    { title: "Urethral Catheter Care", url: "https://www.cua.org/system/files/PIB/PIB%208_en_web2023.pdf" },
    { title: "Urodynamic Assessment", url: "https://www.cua.org/system/files/PIB/PIB%209_en%20web%202022.pdf" },
    { title: "Voiding Diary", url: "https://www.cua.org/system/files/PIB/PIB%2010_en%202022_0.pdf" }
  ],
  bladder: [
    { title: "BCG Treatment for Bladder Cancer", url: "https://www.cua.org/system/files/PIB/PIB18_en_web2024.pdf" },
    { title: "Bladder Infections in Women", url: "https://www.cua.org/system/files/PIB/PIB19_en_web2023.pdf" },
    { title: "Bladder Tumour", url: "https://www.cua.org/system/files/PIB/PIB20_en_web2022_1.pdf" },
    { title: "Bladder Tumour Resection - Discharge Instructions", url: "https://www.cua.org/system/files/PIB/PIB21_en_0.pdf" },
    { title: "BOTOX® for Overactive Bladder", url: "https://www.cua.org/system/files/PIB/PIB60_en_web2023.pdf" },
    { title: "BOTOX® Neurogenic Detrusor Overactivity", url: "https://www.cua.org/system/files/PIB/PIB63_en_web%20Aug%202025.pdf" },
    { title: "Interstitial Cystitis", url: "https://www.cua.org/system/files/PIB/PIB22_en_web2022_0.pdf" },
    { title: "Mid-urethral Sling for Stress Urinary Incontinence in Women", url: "https://www.cua.org/system/files/PIB/PIB_31E_2022_web%2004.pdf" },
    { title: "Overactive Bladder", url: "https://www.cua.org/system/files/PIB/PIB23_en_web2023_1.pdf" },
    { title: "Stress Urinary Incontinence in Women", url: "https://www.cua.org/system/files/PIB/PIB24_en_web2023_0.pdf" }
  ],
  genital: [
    { title: "Circumcision", url: "https://www.cua.org/system/files/PIB/PIB25_en_0.pdf" },
    { title: "Genital Warts", url: "https://www.cua.org/system/files/PIB/PIB26_en.pdf" },
    { title: "Hydrocele and Spermatocele", url: "https://www.cua.org/system/files/PIB/PIB27_en_0.pdf" },
    { title: "Peyronie's Disease", url: "https://www.cua.org/system/files/PIB/PIB28_en.pdf" },
    { title: "Phimosis", url: "https://www.cua.org/system/files/PIB/PIB29_en.pdf" },
    { title: "Urethral Stricture", url: "https://www.cua.org/system/files/PIB/PIB30_en.pdf" },
    { title: "Vasectomy", url: "https://www.cua.org/system/files/PIB/PIB32_en_web2022.pdf" },
    { title: "Vasectomy Reversal", url: "https://www.cua.org/system/files/PIB/PIB33_en.pdf" }
  ],
  kidney: [
    { title: "Kidney Cancer", url: "https://www.cua.org/system/files/PIB/PIB34_en.pdf" },
    { title: "Kidney Stones", url: "https://www.cua.org/system/files/PIB/PIB35_en_web2023.pdf" },
    { title: "Laparoscopic Kidney Stone Removal", url: "https://www.cua.org/system/files/PIB/PIB36_en.pdf" },
    { title: "Lithotripsy (ESWL)", url: "https://www.cua.org/system/files/PIB/PIB37_en.pdf" },
    { title: "Percutaneous Nephrolithotomy (PCNL)", url: "https://www.cua.org/system/files/PIB/PIB38_en.pdf" },
    { title: "Ureteroscopy and Laser Stone Treatment", url: "https://www.cua.org/system/files/PIB/PIB39_en_web2022.pdf" },
    { title: "Upper Urinary Tract Cancer", url: "https://www.cua.org/system/files/PIB/PIB40_en.pdf" },
    { title: "Ureteral Stents", url: "https://www.cua.org/system/files/PIB/PIB41_en_web2022.pdf" }
  ],
  pediatric: [
    { title: "Bedwetting (Enuresis)", url: "https://www.cua.org/system/files/PIB/PIB42_en.pdf" },
    { title: "Hypospadias", url: "https://www.cua.org/system/files/PIB/PIB43_en.pdf" },
    { title: "Undescended Testicle", url: "https://www.cua.org/system/files/PIB/PIB44_en.pdf" },
    { title: "Vesicoureteral Reflux", url: "https://www.cua.org/system/files/PIB/PIB45_en.pdf" }
  ],
  prostate: [
    { title: "Benign Prostatic Hyperplasia (BPH)", url: "https://www.cua.org/system/files/PIB/PIB46_en_web2023.pdf" },
    { title: "Brachytherapy for Prostate Cancer", url: "https://www.cua.org/system/files/PIB/PIB47_en.pdf" },
    { title: "Holmium Laser Enucleation of the Prostate (HoLEP)", url: "https://www.cua.org/system/files/PIB/PIB62_en_web2024.pdf" },
    { title: "Hormone Therapy for Prostate Cancer", url: "https://www.cua.org/system/files/PIB/PIB48_en_web2024.pdf" },
    { title: "Prostate Biopsy", url: "https://www.cua.org/system/files/PIB/PIB49_en_web2022.pdf" },
    { title: "Prostate Cancer", url: "https://www.cua.org/system/files/PIB/PIB50_en_web2023.pdf" },
    { title: "Prostate Cancer – Active Surveillance", url: "https://www.cua.org/system/files/PIB/PIB51_en_web2022.pdf" },
    { title: "PSA Testing", url: "https://www.cua.org/system/files/PIB/PIB52_en_web2023.pdf" },
    { title: "Radiation Therapy for Prostate Cancer", url: "https://www.cua.org/system/files/PIB/PIB53_en.pdf" },
    { title: "Radical Prostatectomy", url: "https://www.cua.org/system/files/PIB/PIB54_en_web2022.pdf" },
    { title: "Transurethral Resection of the Prostate (TURP)", url: "https://www.cua.org/system/files/PIB/PIB55_en_web2022.pdf" }
  ],
  sexual: [
    { title: "Erectile Dysfunction", url: "https://www.cua.org/system/files/PIB/PIB56_en_web2022.pdf" },
    { title: "Male Infertility", url: "https://www.cua.org/system/files/PIB/PIB57_en.pdf" },
    { title: "Penile Implant", url: "https://www.cua.org/system/files/PIB/PIB58_en_web2022.pdf" },
    { title: "Premature Ejaculation", url: "https://www.cua.org/system/files/PIB/PIB59_en.pdf" }
  ],
  testicular: [
    { title: "Testicular Cancer", url: "https://www.cua.org/system/files/PIB/PIB61_en_web2022.pdf" }
  ]
};

// ── System Prompt ─────────────────────────────────────────────
function buildSystemPrompt() {
  const brochureList = Object.entries(CUA_BROCHURES)
    .map(([cat, items]) => `${cat.toUpperCase()}:\n${items.map(b => `- ${b.title}`).join('\n')}`)
    .join('\n\n');

  return `You are the Western Urology Patient Assistant, an AI-powered clinical support tool for patients under the care of urologists at Western University (London, Ontario, Canada).

Your knowledge base is grounded in:
1. Canadian Urological Association (CUA) Patient Information Brochures (58 topics covering general urology, bladder, genital, kidney/ureter, pediatric, prostate, sexual/infertility, and testicular cancer topics)
2. CUA Clinical Guidelines
3. Standard urological pre- and post-operative care protocols
4. General evidence-based urology practice

AVAILABLE CUA BROCHURE TOPICS:
${brochureList}

YOUR ROLE:
- Provide clear, compassionate, evidence-based answers to patient questions about urological care
- Help patients understand pre-operative preparation, post-operative recovery, medications, and symptoms
- Triage concerns and guide patients appropriately (home monitoring, clinic call, or emergency)
- NEVER collect or ask for personal health information (no names, dates of birth, health card numbers, etc.)
- You may accept an optional email address ONLY if a patient voluntarily provides it for callback purposes

EMERGENCY TRIAGE (ALWAYS PRIORITIZE):
If a patient describes ANY of the following, immediately and clearly advise them to go to the EMERGENCY ROOM or call 911:
- Inability to urinate for more than 6–8 hours with a full/painful bladder
- Severe uncontrollable bleeding (from any site)
- High fever (>38.5°C / >101.3°F) with chills, especially post-surgery (possible sepsis/urosepsis)
- Chest pain, shortness of breath, or signs of pulmonary embolism
- Signs of deep vein thrombosis (severe leg swelling, redness, pain) post-surgery
- Severe, uncontrolled pain not responding to prescribed medications
- Confusion, low blood pressure, rapid heart rate (signs of septic shock)
- Sudden severe headache with hypertension
- Any situation you assess as potentially life-threatening

Format emergency alerts prominently and early in your response.

RESPONSE STYLE:
- Warm, professional, and clear — suitable for patients who are anxious or in discomfort
- Use plain language; avoid jargon unless you define it
- Structure responses with clear sections when appropriate
- Keep responses focused and appropriately concise
- When relevant, mention which CUA brochure covers the topic in more detail
- Always end with guidance on when to call the doctor's office vs. go to emergency vs. manage at home

IMPORTANT DISCLAIMERS:
- Always remind patients that your information is general and their doctor's specific instructions take precedence
- Do not diagnose conditions — you provide information to support informed conversations with their physician
- You cannot access individual patient records or specific operative notes

SETTING: Western University, Department of Urology, London Health Sciences Centre, London, Ontario, Canada.`;
}

// ── Emergency Keyword Detection ───────────────────────────────
function detectEmergency(text) {
  const emergencyKeywords = [
    /can.t urinate/i, /cannot urinate/i, /unable to urinate/i, /no urine/i,
    /severe bleed/i, /heavy bleed/i, /blood everywhere/i, /lot of blood/i,
    /high fever/i, /fever.*38/i, /38.*fever/i, /39.*fever/i, /40.*fever/i,
    /chest pain/i, /can.t breathe/i, /cannot breathe/i, /difficulty breath/i,
    /severe pain/i, /excruciating/i, /worst pain/i,
    /passed out/i, /fainted/i, /unconscious/i,
    /sepsis/i, /infection.*fever/i, /chills.*fever/i,
    /911/i, /emergency/i, /dying/i,
    /leg.*swollen/i, /swollen.*leg/i
  ];
  return emergencyKeywords.some(kw => kw.test(text));
}

// ── DOM Helpers ───────────────────────────────────────────────
function getTime() {
  return new Date().toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' });
}

function scrollToBottom() {
  const messages = document.getElementById('chatMessages');
  messages.scrollTop = messages.scrollHeight;
}

function showToast(msg, duration = 3500) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function addMessage(content, role, isEmergency = false) {
  const messages = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `message ${role === 'user' ? 'user-message' : 'ai-message'}`;

  const avatarInitial = role === 'user' ? 'You' : 'AI';

  let bubbleClass = 'message-bubble';
  if (isEmergency) bubbleClass += ' emergency-alert-bubble';

  const contentHtml = formatMessage(content);

  div.innerHTML = `
    <div class="message-avatar">${role === 'user' ? '👤' : '🏥'}</div>
    <div>
      <div class="${bubbleClass}">${contentHtml}</div>
      <div class="message-time">${getTime()}</div>
    </div>
  `;

  messages.appendChild(div);
  scrollToBottom();

  messageCount++;
  if (messageCount >= 2 && selectedDoctor) {
    document.getElementById('sendSummaryBar').style.display = 'block';
  }
}

function formatMessage(text) {
  // Convert markdown-like formatting to HTML
  let html = text
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Headers
    .replace(/^### (.*$)/gm, '<strong style="display:block;margin-top:10px;color:var(--purple-dark)">$1</strong>')
    .replace(/^## (.*$)/gm, '<strong style="display:block;margin-top:12px;font-size:1em;color:var(--purple)">$1</strong>')
    // Bullet lists
    .replace(/^\* (.*$)/gm, '<li>$1</li>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Numbered lists
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    // Wrap consecutive li's in ul
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>');

  return `<p>${html}</p>`;
}

// ── Doctor Selection ──────────────────────────────────────────
document.getElementById('doctorSelect').addEventListener('change', function() {
  const option = this.options[this.selectedIndex];
  const key = this.value;
  const badge = document.getElementById('selectedDoctorBadge');
  const nameEl = document.getElementById('selectedDoctorName');

  if (key && CONFIG.PHYSICIANS[key]) {
    selectedDoctor = CONFIG.PHYSICIANS[key];
    nameEl.textContent = selectedDoctor.name;
    badge.style.display = 'flex';
    if (messageCount >= 2) {
      document.getElementById('sendSummaryBar').style.display = 'block';
    }
  } else {
    selectedDoctor = null;
    badge.style.display = 'none';
    document.getElementById('sendSummaryBar').style.display = 'none';
  }
});

// ── Send Message ──────────────────────────────────────────────
async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  // Disable input
  input.value = '';
  autoResize(input);
  document.getElementById('sendBtn').disabled = true;

  // Add user message
  addMessage(text, 'user');

  // Check for emergency
  const isEmergency = detectEmergency(text);

  // Add to history
  conversationHistory.push({ role: 'user', content: text });

  // Show typing indicator
  document.getElementById('typingIndicator').style.display = 'flex';
  scrollToBottom();

  try {
    const response = await fetch(CONFIG.PROXY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CONFIG.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
             },
      body: JSON.stringify({
        model: CONFIG.MODEL,
        max_tokens: 1000,
        system: buildSystemPrompt(),
        messages: conversationHistory
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || `API error ${response.status}`);
    }

    const data = await response.json();
    const reply = data.content[0]?.text || "I'm sorry, I couldn't generate a response. Please try again.";

    // Add assistant message
    conversationHistory.push({ role: 'assistant', content: reply });
    document.getElementById('typingIndicator').style.display = 'none';
    addMessage(reply, 'assistant', isEmergency && reply.toLowerCase().includes('emergency'));

  } catch (err) {
    document.getElementById('typingIndicator').style.display = 'none';
    console.error('API error:', err);

    let errorMsg = "I'm having trouble connecting right now. ";
    if (err.message.includes('API key') || err.message.includes('auth')) {
      errorMsg += "There may be a configuration issue — please contact the clinic. ";
    }
    errorMsg += "If this is urgent, please call your doctor's office or go to the Emergency Room.";
    addMessage(errorMsg, 'assistant');
  }

  document.getElementById('sendBtn').disabled = false;
  input.focus();
}

// ── Quick Question Shortcut ───────────────────────────────────
function askQuick(question) {
  document.getElementById('chatInput').value = question;
  autoResize(document.getElementById('chatInput'));
  sendMessage();
}

// ── Keyboard Handler ──────────────────────────────────────────
function handleKeyDown(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

// ── Auto-resize Textarea ──────────────────────────────────────
function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

// ── Clear Chat ────────────────────────────────────────────────
function clearChat() {
  conversationHistory = [];
  messageCount = 0;
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('sendSummaryBar').style.display = 'none';
  renderWelcome();
  showToast('Conversation cleared. Start a new question anytime.');
}

// ── Send Summary Email ────────────────────────────────────────
async function sendSummaryEmail() {
  if (!selectedDoctor) {
    showToast('⚠️ Please select your urologist first.');
    return;
  }
  if (conversationHistory.length === 0) {
    showToast('No conversation to summarize yet.');
    return;
  }

  // Build summary from conversation
  const patientEmail = document.getElementById('patientEmail').value.trim();
  const timestamp = new Date().toLocaleString('en-CA', {
    dateStyle: 'full', timeStyle: 'short', timeZone: 'America/Toronto'
  });

  // Create a text summary
  const summaryLines = conversationHistory.map((m, i) => {
    const role = m.role === 'user' ? 'PATIENT' : 'ASSISTANT';
    return `[${role}]: ${m.content}`;
  }).join('\n\n');

  const subject = encodeURIComponent(`Western Urology Patient Assistant – Consultation Summary – ${timestamp}`);

  const body = encodeURIComponent(
`WESTERN UNIVERSITY UROLOGY – PATIENT CONSULTATION SUMMARY
Generated: ${timestamp}
Physician: ${selectedDoctor.name}
${patientEmail ? `Patient Contact Email: ${patientEmail}` : 'No patient callback email provided.'}

⚠️  IMPORTANT: This is an AI-generated summary for informational purposes only.
    No personal health information was collected. Review with clinical judgment.

── CONVERSATION TRANSCRIPT ────────────────────────────────────

${summaryLines}

── END OF SUMMARY ─────────────────────────────────────────────
This message was generated by the Western Urology Patient Assistant.
For questions about this tool, contact the Department of Urology, Western University.`
  );

  // Open mailto
  window.open(`mailto:${selectedDoctor.email}?subject=${subject}&body=${body}`);

  showToast(`📧 Summary ready to send to ${selectedDoctor.name}'s office. Please click Send in your email client.`, 5000);
}

// ── Welcome Message ───────────────────────────────────────────
function renderWelcome() {
  const messages = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'message ai-message';
  div.innerHTML = `
    <div class="message-avatar">🏥</div>
    <div>
      <div class="message-bubble welcome-bubble">
        <div class="welcome-title">Welcome to the Western Urology Patient Assistant</div>
        <p>I'm here to help you with questions about your urological care. I can help with:</p>
        <div class="capability-grid">
          <div class="capability-item">📋 Pre-operative prep</div>
          <div class="capability-item">🩺 Post-op recovery</div>
          <div class="capability-item">💊 Medications</div>
          <div class="capability-item">🚨 Emergency signs</div>
          <div class="capability-item">🫀 Symptoms & concerns</div>
          <div class="capability-item">📖 CUA Guidelines</div>
        </div>
        <p><strong>To get started:</strong> Select your urologist in the sidebar, then type your question below or tap a Quick Question.</p>
        <div class="disclaimer-box">
          ⚠️ <strong>Important:</strong> This assistant provides general information only and does not replace your physician's advice.
          For any urgent concerns, call 911 or go to your nearest Emergency Room. No personal health information is collected.
        </div>
      </div>
      <div class="message-time">${getTime()}</div>
    </div>
  `;
  messages.appendChild(div);
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderWelcome();
  document.getElementById('chatInput').focus();
});

// ============================================================
//  Western Urology Patient Assistant – Configuration
//  Edit this file to add/remove physicians and set your API key
// ============================================================

const CONFIG = {

  // ── Anthropic API Key ─────────────────────────────────────
  // Get your key from: https://console.anthropic.com
  // IMPORTANT: For production, use a backend proxy instead of
  // embedding the key here. See README.md for instructions.
  ANTHROPIC_API_KEY: "YOUR_CLAUDE_API_KEY_HERE",

  // ── Model ─────────────────────────────────────────────────
  MODEL: "claude-sonnet-4-20250514",

  // ── Physician Roster ──────────────────────────────────────
  // Add each urologist here. The key matches the <option value>
  // in index.html. Add corresponding <option> tags there too.
  PHYSICIANS: {
    "dr-power": {
      name: "Dr. Nicholas Power",
      email: "npowermd@gmail.com",
      specialty: "Urology"
    }
    // Example – add more physicians:
    // "dr-smith": {
    //   name: "Dr. Jane Smith",
    //   email: "jsmith@uwo.ca",
    //   specialty: "Urology – Oncology"
    // }
  },

  // ── Email Service ─────────────────────────────────────────
  // This app uses mailto: links by default (opens user's email client).
  // For automated server-side email, see README.md for EmailJS setup.
  EMAIL_SERVICE: "mailto", // "mailto" | "emailjs"

  // ── EmailJS (optional) ────────────────────────────────────
  // If EMAIL_SERVICE = "emailjs", fill these in from emailjs.com
  EMAILJS_SERVICE_ID: "",
  EMAILJS_TEMPLATE_ID: "",
  EMAILJS_PUBLIC_KEY: "",

};

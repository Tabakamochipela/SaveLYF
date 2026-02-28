/**
 * SaveLYF – Secure Configuration
 * ─────────────────────────────────────────────────────────────
 * ⚠ CRITICAL SECURITY:
 *   1. Add this file to .gitignore IMMEDIATELY
 *   2. NEVER commit this file to any repository
 *   3. Change all passwords below before going live
 *
 * .gitignore entry:   config.js
 *
 * Credentials are NOT displayed anywhere in the application UI.
 * Each role supports TWO passwords — rotate without downtime.
 * ─────────────────────────────────────────────────────────────
 */

window.SAVELYF_CONFIG = {

  /* ── Firebase Project ── */
  apiKey:            "AIzaSyBEJWj2pKQ35y1fG3hHAT9vJb1RoOGGQvs",
  authDomain:        "savelyf-d809e.firebaseapp.com",
  projectId:         "savelyf-d809e",
  storageBucket:     "savelyf-d809e.firebasestorage.app",
  messagingSenderId: "22404276581",
  appId:             "1:22404276581:web:28892d0dcf0dccd07dc18c",

  /* ── Admin Portal Credentials ──────────────────────────────
   * Two passwords per role — both work simultaneously.
   * users:     accepted usernames for this role
   * passwords: both passwords accepted (rotate without locking anyone out)
   * ──────────────────────────────────────────────────────── */
  adminCredentials: {

    official: {
      users:     ['official@gov.bw', 'govofficer'],
      passwords: ['GovBW@2024!Secure', 'GovBW@2024!Backup']
    },

    engineer: {
      users:     ['engineer@gov.bw', 'rdsengineer'],
      passwords: ['RdsEng@BW2024!01', 'RdsEng@BW2024!02']
    },

    analyst: {
      users:     ['analyst@gov.bw', 'dataanalyst'],
      passwords: ['Analyst@BW2024!A', 'Analyst@BW2024!B']
    },

    super: {
      users:     ['superadmin@savelyf.bw', 'savelyf_super'],
      passwords: ['SuperSLYF@2024!X1', 'SuperSLYF@2024!X2']
    }

  }

};

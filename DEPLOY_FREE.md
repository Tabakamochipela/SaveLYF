# SaveLYF – FREE Deployment Guide
## Developed by: Tabaka Mochipela
### Zero Cost · No Credit Card · Real GPS · Real-Time Data

---

## 🆓 FREE TECH STACK (Replacing Paid Services)

| Original (Paid) | SaveLYF Free Replacement | Cost |
|---|---|---|
| Google Maps SDK ($200+/mo) | Leaflet.js + CartoDB/OpenStreetMap | **FREE** |
| Firebase Spark (free tier) | Firebase Firestore + Auth | **FREE** |
| Google Play Store ($25) | PWA — Install directly from browser | **FREE** |
| Apple App Store ($99/yr) | PWA — Add to Home Screen on iOS | **FREE** |
| SMS API (paid) | Browser tel: link → real phone dialer | **FREE** |
| Paid hosting | Firebase Hosting / Netlify / GitHub Pages | **FREE** |

---

## ⚡ OPTION A — INSTANT DEMO (No Setup, 30 Seconds)

The app works RIGHT NOW without any configuration.
Just open `index.html` in any browser — it runs in Demo Mode.

**Demo Mode features:**
- ✅ Real Gaborone map (CartoDB/OpenStreetMap tiles)
- ✅ Real GPS tracking from your device
- ✅ Real speed calculation
- ✅ Real voice alerts (Web Speech API)
- ✅ Report potholes (stored in browser localStorage)
- ✅ All 5 screens work
- ✅ Admin panel (login: admin / savelyf2024)
- ✅ Emergency SOS → opens phone dialer

---

## 🌐 OPTION B — FREE LIVE HOSTING (5 Minutes)

### Method 1: Netlify (Easiest)
1. Go to **https://netlify.com** — sign up FREE
2. Drag the entire `SaveLYF_PWA` folder onto the deploy area
3. Done! You get: `https://your-name.netlify.app`
4. Share this URL — anyone can open it as an app

### Method 2: GitHub Pages
1. Go to **https://github.com** — sign up FREE
2. New repository → Upload the 3 files (index.html, sw.js, manifest.json)
3. Settings → Pages → Deploy from main branch
4. Live at: `https://yourusername.github.io/savelyf`

### Method 3: Firebase Hosting (Best for Firebase users)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory → (your SaveLYF_PWA folder)
firebase deploy --only hosting
# Live at: https://your-project.web.app
```

---

## 🔥 OPTION C — ENABLE REAL-TIME FIREBASE SYNC (10 Minutes)

This enables multiple users to see each other's pothole reports in real-time.

### Step 1: Create Free Firebase Project
1. Go to **https://console.firebase.google.com**
2. Click **"Add project"** → Name: "SaveLYF" → **Create Project**
3. Click the **"</>"** Web icon → Register app → Name: "SaveLYF Web"
4. Copy the `firebaseConfig` object — you'll need it next

### Step 2: Enable Free Services
In Firebase Console (all FREE on Spark plan):
- **Build → Firestore Database** → Create database → Production mode → Choose region closest to Botswana (europe-west1)
- **Build → Authentication** → Get Started → Enable **Anonymous** provider

### Step 3: Add Config to App
Open `index.html` and find this section near the top (~line 215):
```javascript
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",        // ← Replace with yours
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```

Paste YOUR values from Firebase Console. Save the file. Done!

### Step 4: Set Firestore Security Rules
In Firebase Console → Firestore → Rules, paste:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /potholes/{id} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```
Click **Publish**.

### Firebase Free Tier Limits (More Than Enough):
| Service | Free Limit |
|---|---|
| Firestore Reads | 50,000 / day |
| Firestore Writes | 20,000 / day |
| Storage | 1 GB |
| Hosting | 10 GB bandwidth |
| Authentication | Unlimited |

---

## 📱 INSTALLING AS A MOBILE APP (No App Store)

### Android (Any phone):
1. Open the hosted URL in Chrome
2. Menu (⋮) → **"Add to Home Screen"** OR tap the install banner in the app
3. App installs instantly — looks and feels like a native app
4. Works offline after first load (Service Worker caches everything)

### iPhone / iPad:
1. Open the hosted URL in Safari
2. Share button (□↑) → **"Add to Home Screen"**
3. Name it "SaveLYF" → Add
4. Appears on home screen with the shield icon

---

## 🔧 CUSTOMIZING THE APP

### Change Emergency Contact Number:
Find in `index.html`:
```javascript
window.location.href = 'tel:999';
```
Change `999` to your country's emergency number or a specific number.

### Add Your Own Pothole Locations:
Find `SEED_POTHOLES` array and add entries:
```javascript
{ id:'s13', lat:-24.6XXX, lng:25.9XXX, road:'Your Road Name', severity:'Dangerous', reports:1, risk:85, fixed:false },
```

### Change Admin Password:
Find in the `doLogin()` function:
```javascript
const validPass = p === 'savelyf2024';
```
Change `'savelyf2024'` to your secure password.

---

## 📋 FEATURES CHECKLIST

- ✅ Real GPS tracking (browser Geolocation API)
- ✅ Real speed calculation from GPS coordinates
- ✅ Real voice alerts (Web Speech API — no cost)
- ✅ Real map (Leaflet + CartoDB — no API key needed)
- ✅ Real offline mode (Service Worker + tile caching)
- ✅ Real data persistence (localStorage demo / Firebase live)
- ✅ Installable PWA (Android + iOS home screen)
- ✅ Emergency SOS → opens real phone dialer
- ✅ Dark / Light mode with map tile switching
- ✅ Pothole reporting with GPS coordinates
- ✅ Admin portal with authentication
- ✅ CSV export of road data
- ✅ Community leaderboard
- ✅ Achievement badges
- ✅ Heatmap of danger zones
- ✅ Auto-dismiss alerts after timer
- ✅ Real-time community sync (when Firebase configured)

---

*SaveLYF v1.0 · Developed by Tabaka Mochipela · © 2024 All Rights Reserved*
*Saving Lives Through Smart Technology · Gaborone, Botswana*

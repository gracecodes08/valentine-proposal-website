# 💌 Valentine Proposal Website

A cute, interactive 6-page proposal website built with pure HTML, CSS & JavaScript. No frameworks. No backend. Just vibes. 💕

---

## ✨ Features

- 🏠 **Landing Page** — falling heart confetti, animated button
- 📸 **Memory Timeline** — 3 customizable memory cards with photos & songs
- 🎯 **Quiz** — "How well do you know us?" with 3 funny questions
- 💕 **Heart Catch Game** — catch 10 falling hearts to unlock the next page
- 💌 **Proposal Page** — the big question, with a YES explosion and a NO button that runs away
- 🎉 **Ending Page** — confetti, memories, and a very legally binding contract

---

## 🛠 Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript
- Canvas API (heart confetti & explosion)
- localStorage (saves photos, songs, customizations)
- Base64 URL encoding (shareable link)
- Hosted on **Vercel**

---

## 📁 File Structure

```
proposal-website/
├── index.html        ← Landing page + full customize modal
├── timeline.html     ← Memory timeline with photos & songs
├── game.html         ← Quiz page
├── heartcatch.html   ← Heart catch mini game
├── proposal.html     ← The big question
├── ending.html       ← Happy ending 🎉
└── shared.js         ← Shared data storage & URL utilities
```

---

## 🚀 How to Use

### As a Creator
1. Open the site
2. Click **✏️ Customize** at the bottom
3. Fill in all 5 tabs: Landing, Memories, Quiz, Proposal, Ending
4. Upload photos in the Memories tab
5. Click **Save & Generate Link 🔗**
6. Copy the link and send it to your person!! 💌

### As the Person Receiving It
1. Open the link
2. Experience the journey page by page
3. Answer the big question 💕

---

## 📸 Notes on Photos & Songs

- Photos and songs are stored in **localStorage** (on the creator's device)
- They do **not** transfer via the shareable link (URL would be too long)
- For the best demo experience, show the site on your own device where you uploaded the photos!

---

## 💻 Running Locally

Just open `index.html` in your browser — or use **Live Server** in VS Code!

---

## 🌐 Deployment

Deployed on [Vercel](https://vercel.com) via GitHub integration.

---

Made with 💕 and zero sleep at a hackathon.
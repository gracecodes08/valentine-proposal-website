const STORAGE_KEY = 'proposalData';

function isViewer() {
  return new URLSearchParams(window.location.search).has('share');
}

function saveData(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e) {}
}

function loadData() {
  try {
    if (isViewer()) {
      const raw = new URLSearchParams(window.location.search).get('share');
      const json = decodeURIComponent(escape(atob(raw.replace(/-/g,'+').replace(/_/g,'/'))));
      return JSON.parse(json);
    }
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || getDefaults();
  } catch(e) { return getDefaults(); }
}

function getDefaults() {
  return {
    landing: { h1a:"Wait... before", h1b:"you go anywhere", sub:"I need to ask you something important.", btn:"Start the Journey 💫", hint:"* this may change your life. probably." },
    memories: [
      { msg:"We met here and everything went downhill 😂", emoji:"📍", photo:null, songName:null, songData:null },
      { msg:"Our first fight... which I obviously won.", emoji:"⚡", photo:null, songName:null, songData:null },
      { msg:"Still stuck with me. Somehow.", emoji:"🫂", photo:null, songName:null, songData:null },
    ],
    quiz: [
      { q:"When did we first meet?", opts:["Yesterday","That one chaotic day","When fate made a mistake","I don't remember"], correct:1, ok:"Correct! You're stuck with me now 😂", fail:"Really?? 💀" },
      { q:"What's my most iconic trait?", opts:["Always right","Talking too much","Stealing snacks","All of the above 💀"], correct:3, ok:"You know me so well 😌", fail:"Wrong! I'll forgive you. This time 😤" },
      { q:"How would you describe us?", opts:["A total disaster","Chaotic but working","Need therapy","An acquired taste"], correct:1, ok:"Chaotic but working — that's us 💕", fail:"Hmm... not wrong but also 😭" }
    ],
    proposal: { pre:"After all the chaos...", q:"Will you be my <em>partner in crime?</em>" },
    ending: { line1:"Well well well...", line2:"Looks like it's a date.", funny:"You have successfully signed a lifetime contract.\nNo refunds.\nChaos is now shared. 💀" }
  };
}

function generateShareLink(baseUrl) {
  try {
    const data = loadData();
    // only text — no photos/songs
    const shareData = {
      l: data.landing,
      m: data.memories.map(m => ({ msg: m.msg, emoji: m.emoji||'📍' })),
      q: data.quiz.map(q => ({ q:q.q, opts:q.opts, correct:q.correct, ok:q.ok, fail:q.fail })),
      p: data.proposal,
      e: data.ending
    };
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(shareData))))
      .replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
    return baseUrl + '?share=' + encoded;
  } catch(e) { return null; }
}

// expand short keys back when loading shared data
function expandShared(s) {
  return {
    landing: s.l || getDefaults().landing,
    memories: (s.m||[]).map(m => ({ msg:m.msg, emoji:m.emoji, photo:null, songName:null, songData:null })),
    quiz: s.q || getDefaults().quiz,
    proposal: s.p || getDefaults().proposal,
    ending: s.e || getDefaults().ending
  };
}

// patch loadData to expand short keys
const _origLoad = loadData;
function loadData() {
  try {
    if (isViewer()) {
      const raw = new URLSearchParams(window.location.search).get('share');
      const json = decodeURIComponent(escape(atob(raw.replace(/-/g,'+').replace(/_/g,'/'))));
      const parsed = JSON.parse(json);
      // detect short key format
      return parsed.m ? expandShared(parsed) : parsed;
    }
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || getDefaults();
  } catch(e) { return getDefaults(); }
}

function propagateShare() {
  if (!isViewer()) return;
  const search = window.location.search;
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('#') && href.includes('.html')) {
      a.href = href.split('?')[0] + search;
    }
  });
}

window.addEventListener('DOMContentLoaded', propagateShare);
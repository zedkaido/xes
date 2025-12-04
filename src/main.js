import { bangs } from "/public/bangs.js";

function renderHelpPage() {
  const url = document.URL;

  const app = document.querySelector("#xes");
  app.innerHTML = `
    <h1 style="margin-top: 0.2em;"><a href="https://github.com/zedkaido/xes" target="_blank">xES</a> - <code>!x</code> Engine Selector</h1>

    <p>
    <b>!xES</b> is an open-source alternative to DuckDuckGo <b>!bangs</b> that significantly outperforms its redirect latency by caching ≈ 8.42 KiB of JS in your browser.
    <p>

    <hr>
    <p>Visit <a href="/bangs.js">/bangs.js</a> for the full list of bangs.</p>
    <hr>

    <p>
    If you are happy with the pre-defined bangs, you can set the default search engine in your browsers to:
    </p>
    <input size="84" type="text" class="url-input" value="${url}?q=%s" readonly />

    <p>
    <hi><b>WARNING</b></hi>: <b>I may update the current <code>!bangs</code> at any time.</b>
    </p>

    <p>
    That being said, I personally recommend cloning <a href="https://github.com/zedkaido/xes" target="_blank">github.com/zedkaido/xes</a>, editing <a href="/bangs.js">/bangs.js</a> to your liking and serving it within your walls of comfort.
    </p>

    <opus-humanum>by <a href="https://zedkaido.com">Zed-Kaido</a></opus-humanum>
  `;
}

const LS_DEFAULT_BANG = localStorage.getItem("default-bang") ?? "g";
const defaultBang = bangs[LS_DEFAULT_BANG];

function getRedirectUrl() {
  const url = new URL(window.location.href);
  let query = url.searchParams.get("q")?.trim() ?? "";
  if (!query) {
    renderHelpPage();
    return null;
  }

  const bangMatch = query.match(/!(\S+)/i);
  const bangCandidate = bangMatch?.[1]?.toLowerCase();

  let bang = bangs[bangCandidate]
  if (bang) query = query.replace(/!\S+\s*/i, "").trim();
  else bang = defaultBang; 

  const searchUrl = bang.url.replace(
    "{{{s}}}",
    encodeURIComponent(query)
  );
  if (!searchUrl) return null;

  return searchUrl;
}

function redirect() {
  const searchUrl = getRedirectUrl();
  if (!searchUrl) return;
  window.location.replace(searchUrl);
}

redirect();

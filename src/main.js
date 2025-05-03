import { bangs } from "./bangs.js";

function renderHelpPage() {
  const url = document.URL;

  const app = document.querySelector("#xes");
  app.innerHTML = `
    <h1><code>!XES</code> aka<br>!X Engine Selector</h1> 
    <p><b>█</b> Navigate the web with <code>!bangs</code> you control.<p>
    <p>Add the following url as a <code>custom</code>/<code>default</code> search engine to your browser.</p>
    <input size="84" type="text" class="url-input" value="${url}?q=%s" readonly />
    <p>After the first request, the JS is cached and redirects are done locally.</p>
    <h2>Supported <code>!bangs</code></h2>
    <p>To <code>add</code>/<code>edit</code> the bangs: <a href="https://github.com/zedkaido/xes"><b>fork</b>/<b>clone</b></a> the project to edit <a href="https://github.com/zedkaido/xes/blob/master/src/bangs.js"><b>src/bangs.js</b></a> (or, submit a <b><a href="https://github.com/zedkaido/xes/pulls">PR</a></b>/<b><a href="https://github.com/zedkaido/xes/issues/new">Issue</a></b>).</p>
    <ul id="bangs"></ul>
  `;

  const list = document.querySelector("#bangs");
  Object.keys(bangs).forEach(bangKey => {
    const listItem = document.createElement("li");
    const bang = bangs[bangKey];
    listItem.innerHTML = `<b>!${bangKey}</b> - ${bang.name} <span class="url">:<span> <a class="url" href=${bang.url}>${bang.url}</a>`;
    list.appendChild(listItem);
  });
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

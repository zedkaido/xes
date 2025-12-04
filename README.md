# !xES - `!x` Engine Selector

**!xES** is an open-source alternative to DuckDuckGo **!bangs** that significantly outperforms its redirect latency by caching ≈ 8.42 KiB of JS in your browser.

---

Visit [/bangs.js](https://github.com/zedkaido/xes/blob/master/public/bangs.js) for the full list of bangs.

---

If you are happy with the pre-defined bangs, you can set the default search engine in your browsers to:

```
https://xes.zedkaido.com?q=%s
```

> :warning: - **I may update the current !bangs at any time.**

That being said, I personally recommend forking this repo, editing [/bangs.js](https://github.com/zedkaido/xes/blob/master/public/bangs.js) to your liking and serving it within your walls of comfort.

---

## Development 

```sh
npm i
npm run dev # vite --port 1111
npm run debug # vite --port 1111 --debug
```

```sh
npm run build # ^_- 
git subtree push --prefix dist origin dist
```

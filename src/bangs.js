export const bangs = {
  "g": { name: "Google Search", url: "https://www.google.com/search?q={{{s}}}" },
  "goog": { name: "Google Search", url: "https://www.google.com/search?q={{{s}}}" },
  "google": { name: "Google Search", url: "https://www.google.com/search?q={{{s}}}" },
  "gs": { name: "Google Search", url: "https://www.google.com/search?q={{{s}}}" },
  "gluck": { name: "I'm Feeling Lucky", url: "http://www.google.com/search?q={{{s}}}&btnI" },

  "sh": { name: "Google Shell", url: "https://goosh.org/#{{{s}}}" },
  "term": { name: "Google Shell", url: "https://goosh.org/#{{{s}}}" },

  "gday": { name: "Google (Past 24h)", url: "http://www.google.com/search?q={{{s}}}&tbs=qdr:d" },
  "g24": { name: "Google (Past 24h)", url: "http://www.google.com/search?q={{{s}}}&tbs=qdr:d" },
  "gweek": { name: "Google (Past Week)", url: "http://www.google.com/search?q={{{s}}}&tbs=qdr:w" },
  "gmonth": { name: "Google (Past Month)", url: "http://www.google.com/search?q={{{s}}}&tbs=qdr:m" },
  "g6months": { name: "Google (Past 6 Months)", url: "https://www.google.com/search?tbs=qdr:m6&q={{{s}}}&safe=off&ie=utf-8&oe=utf-8" },
  "gyear": { name: "Google (Past 6 Months)", url: "http://www.google.com/search?q={{{s}}}&tbs=qdr:y" },

  "l": { name: "Google Search (Link)", url: "http://www.google.com/search?as_lq={{{s}}}&hl=en&btnG=Search" },
  "link": { name: "Google Search (Link)", url: "http://www.google.com/search?as_lq={{{s}}}&hl=en&btnG=Search" },
  "glink": { name: "Google Search (Link)", url: "http://www.google.com/search?as_lq={{{s}}}&hl=en&btnG=Search" },

  "gcs": { name: "Google Cloud Search", url: "https://cloudsearch.google.com/cloudsearch/search?q={{{s}}}" },
  "gs": { name: "Google Shopping", url: "https://www.google.com/products?q={{{s}}}&sa=N&tab=pf" },
  "gwp": { name: "Google Wikipedia", url: "http://www.google.com/search?q={{{s}}}%20site:wikipedia.org" },

  "gsc": { name: "Google Scholar", url: "https://scholar.google.com/scholar?q={{{s}}}&btnG=Search&as_sdt=800000000001&as_sdtp=on" },
  "scholar": { name: "Google Scholar", url: "https://scholar.google.com/scholar?q={{{s}}}&btnG=Search&as_sdt=800000000001&as_sdtp=on" },

  "arxiv": { name: "arXiv (open science)", url: "http://arxiv.org/search?query={{{s}}}&searchtype=all" },
  "sci": { name: "Sci-Hub Papers", url: "https://sci-hub.se/{{{s}}}" },
  "scihub": { name: "Sci-Hub Papers", url: "https://sci-hub.se/{{{s}}}" },
  "papers": { name: "Sci-Hub Papers", url: "https://sci-hub.se/{{{s}}}" },

  "gi": { name: "Google Images", url: "https://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1" },
  "gimg": { name: "Google Images", url: "https://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1" },
  "gimages": { name: "Google Images", url: "https://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1" },

  "gg": { name: "Google Groups", url: "http://groups.google.com/groups/search?q={{{s}}}&qt_s=Search+Groups" },
  "ggroups": { name: "Google Groups", url: "http://groups.google.com/groups/search?q={{{s}}}&qt_s=Search+Groups" },

  "gfont": { name: "Google Fonts", url: "https://fonts.google.com/?query={{{s}}}" },
  "gfonts": { name: "Google Fonts", url: "https://fonts.google.com/?query={{{s}}}" },

  "gfl":  { name: "Google Flights", url: "https://www.google.com/flights/#search;t={{{s}}}" },
  "gflights":  { name: "Google Flights", url: "https://www.google.com/flights/#search;t={{{s}}}" },
  "flight":  { name: "Google Flights", url: "https://www.google.com/flights/#search;t={{{s}}}" },
  "fly":  { name: "Google Flights", url: "https://www.google.com/flights/#search;t={{{s}}}" },

  "booking": { name: "Booking.com", url: "http://www.booking.com/searchresults.html?ss={{{s}}}&si=ai" },

  "gn": { name: "Google News", url: "https://news.google.com/search?q={{{s}}}" },
  "gnews": { name: "Google News", url: "https://news.google.com/search?q={{{s}}}" },

  "wttr": { name: "Weather In", url: "https://wttr.in/{{{s}}}" },
  "weather": { name: "Weather In", url: "https://wttr.in/{{{s}}}" },
  "wind": { name: "Weather In", url: "https://wttr.in/{{{s}}}" },
  "temperature": { name: "Weather In", url: "https://wttr.in/{{{s}}}" },

  "compose": { name: "Compose Email (Gmail)", url: "https://mail.google.com/mail/?view=cm&to=&su={{{s}}}" },
  "inbox": { name: "Google Mail [0]", url: "https://mail.google.com/mail/u/0/#inbox{{{s}}}:" },
  "inbox1": { name: "Google Mail [1]", url: "https://mail.google.com/mail/u/1/#inbox{{{s}}}:" },
  "inbox2": { name: "Google Mail [2]", url: "https://mail.google.com/mail/u/2/#inbox{{{s}}}:" },
  "gmail": { name: "Google Mail [0]", url: "https://mail.google.com/mail/u/0/#search/{{{s}}}" },
  "gmail1": { name: "Google Mail [1]", url: "https://mail.google.com/mail/u/1/#search/{{{s}}}" },
  "gmail2": { name: "Google Mail [2]", url: "https://mail.google.com/mail/u/2/#search/{{{s}}}" },

  "tuta": { name: "Tuta Mail", url: "https://app.tuta.com/search/mail/?query={{{s}}}" },
  "tutamail": { name: "Tuta Mail", url: "https://app.tuta.com/search/mail/?query={{{s}}}" },
  "proton": { name: "Proton Mail", url: "https://mail.protonmail.com/search?keyword={{{s}}}" },
  "protonmail": { name: "Proton Mail", url: "https://mail.protonmail.com/search?keyword={{{s}}}" },

  "gc": { name: "Google Contacts", url: "https://contacts.google.com/search/{{{s}}}" },
  "gcontacts": { name: "Google Contacts", url: "https://contacts.google.com/search/{{{s}}}" },
  "contacts": { name: "Google Contacts", url: "https://contacts.google.com/search/{{{s}}}" },

  "gcal": { name: "Google Calendar", url: "https://calendar.google.com/calendar/b/0/r/search?q={{{s}}}" },
  "calendar": { name: "Google Calendar", url: "https://calendar.google.com/calendar/b/0/r/search?q={{{s}}}" },

  "gd": { name: "Google Drive", url: "https://drive.google.com/drive/search?q={{{s}}}" },
  "gdrive": { name: "Google Drive", url: "https://drive.google.com/drive/search?q={{{s}}}" },

  "gdoc": { name: "Google Docs Viewer", url: "http://docs.google.com/viewer?url={{{s}}}" },
  "gdocs": { name: "Google Docs Viewer", url: "http://docs.google.com/viewer?url={{{s}}}" },

  "gsh": { name: "Google Spreadsheets", url: "https://docs.google.com/spreadsheets/u/0/?q={{{s}}}" },
  "gspread": { name: "Google Spreadsheets", url: "https://docs.google.com/spreadsheets/u/0/?q={{{s}}}" },

  "gcp": { name: "GCP", url: "https://cloud.google.com/s/results/?q={{{s}}}" },
  "gcode": { name: "Google Code", url: "https://code.google.com/hosting/search?q={{{s}}}" },
  "gdevs": { name: "Google Developers", url: "https://developers.google.com/s/results/?q={{{s}}}" },

  "m": { name: "Google Maps", url: "https://google.com/maps/place/{{{s}}}}" },
  "gm": { name: "Google Maps", url: "https://google.com/maps/place/{{{s}}}" },
  "map": { name: "Google Maps", url: "https://google.com/maps/place/{{{s}}}" },
  "maps": { name: "Google Maps", url: "https://google.com/maps/place/{{{s}}}" },
  "mapsl": { name: "Google Maps Lite", url: "https://google.com/maps/search/{{{s}}}?force=canvas" },
  "route": { name: "Google Maps Route", url: "https://www.google.de/maps/dir/{{{s}}}" }, 
  "gearth": { name: "Google Earth", url: "https://earth.google.com/web/search/{{{s}}}" },

  "che": { name: "Chrome Extensions", url: "https://chrome.google.com/webstore/search/{{{s}}}?_category=extensions" },
  "extension": { name: "Chrome Extensions", url: "https://chrome.google.com/webstore/search/{{{s}}}?_category=extensions" },
  "extensions": { name: "Chrome Extensions", url: "https://chrome.google.com/webstore/search/{{{s}}}?_category=extensions" },
  "chrome": { name: "Chrome Extensions", url: "https://chrome.google.com/webstore/search/{{{s}}}?_category=extensions" },
  "chstore": { name: "Chrome Extensions", url: "https://chrome.google.com/webstore/search/{{{s}}}?_category=extensions" },

  "blackle": { name: "Blackle (Google in Black)", url: "http://blackle.com/results/?cx=partner-pub-8993703457585266%3A4862972284&cof=FORID%3A10&ie=UTF-8&q= {{{s}}}&sa=+#gsc.tab=0&gsc.q= {{{s}}}&gsc.page=1" },

  "firefox": { name: "Firefox Add-Ons", url: "https://addons.mozilla.org/en-US/firefox/search/?q={{{s}}}&cat=all" },
  "fox": { name: "Firefox Add-Ons", url: "https://addons.mozilla.org/en-US/firefox/search/?q={{{s}}}&cat=all" },
  "addon": { name: "Firefox Add-Ons", url: "https://addons.mozilla.org/en-US/firefox/search/?q={{{s}}}&cat=all" },

  "gdef": { name: "Google Define", url: "https://www.google.com/search?hl=en&q=define+{{{s}}}" },
  "define": { name: "Google Define", url: "https://www.google.com/search?hl=en&q=define+{{{s}}}" },
  "def": { name: "Google Define", url: "https://www.google.com/search?hl=en&q=define+{{{s}}}" },

  "mw": { name: "Meriam-Webster Dictionary", url: "http://www.merriam-webster.com/dictionary/{{{s}}}" },

  "word": { name: "TheFreeDictionary.com", url: "http://www.thefreedictionary.com/{{{s}}}" },
  "dict": { name: "TheFreeDictionary.com", url: "http://www.thefreedictionary.com/{{{s}}}" },
  "dictionary": { name: "TheFreeDictionary.com", url: "http://www.thefreedictionary.com/{{{s}}}" },
  "cambridge": { name: "Cambridge Dictionary", url: "http://dictionary.cambridge.org/dictionary/english/{{{s}}}" },

  "camb": { name: "Cambridge Dictionary", url: "http://dictionary.cambridge.org/dictionary/english/{{{s}}}" },
  "cdic": { name: "Cambridge Dictionary", url: "http://dictionary.cambridge.org/dictionary/english/{{{s}}}" },

  "whats": { name: "Vocabulary.com", url: "https://www.vocabulary.com/dictionary/{{{s}}}" },
  "ys": { name: "Яндекс.Словари", url: "https://slovari.yandex.ru/{{{s}}}" },

  "brit": { name: "Encyclopedia Britannica", url: "https://www.britannica.com/search?query={{{s}}}" },
  "encyclopedia": { name: "Encyclopedia Britannica", url: "https://www.britannica.com/search?query={{{s}}}" },
  
  "mathpedia": { name: "Encyclopedia of Mathematics", url: "http://www.encyclopediaofmath.org/index.php?title=Special:Search&search={{{s}}}" },
  "encyclopediaofmath": { name: "Encyclopedia of Mathematics", url: "http://www.encyclopediaofmath.org/index.php?title=Special:Search&search={{{s}}}" },
  
  "pt": { name: "Power Thesaurus", url: "https://www.powerthesaurus.org/{{{s}}}" },
  "powerthesaurus": { name: "Power Thesaurus", url: "https://www.powerthesaurus.org/{{{s}}}" },
  "thesaurus": { name: "TheFreeThesaurus.com", url: "https://www.freethesaurus.com/{{{s}}}" },
  "moby": { name: "Moby Thesaurus", url: "http://www.moby-thesaurus.org/search?q={{{s}}}" },
  "mobythes": { name: "Moby Thesaurus", url: "http://www.moby-thesaurus.org/search?q={{{s}}}" },

  "synonym": { name: "Thesaurus.com", url: "http://www.thesaurus.com/browse/{{{s}}}" },
  "synonyms": { name: "Thesaurus.com", url: "http://www.thesaurus.com/browse/{{{s}}}" },
  "syn": { name: "Thesaurus.com", url: "http://www.thesaurus.com/browse/{{{s}}}" },
  "antonym": { name: "Thesaurus.com", url: "http://www.thesaurus.com/browse/{{{s}}}" },
  "antonyms": { name: "Thesaurus.com", url: "http://www.thesaurus.com/browse/{{{s}}}" },
  "ant": { name: "Thesaurus.com", url: "http://www.thesaurus.com/browse/{{{s}}}" },

  "acronym": { name: "AcronymFinder", url: "http://www.acronymfinder.com/~/search/af.aspx?string=exact&Acronym={{{s}}}" },
  "acronyms": { name: "AcronymFinder", url: "http://www.acronymfinder.com/~/search/af.aspx?string=exact&Acronym={{{s}}}" },

  "ascii": { name: "ASCII Art Generator", url: "https://patorjk.com/software/taag/#p=testall&f=Graffiti&t={{{s}}}" }, 
  "aart": { name: "ASCII Art Generator", url: "https://patorjk.com/software/taag/#p=testall&f=Graffiti&t={{{s}}}" }, 

  "gt": { name: "Google Translate (Auto)", url: "https://translate.google.com/#auto/en/{{{s}}}" },
  "gtranslate": { name: "Google Translate (Auto)", url: "https://translate.google.com/#auto/en/{{{s}}}" },
  "translate": { name: "Google Translate (Auto)", url: "https://translate.google.com/#auto/en/{{{s}}}" },
  "en-pt": { name: "Google Translate EN-PT", url: "https://translate.google.com/#en/pt/{{{s}}}" },
  "pt-en": { name: "Google Translate PT-EN", url: "https://translate.google.com/#pt/en/{{{s}}}" },
  "en-ru": { name: "Google Translate EN-RU", url: "https://translate.google.com/#en/ru/{{{s}}}" },
  "ru-en": { name: "Google Translate RU-EN", url: "https://translate.google.com/#ru/en/{{{s}}}" },
  "en-ro": { name: "Google Translate EN-RO", url: "https://translate.google.com/#en/ro/{{{s}}}" },
  "ro-en": { name: "Google Translate RO-EN", url: "https://translate.google.com/#ro/en/{{{s}}}" },
  "en-it": { name: "Google Translate EN-IT", url: "https://translate.google.com/#en/it/{{{s}}}" },
  "it-en": { name: "Google Translate IT-EN", url: "https://translate.google.com/#it/en/{{{s}}}" },
  "en-de": { name: "Google Translate EN-DE", url: "https://translate.google.com/#en/de/{{{s}}}" },
  "de-en": { name: "Google Translate DE-EN", url: "https://translate.google.com/#de/en/{{{s}}}" },
  "en-es": { name: "Google Translate EN-ES", url: "https://translate.google.com/#en/es/{{{s}}}" },
  "es-en": { name: "Google Translate ES-EN", url: "https://translate.google.com/#es/en/{{{s}}}" },
  "en-fr": { name: "Google Translate EN-FR", url: "https://translate.google.com/#en/fr/{{{s}}}" },
  "fr-en": { name: "Google Translate FR-EN", url: "https://translate.google.com/#fr/en/{{{s}}}" },
  "en-ja": { name: "Google Translate EN-JA", url: "https://translate.google.com/#en/ja/{{{s}}}" },
  "ja-en": { name: "Google Translate JA-EN", url: "https://translate.google.com/#ja/en/{{{s}}}" },
  "en-chinese": { name: "Google Translate EN-CN(SIMPL)", url: "https://translate.google.com/#en/zh-CN/{{{s}}}" },
  "chinese-en": { name: "Google Translate CN(SIMPL)-EN", url: "https://translate.google.com/#zh-CN/en/{{{s}}}" },

  "yt": { name: "YouTube Search", url: "https://www.youtube.com/results?search_query={{{s}}}" },
  "you": { name: "YouTube Search", url: "https://www.youtube.com/results?search_query={{{s}}}" },
  "youtube": { name: "YouTube Search", url: "https://www.youtube.com/results?search_query={{{s}}}" },
  "yth": { name: "Youtube History", url: "https://www.youtube.com/feed/history?query={{{s}}}" },
  "ytc": { name: "YouTube Channel @x", url: "https://www.youtube.com/@{{{s}}}" },
  "ytp": { name: "YouTube Playlists", url: "https://www.youtube.com/results?q={{{s}}}&sp=EgIQAw%253D%253D" },
  "yew": { name: "Invidious Yewtu.be (DE)", url: "https://yewtu.be/search?q={{{s}}}" },
  "inv": { name: "Invidious Yewtu.be (DE)", url: "https://yewtu.be/search?q={{{s}}}" },
  "devtube": { name: "DevTube", url: "http://dev.tube?q={{{s}}}" },

  "twitch": { name: "Twitch Search", url: "https://www.twitch.tv/search?term={{{s}}}" }, 
  "kick": { name: "Kick Search", url: "https://kick.com/search?query={{{s}}}" },

  "ytm": { name: "Youtube Music", url: "https://music.youtube.com/search?q={{{s}}}" },
  "music": { name: "Youtube Music", url: "https://music.youtube.com/search?q={{{s}}}" },
  "spotify": { name: "Spotify Music Search", url: "https://open.spotify.com/search/{{{s}}}" },
  "bandcamp": { name: "Bandcamp Music Search", url: "https://bandcamp.com/search?q={{{s}}}" },
  "sc": { name: "SoundCloud Music Search", url: "https://soundcloud.com/search?q={{{s}}}" },
  "sound": { name: "SoundCloud Music Search", url: "https://soundcloud.com/search?q={{{s}}}" },
  "soundcloud": { name: "SoundCloud Music Search", url: "https://soundcloud.com/search?q={{{s}}}" },
  "tidal": { name: "Tidal Music Search", url: "https://listen.tidal.com/search/{{{s}}}" },
  "mm": { name: "Music Map Search", url: "http://www.music-map.com/{{{s}}}" },
  "musicmap": { name: "Music Map Search", url: "http://www.music-map.com/{{{s}}}" },
  "mix": { name: "MixCloud", url: "https://www.mixcloud.com/{{{s}}}" },

  "genius": { name: "Genius Music Lyrics", url: "http://genius.com/search?q={{{s}}}" },
  "lyrics": { name: "Genius Music Lyrics", url: "http://genius.com/search?q={{{s}}}" },

  "wia": { name: "Web Internet Archive", url: "https://web.archive.org/web/*/{{{s}}}" },
  "ia": { name: "Web Internet Archive", url: "https://web.archive.org/web/*/{{{s}}}" },
  "archive": { name: "Internet Archive", url: "https://archive.org/search.php?query={{{s}}}" },

  "wiki": { name: "Wikipedia", url: "http://en.wikipedia.org/wiki/Special:Search?search={{{s}}}&go=Go" },
  "cswiki": { name: "CS Wikipedia", url: "http://cs.wikipedia.org/wiki/{{{s}}}" },

  "podcast": { name: "Podcast Search Engine", url: "https://www.listennotes.com/search/?q={{{s}}}&sort_by_date=0" },

  "b": { name: "Brave Search", url: "https://search.brave.com/search?q={{{s}}}" },
  "brave": { name: "Brave Search", url: "https://search.brave.com/search?q={{{s}}}" },

  "eco": { name: "Ecosia Search", url: "https://www.ecosia.org/search?q={{{s}}}" },
  "ecosia": { name: "Ecosia Search", url: "https://www.ecosia.org/search?q={{{s}}}" },
  "ecoimg": { name: "Ecosia Images", url: "https://www.ecosia.org/images?q={{{s}}}" },

  "mojeek": { name: "Mojeek Search", url: "https://www.mojeek.com/search?q={{{s}}}" },
  "mojsum": { name: "Mojeek Summary", url: "https://www.mojeek.com/search?q={{{s}}}&fmt=summary" },
  "mojimg": { name: "Mojeek Images", url: "https://www.mojeek.com/search?q={{{s}}}&fmt=images" },
  "mojnews": { name: "Mojeek News", url: "https://www.mojeek.com/search?q={{{s}}}&fmt=news" },

  "q": { name: "Qwant Search", url: "https://www.qwant.com/?q={{{s}}}" },
  "qwant": { name: "Qwant Search", url: "https://www.qwant.com/?q={{{s}}}" },

  "bing": { name: "Bing Search", url: "https://www.bing.com/search?q={{{s}}}" },
  "bingimg": { name: "Bing Search Images", url: "https://www.bing.com/images/search?q={{{s}}}&go=&form=QBIL&qs=n" },
  "binggif": { name: "Bing Search GIFs", url: "http://www.bing.com/images/search?&q={{{s}}}&qft=+filterui:photo-animatedgif&FORM=R5IR25" },
  "bingmaps": { name: "Bing Maps", url: "https://www.bing.com/maps/?q={{{s}}}&obox=1" },
  "bingvids": { name: "Bing Search Videos", url: "https://www.bing.com/videos/search?q={{{s}}}" },

  "yan": { name: "Yandex Search", url: "https://yandex.ru/yandsearch?text={{{s}}}" },
  "yandex": { name: "Yandex Search", url: "https://yandex.ru/yandsearch?text={{{s}}}" },
  "yanimg": { name: "Yandex Images", url: "https://yayimages.com/search?phrase={{{s}}}" },
  "yanvids": { name: "Yandex Videos", url: "https://yandex.ru/video/search?text={{{s}}}" },

  "s": { name: "Startpage Search", url: "https://startpage.com/do/metasearch.pl?query={{{s}}}" },
  "sp": { name: "Startpage Search", url: "https://startpage.com/do/metasearch.pl?query={{{s}}}" },
  "simg": { name: "Startpage Img Search", url: "https://startpage.com/do/metasearch.pl?cat=pics&query={{{s}}}" },
  "svid": { name: "Startpage Video Search", url: "https://startpage.com/do/search?cat=video&cmd=process_search&query={{{s}}}" },

  "duck": { name: "DuckDuckGo Search", url: "https://duckduckgo.com/?q={{{s}}}" },
  "ddg": { name: "DuckDuckGo Search", url: "https://duckduckgo.com/?q={{{s}}}" },
  "lite": { name: "DuckDuckGo Lite", url: "https://duckduckgo.com/lite?q={{{s}}}" },
  "ddi": { name: "DuckDuckGo Images", url: "https://duckduckgo.com/?q={{{s}}}&ia=images&iax=images" },
  "ddm": { name: "DuckDuckGo Maps", url: "https://duckduckgo.com/?q={{{s}}}&iaxm=maps" },
  "ddn": { name: "DuckDuckGo News", url: "https://duckduckgo.com/?q={{{s}}}&iar=news&ia=news" },

  "dai": { name: "DuckDuckGo AI", url: "https://duckduckgo.com/?q={{{s}}}&ia=chat&bang=true" },
  "ddgai": { name: "DuckDuckGo AI", url: "https://duckduckgo.com/?q={{{s}}}&ia=chat&bang=true" },
  "duckai": { name: "DuckDuckGo AI", url: "https://duckduckgo.com/?q={{{s}}}&ia=chat&bang=true" },

  "ai": { name: "Gemini AI (for queries, in chrome use @gemini)", url: "https://gemini.google.com" }, // in chrome @gemini ...
  "gemini": { name: "Gemini AI (queryless)", url: "https://gemini.google.com" },

  "ais": { name: "Google AI Studio (queryless)", url: "https://aistudio.google.com/prompts/new_chat" },
  "studio": { name: "Google AI Studio (queryless)", url: "https://aistudio.google.com/prompts/new_chat" },
  "notebook": { name: "NotebookLM AI by Google (queryless)", url: "https://notebooklm.google.com/" },
  "research": { name: "NotebookLM AI by Google (queryless)", url: "https://notebooklm.google.com/" },
  "study": { name: "NotebookLM AI by Google (queryless)", url: "https://notebooklm.google.com/" },
  "musicfx": { name: "MusicFX by Google Labs (queryless)", url: "https://labs.google/fx/tools/music-fx" },

  "c": { name: "Claude AI", url: "https://claude.ai/new?q={{{s}}}" },
  "claude": { name: "Claude AI", url: "https://claude.ai/new?q={{{s}}}" },

  "hug": { name: "HuggingChat", url: "https://huggingface.co/chat/?q={{{s}}}" },
  "hugai": { name: "HuggingChat", url: "https://huggingface.co/chat/?q={{{s}}}" },

  "gpt": { name: "ChatGPT Prompt", url: "https://chatgpt.com/?q={{{s}}}" },
  "gptweb": { name: "ChatGPT Prompt", url: "https://chatgpt.com/?q={{{s}}}&hints=search" },
  "chat": { name: "ChatGPT Prompt", url: "https://chatgpt.com/?q={{{s}}}" },
  "chatgpt": { name: "ChatGPT Prompt", url: "https://chatgpt.com/?q={{{s}}}" },
  "prompt": { name: "ChatGPT Prompt", url: "https://chatgpt.com/?q={{{s}}}" },

  "deep": { name: "Deepseek (promptless)", url: "https://chat.deepseek.com" },
  "deepseek": { name: "Deepseek (promptless)", url: "https://chat.deepseek.com" },

  "bingai": { name: "Bing AI", url: "https://chatgpt.com/?q={{{s}}}" },

  "perplexity": { name: "Perplexity AI", url: "https://www.perplexity.ai?q={{{s}}}" },
  "psearch": { name: "Perplexity AI", url: "https://www.perplexity.ai?q={{{s}}}" },
  "per": { name: "Perplexity AI", url: "https://www.perplexity.ai?q={{{s}}}" },

  "gbooks": { name: "Google Books", url: "https://www.google.com/search?nfpr=1&tbm=bks&q={{{s}}}" },
  "amzbooks": { name: "Amazon Books", url: "https://www.amazon.com/s?k={{{s}}}&i=stripbooks" },
  "bookdep": { name: "Book Depository", url: "http://bookdepository.com/search?searchTerm={{{s}}}&search=Find+book" },
  "books": { name: "Annas-Archive", url: "https://annas-archive.org/search?q={{{s}}}" },
  "book": { name: "Annas-Archive", url: "https://annas-archive.org/search?q={{{s}}}" },
  "aa": { name: "Annas-Archive", url: "https://annas-archive.org/search?q={{{s}}}" },
  "lib": { name: "Library Genesis", url: "https://libgen.rs/search.php?req={{{s}}}" },
  "libgen": { name: "Library Genesis", url: "https://libgen.rs/search.php?req={{{s}}}" },
  "scribd": { name: "Scribd Books", url: "http://www.scribd.com/search?query={{{s}}}" },
  "tpb": { name: "The Pirate Bay", url: "https://thepiratebay.org/search.php?q={{{s}}}" },
  "rut": { name: "Rutracker", url: "https://rutracker.org/forum/tracker.php?nm={{{s}}}" },

  "brilliant": { name: "Brilliant.org (queryless)", url: "https://brilliant.org/" },
  "learn": { name: "Brilliant.org (queryless)", url: "https://brilliant.org/" },

  "greads": { name: "GoodReads.com", url: "https://www.goodreads.com/search?utf8=\u2713&query={{{s}}}" },
  "goodreads": { name: "GoodReads.com", url: "https://www.goodreads.com/search?utf8=\u2713&query={{{s}}}" },
  "bookreview": { name: "GoodReads.com", url: "https://www.goodreads.com/search?utf8=\u2713&query={{{s}}}" },

  "hn": { name: "Hacker News", url: "https://hn.algolia.com/?q={{{s}}}" },

  "x": { name: "X Search", url: "https://x.com/search?q={{{s}}}" },
  "news": { name: "X Search", url: "https://x.com/search?q={{{s}}}" },
  "twitter": { name: "X/Twitter Search", url: "https://x.com/search?q={{{s}}}" },

  "wtf": { name: "WTF Fun Fact", url: "https://wtffunfact.com/?s={{{s}}}" },
  "funfact": { name: "WTF Fun Fact", url: "https://wtffunfact.com/?s={{{s}}}" },

  "disc": { name: "Discogs Search", url: "http://www.discogs.com/search?q={{{s}}}&btn=&type=all" },
  "discogs": { name: "Discogs Search", url: "http://www.discogs.com/search?q={{{s}}}&btn=&type=all" },

  "imdb": { name: "IMDB", url: "http://www.imdb.com/find?s=all&q={{{s}}}" },
  "rotten": { name: "RottenTomatoes", url: "http://www.rottentomatoes.com/search/?search={{{s}}}" },
  "rottentomatoes": { name: "RottenTomatoes", url: "http://www.rottentomatoes.com/search/?search={{{s}}}" },

  "getty": { name: "Getty Images", url: "https://www.gettyimages.com/photos/{{{s}}}" },
  "photos": { name: "Getty Images", url: "https://www.gettyimages.com/photos/{{{s}}}" },

  "unsplash": { name: "Unsplash (free pictures)", url: "https://unsplash.com/search?utf8=\u2713&keyword={{{s}}}" },
  "uns": { name: "Unsplash (free pictures)", url: "https://unsplash.com/search?utf8=\u2713&keyword={{{s}}}" },
  "px": { name: "Pixabay", url: "http://pixabay.com/en/photos/?q={{{s}}}" },
  "pexels": { name: "Pexels Free Stock Photos", url: "http://www.pexels.com/search/{{{s}}}/" },

  "pxsvg": { name: "Pixabay Vector Graphics", url: "https://pixabay.com/en/photos/?image_type=vector&cat=&min_width=&min_height=&q={{{s}}}&order=latest" },
  "svg": { name: "SVG Repo", url: "https://www.svgrepo.com/vectors/{{{s}}}/" },
  
  "lw": { name: "Less Wrong", url: "http://lesswrong.com/search/results?cx=015839050583929870010%3A-802ptn4igi&cof=FORID%3A11&ie=UTF-8&sa=Search&siteurl=lesswrong.com%2F&q={{{s}}}" },
  "lesswrong": { name: "Less Wrong", url: "http://lesswrong.com/search/results?cx=015839050583929870010%3A-802ptn4igi&cof=FORID%3A11&ie=UTF-8&sa=Search&siteurl=lesswrong.com%2F&q={{{s}}}" },

  "facebook": { name: "Facebook Search", url: "http://www.facebook.com/s.php?q={{{s}}}" },
  "fb": { name: "Facebook Search", url: "http://www.facebook.com/s.php?q={{{s}}}" },
  "instagram": { name: "Instagram Search", url: "https://instagram.com/explore/tags/{{{s}}}" },
  "insta": { name: "Instagram Search", url: "https://instagram.com/explore/tags/{{{s}}}" },
  "ig": { name: "Instagram Search", url: "https://instagram.com/explore/tags/{{{s}}}" },
  "tiktok": { name: "TikTok Search", url: "https://www.tiktok.com/search?q={{{s}}}" },
  
  "discord": { name: "Discord Invite", url: "https://discordapp.com/invite/{{{s}}}" },
  "telegram": { name: "Telegram", url: "https://web.telegram.org/#/im?p={{{s}}}" },

  "reddit": { name: "Reddit Search", url: "https://www.reddit.com/search?q={{{s}}}" },
  "rold": { name: "Old Reddit Search", url: "https://old.reddit.com/search?q={{{s}}}" },
  "rsub": { name: "Reddit Sub-Reddit", url: "http://www.reddit.com/r/{{{s}}}" },
  "rusr": { name: "Reddit User", url: "https://www.reddit.com/user/{{{s}}}" },
  "rprivacy": { name: "Subreddit Rprivacy", url: "https://www.reddit.com/r/privacy/search?q={{{s}}}&restrict_sr=on" },

  "quora": { name: "Quora Search", url: "https://www.quora.com/search?q={{{s}}}" },
  "quo": { name: "Quora Search", url: "https://www.quora.com/search?q={{{s}}}" },

  "steam": { name: "Steam Search", url: "http://store.steampowered.com/search/?term={{{s}}}" },

  "amazon": { name: "Amazon.com", url: "https://www.amazon.com/s?k={{{s}}}" },
  "amz": { name: "Amazon.com", url: "https://www.amazon.com/s?k={{{s}}}" },

  "amazon-uk": { name: "Amazon.co.uk", url: "https://www.amazon.co.uk/s?k={{{s}}}" },
  "amazon-de": { name: "Amazon.de", url: "https://www.amazon.de/s?k={{{s}}}" },
  "amazon-fr": { name: "Amazon.fr", url: "https://www.amazon.fr/s?k={{{s}}}" },
  "amazon-es": { name: "Amazon.es", url: "https://www.amazon.es/s?k={{{s}}}" },
  "amazon-ca": { name: "Amazon.ca", url: "https://www.amazon.ca/s?k={{{s}}}" },

  "amzuk": { name: "Amazon.co.uk", url: "https://www.amazon.co.uk/s?k={{{s}}}" },
  "amzde": { name: "Amazon.de", url: "https://www.amazon.de/s?k={{{s}}}" },
  "amzfr": { name: "Amazon.fr", url: "https://www.amazon.fr/s?k={{{s}}}" },
  "amzes": { name: "Amazon.es", url: "https://www.amazon.es/s?k={{{s}}}" },
  "amzca": { name: "Amazon.ca", url: "https://www.amazon.ca/s?k={{{s}}}" },

  "ebay": { name: "Ebay.com", url: "https://www.ebay.com/sch/items/?_nkw={{{s}}}" },
  "ebay-uk": { name: "Ebay.co.uk", url: "https://www.ebay.co.uk/sch/items/?_nkw={{{s}}}" },
  "ebay-de": { name: "Ebay.de", url: "https://www.ebay.de/sch/items/?_nkw={{{s}}}" },
  "ebay-es": { name: "Ebay.es", url: "https://www.ebay.es/sch/items/?_nkw={{{s}}}" },
  "ebay-fr": { name: "Ebay.fr", url: "https://www.ebay.fr/sch/items/?_nkw={{{s}}}" },
  "ebay-it": { name: "Ebay.it", url: "https://www.ebay.it/sch/items/?_nkw={{{s}}}" },

  "craigslist": { name: "Craigslist", url: "https://duckduckgo.com/?q={{{s}}}+site%3Acraigslist.org" },
  "cl": { name: "Craigslist", url: "https://duckduckgo.com/?q={{{s}}}+site%3Acraigslist.org" },
  
  "olx": { name: "OLX (PT)", url: "https://www.olx.pt/ads/q-{{{s}}}" },

  "aliexpress": { name: "Aliexpress (B2C)", url: "http://www.aliexpress.com/wholesale?SearchText={{{s}}}" },
  "alibaba": { name: "Alibaba (B2B)", url: "http://www.alibaba.com/trade/search?SearchText={{{s}}}" },

  "math": { name: "Math World", url: "http://mathworld.wolfram.com/search/?query={{{s}}}&x=0&y=0" },
  "funmath": { name: "MathIsFun", url: "http://www.mathsisfun.com/sphider/search.php?query={{{s}}}&submit=&search=1" },
  "mathisfun": { name: "MathIsFun", url: "http://www.mathsisfun.com/sphider/search.php?query={{{s}}}&submit=&search=1" },
  "mo": { name: "MathOverflow", url: "http://mathoverflow.net/search?q={{{s}}}" },
  "mathoverflow": { name: "MathOverflow", url: "http://mathoverflow.net/search?q={{{s}}}" },
  "mathse": { name: "MathStackExchange", url: "http://math.stackexchange.com/search?q={{{s}}}" },
  "mathstack": { name: "MathStackExchange", url: "http://math.stackexchange.com/search?q={{{s}}}" },
  "symb": { name: "Symbolab", url: "https://www.symbolab.com/solver/step-by-step/{{{s}}}" },
  "physics": { name: "Physics Forums", url: "https://www.physicsforums.com/search/90229641/?q={{{s}}}&o=relevance" }, 

  "codeforces": { name: "Codeforces", url: "http://codeforces.com/search?query={{{s}}}" },
  "dd": { name: "Dev Docs", url: "https://devdocs.io/#q={{{s}}}" },
  "dev": { name: "Dev Docs", url: "https://devdocs.io/#q={{{s}}}" },
  "docs": { name: "Dev Docs", url: "https://devdocs.io/#q={{{s}}}" },

  "arch": { name: "Arch Linux", url: "https://wiki.archlinux.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go" },
  "archlinux": { name: "Arch Linux", url: "https://wiki.archlinux.org/index.php?title=Special%3ASearch&search={{{s}}}&go=Go" },
  "debian": { name: "Debian", url: "http://search.debian.org/cgi-bin/omega?DB=en&P={{{s}}}" },

  "gitdocs": { name: "Git Docs", url: "https://git-scm.com/search/results?search={{{s}}}" },
  "git": { name: "GitHub Search", url: "https://github.com/search?utf8=%E2%9C%93&q={{{s}}}" },
  "github": { name: "GitHub Search", url: "https://github.com/search?utf8=%E2%9C%93&q={{{s}}}" },
  "ghtopic": { name: "Github Topic", url: "https://github.com/topic/{{{s}}}" },
  "ght": { name: "Github Trending", url: "https://github.com/trending/{{{s}}}" },
  "gittrend": { name: "Github Trending", url: "https://github.com/trending/{{{s}}}" },
  "gist": { name: "Github Gist", url: "https://gist.github.com/search?q={{{s}}}" },
  "bb": { name: "BitBucket", url: "https://bitbucket.org/repo/all/?name={{{s}}}" },
  "gitlab": { name: "Gitlab", url: "https://gitlab.com/search?utf8=%E2%9C%93&search={{{s}}}&group_id=&repository_ref=" },

  "blender": { name: "Blender Docs", url: "https://docs.blender.org/manual/en/latest/search.html?q={{{s}}}&check_keywords=yes" },
  "bitwig": { name: "Bitwig Docs", url: "https://www.bitwig.com/search/?q={{{s}}}&category=userguidepage" },

  "stack": { name: "StackOverflow", url: "http://stackoverflow.com/search?q={{{s}}}" }, 
  "so": { name: "StackOverflow", url: "http://stackoverflow.com/search?q={{{s}}}" }, 
  "sojs": { name: "StackOverflow Javascript", url: "https://stackoverflow.com/search?q=[javascript]+{{{s}}}" },

  "gso": { name: "Google Over StackOverflow", url: "https://google.com/search?q=%2B%5Binurl%3Ahttp%3A%2F%2Fstackoverflow.com%5D+{{{s}}}" },
  "cpen": { name: "Codepen", url: "http://codepen.io/search?q={{{s}}}&limit=all&depth=everything&show_forks=false" },

  "vimw": { name: "Vim Tips Wiki", url: "http://vim.wikia.com/wiki/Special:Search?query={{{s}}}" },

  "brew": { name: "Homebrew", url: "https://duckduckgo.com/?q={{{s}}}+site%3Aformulae.brew.sh" },
  "brewf": { name: "Homebrew", url: "https://formulae.brew.sh/formula/{{{s}}}" },
  "ports": { name: "MacPorts", url: "https://www.macports.org/ports.php?by=name&substr={{{s}}}" },
  "macports": { name: "MacPorts", url: "https://www.macports.org/ports.php?by=name&substr={{{s}}}" },
  "fs": { name: "Free Software Directory", url: "http://directory.fsf.org/wiki?title=Special%3ASearch&search={{{s}}}&fulltext=Search" },
  "repology": { name: "Repology (The Packing Hub)", url: "https://repology.org/metapackages/?search={{{s}}}" },

  "hover": { name: "Hover Domain Names", url: "https://www.hover.com/domains/results?q={{{s}}}" },
  "expired": { name: "Expired Domain Names", url: "https://www.expireddomains.net/domain-name-search/?searchinit=1&q={{{s}}}" },
  "ssl": { name: "SSL Labs Test", url: "https://www.ssllabs.com/ssltest/analyze.html?d={{{s}}}&latest=true" },
  "domain": { name: "Namecheap Domain Names", url: "http://www.namecheap.com/domains/domain-name-search/results.aspx?domain={{{s}}}" },
  "nc": { name: "Namecheap Domain Names", url: "http://www.namecheap.com/domains/domain-name-search/results.aspx?domain={{{s}}}" },
  "gdns": { name: "Google Public DNS", url: "https://dns.google.com/query?name={{{s}}}&type=A&dnssec=true" },
  "unshorten": { name: "Unshorten.me", url: "https://unshorten.me/s/{{{s}}}" },
  "crt": { name: "Crt.sh (Domain Certificates)", url: "https://crt.sh/?q={{{s}}}" },
  "mac": { name: "MAC Address Lookup", url: "http://www.macvendorlookup.com/search/{{{s}}}" },
  "t2w": { name: "TOR 2 WEB", url: "https://{{{s}}}.tor2web.org/" },

  "h": { name: "Hoogle", url: "http://www.haskell.org/hoogle/?hoogle={{{s}}}" },
  "ho": { name: "Hoogle", url: "http://www.haskell.org/hoogle/?hoogle={{{s}}}" },
  "hoogle": { name: "Hoogle", url: "http://www.haskell.org/hoogle/?hoogle={{{s}}}" },
  "hkg": { name: "Hackage", url: "https://hackage.haskell.org/packages/search?terms={{{s}}}" },

  "godoc": { name: "GoDocs", url: "https://godoc.org/?q={{{s}}}" },
  "gopkg": { name: "Go Packages", url: "https://godoc.org/?q={{{s}}}" },
  "gopkgs": { name: "Go Packages", url: "https://godoc.org/?q={{{s}}}" },
  "gojobs": { name: "Go Cafe", url: "https://golang.cafe/Golang-{{{s}}}-Jobs" },
    
  "ocaml": { name: "OCaml", url: "http://caml.inria.fr/pub/docs/manual-ocaml/libref/{{{s}}}.html" }, 

  "js": { name: "developer.mozilla.org (js)", url: "https://developer.mozilla.org/en-US/search?q={{{s}}}&topic=api" },
  "javascript": { name: "learn.javascript.ru", url: "http://learn.javascript.ru/search?query={{{s}}}" },
  "learn-js": { name: "learn.javascript.ru", url: "http://learn.javascript.ru/search?query={{{s}}}" },

  "jshint": { name: "JSHint", url: "http://www.jshint.com/docs/options/#{{{s}}}" },
  "npm": { name: "npm Search", url: "https://www.npmjs.com/search?q={{{s}}}" },
  "npmjs": { name: "npm Search", url: "https://www.npmjs.com/search?q={{{s}}}" },

  "lodash": { name: "Lodash", url: "https://lodash.com/docs#{{{s}}}" },
  "caniuse": { name: "Can I Use?", url: "http://caniuse.com/#search={{{s}}}" },
  "ciu": { name: "Can I Use?", url: "http://caniuse.com/#search={{{s}}}" },
  "css": { name: "CSS", url: "https://developer.mozilla.org/en-US/search?q={{{s}}}&topic=css" },
  "w3s": { name: "W3S", url: "https://duckduckgo.com/?q={{{s}}}+site:w3schools.com" },
  
  "texdoc": { name: "LaTeX Doc Search", url: "http://texdoc.net/pkg/{{{s}}}" },
  "texse": { name: "LaTeX StackExchange", url: "http://tex.stackexchange.com/search?q={{{s}}}" },

  "docsrs": { name: "Docs.rs", url: "https://docs.rs/releases/search?query={{{s}}}" },
  "ruststd": { name: "doc.rust-lang.org", url: "http://doc.rust-lang.org/std/?search={{{s}}}" },

  "kotlin": { name: "kotlinlang.org", url: "https://kotlinlang.org/?q={{{s}}}" },
  "elixir": { name: "Elixir Docs", url: "https://hexdocs.pm/elixir/search.html?q={{{s}}}" },
  "svelte": { name: "Svelte Docs (Queryless)", url: "https://hexdocs.pm/elixir/search.html?q={{{s}}}" },
  "erlang": { name: "Erlang Docs", url: "https://www.erlang.org/doc/search?q={{{s}}}" },

  "php": { name: "PHP.net", url: "https://secure.php.net/manual-lookup.php?pattern={{{s}}}" },
  "pack": { name: "Packagist (PHP)", url: "https://packagist.org/search/?q={{{s}}}" },

  "py": { name: "docs.python.org", url: "https://docs.python.org/3/search.html?q={{{s}}}" },
  "pydocs": { name: "docs.python.org", url: "https://docs.python.org/3/search.html?q={{{s}}}" },
  "python": { name: "docs.python.org", url: "https://docs.python.org/3/search.html?q={{{s}}}" },
  "pip": { name: "pypi.python.org", url: "https://pypi.python.org/pypi?:action=search&term={{{s}}}&submit=search" },
  
  "dart": { name: "dart.dev (Docs)", url: "https://dart.dev/search?q={{{s}}}" },
  "pubdev": { name: "pub.dev", url: "https://pub.dev/packages?q={{{s}}}" },

  "swift": { name: "Swift std", url: "https://developer.apple.com/search/?q={{{s}}}" },
  "cocoa": { name: "Apple Developer", url: "https://developer.apple.com/search/index.php?q={{{s}}}" },
  "appledev": { name: "Apple Developer", url: "https://developer.apple.com/search/index.php?q={{{s}}}" },
  
  "flutter": { name: "Flutter Docs", url: "https://docs.flutter.dev/search?q={{{s}}}" },
  "flt": { name: "Flutter Docs", url: "https://docs.flutter.dev/search?q={{{s}}}" },

  "k8s": { name: "Kubernetes", url: "https://kubernetes.io/search/?q={{{s}}}" },

  "c++": { name: "cplusplus.com", url: "http://www.cplusplus.com/search.do?q={{{s}}}" },
  "stl": { name: "cplusplus.com", url: "http://www.cplusplus.com/search.do?q={{{s}}}" },
  "mscpp": { name: "Microsoft Docs C++", url: "https://docs.microsoft.com/en-us/search/index?search={{{s}}}&scope=C%2B%2B" },

  "clj": { name: "ClojureDocs", url: "https://clojuredocs.org/search?q={{{s}}}" },
  
  "org": { name: "Org Manual", url: "https://duckduckgo.com/?q=site:http://orgmode.org/manual/+{{{s}}}" },
  "emacs": { name: "EmacsWiki.org", url: "https://duckduckgo.com/?q=site:emacswiki.org+{{{s}}}" },
  "emacswiki": { name: "EmacsWiki.org", url: "https://duckduckgo.com/?q=site:emacswiki.org+{{{s}}}" },

  "aws": { name: "AWS", url: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation&searchQuery={{{s}}}" },

  "cht": { name: "cht.sh", url: "https://cheat.sh/{{{s}}}" },
  "chtsh": { name: "cht.sh", url: "https://cheat.sh/{{{s}}}" },
  "cheat": { name: "cheat.sh", url: "https://cheat.sh/{{{s}}}" },
  "help": { name: "DevHints", url: "https://devhints.io/{{{s}}}" },
  "bro": { name: "BroPages", url: "http://bropages.org/{{{s}}}" },

  "xsh": { name: "Explain Shell", url: "http://explainshell.com/explain?cmd={{{s}}}" },

  "sketch": { name: "SketchPlanations", url: "https://sketchplanations.com/search?q={{{s}}}" },
  "explain": { name: "SketchPlanations", url: "https://sketchplanations.com/search?q={{{s}}}" },
}

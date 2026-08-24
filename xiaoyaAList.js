WidgetMetadata = {
  id: "XiaoYa.Alist",
  title: "小雅AList",
  icon: "http://img.xiaoya.pro/xiaoya.jpg",
  version: "2.16.0",
  requiredVersion: "0.0.1",
  description: "小雅AList：分类、搜索、目录浏览、详情元数据与 Forward 资源匹配",
  author: "Custom",
  detailCacheDuration: 30,
  globalParams: [
    { name: "Server", title: "小雅AList地址", type: "input", value: "http://yourip:5678", description: "示例：http://192.168.1.10:5678；不要填 /dav" },
    { name: "Username", title: "AList用户名", type: "input", value: "" },
    { name: "Password", title: "AList密码", type: "input", value: "" },
    { name: "PlayMode", title: "播放取链策略", type: "enumeration", value: "cached", enumOptions: [
      { title: "只读已缓存直链（默认，不触发小雅转存/秒传）", value: "cached" },
      { title: "允许生成直链（会触发小雅网页播放流程）", value: "generate" }
    ] },
    { name: "PreferredSource", title: "资源来源偏好", type: "enumeration", value: "auto", enumOptions: [
      { title: "自动", value: "auto" },
      { title: "115 优先", value: "115" },
      { title: "阿里优先", value: "aliyun" }
    ] },
    { name: "SkipExtensions", title: "跳过解析视频格式", type: "input", value: "iso", description: "逗号分隔，例如：iso,ts；匹配这些扩展的视频会被过滤" },
    { name: "IgnorePathKeywords", title: "排除路径关键词", type: "input", value: "音乐,MV,短剧,单集短剧,合集,我的115分享", description: "逗号分隔；路径任意位置出现即过滤" },
    { name: "DebugParams", title: "调试Forward参数", type: "enumeration", value: "false", enumOptions: [
      { title: "关闭", value: "false" },
      { title: "开启", value: "true" }
    ] },
    { name: "MaxTVResources", title: "电视剧最大返回资源数", type: "input", value: "1" },
    { name: "MaxMovieResources", title: "电影最大返回资源数", type: "input", value: "5" }
  ],
  search: {
    title: "搜索",
    functionName: "searchXiaoya",
    params: [
      { name: "keyword", title: "关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ]
  },
  modules: [
    { id: "xy_daily", title: "每日更新", functionName: "loadDaily", cacheDuration: 1800, params: [] },
    { id: "xy_tv_china", title: "国产剧", functionName: "loadTVChina", cacheDuration: 1800, params: [] },
    { id: "xy_tv_hktw", title: "港台剧", functionName: "loadTVHKTW", cacheDuration: 1800, params: [] },
    { id: "xy_tv_korea", title: "韩剧", functionName: "loadTVKorea", cacheDuration: 1800, params: [] },
    { id: "xy_tv_us", title: "美剧", functionName: "loadTVUS", cacheDuration: 1800, params: [] },
    { id: "xy_tv_uk", title: "英剧", functionName: "loadTVUK", cacheDuration: 1800, params: [] },
    { id: "xy_tv_japan", title: "日剧", functionName: "loadTVJapan", cacheDuration: 1800, params: [] },
    { id: "xy_movie_china", title: "中国电影", functionName: "loadMovieChina", cacheDuration: 1800, params: [] },
    { id: "xy_movie_top", title: "豆瓣TOP榜", functionName: "loadMovieTop", cacheDuration: 1800, params: [] },
    { id: "xy_movie_thai", title: "泰国电影", functionName: "loadMovieThai", cacheDuration: 1800, params: [] },
    { id: "xy_movie_hktw", title: "港台电影", functionName: "loadMovieHKTW", cacheDuration: 1800, params: [] },
    { id: "xy_movie_western", title: "欧美电影", functionName: "loadMovieWestern", cacheDuration: 1800, params: [] },
    { id: "xy_movie_japan", title: "日本电影", functionName: "loadMovieJapan", cacheDuration: 1800, params: [] },
    { id: "xy_movie_korea", title: "韩国电影", functionName: "loadMovieKorea", cacheDuration: 1800, params: [] },
    { id: "xy_movie_india", title: "印度电影", functionName: "loadMovieIndia", cacheDuration: 1800, params: [] },
    { id: "xy_movie_dolby", title: "杜比视界", functionName: "loadMovieDolby", cacheDuration: 1800, params: [] },
    { id: "xy_movie_4k", title: "4K REMUX", functionName: "loadMovie4KRemux", cacheDuration: 1800, params: [] },
    { id: "xy_comics", title: "动漫", functionName: "loadComics", cacheDuration: 1800, params: [] },
    { id: "xy_comics_china", title: "国漫", functionName: "loadComicsChina", cacheDuration: 1800, params: [] },
    { id: "xy_comics_japan", title: "日漫", functionName: "loadComicsJapan", cacheDuration: 1800, params: [] },
    { id: "xy_comics_child", title: "儿童动漫", functionName: "loadComicsChild", cacheDuration: 1800, params: [] },
    { id: "xy_docu", title: "纪录片", functionName: "loadDocu", cacheDuration: 1800, params: [] },
    { id: "xy_docu_history", title: "纪录片·历史", functionName: "loadDocuHistory", cacheDuration: 1800, params: [] },
    { id: "xy_docu_food", title: "纪录片·美食", functionName: "loadDocuFood", cacheDuration: 1800, params: [] },
    { id: "xy_docu_archeology", title: "纪录片·考古", functionName: "loadDocuArcheology", cacheDuration: 1800, params: [] },
    { id: "xy_docu_explore", title: "纪录片·探索发现", functionName: "loadDocuExplore", cacheDuration: 1800, params: [] },
    { id: "xy_docu_natgeo", title: "纪录片·国家地理", functionName: "loadDocuNatgeo", cacheDuration: 1800, params: [] },
    { id: "xy_docu_bbc", title: "纪录片·BBC", functionName: "loadDocuBBC", cacheDuration: 1800, params: [] },
    { id: "xy_docu_nhk", title: "纪录片·NHK", functionName: "loadDocuNHK", cacheDuration: 1800, params: [] },
    { id: "xy_reality", title: "综艺", functionName: "loadReality", cacheDuration: 1800, params: [] },
    { id: "xy_search", title: "搜索", functionName: "searchXiaoya", cacheDuration: 300, params: [
      { name: "keyword", title: "关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ] },
    { id: "loadResource", title: "智能匹配", functionName: "loadResource", type: "stream", cacheDuration: 120, params: [
      { name: "TestTitle", title: "测试片名", type: "input", value: "" },
      { name: "type", title: "类型", type: "enumeration", value: "tv", enumOptions: [
        { title: "剧集", value: "tv" },
        { title: "电影", value: "movie" }
      ] },
      { name: "season", title: "季号", type: "input", value: "" },
      { name: "episode", title: "集号", type: "input", value: "" },
      { name: "tmdbId", title: "TMDB ID", type: "input", value: "" }
    ] },
    { id: "xy_browse", title: "目录浏览", functionName: "loadDirectory", cacheDuration: 300, params: [
      { name: "path", title: "目录路径", type: "input", value: "/" },
      { name: "page", title: "页码", type: "page", value: "1" }
    ] }
  ]
};

var DEFAULT_SERVER = "http://yourip:5678";
var DEFAULT_POSTER = "http://img.xiaoya.pro/xiaoya.jpg";
var REQUEST_TIMEOUT = 20000;
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36";
var VIDEO_RE = /\.(mp4|mkv|avi|rmvb|flv|wmv|mov|ts|m4v|iso|mpg|mpeg|webm|vob|m2ts|3gp|asf|m3u8)$/i;
var DEFAULT_SKIP_EXTENSIONS = "iso";
var SUBTITLE_RE = /\.(srt|ass|ssa|vtt)$/i;
var CATEGORY_MAP = {
  daily: "daily",
  tvChina: "tv.china",
  tvHKTW: "tv.hktw",
  tvKorea: "tv.korea",
  tvUS: "tv.us",
  tvUK: "tv.uk",
  tvJapan: "tv.japan",
  movieChina: "movie.china",
  movieTop: "movie.top",
  movieThai: "movie.thai",
  movieHKTW: "movie.hktw",
  movieWestern: "movie.western",
  movieJapan: "movie.japan",
  movieKorea: "movie.korea",
  movieIndia: "movie.india",
  movieDolby: "movie.dolby",
  movie4k: "movie.4kremux",
  comics: "comics",
  comicsChina: "comics.china",
  comicsJapan: "comics.japan",
  comicsChild: "comics.child",
  docu: "docu",
  docuHistory: "docu.history",
  docuFood: "docu.food",
  docuArcheology: "docu.archeology",
  docuExplore: "docu.explore",
  docuNatgeo: "docu.natgeo",
  docuBBC: "docu.bbc",
  docuNHK: "docu.nhk",
  music: "music",
  reality: "reality"
};

function logInfo(message, data) {
  if (data !== undefined) console.log("[小雅AList] " + message + ": " + stringify(data));
  else console.log("[小雅AList] " + message);
}

function logError(message, error) {
  console.error("[小雅AList] " + message + ": " + (error && error.message ? error.message : stringify(error)));
}

function stringify(value) {
  if (typeof value === "string") return value;
  try { return JSON.stringify(value); } catch (e) { return String(value); }
}

function trimSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

function serverOf(params) {
  var server = params && (params.Server || params.server) ? (params.Server || params.server) : DEFAULT_SERVER;
  return trimSlash(server || DEFAULT_SERVER).replace(/\/dav$/i, "");
}

function authOf(params) {
  params = params || {};
  return {
    username: params.Username || params.username || "",
    password: params.Password || params.password || ""
  };
}

function authCacheKey(server) {
  return "xiaoya.auth:" + serverOf({ Server: server });
}

function rememberConfig(params) {
  params = params || {};
  var server = serverOf(params);
  var auth = authOf(params);
  var playMode = params.PlayMode || params.playMode || "cached";
  var preferredSource = params.PreferredSource || params.preferredSource || "auto";
  var skipExtensions = params.SkipExtensions !== undefined ? params.SkipExtensions : (params.skipExtensions !== undefined ? params.skipExtensions : DEFAULT_SKIP_EXTENSIONS);
  var ignorePathKeywords = params.IgnorePathKeywords !== undefined ? params.IgnorePathKeywords : (params.ignorePathKeywords !== undefined ? params.ignorePathKeywords : "音乐,MV,短剧,单集短剧,合集,我的115分享");
  var debugParams = String(params.DebugParams || params.debugParams || "false") === "true";
  var maxTVResources = Math.max(1, Number(params.MaxTVResources || params.maxTVResources || 1));
  var maxMovieResources = Math.max(1, Number(params.MaxMovieResources || params.maxMovieResources || 5));
  if (Widget.storage && Widget.storage.set) {
    Widget.storage.set(authCacheKey(server), stringify(auth));
    Widget.storage.set(configCacheKey(server), stringify({ playMode: playMode, preferredSource: preferredSource, skipExtensions: skipExtensions, ignorePathKeywords: ignorePathKeywords, debugParams: debugParams, maxTVResources: maxTVResources, maxMovieResources: maxMovieResources }));
  }
  return { server: server, auth: auth, playMode: playMode, preferredSource: preferredSource, skipExtensions: skipExtensions, ignorePathKeywords: ignorePathKeywords, debugParams: debugParams, maxTVResources: maxTVResources, maxMovieResources: maxMovieResources };
}

function configCacheKey(server) {
  return "xiaoya.config:" + serverOf({ Server: server });
}

function rememberedAuth(server) {
  if (!Widget.storage || !Widget.storage.get) return { username: "", password: "" };
  var raw = Widget.storage.get(authCacheKey(server));
  if (!raw) return { username: "", password: "" };
  try {
    var auth = typeof raw === "string" ? JSON.parse(raw) : raw;
    return { username: auth.username || "", password: auth.password || "" };
  } catch (e) {
    return { username: "", password: "" };
  }
}

function rememberedConfig(server) {
  var defaults = { playMode: "cached", preferredSource: "auto", skipExtensions: DEFAULT_SKIP_EXTENSIONS, ignorePathKeywords: "音乐,MV,短剧,单集短剧,合集,我的115分享", debugParams: false, maxTVResources: 1, maxMovieResources: 5 };
  if (!Widget.storage || !Widget.storage.get) return defaults;
  var raw = Widget.storage.get(configCacheKey(server));
  if (!raw) return defaults;
  try {
    var config = typeof raw === "string" ? JSON.parse(raw) : raw;
    return {
      playMode: config.playMode || "cached",
      preferredSource: config.preferredSource || "auto",
      skipExtensions: config.skipExtensions !== undefined ? config.skipExtensions : DEFAULT_SKIP_EXTENSIONS,
      ignorePathKeywords: config.ignorePathKeywords !== undefined ? config.ignorePathKeywords : defaults.ignorePathKeywords,
      debugParams: !!config.debugParams,
      maxTVResources: Math.max(1, Number(config.maxTVResources || defaults.maxTVResources)),
      maxMovieResources: Math.max(1, Number(config.maxMovieResources || defaults.maxMovieResources))
    };
  } catch (e) {
    return defaults;
  }
}

function base64Encode(value) {
  if (typeof btoa === "function") return btoa(value);
  if (Widget.base64 && Widget.base64.encode) return Widget.base64.encode(value);
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var str = encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, function(_, hex) { return String.fromCharCode(parseInt(hex, 16)); });
  var output = "";
  for (var block = 0, charCode, idx = 0, map = chars; str.charAt(idx | 0) || (map = "=", idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    block = block << 8 | charCode;
  }
  return output;
}

function basicAuth(auth) {
  if (!auth || !auth.username) return "";
  return "Basic " + base64Encode(auth.username + ":" + (auth.password || ""));
}

function tokenKey(server, auth) {
  return "xiaoya.token:" + server + ":" + (auth && auth.username ? auth.username : "");
}

function headers(contentType, authValue) {
  var h = { "User-Agent": UA, "Accept": "application/json, text/plain, */*" };
  if (contentType) h["Content-Type"] = contentType;
  if (authValue) h["Authorization"] = authValue;
  return h;
}

function parseBody(res) {
  var data = res && res.data !== undefined ? res.data : res;
  if (typeof data !== "string") return data;
  try { return JSON.parse(data); } catch (e) { return data; }
}

async function alistToken(server, auth, refresh) {
  if (!auth || !auth.username) return "";
  var key = tokenKey(server, auth);
  if (!refresh && Widget.storage && Widget.storage.get) {
    var cached = Widget.storage.get(key);
    if (cached) return cached;
  }
  var res = await Widget.http.post(server + "/api/auth/login", JSON.stringify({ username: auth.username, password: auth.password || "" }), {
    headers: headers("application/json", ""),
    timeout: REQUEST_TIMEOUT
  });
  var data = parseBody(res);
  var token = data && data.code === 200 && data.data && data.data.token ? data.data.token : "";
  if (token && Widget.storage && Widget.storage.set) Widget.storage.set(key, token);
  return token;
}

async function alistPost(server, apiPath, body, auth, retry) {
  try {
    var token = await alistToken(server, auth, retry);
    var res = await Widget.http.post(server + apiPath, JSON.stringify(body || {}), {
      headers: headers("application/json", token),
      timeout: REQUEST_TIMEOUT
    });
    var data = parseBody(res);
    if (data && data.code && data.code !== 200 && auth && auth.username && !retry) {
      if (Widget.storage && Widget.storage.set) Widget.storage.set(tokenKey(server, auth), "");
      return alistPost(server, apiPath, body, auth, true);
    }
    return data;
  } catch (error) {
    if (auth && auth.username && !retry) return alistPost(server, apiPath, body, auth, true);
    logError("AList API 失败 " + apiPath, error);
    return null;
  }
}

async function pageGet(server, path, auth) {
  try {
    var res = await Widget.http.get(server + path, {
      headers: headers(null, basicAuth(auth)),
      timeout: REQUEST_TIMEOUT
    });
    return res && res.data !== undefined ? res.data : res;
  } catch (error) {
    logError("页面请求失败 " + path, error);
    return "";
  }
}

function normalizePath(path) {
  path = decodeURIComponent(String(path || "/"));
  if (!path) return "/";
  if (path.charAt(0) !== "/") path = "/" + path;
  return path.replace(/\/{2,}/g, "/");
}

function joinPath(base, name) {
  base = normalizePath(base || "/");
  return base === "/" ? "/" + name : base.replace(/\/+$/, "") + "/" + name;
}

function cleanName(name) {
  return String(name || "").replace(VIDEO_RE, "").replace(/[._]+/g, " ").trim();
}

function fileSize(size) {
  size = Number(size || 0);
  if (!size) return "";
  var units = ["B", "KB", "MB", "GB", "TB"];
  var idx = 0;
  while (size >= 1024 && idx < units.length - 1) { size = size / 1024; idx++; }
  return size.toFixed(idx ? 1 : 0) + " " + units[idx];
}

function encodeParams(params) {
  var parts = [];
  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key) && params[key] !== undefined && params[key] !== null) {
      parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(params[key])));
    }
  }
  return parts.join("&");
}

function parseParams(link) {
  var query = String(link || "").split("?")[1] || "";
  var result = {};
  var pairs = query.split("&");
  for (var i = 0; i < pairs.length; i++) {
    if (!pairs[i]) continue;
    var at = pairs[i].indexOf("=");
    var key = at >= 0 ? pairs[i].slice(0, at) : pairs[i];
    var value = at >= 0 ? pairs[i].slice(at + 1) : "";
    result[decodeURIComponent(key)] = decodeURIComponent(value);
  }
  return result;
}

function route(kind, params) {
  return "xiaoya://" + kind + "?" + encodeParams(params);
}

function videoItem(server, path, title, poster, description, isFile) {
  var link = route(isFile ? "file" : "dir", { server: server, path: normalizePath(path) });
  return {
    id: link,
    type: "url",
    mediaType: "movie",
    title: title || cleanName(path.split("/").pop()),
    posterPath: poster || DEFAULT_POSTER,
    backdropPath: poster || DEFAULT_POSTER,
    description: description || normalizePath(path),
    link: link
  };
}

function textItem(title, description) {
  return [{ id: "empty:" + title, type: "url", mediaType: "movie", title: title, description: description || "", link: "xiaoya://empty" }];
}

function isDir(item) {
  return item && (item.is_dir === true || item.type === 1);
}

function extensionOf(name) {
  var match = String(name || "").toLowerCase().match(/\.([a-z0-9]+)(?:$|[?#])/);
  return match ? match[1] : "";
}

function splitWords(value) {
  var out = [];
  var parts = String(value || "").split(/[，,\s]+/);
  for (var i = 0; i < parts.length; i++) {
    var word = String(parts[i] || "").trim();
    if (word) out.push(word);
  }
  return out;
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function ignoredPath(path, ignorePathKeywords) {
  var words = splitWords(ignorePathKeywords);
  if (!words.length) return false;
  var pattern = new RegExp(words.map(escapeRegExp).join("|"), "i");
  return pattern.test(decodeURIComponent(String(path || "")));
}

function skipExtensionMap(skipExtensions) {
  var map = {};
  var parts = splitWords(skipExtensions === undefined ? DEFAULT_SKIP_EXTENSIONS : skipExtensions);
  for (var i = 0; i < parts.length; i++) {
    var ext = parts[i].toLowerCase().replace(/^\.+/, "").trim();
    if (ext) map[ext] = true;
  }
  return map;
}

function shouldSkipVideo(name, skipExtensions) {
  var ext = extensionOf(name);
  return !!(ext && skipExtensionMap(skipExtensions)[ext]);
}

function isVideo(itemOrName, skipExtensions) {
  var name = typeof itemOrName === "string" ? itemOrName : itemOrName && itemOrName.name;
  if (!name || shouldSkipVideo(name, skipExtensions)) return false;
  return VIDEO_RE.test(name) || (itemOrName && !isDir(itemOrName) && (itemOrName.type === 2 || itemOrName.type === 3 || itemOrName.type === 0));
}

function isSubtitle(name) {
  return SUBTITLE_RE.test(name || "");
}

function naturalSort(a, b) {
  return String(a.name || a.title || "").localeCompare(String(b.name || b.title || ""), "zh-CN", { numeric: true });
}

async function listDir(server, path, auth, page, perPage) {
  var res = await alistPost(server, "/api/fs/list", {
    path: normalizePath(path),
    password: "",
    page: page || 1,
    per_page: perPage || 200,
    refresh: false
  }, auth);
  if (!res || res.code !== 200 || !res.data) return { content: [], total: 0 };
  return { content: res.data.content || [], total: res.data.total || 0 };
}

async function searchFs(server, keyword, auth, page) {
  var res = await alistPost(server, "/api/fs/search", {
    parent: "/",
    keywords: keyword,
    password: "",
    page: page || 1,
    per_page: 100
  }, auth);
  if (!res || res.code !== 200 || !res.data) return [];
  return res.data.content || [];
}

function pickUrl(value, depth) {
  if (!value || depth > 5) return "";
  if (typeof value === "string") return /^https?:\/\//i.test(value) ? value : "";
  var keys = ["raw_url", "rawUrl", "download_url", "downloadUrl", "url", "link", "src", "href"];
  for (var i = 0; i < keys.length; i++) {
    if (typeof value[keys[i]] === "string" && /^https?:\/\//i.test(value[keys[i]])) return value[keys[i]];
  }
  for (var key in value) {
    if (!Object.prototype.hasOwnProperty.call(value, key)) continue;
    var nested = value[key];
    if (nested && typeof nested === "object") {
      var found = pickUrl(nested, (depth || 0) + 1);
      if (found) return found;
    }
  }
  return "";
}

async function fileInfo(server, path, auth) {
  var res = await alistPost(server, "/api/fs/get", { path: normalizePath(path), password: "" }, auth);
  return res && res.code === 200 ? res.data : null;
}

async function playableUrl(server, path, auth, allowGenerate) {
  var info = await fileInfo(server, path, auth);
  var cached = pickUrl(info, 0);
  if (cached) return cached;
  if (!allowGenerate) {
    logInfo("只读缓存模式未命中直链", path);
    return "";
  }
  var res = await alistPost(server, "/api/fs/link", { path: normalizePath(path), password: "" }, auth);
  var generated = res && res.code === 200 ? pickUrl(res.data, 0) : "";
  if (!generated) logInfo("生成播放直链失败", { path: path, response: res });
  return generated;
}

async function whatsnew(server, cat, auth) {
  var html = await pageGet(server, "/whatsnew?num=200&type=video&filter=last&cat=" + encodeURIComponent(cat), auth);
  if (!html || typeof html !== "string") return [];
  var $ = Widget.html.load(html);
  var items = [];
  $("body > div > ul > figure").each(function(_, e) {
    var href = ($(e).find("figcaption > a").attr("href") || "").replace(/%20/g, " ");
    var title = ($(e).find("figcaption > a").text() || "").trim();
    var img = $(e).find("img").attr("src") || "";
    var text = $(e).find("figcaption").text() || "";
    var score = (text.match(/豆瓣评分：\s*([\d.]+)/) || [])[1] || "";
    var poster = normalizePoster(server, img);
    if (href && title) items.push(videoItem(server, href, title, poster, score ? "豆瓣 " + score : normalizePath(href), false));
  });
  return items;
}

function normalizePoster(server, img) {
  if (!img) return DEFAULT_POSTER;
  if (/^https?:\/\//i.test(img) && img.indexOf("/image/") >= 0) return img;
  if (/^https?:\/\//i.test(img)) return server + "/image/" + img.replace(/^https?:\/\//i, "");
  return server + "/image/" + img.replace(/^\/+/, "");
}

function htmlText(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function decodePathValue(value) {
  value = String(value || "").replace(/^['\"]|['\"]$/g, "");
  try { return decodeURIComponent(value); } catch (e) {}
  try { return decodeURI(value); } catch (e2) {}
  return value;
}

async function searchSou(server, keyword, auth, page, skipExtensions, ignorePathKeywords) {
  var html = await pageGet(server, Number(page || 1) > 1 ? "/sou?box=&type=video&url=" : "/sou?box=" + encodeURIComponent(keyword) + "&type=video&url=", auth);
  if (!html || typeof html !== "string") return [];
  var items = [];
  var re = /<a\s+[^>]*href\s*=\s*(["']?)(\/[^"'\s>]*)\1[^>]*>([\s\S]*?)<\/a>/ig;
  var match;
  while ((match = re.exec(html)) !== null) {
    var href = decodePathValue(match[2]);
    if (!href || href === "/" || /^\/assets\//i.test(href)) continue;
    var parts = href.split("#");
    var path = normalizePath(parts[0] || "");
    if (ignoredPath(path, ignorePathKeywords)) continue;
    var title = parts[1] || htmlText(match[3]) || path.split("/").filter(Boolean).pop() || path;
    var score = parts[3] || "";
    var poster = parts[4] || DEFAULT_POSTER;
    if (!isVideo(path, skipExtensions) && shouldSkipVideo(path, skipExtensions)) continue;
    items.push(videoItem(server, path, title, poster, score ? "豆瓣 " + score : path, isVideo(path, skipExtensions)));
  }
  return dedupeItems(items);
}

function listEntryToItem(server, parent, entry, skipExtensions) {
  var path = joinPath(parent, entry.name);
  if (isDir(entry)) return videoItem(server, path, entry.name, entry.thumb || DEFAULT_POSTER, "目录", false);
  if (isVideo(entry, skipExtensions)) return videoItem(server, path, cleanName(entry.name), entry.thumb || DEFAULT_POSTER, fileSize(entry.size), true);
  return null;
}

function episodeNumber(name) {
  var text = String(name || "");
  var m = text.match(/[Ss](?:eason\s*)?(\d{1,3})\s*[Ee](?:p(?:isode)?\s*)?(\d{1,4})/i);
  if (m) return { season: Number(m[1]), episode: Number(m[2]) };
  m = text.match(/第\s*(\d{1,3})\s*季\s*第\s*(\d{1,4})\s*[集话期]/);
  if (m) return { season: Number(m[1]), episode: Number(m[2]) };
  m = text.match(/[Ee][Pp]?\s*(\d{1,4})/);
  if (m) return { season: null, episode: Number(m[1]) };
  m = text.match(/第\s*(\d{1,4})\s*[集话期]/);
  if (m) return { season: null, episode: Number(m[1]) };
  return { season: null, episode: null };
}

function seasonFromPath(path) {
  var parts = normalizePath(path).split("/").filter(Boolean);
  for (var i = parts.length - 1; i >= 0; i--) {
    var m = parts[i].match(/[Ss](?:eason\s*)?(\d{1,3})/i) || parts[i].match(/第\s*(\d{1,3})\s*季/);
    if (m) return Number(m[1]);
  }
  return null;
}

function scoreTitle(title, keyword) {
  var a = normalizeText(title);
  var b = normalizeText(keyword);
  if (!a || !b) return 0;
  if (a === b) return 100;
  if (a.indexOf(b) >= 0 || b.indexOf(a) >= 0) return 80;
  return 0;
}

function sourceOfPath(path) {
  var text = normalizeText(path);
  if (text.indexOf("115") >= 0) return "115";
  if (text.indexOf("aliyun") >= 0 || text.indexOf("阿里") >= 0 || text.indexOf("ali") >= 0) return "aliyun";
  if (text.indexOf("quark") >= 0 || text.indexOf("夸克") >= 0) return "quark";
  return "unknown";
}

function sourceScore(path, preferredSource) {
  var source = sourceOfPath(path);
  if (preferredSource === "115") return source === "115" ? 40 : (source === "aliyun" ? -20 : 0);
  if (preferredSource === "aliyun") return source === "aliyun" ? 40 : (source === "115" ? -10 : 0);
  return 0;
}

function itemPath(item) {
  var p = parseParams(item.link || item.id || "");
  return normalizePath(p.path || "");
}

function dedupeItems(items) {
  var seen = {};
  var out = [];
  for (var i = 0; i < items.length; i++) {
    var path = itemPath(items[i]);
    if (!path || seen[path]) continue;
    seen[path] = true;
    out.push(items[i]);
  }
  return out;
}

function rankItems(items, keyword, preferredSource) {
  return dedupeItems(items).sort(function(a, b) {
    var ap = itemPath(a);
    var bp = itemPath(b);
    var as = scoreTitle(a.title, keyword) + sourceScore(ap, preferredSource);
    var bs = scoreTitle(b.title, keyword) + sourceScore(bp, preferredSource);
    return bs - as;
  });
}

function searchResultMatchesKeyword(item, keyword) {
  var needle = normalizeText(keyword);
  if (!needle) return true;
  var path = itemPath(item);
  var parts = normalizePath(path).split("/").filter(Boolean);
  var lastName = parts[parts.length - 1] || "";
  var titleText = item && item.title ? String(item.title) : "";
  if (/[\\/]/.test(titleText)) titleText = lastName;
  var lastHaystack = normalizeText(titleText + " " + lastName);
  if (lastHaystack.indexOf(needle) >= 0) return true;
  var candidate = candidateNameFromPath(path);
  if (candidate && candidate.indexOf(needle) >= 0) return true;
  if (isVideo(path)) return false;
  return normalizeText(path).indexOf(needle) >= 0;
}

function addKeyword(list, value) {
  value = String(value || "").trim();
  if (!value) return;
  for (var i = 0; i < list.length; i++) if (list[i] === value) return;
  list.push(value);
}

function buildSearchKeywords(params) {
  var keywords = [];
  if (params.tmdbId) addKeyword(keywords, "{tmdb-" + params.tmdbId + "}");
  if (params.tmdbId) addKeyword(keywords, "tmdb-" + params.tmdbId);
  addKeyword(keywords, params.seriesName);
  addKeyword(keywords, params.title);
  addKeyword(keywords, params.name);
  addKeyword(keywords, params.keyword);
  addKeyword(keywords, params.TestTitle);
  return keywords;
}

async function searchAllKeywords(server, keywords, auth, preferredSource, skipExtensions, ignorePathKeywords) {
  var all = [];
  var primary = keywords[0] || "";
  for (var i = 0; i < keywords.length; i++) {
    var rows = await searchAllSources(server, keywords[i], auth, 1, skipExtensions, ignorePathKeywords);
    all = all.concat(rows);
    var ranked = rankItems(all, primary, preferredSource);
    if (ranked.length && (keywords[i].indexOf("tmdb-") >= 0 || scoreTitle(ranked[0].title, primary) >= 80)) return ranked;
  }
  return rankItems(all, primary, preferredSource);
}

async function searchAllSources(server, keyword, auth, page, skipExtensions, ignorePathKeywords) {
  var results = await Promise.all([searchSou(server, keyword, auth, page, skipExtensions, ignorePathKeywords), searchFs(server, keyword, auth, page)]);
  var items = results[0] || [];
  var rows = results[1] || [];
  for (var i = 0; i < rows.length; i++) {
    var parent = rows[i].parent || "/";
    var itemPathValue = joinPath(parent, rows[i].name);
    if (ignoredPath(itemPathValue, ignorePathKeywords)) continue;
    var item = listEntryToItem(server, parent, rows[i], skipExtensions);
    if (item) items.push(item);
  }
  return dedupeItems(items);
}

function normalizeText(text) {
  return String(text || "").toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, "");
}

function extractYear(text) {
  var matches = String(text || "").match(/(?:^|[^\d])((?:19|20)\d{2})(?!\d|p)/ig) || [];
  for (var i = 0; i < matches.length; i++) {
    var m = String(matches[i]).match(/((?:19|20)\d{2})/);
    if (m) return m[1];
  }
  return "";
}

function stripKnownTokens(name) {
  return String(name || "")
    .replace(VIDEO_RE, "")
    .replace(/\{?tmdb[-_ ]?\d+\}?/ig, " ")
    .replace(/(?:^|[^\d])(?:19|20)\d{2}(?!\d|p)/ig, " ")
    .replace(/[Ss](?:eason\s*)?\d{1,3}\s*[Ee](?:p(?:isode)?\s*)?\d{1,4}/ig, " ")
    .replace(/第\s*\d{1,3}\s*季\s*第\s*\d{1,4}\s*[集话期]/g, " ")
    .replace(/第\s*\d{1,4}\s*[集话期]/g, " ")
    .replace(/(?:2160p|2016p|1080p|720p|4k|uhd|fhd|web[-_. ]?dl|h264|h265|hevc|avc|x264|x265|ddp?\s*\d(?:\.\d)?)/ig, " ");
}

function candidateNameFromPath(path) {
  var parts = normalizePath(path).split("/").filter(Boolean);
  var last = parts[parts.length - 1] || "";
  var base = stripKnownTokens(last);
  if (!normalizeText(base) && parts.length > 1) base = stripKnownTokens(parts[parts.length - 2]);
  return normalizeText(base);
}

function matchesTitleYear(path, title, year) {
  if (candidateNameFromPath(path) !== normalizeText(title)) return false;
  var candidateYear = extractYear(path);
  if (!candidateYear) return true;
  return !!year && candidateYear === String(year);
}

function yearMatchScore(path, year) {
  var candidateYear = extractYear(path);
  if (!candidateYear) return 0;
  return year && candidateYear === String(year) ? 80 : -200;
}

function resolutionClass(path) {
  var text = String(path || "").toLowerCase();
  if (/(2160p|2016p|4k|uhd)/i.test(text)) return "4k";
  if (/(1080p|fhd)/i.test(text)) return "1080p";
  return "other";
}

function streamSeriesKey(params, title) {
  var tmdbId = params.tmdbId || params.tmdb_id || "";
  if (tmdbId) return "tmdb-" + tmdbId;
  return normalizeText(params.seriesName || params.title || params.name || params.keyword || params.TestTitle || title || "");
}

function episodeKey(season, episode) {
  if (episode === null || episode === undefined) return "";
  var s = season === null || season === undefined ? 1 : Number(season);
  var e = Number(episode);
  if (!e) return "";
  return "S" + (s < 10 ? "0" + s : String(s)) + "E" + (e < 10 ? "0" + e : String(e));
}

function episodeIndexKey(config, seriesKey, season) {
  return "xiaoya.episodeIndex:" + config.server + ":" + (seriesKey || "") + ":S" + (season || 1) + ":skip=" + String(config.skipExtensions) + ":ignore=" + normalizeText(config.ignorePathKeywords);
}

function readEpisodeIndex(config, seriesKey, season) {
  if (!Widget.storage || !Widget.storage.get || !seriesKey) return null;
  var raw = Widget.storage.get(episodeIndexKey(config, seriesKey, season));
  if (!raw) return null;
  try {
    var cached = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!cached || !cached.expires || cached.expires < Date.now()) return null;
    return cached;
  } catch (e) {
    return null;
  }
}

function writeEpisodeIndex(config, seriesKey, season, rootPath, videos) {
  if (!Widget.storage || !Widget.storage.set || !seriesKey || !videos || !videos.length) return;
  var episodes = {};
  for (var i = 0; i < videos.length; i++) {
    var se = episodeNumber(videos[i].name);
    var key = episodeKey(se.season !== null ? se.season : seasonFromPath(videos[i].path) || season || 1, se.episode);
    if (key && !episodes[key]) episodes[key] = videos[i].path;
  }
  Widget.storage.set(episodeIndexKey(config, seriesKey, season), stringify({ expires: Date.now() + 43200000, rootPath: rootPath, episodes: episodes }));
}

function fileFromEpisodeIndex(index, season, episode) {
  var path = index && index.episodes ? index.episodes[episodeKey(season, episode)] : "";
  return path ? { name: path.split("/").pop(), path: path } : null;
}

function videoCacheKey(server, path, maxDepth, skipExtensions) {
  return "xiaoya.videos:" + serverOf({ Server: server }) + ":" + normalizePath(path) + ":" + (maxDepth || 2) + ":skip=" + String(skipExtensions === undefined ? DEFAULT_SKIP_EXTENSIONS : skipExtensions);
}

function readVideoCache(server, path, maxDepth, skipExtensions) {
  if (!Widget.storage || !Widget.storage.get) return null;
  var raw = Widget.storage.get(videoCacheKey(server, path, maxDepth, skipExtensions));
  if (!raw) return null;
  try {
    var cached = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!cached || !cached.expires || cached.expires < Date.now()) return null;
    return cached.items || [];
  } catch (e) {
    return null;
  }
}

function writeVideoCache(server, path, maxDepth, skipExtensions, items) {
  if (!Widget.storage || !Widget.storage.set) return;
  Widget.storage.set(videoCacheKey(server, path, maxDepth, skipExtensions), stringify({ expires: Date.now() + (items && items.length ? 600000 : 120000), items: items || [] }));
}

function isTargetEpisode(video, rootPath, season, episode) {
  if (!video || (season === null && episode === null)) return false;
  var se = episodeNumber(video.name);
  var fileSeason = se.season !== null ? se.season : seasonFromPath(rootPath);
  if (season !== null && fileSeason !== season) return false;
  if (episode !== null && se.episode !== episode) return false;
  return true;
}

async function collectVideoFiles(server, path, auth, maxDepth, maxCount, season, episode, skipExtensions) {
  path = normalizePath(path);
  maxDepth = maxDepth || 2;
  maxCount = maxCount || 80;
  season = season === undefined ? null : season;
  episode = episode === undefined ? null : episode;
  skipExtensions = skipExtensions === undefined ? DEFAULT_SKIP_EXTENSIONS : skipExtensions;
  var cached = readVideoCache(server, path, maxDepth, skipExtensions);
  if (cached) return cached.slice().sort(naturalSort);
  var out = [];
  await walk(server, path, auth, 0, maxDepth, maxCount, out, path, season, episode, skipExtensions);
  out = out.sort(naturalSort);
  if (season === null && episode === null) writeVideoCache(server, path, maxDepth, skipExtensions, out);
  return out;
}

async function walk(server, path, auth, depth, maxDepth, maxCount, out, rootPath, season, episode, skipExtensions) {
  if (depth > maxDepth || out.length >= maxCount) return;
  var data = await listDir(server, path, auth, 1, 200);
  var content = data.content.slice().sort(naturalSort);
  var folders = [];
  for (var i = 0; i < content.length && out.length < maxCount; i++) {
    var item = content[i];
    var itemPath = joinPath(path, item.name);
    if (isDir(item)) folders.push(itemPath);
    else if (isVideo(item, skipExtensions)) {
      var video = { name: item.name, path: itemPath, size: item.size, thumb: item.thumb || "" };
      out.push(video);
      if (isTargetEpisode(video, rootPath, season, episode)) return;
    }
  }
  if (out.length && season !== null && episode !== null) return;
  for (var f = 0; f < folders.length && out.length < maxCount; f++) {
    await walk(server, folders[f], auth, depth + 1, maxDepth, maxCount, out, rootPath, season, episode, skipExtensions);
    if (out.length && season !== null && episode !== null) return;
  }
}

function pickEpisode(videos, path, season, episode) {
  var match = pickEpisodeWithScore(videos, path, season, episode);
  return match ? match.file : null;
}

function pickEpisodeWithScore(videos, path, season, episode) {
  if (!videos.length) return null;
  if (season === null && episode === null) return { file: videos[0], score: 0, exact: false };
  var pathSeason = seasonFromPath(path);
  var best = null;
  var bestScore = -1;
  for (var i = 0; i < videos.length; i++) {
    var se = episodeNumber(videos[i].name);
    var fileSeason = se.season !== null ? se.season : pathSeason;
    var score = 0;
    if (season !== null) {
      if (fileSeason !== season) continue;
      score += 100;
    }
    if (episode !== null) {
      if (se.episode !== episode) continue;
      score += 100;
    }
    if (score > bestScore) { best = videos[i]; bestScore = score; }
  }
  if (best) return { file: best, score: bestScore, exact: true };
  if (episode !== null && videos[episode - 1]) return { file: videos[episode - 1], score: -60, exact: false };
  return { file: videos[0], score: -80, exact: false };
}

function tmdbScore(text, tmdbId) {
  if (!tmdbId) return 0;
  var id = String(tmdbId).replace(/[^0-9]/g, "");
  if (!id) return 0;
  var pattern = new RegExp("(?:^|[^a-z0-9])\\{?(?:tmdb|tmdbid)[-_ =]?" + escapeRegExp(id) + "\\}?(?=$|[^a-z0-9])", "i");
  return pattern.test(String(text || "")) ? 300 : 0;
}

function candidateScore(item, path, file, episodeMatch, title, tmdbId, preferredSource, year) {
  var score = 0;
  score += tmdbScore(path + " " + (file && file.name || "") + " " + item.title, tmdbId);
  score += episodeMatch ? episodeMatch.score : 0;
  score += scoreTitle(item.title, title);
  score += scoreTitle(file && file.name || "", title) / 2;
  score += yearMatchScore(path + " " + (file && file.path || ""), year);
  score += sourceScore(path, preferredSource);
  if (episodeMatch && episodeMatch.exact) score += 120;
  return score;
}

async function categoryLoader(cat, params) {
  var config = rememberConfig(params);
  var items = await whatsnew(config.server, cat, config.auth);
  return items.length ? items : textItem("暂无数据", "请检查小雅地址和账号授权");
}

async function loadDirectory(params) {
  var config = rememberConfig(params);
  var path = normalizePath(params && params.path ? params.path : "/");
  var page = Number(params && params.page || 1);
  var data = await listDir(config.server, path, config.auth, page, 200);
  var items = [];
  var content = data.content.slice().sort(naturalSort);
  for (var i = 0; i < content.length; i++) {
    var item = listEntryToItem(config.server, path, content[i], config.skipExtensions);
    if (item) items.push(item);
  }
  return items.length ? items : textItem("目录为空", path);
}

async function searchXiaoya(params) {
  params = params || {};
  var config = rememberConfig(params);
  var keyword = params.keyword || params.wd || params.text || params.TestTitle || "";
  var page = Number(params.page || params.pg || 1);
  if (!String(keyword).trim()) return textItem("请输入搜索关键词", "");
  var ranked = rankItems(await searchAllSources(config.server, keyword, config.auth, page, config.skipExtensions, config.ignorePathKeywords), keyword, config.preferredSource);
  var items = [];
  for (var i = 0; i < ranked.length; i++) if (searchResultMatchesKeyword(ranked[i], keyword)) items.push(ranked[i]);
  return items.length ? items : textItem("未找到", keyword);
}

async function loadDetail(link) {
  link = typeof link === "string" ? link : (link && (link.link || link.id)) || "";
  if (!link || link === "xiaoya://empty") return null;
  var p = parseParams(link);
  var server = serverOf({ Server: p.server || DEFAULT_SERVER });
  var auth = rememberedAuth(server);
  var config = rememberedConfig(server);
  var path = normalizePath(p.path || "/");
  if (link.indexOf("xiaoya://file") === 0 || isVideo(path, config.skipExtensions)) return fileDetail(server, path, auth, link);
  return dirDetail(server, path, auth, link, config.skipExtensions);
}

async function fileDetail(server, path, auth, link) {
  var title = cleanName(path.split("/").pop());
  return {
    id: link,
    type: "url",
    mediaType: "movie",
    title: title,
    description: "视频文件：" + path + "；实际播放时再获取直链",
    posterPath: DEFAULT_POSTER,
    backdropPath: DEFAULT_POSTER,
    playerType: "system",
    link: link
  };
}

async function dirDetail(server, path, auth, link, skipExtensions) {
  var videos = await collectVideoFiles(server, path, auth, 2, 80, null, null, skipExtensions);
  var title = path.split("/").filter(Boolean).pop() || "小雅AList";
  if (!videos.length) {
    var children = await loadDirectory({ Server: server, Username: auth.username, Password: auth.password, path: path });
    return { id: link, type: "url", mediaType: "tv", title: title, description: "未找到视频文件", childItems: children, link: link };
  }
  var episodeItems = [];
  for (var i = 0; i < videos.length; i++) {
    var epLink = route("file", { server: server, path: videos[i].path });
    episodeItems.push({
      id: epLink,
      type: "url",
      mediaType: "movie",
      title: cleanName(videos[i].name) || ("第" + (i + 1) + "集"),
      description: fileSize(videos[i].size),
      link: epLink
    });
  }
  return {
    id: link,
    type: "url",
    mediaType: episodeItems.length > 1 ? "tv" : "movie",
    title: title,
    description: "共 " + episodeItems.length + " 个视频；详情页不获取直链，实际播放时再处理",
    posterPath: videos[0].thumb || DEFAULT_POSTER,
    backdropPath: videos[0].thumb || DEFAULT_POSTER,
    episodeItems: episodeItems,
    videoUrl: null,
    playerType: "system",
    link: link
  };
}

async function loadResource(params) {
  params = params || {};
  var config = rememberConfig(params);
  if (config.debugParams) logInfo("Forward stream params", params);
  var keywords = buildSearchKeywords(params);
  var displayTitle = params.seriesName || params.title || params.name || params.keyword || params.TestTitle || "";
  var title = displayTitle || keywords[0] || "";
  if (!title) {
    logInfo("资源匹配缺少标题参数", params);
    return [];
  }
  var type = params.type === "movie" ? "movie" : "tv";
  var season = params.season ? Number(params.season) : null;
  var episode = params.episode ? Number(params.episode) : null;
  var year = params.year || params.releaseYear || (params.releaseDate ? String(params.releaseDate).slice(0, 4) : "");
  var tmdbId = params.tmdbId || params.tmdb_id || "";
  var seriesKey = streamSeriesKey(params, title);
  var cachedIndex = readEpisodeIndex(config, seriesKey, season || 1);
  var cachedFile = fileFromEpisodeIndex(cachedIndex, season || 1, episode);
  if (cachedFile) {
    var cachedUrl = await playableUrl(config.server, cachedFile.path, config.auth, config.playMode !== "cached");
    if (cachedUrl) return [{ id: "xiaoya:0", name: "小雅AList", type: type, description: cleanName(cachedFile.name), url: cachedUrl }];
  }
  var searchKeyword = tmdbId ? ("tmdb-" + tmdbId) : title;
  var searchItems = await searchSou(config.server, searchKeyword, config.auth, 1, config.skipExtensions, config.ignorePathKeywords);
  if (!searchItems.length && tmdbId) searchItems = await searchSou(config.server, title, config.auth, 1, config.skipExtensions, config.ignorePathKeywords);
  logInfo("资源匹配候选", searchItems.slice(0, 5).map(function(item) { return { title: item.title, path: itemPath(item), source: sourceOfPath(itemPath(item)), resolution: resolutionClass(itemPath(item)) }; }));
  var candidates = [];
  for (var i = 0; i < searchItems.length && candidates.length < 6; i++) {
    var item = searchItems[i];
    var p = parseParams(item.link || item.id || "");
    var path = normalizePath(p.path || "");
    if (!path || ignoredPath(path, config.ignorePathKeywords)) continue;
    var tmdbMatched = !!(tmdbId && tmdbScore(path + " " + item.title, tmdbId));
    if (!tmdbMatched && !matchesTitleYear(path, title, year)) continue;
    var file = null;
    var episodeMatch = null;
    if ((item.link || "").indexOf("xiaoya://file") === 0 || isVideo(path, config.skipExtensions)) {
      file = { name: path.split("/").pop(), path: path };
      if (!tmdbMatched && !matchesTitleYear(file.path, title, year)) continue;
      episodeMatch = pickEpisodeWithScore([file], path, season, episode);
      if (season !== null || episode !== null) {
        if (!episodeMatch || !episodeMatch.exact) continue;
        file = episodeMatch.file;
      }
    } else {
      var videos = await collectVideoFiles(config.server, path, config.auth, 2, 80, season, episode, config.skipExtensions);
      if (!tmdbMatched && year) {
        var strictVideos = [];
        for (var v = 0; v < videos.length; v++) if (matchesTitleYear(videos[v].path, title, year)) strictVideos.push(videos[v]);
        videos = strictVideos;
      }
      episodeMatch = pickEpisodeWithScore(videos, path, season, episode);
      file = episodeMatch && episodeMatch.file;
    }
    if (!file) {
      logInfo("候选目录未找到视频", path);
      continue;
    }
    candidates.push({
      item: item,
      path: path,
      file: file,
      score: candidateScore(item, path, file, episodeMatch, title, tmdbId, config.preferredSource, year) + (tmdbMatched ? 1000 : 0),
      exact: !!(episodeMatch && episodeMatch.exact)
    });
  }
  candidates.sort(function(a, b) { return b.score - a.score; });
  logInfo("资源评分候选", candidates.slice(0, 5).map(function(c) { return { title: c.item.title, file: c.file.name, score: c.score, path: c.file.path, resolution: resolutionClass(c.file.path) }; }));
  var maxResources = type === "movie" ? config.maxMovieResources : config.maxTVResources;
  var resources = [];
  for (var c = 0; c < candidates.length && resources.length < maxResources; c++) {
    var url = await playableUrl(config.server, candidates[c].file.path, config.auth, config.playMode !== "cached");
    if (!url) {
      logInfo("候选文件未获取到直链", candidates[c].file.path);
      continue;
    }
    if (resources.length === 0 && candidates[c].exact && !isVideo(candidates[c].path, config.skipExtensions)) {
      var indexVideos = await collectVideoFiles(config.server, candidates[c].path, config.auth, 2, 300, null, null, config.skipExtensions);
      if (year) {
        var yearVideos = [];
        for (var iv = 0; iv < indexVideos.length; iv++) if (matchesTitleYear(indexVideos[iv].path, title, year)) yearVideos.push(indexVideos[iv]);
        indexVideos = yearVideos;
      }
      writeEpisodeIndex(config, seriesKey, season || 1, candidates[c].path, indexVideos);
    }
    var resClass = resolutionClass(candidates[c].file.path);
    var source = sourceOfPath(candidates[c].file.path);
    var label = "小雅AList" + (resClass !== "other" ? " · " + resClass.toUpperCase() : "") + (source !== "unknown" ? " · " + source : "");
    resources.push({
      id: "xiaoya:" + resources.length,
      name: label,
      type: type,
      description: cleanName(candidates[c].file.name),
      url: url
    });
  }
  return resources;
}

var CATEGORY_FUNCTIONS = {
  loadDaily: "daily",
  loadTVChina: "tvChina",
  loadTVHKTW: "tvHKTW",
  loadTVKorea: "tvKorea",
  loadTVUS: "tvUS",
  loadTVUK: "tvUK",
  loadTVJapan: "tvJapan",
  loadMovieChina: "movieChina",
  loadMovieTop: "movieTop",
  loadMovieThai: "movieThai",
  loadMovieHKTW: "movieHKTW",
  loadMovieWestern: "movieWestern",
  loadMovieJapan: "movieJapan",
  loadMovieKorea: "movieKorea",
  loadMovieIndia: "movieIndia",
  loadMovieDolby: "movieDolby",
  loadMovie4KRemux: "movie4k",
  loadComics: "comics",
  loadComicsChina: "comicsChina",
  loadComicsJapan: "comicsJapan",
  loadComicsChild: "comicsChild",
  loadDocu: "docu",
  loadDocuHistory: "docuHistory",
  loadDocuFood: "docuFood",
  loadDocuArcheology: "docuArcheology",
  loadDocuExplore: "docuExplore",
  loadDocuNatgeo: "docuNatgeo",
  loadDocuBBC: "docuBBC",
  loadDocuNHK: "docuNHK",
  loadMusic: "music",
  loadReality: "reality"
};

var ROOT = typeof globalThis !== "undefined" ? globalThis : this;
for (var categoryFunctionName in CATEGORY_FUNCTIONS) {
  if (Object.prototype.hasOwnProperty.call(CATEGORY_FUNCTIONS, categoryFunctionName)) {
    ROOT[categoryFunctionName] = (function(catKey) {
      return async function(params) { return categoryLoader(CATEGORY_MAP[catKey], params); };
    })(CATEGORY_FUNCTIONS[categoryFunctionName]);
  }
}

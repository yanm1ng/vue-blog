import marked from 'marked'
import hljs from 'highlight.js/lib/'


let renderer = new marked.Renderer()
renderer.heading = function (text, level) {
  let id = generateId();
  return `<h${level} id="${id}">${text}</h${level}>`;
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    return hljs.highlightAuto(code).value;
  }
});

function generateId(len) {
  const chars = `ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz`;
  len = len | 8;
  let id = ``;
  for(let i = 0;i < len; i++){
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id;
}

export default marked;

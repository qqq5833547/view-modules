import xss from 'xss'
// xss 白名单过滤网
function getDefaultWhiteList() {
  return {
    
  };
}

var options = {
  whiteList: {
    a: ["target", "href", "title","style","class","id"],
    abbr: ["title","style","class","id"],
    address: ["style","class","id"],
    area: ["shape", "coords", "href", "alt","style","class","id"],
    article: ["style","class","id"],
    aside: ["style","class","id"],
    audio: ["autoplay", "controls", "loop", "preload", "src","style","class","id"],
    b: ["style","class","id"],
    bdi: ["dir","style","class","id"],
    bdo: ["dir","style","class","id"],
    big: ["style","class","id"],
    blockquote: ["cite","style","class","id"],
    br: ["style","class","id"],
    caption: ["style","class","id"],
    center: ["style","class","id"],
    cite: ["style","class","id"],
    code: ["style","class","id"],
    col: ["align", "valign", "span", "width","style","class","id"],
    colgroup: ["align", "valign", "span", "width","style","class","id"],
    dd: ["style","class","id"],
    del: ["datetime","style","class","id"],
    details: ["open","style","class","id"],
    div: ["style","class","id"],
    dl: ["style","class","id"],
    dt: ["style","class","id"],
    em: ["style","class","id"],
    font: ["color", "size", "face","style","class","id"],
    footer: ["style","class","id"],
    h1: ["style","class","id"],
    h2: ["style","class","id"],
    h3: ["style","class","id"],
    h4: ["style","class","id"],
    h5: ["style","class","id"],
    h6: ["style","class","id"],
    header: ["style","class","id"],
    hr: ["style","class","id"],
    i: ["style","class","id"],
    img: ["src", "alt", "title", "width", "height","style","class","id"],
    ins: ["datetime","style","class","id"],
    li: ["style","class","id"],
    mark: ["style","class","id"],
    nav: ["style","class","id"],
    ol: ["style","class","id"],
    p: ["style","class","id"],
    pre: ["style","class","id"],
    s: ["style","class","id"],
    section: ["style","class","id"],
    small: ["style","class","id"],
    span: ["style","class","id"],
    sub: ["style","class","id"],
    sup: ["style","class","id"],
    strong: ["style","class","id"],
    table: ["width", "border", "align", "valign","style","class","id"],
    tbody: ["align", "valign","class","id"],
    td: ["width", "rowspan", "colspan", "align", "valign","style","class","id"],
    tfoot: ["align", "valign","style","class","id"],
    th: ["width", "rowspan", "colspan", "align", "valign","style","class","id"],
    thead: ["align", "valign","style","class","id"],
    tr: ["rowspan", "align", "valign","style","class","id"],
    tt: ["style","class","id"],
    u: ["style","class","id"],
    ul: ["style","class","id"],
    video: ["autoplay", "controls", "loop", "preload", "src", "height", "width","style","class","id"],
    style:["line-height","class","id"],   //新添
    html:[],
  }
}

 let myxss = new xss.FilterXSS(options)

 export default myxss
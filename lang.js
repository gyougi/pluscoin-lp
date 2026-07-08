// 4-language switch: shows the matching [data-lang] block; default follows the browser, persists in localStorage.
(function () {
  var LANGS = ['ja', 'en', 'zh-Hans', 'zh-Hant'];
  function pick() {
    var s = localStorage.getItem('pc_lang');
    if (s && LANGS.indexOf(s) >= 0) return s;
    var n = (navigator.language || 'ja').toLowerCase();
    if (n.indexOf('ja') === 0) return 'ja';
    if (n.indexOf('en') === 0) return 'en';
    if (n.indexOf('zh') === 0) {
      if (n.indexOf('tw') >= 0 || n.indexOf('hk') >= 0 || n.indexOf('hant') >= 0 || n.indexOf('mo') >= 0) return 'zh-Hant';
      return 'zh-Hans';
    }
    return 'ja';
  }
  function apply(l) {
    document.documentElement.setAttribute('lang', l === 'zh-Hans' ? 'zh-CN' : l === 'zh-Hant' ? 'zh-TW' : l);
    var blocks = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < blocks.length; i++) blocks[i].hidden = blocks[i].getAttribute('data-lang') !== l;
    var btns = document.querySelectorAll('.langbtn');
    for (var j = 0; j < btns.length; j++) btns[j].classList.toggle('active', btns[j].getAttribute('data-set') === l);
  }
  window.setLang = function (l) { localStorage.setItem('pc_lang', l); apply(l); };
  document.addEventListener('DOMContentLoaded', function () {
    apply(pick());
    var btns = document.querySelectorAll('.langbtn');
    for (var k = 0; k < btns.length; k++) {
      btns[k].addEventListener('click', function () { window.setLang(this.getAttribute('data-set')); });
    }
  });
})();

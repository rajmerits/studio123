
      var bp;

      if (window.__console_path__) {
        bp = window.__console_path__;
      } else {
        var st=document.getElementsByTagName('script');
        var au=st[st.length - 1].src;
        bp = au.replace('apic-import.js', '');
      }

      var legacyScriptsCount = 0;
      function styleDocument() {
        document.addEventListener('WebComponentsReady', function() {
          setTimeout(function() {
            function shouldAddDocumentStyle(n) {
              return n.nodeType === Node.ELEMENT_NODE && n.localName === 'style' && !n.hasAttribute('scope');
            }
            const CustomStyleInterface = window.ShadyCSS.CustomStyleInterface;
            const candidates = document.querySelectorAll('style');
            for (let i = 0; i < candidates.length; i++) {
              const candidate = candidates[i];
              if (shouldAddDocumentStyle(candidate)) {
                CustomStyleInterface.addCustomStyle(candidate);
              }
            }
          }, 1000);
        });
      }
      function loadConsoleWhenDone(){
        legacyScriptsCount++
        if(legacyScriptsCount==3 && isLegacy()==true){
          loadConsole();
          styleDocument();
        }
      }
      function addScript(src, onLoadCallback) {
        var s = document.createElement('script');
        s.setAttribute('nomodule', '');
        s.src = bp + src;
        s.onload = onLoadCallback;
        document.body.appendChild(s);
      }
    addScript('./vendor.js',loadConsoleWhenDone);addScript('polyfills/core-js.8ed6ee7a4c2f9817dee3998dcf3d2721.js',loadConsoleWhenDone);addScript('polyfills/systemjs.48dccaa267c838d0ca84ae7a655f0164.js',loadConsoleWhenDone);addScript('polyfills/regenerator-runtime.00d94cc6e1d36f22abd18835b91f49dc.js',loadConsoleWhenDone);function loadConsole() {try{s = document.createElement('script');s.innerHTML = 'window.importShim = s => import(s)';document.body.appendChild(s);}catch(e){console.log(e);};try{!function(){function e(e,o){return new Promise((function(t,n){document.head.appendChild(Object.assign(document.createElement("script"),{src:e,onload:t,onerror:n},o?{type:"module"}:void 0))}))}var o=[];function t(){"noModule"in HTMLScriptElement.prototype?window.importShim(bp+"api-console-f1ee5566.js"):System.import(bp+"legacy/api-console-31ff3c23.js")}"fetch"in window||o.push(e(bp+"polyfills/fetch.974faa72903c09dc57578328cfaf7687.js",!1)),"noModule"in HTMLScriptElement.prototype&&!("importShim"in window)&&o.push(e(bp+"polyfills/dynamic-import.991be47e17117abb5eb15f5254ad3869.js",!1)),(!("attachShadow"in Element.prototype)||!("getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&o.push(e(bp+"polyfills/webcomponents.f2956532e796a677ef87a9cb17f5f9fc.js",!1)),!("noModule"in HTMLScriptElement.prototype)&&"getRootNode"in Element.prototype&&o.push(e(bp+"polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",!1)),o.length?Promise.all(o).then(t):t()}()}catch(e){console.log(e);};}
    function isLegacy() {
      const script = document.createElement('script');
      return !('noModule' in script);
    }
    if(isLegacy()==false){
      loadConsole();
    }
    
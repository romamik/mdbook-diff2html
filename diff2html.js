(() => {
    const scriptUrl = 'https://cdn.jsdelivr.net/npm/diff2html/bundles/js/diff2html-ui.min.js';

    const processDiffs = () => {
        const configuration = { 
            drawFileList: false, 
            highlight: true,
            outputFormat: 'line-by-line',
            colorScheme: 'auto',
        };

        document.querySelectorAll('.language-diff2html').forEach((codeElement) => {
            const diffString = codeElement.textContent.trim();

            const div = document.createElement('div')

            const pre = codeElement.parentElement;
            pre.replaceWith(div)

            const shadow = div.attachShadow({ mode: 'open' });
            shadow.innerHTML = `
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css"
                    media="screen and (prefers-color-scheme: light)"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
                    media="screen and (prefers-color-scheme: dark)"
                />
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css" />
                <style>
                    :host {
                        all: initial;
                    }
                    .diff2html-root {
                       background-color: white;
                    }
                    @media screen and (prefers-color-scheme: dark) {
                        .diff2html-root {
                            background-color: #202020;
                        }
                    }
                </style>
                <div class="diff2html-root"/>
            `;

            const innerDiv = shadow.querySelector('.diff2html-root');
            const diff2htmlUi = new Diff2HtmlUI(innerDiv, diffString, configuration);
            diff2htmlUi.draw();
            diff2htmlUi.highlightCode();
          });
    }

    const loadScript = (url) => new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${url}`));
        document.head.appendChild(script);
    });

    loadScript(scriptUrl).then(() => {
        if (document.readyState === 'loadinf') {
            document.addEventListener('DOMContentLoaded', () => {
                processDiffs();
            });
        } else {
            processDiffs();
        }
    });
})();
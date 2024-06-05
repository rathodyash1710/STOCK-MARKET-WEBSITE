(function () {
    "use strict";

    createTrendlyneWidgets();

    function createTrendlyneWidgets() {
        const targetEl = document.querySelectorAll(".trendlyne-widgets");
        const heightMapping = {
            'swot-widget': '330px',
            'qvt-widget': '330px',
            'technical-widget': '520px',
            'checklist-widget': '550px',
            'basket':'425px'
        };
        if (targetEl && targetEl.length) {
            targetEl.forEach((el, index) => {

                const webviewUrl = el.dataset.getUrl;

                if(webviewUrl) {
                    const iframeEl = document.createElement("iframe");
                    const iframeClass = webviewUrl.split("/web-widget/")[1].split("/")[0];
                    iframeEl.setAttribute("id", `trendlyne-widget-${index}`);
                    iframeEl.setAttribute("src", webviewUrl);
                    iframeEl.setAttribute("frameborder", 0);
                    iframeEl.setAttribute("allowTransparency", !0)
                    iframeEl.style.width = "550px";
                    iframeEl.style.maxWidth = "100%"
                    iframeEl.style.height = heightMapping[iframeClass];
                    iframeEl.classList.add("trendlyne-embedded", iframeClass);

                    /**
                     * Creation of new element start
                     */
                    const newEl = document.createElement("div");
                    newEl.classList.add(
                        "trendlyne-widgets",
                        "trendlyne-widgets-rendered"
                    );

                    newEl.style.cssText = `
                        display: flex;
                        max-width: 550px;
                        width: 100%
                        `;

                    newEl.append(iframeEl);
                    el.replaceWith(newEl);
                    iframeEl.contentWindow.postMessage("hello", "*");
                }
            });
        }


       /* // Height will be set dynamically
        document.querySelectorAll(".trendlyne-embedded").forEach((frame) => {
            frame.onload = function (e) {
                frame.style.height =
                    frame.contentWindow.document.documentElement.scrollHeight +
                    "px";
                frame.contentWindow.postMessage(
                    "Hello Sir",
                    "http://localhost:8000"
                );
            };
        });
        */
    }
})();
window.onload = function() {
    news1();
    news2();
    news3();
    news4();
};
function news1() {
    var container = document.querySelector(".tradingview-widget1-container-fluid");
    container.innerHTML = ""; // Clear previous content

    var scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.async = true;
    scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    scriptTag.innerHTML = `{
        "feedMode": "all_symbols",
        "isTransparent": false,
        "displayMode": "compact",
        "width": "100%",
        "height": "100%",
        "colorTheme": "dark",
        "locale": "en"
    }`;

    container.appendChild(scriptTag);
}
function news2() {
    var container = document.querySelector(".tradingview-widget2-container-fluid");
    container.innerHTML = ""; // Clear previous content

    var scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.async = true;
    scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    scriptTag.innerHTML = `
    {
        "feedMode": "market",
        "market": "crypto",
        "isTransparent": false,
        "displayMode": "compact",
        "width": "100%",
        "height": "100%",
        "colorTheme": "dark",
        "locale": "en"
    }`;

    container.appendChild(scriptTag);
}
function news3() {
    var container = document.querySelector(".tradingview-widget3-container-fluid");
    container.innerHTML = ""; // Clear previous content

    var scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.async = true;
    scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    scriptTag.innerHTML = `
    {
        "feedMode": "market",
        "isTransparent": false,
        "displayMode": "compact",
        "width": "100%",
        "height": "100%",
        "colorTheme": "dark",
        "locale": "en",
        "market": "stock"
    }`;

    container.appendChild(scriptTag);
}
function news4() {
    var container = document.querySelector(".tradingview-widget4-container-fluid");
    container.innerHTML = ""; // Clear previous content

    var scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.async = true;
    scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    scriptTag.innerHTML = `
    {
        "feedMode": "market",
        "isTransparent": false,
        "displayMode": "compact",
        "width": "100%",
        "height": "100%",
        "colorTheme": "dark",
        "locale": "en",
        "market": "index"
    }`;

    container.appendChild(scriptTag);
}
 
window.onload = function() {
    screener();
};
function screener() {
    var container = document.createElement('div');
    container.className = "tradingview-widget-container";
    
    var widget = document.createElement('div');
    widget.className = "tradingview-widget-container__widget";
    
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.textContent = JSON.stringify({
        "width": "100%",
        "height": "100%",
        "defaultColumn": "overview",
        "defaultScreen": "most_capitalized",
        "market": "india",
        "showToolbar": true,
        "colorTheme": "dark",
        "locale": "en"
    });
    
    container.appendChild(widget);
    container.appendChild(script);
    
    var div1 = document.getElementById('div1'); // Selecting the div with id 'div1'
    div1.appendChild(container); // Appending the created elements to the div
}

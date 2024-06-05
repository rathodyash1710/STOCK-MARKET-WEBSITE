
// Call the function on page load
window.onload = function() {
    initializeTradingViewWidget();
    initializeTradingViewTickerTapeWidget();
};
function validateSearch() {
    var symbolInput = document.getElementById("symbolInput").value.trim();
  
    if (symbolInput !== "") {
        openAllDetailStockPage();
    } else {
        // Show an error message or perform some other action to indicate that the input is empty
    }
  }
  function openAllDetailStockPage() {
    // Get the value entered in the search bar
    var query = document.getElementById("symbolInput").value;
    // Append the value to the URL
    var url = "all_detail_stock.html?query=" + encodeURIComponent(query);
    // Open the URL in a new tab
    window.open(url, '_blank');
}
function initializeTradingViewWidget() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "width": "100%",
        "height": "100%",
        "symbolsGroups": [
            {
                "name": "Indices",
                "originalName": "Indices",
                "symbols": [
                    { "name": "BSE:BANK" },
                    { "name": "BSE:BSE100" },
                    { "name": "BSE:BSELVI" },
                    { "name": "BSE:SENSEX" },
                    { "name": "BSE:BSE500" }
                ]
            },
            {
                "name": "Futures",
                "originalName": "Futures",
                "symbols": [
                    { "name": "BSE:BSX1!" },
                    { "name": "BSE:BKX1!" },
                    { "name": "BSE:BKV" },
                    { "name": "BSE:ADITYA" },
                    { "name": "BSE:BHARTIARTL" }
                ]
            },
            {
                "name": "Bonds",
                "originalName": "Bonds",
                "symbols": [
                    { "name": "BSE:SGBJUNE31" },
                    { "name": "BSE:BSX1!" },
                    { "name": "BSE:BSELVI" },
                    { "name": "BSE:86LTFH24" },
                    { "name": "BSE:BANK" }
                ]
            }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "colorTheme": "dark",
        "locale": "en",
        "backgroundColor": "#131722"
    });
    document.getElementById('div_2').appendChild(script);
}
function initializeTradingViewTickerTapeWidget() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbols": [
            { "description": "", "proName": "BSE:SENSEX" },
            { "description": "", "proName": "BSE:BSE100" },
            { "description": "", "proName": "BSE:BSL" },
            { "description": "", "proName": "BSE:BHARTIARTL" },
            { "description": "", "proName": "BSE:TCS" }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "in"
    });
    document.getElementById('div_1').appendChild(script);
}


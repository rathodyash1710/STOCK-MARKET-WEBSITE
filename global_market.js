function initializeTradingViewTickerTapeWidget() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbols": [
            { "description": "", "proName": "BSE:SENSEX" },
            { "description": "", "proName": "EASYMARKETS:DOWUSD" },
            { "description": "", "proName": "XETR:DAX" },
            { "description": "", "proName": "SPREADEX:FTSE" },
            { "description": "", "proName": "CAPITALCOM:US100" }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
    });
    document.getElementById('div_1').appendChild(script);
}
function initializeTradingViewMarketQuotesWidget() {
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
                    { "name": "FOREXCOM:SPXUSD", "displayName": "S&P 500 Index" },
                    { "name": "FOREXCOM:NSXUSD", "displayName": "US 100 Cash CFD" },
                    { "name": "FOREXCOM:DJI", "displayName": "Dow Jones Industrial Average Index" },
                    { "name": "INDEX:NKY", "displayName": "Nikkei 225" },
                    { "name": "INDEX:DEU40", "displayName": "DAX Index" },
                    { "name": "FOREXCOM:UKXGBP", "displayName": "FTSE 100 Index" }
                ]
            },
            {
                "name": "Futures",
                "originalName": "Futures",
                "symbols": [
                    { "name": "CME_MINI:ES1!", "displayName": "S&P 500" },
                    { "name": "CME:6E1!", "displayName": "Euro" },
                    { "name": "COMEX:GC1!", "displayName": "Gold" },
                    { "name": "NYMEX:CL1!", "displayName": "WTI Crude Oil" },
                    { "name": "NYMEX:NG1!", "displayName": "Gas" },
                    { "name": "CBOT:ZC1!", "displayName": "Corn" }
                ]
            },
            {
                "name": "Bonds",
                "originalName": "Bonds",
                "symbols": [
                    { "name": "CBOT:ZB1!", "displayName": "T-Bond" },
                    { "name": "CBOT:UB1!", "displayName": "Ultra T-Bond" },
                    { "name": "EUREX:FGBL1!", "displayName": "Euro Bund" },
                    { "name": "EUREX:FBTP1!", "displayName": "Euro BTP" },
                    { "name": "EUREX:FGBM1!", "displayName": "Euro BOBL" }
                ]
            },
            {
                "name": "Forex",
                "originalName": "Forex",
                "symbols": [
                    { "name": "FX:EURUSD", "displayName": "EUR to USD" },
                    { "name": "FX:GBPUSD", "displayName": "GBP to USD" },
                    { "name": "FX:USDJPY", "displayName": "USD to JPY" },
                    { "name": "FX:USDCHF", "displayName": "USD to CHF" },
                    { "name": "FX:AUDUSD", "displayName": "AUD to USD" },
                    { "name": "FX:USDCAD", "displayName": "USD to CAD" }
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
// Call the function on page load
window.onload = function() {
    initializeTradingViewTickerTapeWidget();
    initializeTradingViewMarketQuotesWidget();
};
function initializeTradingViewMarketQuotesWidget() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "title": "Cryptocurrencies",
        "title_raw": "Cryptocurrencies",
        "title_link": "/markets/cryptocurrencies/prices-all/",
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "showSymbolLogo": true,
        "symbolsGroups": [
            {
                "name": "Overview",
                "symbols": [
                    { "name": "CRYPTOCAP:TOTAL" },
                    { "name": "BITSTAMP:BTCUSD" },
                    { "name": "BITSTAMP:ETHUSD" },
                    { "name": "FTX:SOLUSD" },
                    { "name": "BINANCE:AVAXUSD" },
                    { "name": "COINBASE:UNIUSD" }
                ]
            },
            {
                "name": "Bitcoin",
                "symbols": [
                    { "name": "BITSTAMP:BTCUSD" },
                    { "name": "COINBASE:BTCEUR" },
                    { "name": "COINBASE:BTCGBP" },
                    { "name": "BITFLYER:BTCJPY" },
                    { "name": "CME:BTC1!" }
                ]
            },
            {
                "name": "Ethereum",
                "symbols": [
                    { "name": "BITSTAMP:ETHUSD" },
                    { "name": "KRAKEN:ETHEUR" },
                    { "name": "COINBASE:ETHGBP" },
                    { "name": "BITFLYER:ETHJPY" },
                    { "name": "BINANCE:ETHBTC" },
                    { "name": "BINANCE:ETHUSDT" }
                ]
            },
            {
                "name": "Solana",
                "symbols": [
                    { "name": "FTX:SOLUSD" },
                    { "name": "BINANCE:SOLEUR" },
                    { "name": "COINBASE:SOLGBP" },
                    { "name": "BINANCE:SOLBTC" },
                    { "name": "HUOBI:SOLETH" },
                    { "name": "BINANCE:SOLUSDT" }
                ]
            },
            {
                "name": "Uniswap",
                "symbols": [
                    { "name": "COINBASE:UNIUSD" },
                    { "name": "KRAKEN:UNIEUR" },
                    { "name": "COINBASE:UNIGBP" },
                    { "name": "BINANCE:UNIBTC" },
                    { "name": "KRAKEN:UNIETH" },
                    { "name": "BINANCE:UNIUSDT" }
                ]
            }
        ],
        "colorTheme": "dark"
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
            { "description": "", "proName": "BITSTAMP:BTCUSD" },
            { "description": "", "proName": "BITSTAMP:ETHUSD" },
            { "description": "", "proName": "BINANCE:XRPUSDT" },
            { "description": "", "proName": "COINBASE:SOLUSD" },
            { "description": "", "proName": "COINBASE:SOLUSD" } // Note: This entry is repeated, you might want to remove one of them
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
    });
    document.getElementById('div_1').appendChild(script);
}
// Call the function on page load
window.onload = function() {
    initializeTradingViewMarketQuotesWidget();
    initializeTradingViewTickerTapeWidget();
};
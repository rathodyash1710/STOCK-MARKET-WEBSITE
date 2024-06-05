window.onload=function()
{
    FundEtf();
};
function FundEtf() {
    var container = document.getElementById("tradingviewContainer");
    container.innerHTML = ''; // Clear previous content
    
    var widgetContainer = document.createElement('div');
    widgetContainer.className = "tradingview-widget-container";
    
    var widget = document.createElement('div');
    widget.className = "tradingview-widget-container__widget";
    
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.textContent = JSON.stringify({
        "width": "100%",
        "height": "100%",
        "symbolsGroups": [
            {
                "name": "Indian Funds",
                "originalName": "Indices",
                "symbols": [
                    {"name": "BSE:NIFTYBEES"},
                    {"name": "BSE:BANKIETF"},
                    {"name": "BSE:PSUBNKBEES"},
                    {"name": "BSE:CPSEETF"},
                    {"name": "BSE:SETFBSE100"}
                ]
            },
            {
                "name": "Global Funds",
                "originalName": "Futures",
                "symbols": [
                    {"name": "AMEX:SPY"},
                    {"name": "NASDAQ:WGMI"},
                    {"name": "NASDAQ:QQQ"},
                    {"name": "NASDAQ:IBIT"},
                    {"name": "NASDAQ:SQQQ"}
                ]
            },
            {
                "name": "Indian Etf",
                "originalName": "Bonds",
                "symbols": [
                    {"name": "BSE:BFSI"},
                    {"name": "BSE:BANKIETF"},
                    {"name": "BSE:BBETF0432"},
                    {"name": "BSE:BANKBETF"},
                    {"name": "BSE:BANKETFADD"}
                ]
            },
            {
                "name": "GLOBAL ETF",
                "originalName": "Forex",
                "symbols": [
                    {"name": "TSX:VFV", "displayName": "canada"},
                    {"name": "AMEX:SPY", "displayName": "america"},
                    {"name": "VIE:AM25", "displayName": "austraila"},
                    {"name": "NASDAQ:TLT"},
                    {"name": "NASDAQ:IBIT"}
                ]
            }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "colorTheme": "dark",
        "locale": "en",
        "backgroundColor": "#131722"
    });
    
    widgetContainer.appendChild(widget);
    widgetContainer.appendChild(script);
    
    container.appendChild(widgetContainer);
}

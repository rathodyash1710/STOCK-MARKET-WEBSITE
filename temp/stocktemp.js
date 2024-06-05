function addTradingViewWidget(symbol, width, isTransparent, colorTheme, locale) {
    // Create column div
    var colDiv = document.createElement("div");
    colDiv.classList.add("col-sm-4", "tradingview-widget-container");

    // Create script element
    var scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    scriptElement.async = true;

    // Set widget configuration
    var widgetConfig = {
        "symbol": symbol,
        "width": width,
        "isTransparent": isTransparent,
        "colorTheme": colorTheme,
        "locale": locale
    };

    // Create script content with widget configuration
    var scriptContent = document.createTextNode(JSON.stringify(widgetConfig, null, 2));
    scriptElement.appendChild(scriptContent);

    // Append script element to column div
    colDiv.appendChild(scriptElement);

    // Append column div to the tradingview-widgets container
    var tradingViewWidgetsContainer = document.getElementById("tradingview-widgets");
    tradingViewWidgetsContainer.appendChild(colDiv);
}

// Example usage:
addTradingViewWidget("BSE:INFY", "100%", false, "dark", "en");
addTradingViewWidget("BSE:TCS", "100%", false, "dark", "en");
addTradingViewWidget("BSE:WIPRO", "100%", false, "dark", "en");

// Repeat the above function calls to add more widgets as needed.

// To display three widgets in total, call the function three times. Each call adds one widget.

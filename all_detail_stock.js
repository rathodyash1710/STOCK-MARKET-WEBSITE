    window.onload = function() {

     // Function to get URL parameter by name
     function getUrlParameter(name) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Get the value of the 'query' parameter from the URL
    var query = getUrlParameter('query');

    if (query) {
        // Display the search query on the page
        var stockname=document.getElementById("symbolInput")
        stockname.value=query

        // Perform search operations using the query value
        // Add your search logic here
    } else {
    }
    callAllFunctions();
};
function validateSearch() {
    var symbolInput = document.getElementById("symbolInput").value.trim();
  
    if (symbolInput !== "") {
        callAllFunctions();
    } else {
        // Show an error message or perform some other action to indicate that the input is empty
    }
  }
    // Function to change symbol for all widgets
    function callAllFunctions() {
        var symbol = document.getElementById('symbolInput').value.toUpperCase();
        changeSymbol(symbol);
        changeSymbolFinancials(symbol);
        changeSymbolTechnicalAnalysis(symbol);
        changeSymbolchart(symbol);
        }

    // Function to replace the symbol in the TradingView widget
    function changeSymbol(newSymbol) {
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.async = true;
        scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
        scriptTag.innerHTML = '{ "symbol": "' + newSymbol + '", "width": "100%", "isTransparent": false, "colorTheme": "dark", "locale": "en" }';
        var container = document.querySelector(".tradingview-widget-container-fluid");
        container.innerHTML = ""; // Clear previous content
        container.appendChild(scriptTag);
    }

    // Function to replace the symbol in the TradingView financials widget
    function changeSymbolFinancials(newSymbol) {
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.async = true;
        scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
        scriptTag.innerHTML = JSON.stringify({
            "isTransparent": false,
            "largeChartUrl": "",
            "displayMode": "regular",
            "width": "100%",
            "height": "100%",
            "colorTheme": "dark",
            "symbol": newSymbol,
            "locale": "en"
        });
        var container = document.getElementById("tradingview-widget-financials");
        container.innerHTML = ""; // Clear previous content
        container.appendChild(scriptTag);
    }

    function changeSymbolchart(newSymbol) {
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.async = true;
        scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        scriptTag.innerHTML = JSON.stringify({
            "autosize": true,
            "symbol": newSymbol,
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "enable_publishing": false,
            "withdateranges": true,
            "allow_symbol_change": true,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
        });

        var container = document.getElementById("tradingview-widget-chart");
        container.innerHTML = ""; // Clear previous content
        container.appendChild(scriptTag);
    }


    // Function to replace the symbol in the TradingView technical analysis widget
    function changeSymbolTechnicalAnalysis(newSymbol) {
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
        scriptTag.async = true;
        scriptTag.innerHTML = JSON.stringify({
            "interval": "1m",
            "width": "100%",
            "isTransparent": false,
            "height": "100%",
            "symbol": newSymbol,
            "showIntervalTabs": true,
            "displayMode": "single",
            "locale": "en",
            "colorTheme": "dark"
        });
        var container = document.getElementById("tradingview-widget-technical-analysis");
        container.innerHTML = ""; // Clear previous content
        container.appendChild(scriptTag);
    }

  
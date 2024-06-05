window.onload = function() {
  initializeTradingViewTickerTapeWidget();
  initializeTradingViewSingleQuoteWidget1();
  initializeTradingViewSingleQuoteWidget2();
  initializeTradingViewSingleQuoteWidget3();
  initializeTradingViewSingleQuoteWidget4();
  initializeTradingViewSingleQuoteWidget5();
  initializeTradingViewSingleQuoteWidget6();
  initializeTradingViewSingleQuoteWidget7();
  initializeTradingViewSingleQuoteWidget8();
  initializeTradingViewSingleQuoteWidget9();
  initializeTradingViewSingleQuoteWidget10();
  initializeTradingViewSingleQuoteWidget11();
  initializeTradingViewSingleQuoteWidget12();
  initializeTradingViewSingleQuoteWidget13();
  initializeTradingViewSingleQuoteWidget14();
  initializeTradingViewSingleQuoteWidget15();
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
  function initializeTradingViewTickerTapeWidget() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbols": [
            { "description": "", "proName": "BSE:TCS" },
            { "description": "", "proName": "BSE:BHARTIARTL" },
            { "description": "", "proName": "BSE:SBIN" },
            { "description": "", "proName": "BSE:WIPRO" },
            { "description": "", "proName": "BSE:RELIANCE" },
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
    });
    document.getElementById('div_ticker').appendChild(script);
}

function initializeTradingViewSingleQuoteWidget1() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:ICICIBANK",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_1').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget2() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:HDFCBANK",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_2').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget3() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:SBIN",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_3').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget4() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:RELIANCE",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_4').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget5() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:IDEA",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_5').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget6() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:INDUSINDBK",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_6').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget6() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:INFY",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_6').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget7() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:TCS",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_7').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget8() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:INFY",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_8').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget9() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:WIPRO",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_9').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget10() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:TATASTEEL",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_10').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget11() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:ADANIENT",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_11').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget12() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:MRF",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_12').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget13() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:TATASTEEL",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_13').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget14() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:ADANIENT",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_14').appendChild(script);
}
function initializeTradingViewSingleQuoteWidget15() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
  script.async = true;
  script.innerHTML = JSON.stringify({
      "symbol": "BSE:MRF",
      "width": "100%",
      "isTransparent": false,
      "colorTheme": "dark",
      "locale": "en"
  });
  document.getElementById('div_15').appendChild(script);
}
// const url = 'https://yh-finance-complete.p.rapidapi.com/dailyGainers';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'yh-finance-complete.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

// start

function search_size(id)
{
  id.style.width="50%"
}

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
  window.location.href = "all_detail_stock.html?query=" + encodeURIComponent(query);
}


// js for stock detail
    // Function to change symbol for all widgets

  function callAllFunctions() {
      var symbol = document.getElementById('symbolInput').value;
      changeSymbol(symbol);
      changeSymbolFinancials(symbol);
      changeSymbolTechnicalAnalysis(symbol);
      changeSymbolswotAnalysis(); 
      changeSymbolqvtAnalysis();
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
  // Function to replace the content in the SWOT analysis container
  function changeSymbolswotAnalysis() {
      var userInput = document.getElementById("symbolInput").value.trim(); // Get the user input from the symbol input field
      var getUrl = "https://trendlyne.com/web-widget/swot-widget/Poppins/" + userInput + "/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E";
      
      var iframe = document.createElement('iframe');
      iframe.src = getUrl;
      iframe.style.width = "100%";
      iframe.style.height = "500px"; // Adjust the height as needed
      iframe.style.border = "none";
      
      var container = document.getElementById("swotanalysisContainer");
      container.innerHTML = ''; // Clear previous content
      container.appendChild(iframe);
  }
  function changeSymbolqvtAnalysis() {
      var userInput = document.getElementById("symbolInput").value.trim(); // Get the user input from the symbol input field
      var getUrl = "https://trendlyne.com/web-widget/qvt-widget/Poppins/" + userInput + "/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E";
      
      var iframe = document.createElement('iframe');
      iframe.src = getUrl;
      iframe.style.width = "100%";
      iframe.style.height = "500px"; // Adjust the height as needed
      iframe.style.border = "none";
      
      var container = document.getElementById("qvtnalysisContainer");
      container.innerHTML = ''; // Clear previous content
      container.appendChild(iframe);
  }




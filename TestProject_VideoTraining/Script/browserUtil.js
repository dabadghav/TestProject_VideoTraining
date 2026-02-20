//JScript

function TestRunChrome() {
  runIncognitoMode("chrome");
}

function runIncognitoMode(browserName){
  //var browserName = "firefox" //iexplore,edge,chrome,firefox
  if (Sys.WaitBrowser(browserName).Exists){
    var browser = Sys.Browser(browserName);
    Log.Enabled = false // To disable the warning that might occur during closing of the browser
    browser.Close();
    Log.Enabled = true // enabling the logs back
  }
  if(browserName=="edge"){
    Browsers.Item(btEdge).RunOptions = "-inprivate"
    Delay(3000)
    Browsers.Item(btEdge).Run();
  }
  else if (browserName=="chrome"){
    Browsers.Item(btChrome).RunOptions = "-incognito"
    Delay(3000)
    Browsers.Item(btChrome).Run();
  }
  else if (browserName=="firefox"){
    Browsers.Item(btFirefox).RunOptions = "-private"
    Delay(3000)
    Browsers.Item(btFirefox).Run();
  }
  Sys.Browser(browserName).BrowserWindow(0).Maximize()
}
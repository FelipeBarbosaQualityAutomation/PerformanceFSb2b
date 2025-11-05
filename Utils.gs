// Funções auxiliares para comunicação com a API e manipulação da planilha

function callPageSpeed(url, strategyUsed) {
  var pageSpeedUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=' 
    + encodeURIComponent(url) + '&key=' + pageSpeedApiKey + "&strategy=" + strategyUsed + urlParams;
  var options = {muteHttpExceptions: true};
  var response = UrlFetchApp.fetch(pageSpeedUrl, options);
  Logger.log(response.getContentText()); 
  return JSON.parse(response.getContentText());
}

function getPerformance(data) {
  return Math.round(data.lighthouseResult.categories.performance.score * 100);
}

function getAccessibility(data) {
  return Math.round(data.lighthouseResult.categories.accessibility.score * 100);
}

function getBestPractices(data) {
  return Math.round(data.lighthouseResult.categories['best-practices'].score * 100);
}

function getSeo(data) {
  return Math.round(data.lighthouseResult.categories.seo.score * 100);
}

function getLabValue(data, auditName) {
  try {
    return data.lighthouseResult.audits[auditName].numericValue;
  } catch (e) {
    return 'N/A';
  }
}

function addRow(sheetName, url, data, strategyUsed) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) throw new Error("Aba '" + sheetName + "' não encontrada! Por favor, crie a aba.");
  
  sheet.appendRow([
    Utilities.formatDate(new Date(), 'GMT-3', 'yyyy-MM-dd'),
    url,
    getPerformance(data),
    getAccessibility(data),
    getBestPractices(data),
    getSeo(data),
    getLabValue(data, 'first-contentful-paint'),
    getLabValue(data, 'largest-contentful-paint'),
    getLabValue(data, 'cumulative-layout-shift'),
    getLabValue(data, 'interactive'),
    getLabValue(data, 'total-blocking-time'),
    getLabValue(data, 'speed-index'),
    strategyUsed
  ]);
}

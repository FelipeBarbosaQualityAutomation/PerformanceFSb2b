// ===== Monitoramento da PDP (Product Detail Page) =====

function monitorPDP() {
  for (var i = 0; i < pdpUrls.length; i++) {
    var url = pdpUrls[i];
    
    var mobile = callPageSpeed(url, strategy);
    addRow('PDP', url, mobile, strategy);
    
    var desktop = callPageSpeed(url, strategy2);
    addRow('PDP', url, desktop, strategy2);
  }
}

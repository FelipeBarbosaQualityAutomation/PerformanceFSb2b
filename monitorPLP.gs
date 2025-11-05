// ===== Monitoramento da PLP (Product Listing Page) =====

function monitorPLP() {
  for (var i = 0; i < plpUrls.length; i++) {
    var url = plpUrls[i];
    
    var mobile = callPageSpeed(url, strategy);
    addRow('PLP', url, mobile, strategy);
    
    var desktop = callPageSpeed(url, strategy2);
    addRow('PLP', url, desktop, strategy2);
  }
}

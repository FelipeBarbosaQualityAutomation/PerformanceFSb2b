// ===== Monitoramento de Login =====

function monitorLogin() {
  for (var i = 0; i < LoginUrls.length; i++) {
    var url = LoginUrls[i];
    
    var mobile = callPageSpeed(url, strategy);
    addRow('LOGIN', url, mobile, strategy);
    
    var desktop = callPageSpeed(url, strategy2);
    addRow('LOGIN', url, desktop, strategy2);
  }
}

// ===== Monitoramento de Cadastro =====

function MonitorCADASTRO() { 
  for (var i = 0; i < CadastroUrls.length; i++) {
    var url = CadastroUrls[i];
    
    var mobile = callPageSpeed(url, strategy);
    addRow('CADASTRO', url, mobile, strategy);
    
    var desktop = callPageSpeed(url, strategy2);
    addRow('CADASTRO', url, desktop, strategy2);
  }
}

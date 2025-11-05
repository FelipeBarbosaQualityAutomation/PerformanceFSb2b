# Performance FastB2B - Monitoramento Lighthouse Insights

Este projeto em Google Apps Script (GAS) é um monitor de performance automatizado que utiliza a API PageSpeed Insights do Google para coletar métricas de Core Web Vitals e pontuações de Lighthouse (Performance, Acessibilidade, SEO, etc.) em páginas chave do domínio Fastshop B2B.

Os resultados são registrados em tempo real em uma Planilha Google.

## Estrutura do Projeto

O projeto é modularizado para facilitar a manutenção e a visualização dos dados.

| Arquivo | Função Principal | 
| :--- | :--- | 
| `appsscript.json` | Manifest do projeto (configurações do ambiente GAS). | 
| `Code.gs` | Variáveis globais de configuração (`pageSpeedApiKey`, `strategy`, URLs de monitoramento). | 
| `Utils.gs` | Funções auxiliares (chamar a API PageSpeed, extrair métricas e adicionar dados à Planilha). | 
| `monitorHome.gs` | Função de execução para a Home Page (`monitorHome`). | 
| `monitorPDP.gs` | Função de execução para as Páginas de Detalhe de Produto (`monitorPDP`). | 
| `monitorPLP.gs` | Função de execução para as Páginas de Lista de Produto (`monitorPLP`). | 
| `monitorCadastro.gs` | Função de execução para a Página de Cadastro (`MonitorCADASTRO`). | 
| `monitorLogin.gs` | Função de execução para a Página de Login (`monitorLogin`). | 

## Configuração e Uso

### 1. Planilha Google

Os resultados de todos os monitoramentos são armazenados na seguinte Planilha Google:

[**Planilha de Resultados - FastB2B Performance**](https://docs.google.com/spreadsheets/d/1As9e7fday4yU1q57dUduBoWYYuFZNuQpuRjIdmbYjZQ/edit?gid=0#gid=0)

Certifique-se de que a planilha associada contenha as seguintes abas (sheets), pois elas são usadas pelos scripts para registrar os dados:

* `HOME`
* `PDP`
* `PLP`
* `CADASTRO`
* `LOGIN`

### 2. Chave de API

1. Obtenha uma chave (Key) para a API PageSpeed Insights no Google Cloud Console.

2. Atualize a variável `pageSpeedApiKey` no arquivo `Code.gs` com a sua chave.

### 3. Execução

As funções de monitoramento podem ser executadas manualmente no editor do Google Apps Script ou agendadas via **Gatilhos** (Triggers) para rodar automaticamente (por exemplo, uma vez por dia).

**Funções de execução:**

* `monitorHome()`
* `monitorPDP()`
* `monitorPLP()`
* `MonitorCADASTRO()`
* `monitorLogin()`

*Feito com Google Apps Script e PageSpeed Insights API.*

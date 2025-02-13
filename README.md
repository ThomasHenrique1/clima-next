# Clima Next


Clima Next é um projeto de previsão do tempo desenvolvido com **Next.js**, **React**, **TailwindCSS** e **TypeScript**. Ele consome a API do [WeatherAPI.com](https://www.weatherapi.com/) para exibir a previsão do tempo atual e para os próximos dias.

## Funcionalidades

- **Previsão do Tempo Atual:**
  - Exibe a temperatura, condição climática, sensação térmica, umidade, velocidade do vento e visibilidade.
  - Mostra uma imagem correspondente ao clima atual (limpo, nublado, chuvoso, nevoeiro, neve).

- **Previsão para os Próximos Dias:**
  - Exibe a previsão do tempo para os próximos 5 dias, começando de amanhã.
  - Mostra a temperatura média e a condição climática de cada dia.

- **Interface Moderna e Responsiva:**
  - Design limpo e moderno com TailwindCSS.
  - Ícones intuitivos usando a biblioteca `react-icons`.

## Tecnologias Utilizadas

<div align=center>

![My Skills](https://skillicons.dev/icons?i=nextjs,react,tailwind,typescript,git)

</div>

- [Next.js](https://nextjs.org/) - Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos.
- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização rápida e responsiva.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript para adicionar tipagem estática.
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones para React.
- [WeatherAPI.com](https://www.weatherapi.com/) - API para obter dados de previsão do tempo.

---

# **Estrutura do Projeto**
+ ``src/app/``: Contém as páginas e rotas do Next.js.
    +  ``page.tsx``: Página inicial com o campo de busca.   
    + ``clima/[climaId]/page.tsx``: Página de detalhes da previsão do tempo.
+ ``src/components/``: Componentes reutilizáveis (se necessário).
+ ``src/app/api/weather/route.ts``: Rota da API para buscar dados do WeatherAPI.com.
+ ``public/``: Contém imagens e arquivos estáticos.
+ ``tailwind.config.js``: Configuração do TailwindCSS.
+ ``postcss.config.js``: Configuração do PostCSS.

---

# **Licença**

Este projeto está licenciado sob a licença MIT
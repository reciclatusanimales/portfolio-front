# 🧰 Portfolio Front
This is the Portfolio frontend than consumes the [Portfolio API](https://github.com/reciclatusanimales/portfolio-api).

It is built with [ReactJS](https://reactjs.org/) & [Gatsby](https://www.gatsbyjs.com/) and consumes the [Portfolio API](https://github.com/reciclatusanimales/portfolio-api)'s [GraphQL](https://www.apollographql.com/) endpoint.

<div align="center"><img src="https://resources.reciclatusanimales.com/image/portfolio.png" width=700></div>

<br />

## Features 📋
* Email contact form.
* Darkmode toggler.

<br />

## Setup 🚀


To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. 

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/reciclatusanimales/portfolio-front.git

# Go into the project folder
$ cd portfolio-front

# Install project dependencies
$ npm install

# Config the GraphQL url source in gatsby-config.js file
{
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "api",
        fieldName: "api",
        url: "http://your_api_url/graphql",
      },
},

# Run the app
$ gatsby develop
```

You might want to look into package.json to make change the port you want to use.

Live Demo: [https://reciclatusanimales.com/](https://reciclatusanimales.com/)

<br />

## Built with 🛠️
* [Gatsby](https://www.gatsbyjs.com/) - v2.32.8
* [ReactJS](https://reactjs.org/) - v16.12.0
* [styled-components](https://styled-components.com/) - v5.1.1
* [react-markdown](https://github.com/remarkjs/react-markdown) - v4.3.1
* [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - v15.4.3

<br />
<br />

⌨️ por [Daniel Reyes Veas](https://github.com/danielreyesveas)
<br />
💾 [reciclatusanimales.com](https://reciclatusanimales.com)

<br />
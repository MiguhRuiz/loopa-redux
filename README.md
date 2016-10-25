# Loopa Redux Directory

An example of how to use the Github API with React & Redux.

**If you want to see the app live, just [click here](https://ghredux.miguhruiz.xyz/)**

## Ussage

Clone the repository:
```bash
$ git clone https://github.com/MiguhRuiz/loopa-redux.git
```
Then, inside the folder...
```bash
$ cd loopa-redux
```
**Extra:** Create a `config.js` file
```bash
touch config.js
```
```javascript
const config = {}

config.token = process.env.TOKEN || 'catsareawesomeiftheyusegit'

module.exports = config
```

Install all packages(both server and client, **might take a bit of time**):
```bash
$ npm install
```

Start the server
```bash
$ npm start
```

## Extra information about the license

If you want to use this software you have to meet the license requirements. Instead of that you must include that this content has been created for a blog post and the link of it. You can find it on the top of the repository.

An example of that should be:

> This code is part of the spanish post "Creando una galería de usuarios usando React, Redux y la API de GitHub" created by Miguh Ruiz. If you want to read it just [click here](#)

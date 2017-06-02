# QPP Submissions API Developer Documentation

[![Greenkeeper badge](https://badges.greenkeeper.io/CMSgov/qpp-submissions-docs.svg?token=04d49144b23313bff7de12f1e73056361a1e4951e3737d5385cf5dd1b00f82b1&ts=1496084472985)](https://greenkeeper.io/)

WIP Developer documentation for the QPP Submissions API.

Accessible publicly at https://cmsgov.github.io/qpp-submissions-docs.

### Development

We use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to avoid having to make tooling decisions.

We also rely on the [U.S. Web Design Standards](https://standards.usa.gov/) to make sure we're visually consistent with other government properties.

```bash
npm install
npm start
```

### Deploy

These docs are hosted on GitHub Pages. We do a couple things to make this nice:

* Use the [gh-pages](https://github.com/tschaub/gh-pages) library for deploying
* Use the [404 redirection trick](https://github.com/rafrex/spa-github-pages) to pass path/hash as query param to `/index.html`

```bash
npm run deploy
```


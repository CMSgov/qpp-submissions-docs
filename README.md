# QPP Submissions API Developer Documentation

Developer documentation for building against the QPP Submissions API. Accessible publicly at https://cmsgov.github.io/qpp-submissions-docs.

### API Tutorials
These are static tutorials designed to illustrate some common workflows when composing API requests together to submit and score performance data. The sample request and response data may be out of date as the API changes, but the workflows must remain valid.

### Data Schema
It's also useful to describe the data being submitted and updated through the API, so these data schemas list the fields belonging to each resource type as well as some supplementary details about concepts like scoring.

References to [qpp-measures-data](https://github.com/CMSgov/qpp-measures-data), the [interactive API reference](https://qpp-submissions-sandbox.navapbc.com/api-explorer), and the Google Group are also listed.

## Development

We use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to avoid having to make tooling decisions.

We also rely on the [CMSGov Design System](https://github.com/CMSgov/design-system) and the [U.S. Web Design Standards](https://standards.usa.gov/) to help ensure consistency with other government properties.

```bash
yarn
yarn start
```

We use Travis CI for testing - add a test if it makes sense, and make sure the build is green before merging.

## Deploy

These docs are hosted on GitHub Pages. We do a couple things to make this nice:

* Use the [gh-pages](https://github.com/tschaub/gh-pages) library for deploying
* Use the [404 redirection trick](https://github.com/rafrex/spa-github-pages) to pass path/hash as query param to `/index.html`

```bash
yarn run deploy
```

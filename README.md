# QPP Submissions API Developer Documentation

Developer documentation for building against the QPP Submissions API. Accessible publicly at https://cmsgov.github.io/qpp-submissions-docs.

### API Tutorials

These are static tutorials designed to illustrate some common workflows when composing API requests together to submit and score performance data. The sample request and response data may be out of date as the API changes, but the workflows must remain valid.

### Data Schema

It's also useful to describe the data being submitted and updated through the API, so these data schemas list the fields belonging to each resource type as well as some supplementary details about concepts like scoring.

References to [qpp-measures-data](https://github.com/CMSgov/qpp-measures-data), the [interactive API reference](https://preview.qpp.cms.gov/api/submissions/public/docs/), and the Google Group are also listed.

## Development

We use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to avoid having to make tooling decisions.

We also rely on the [CMSGov Design System](https://github.com/CMSgov/design-system) and the [U.S. Web Design Standards](https://standards.usa.gov/) to help ensure consistency with other government properties.

```bash
npm install
npm start
```


## Testing

We use Travis CI for testing - add a test if it makes sense, and make sure the build is green before merging.

[Read about how tests are written and run](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests). Following the linked recommendations, we use [Enzyme](http://airbnb.io/enzyme/) for testing components in isolation and put test files alongside app files - see app.test.js and api-reference.test.js for examples.

## Deploy

These docs are hosted on GitHub Pages.

To deploy changes, you'll need to be a collaborator on the GitHub repo, merge a feature branch into to the master branch, and deploy the master branch with the following command:

```bash
git checkout master
git pull # make sure you've pulled the latest version of master
npm run deploy
```

Under the hood, the [gh-pages](https://github.com/tschaub/gh-pages) library is used for managing the gh-pages branch.



## Want to Contribute?

Want to file a bug or contribute some code? Read up on our guidelines for [contributing].

[contributing]: /.github/CONTRIBUTING.md

## Public Domain
This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived
through the CC0 1.0 Universal public domain dedication.		

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to
comply with this waiver of copyright interest.		

See the [formal LICENSE file](/LICENSE).


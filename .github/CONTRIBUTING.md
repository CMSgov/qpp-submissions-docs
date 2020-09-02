# Contributing to QPP Developer Documentation 

We would love for you to contribute to the QPP Developer Documentation guide. As a contributor, here are the guidelines we would like you to follow:

 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)

## <a name="question"></a> Got a Question or Problem?
If you have a question or problem, please [submit an issue](#submit-issue) to our [GitHub Repository](https://github.com/CMSgov/qpp-submissions-docs).

## <a name="issue"></a> Found a Bug?
If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository](https://github.com/CMSgov/qpp-submissions-docs). Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?
You can *request* a new feature by [submitting an issue](#submit-issue) to our GitHub
Repository. If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker. It's possible an issue has already been created addressing your problem and the discussion might inform you of workarounds readily available.

We want to fix all issues as soon as possible, but before fixing a bug we need to be able to reproduce and confirm it. Please provide:

- version of qpp-submissions-docs used
- most importantly, a use-case that fails

To be respectful of maintainer's time and ultimately fix more bugs, we will require a **minimal reproduce scenario**.

You can file new issues by filling out our [new issue form](https://github.com/CMSgov/qpp-submissions-docs/issues/new).

Please see [SUPPORT](/.github/SUPPORT.md) for more details on the issue submission process.

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

* Search [GitHub](https://github.com/CMSgov/qpp-submissions-docs/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.
* Make your changes in a personal fork of the repository. See [GitHub](https://help.github.com/articles/fork-a-repo/) for help on creating a fork.
* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full test suite,and ensure that all tests pass.
* Commit your changes using a descriptive commit message.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your changes on your fork to GitHub:

    ```shell
    git push
    ```

* In GitHub, send a pull request from your fork to `CMSgov/qpp-submissions-docs:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the full test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, please keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more unit-tests. All new code must have 95% or higher code coverage.
* All API methods **must be documented**.

[git-hooks]: https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks
[github]: https://github.com/CMSgov/qpp-submissions-docs
[dev-doc]: /README.md

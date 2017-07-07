# Pybits Static Webpage

This repository contains the static webpage for PyBits that would plug in into
the fest-manager application within the immersive mode for flawless integration.

## Development

Its just a static frontend project with files ordered as follows:

```
.
├── index.html
├── css
│   └── index.css
├── js
│   └── index.js
├── lib
│   └── random-external-dependencies
```

The simplest way would be to run a small HTTP server like `python3 -m http.server`
and go to [localhost:800](http://localhost:8000) to see the webpage. To see the current upstream
version of the files, visit [the webpage powered by ph-pages](https://crux-bphc.github.io/pybits-static).

## Contributing

We love contributions and would be glad to help you make good patches. That out of the way, an average
contribution would involve the following:

1. Fork this repository in your account.
2. Clone it on your local machine.
3. Add a new remote using `git remote add upstream https://github.com/CRUx-BPHC/pybits-static.git`.
4. Create a new feature branch with `git checkout -b my-feature`.
5. Make your changes and commit.
6. Rebase your commits with `upstream/master`:
  - `git checkout master`
  - `git fetch upstream master`
  - `git reset --hard FETCH_HEAD`
  - `git checkout my-feature`
  - `git rebase master`
7. Resolve any merge conflicts, and then push the branch with `git push origin my-feature`.
8. Create a Pull Request detailing the changes you made and wait for review/merge.

It might seem a little complicated at a glance, but the fundamental concept is simple: we
want to ensure that your changes are always made on top of the latest changes to the
project and thus, wecan easily merge your code. If you are facing any troubles, create a
PR as you usually would and we would merge it manually. :)

### Commit Message Guidelines

The commit message:

- is written in the imperative (e.g., "Fix ...", "Add ...")
- is kept short, while concisely explaining what the commit does.
- is clear about what part of the code is affected -- often by prefixing with the name of the subsystem and a colon, like "express: ..." or "docs: ...".
- is a complete sentence, ending with a period.

Good summaries:

- `scripts: Fix running stream_data and node tests individually.`
- `gather_subscriptions: Fix exception handling bad input.`
- `Add GitLab integration.`

Compare `gather_subscriptions: Fix exception handling bad input.` with:

- `gather_subscriptions was broken`, which doesn't explain how it was broken (and isn't in the imperative)
- `Fix exception when given bad input`, in which it's impossible to tell from the summary what part of the code is affected
- `gather_subscriptions: Fixing exception when given bad input.`, not in the imperative
- `gather_subscriptions: Fixed exception when given bad input.`, not in the imperative

## License

This software is released under the MIT License. See [the license file](LICENSE) for the precise wording.
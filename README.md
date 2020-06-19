
# eslint-watch-better

eslint-watch-better is better than [eslint-watch](https://github.com/rizowski/eslint-watch).

* Doesn't spawn another node process to run eslint
* Lints single files when they change, with ability to lint all when typing `r` 
* Less deps and lines of code

## Usage

`yarn global add eslint-watch-better`

From the terminal:
`esw <files or dirs to watch>`

Or make it an npm script in your `package.json`:

```json
{
  ...
  "scripts": {
    "esw": "esw <files or dirs to watch>"
  }
  ...
}
```


# Typescript + React + Parcel + Husky = ❤️

This repository has basic settings for buildling react application in Typescript.

The original source code of the provided example is in [here](https://kentcdodds.com/blog/compound-components-with-react-hooks).

## Built in settings

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) + [ReactDOM](https://reactjs.org/docs/react-dom.html)
- ✨: Linting with [eslint](https://eslint.org/)
- 📝: Formatting with [Prettier](https://prettier.io/)
- 🧪: Test configuration using [Jest](https://jestjs.io/)
- 📦: Building with [Vite](https://vitejs.dev/)
- 🪝: Git hooks management with [Husky](https://typicode.github.io/husky/#/) + [lint-staged](https://github.com/okonet/lint-staged)

## How to set up the project

**Disclaimer**  
Since I only use Yarn as my primary package manager, this repository will ignore `package-lock.json` file on commit.  
If you prefer npm to Yarn, Please modify `.gitignore` file following your flavor.

```
git clone git@github.com:thoroc/cravate-doree.git
cd cravate-doree
yarn install
```

## How to start development for the application

    # With type checking
    yarn develop

    # Transpile only
    yarn start

Execute the command and you can run & test the application on `localhost:1234` in the browser.

## How to build the application

    yarn build

The default output directory is `/dist`. You can change the destination wherever you want.

```
// package.json
// ...
"scripts": {
  // ...
  "build": "... parcel build ./src/index.html -d YOUR_OUTPUT_DIR --public-url '/'" <- Change here
}
// ...
```

## How to test the application

    yarn test:all   # run test once
    yarn test:watch # watch mode

You have to create `__tests__` directory at the same location of files which you want to test.
Test file's name should be `SOURCE.test.ts/tsx/js` or `SOURCE.spec.ts/tsx/js`.

## Miscellaneous

This Project uses git hooks handled by `husky`:

- pre-commit hook for `lint-staged`;
- pre-push hook for testing application.  
  If you don't like it, remove the `husky` package from your repository and erase following scripts.

      yarn remove husky lint-staged

then delete the directory `.husky`

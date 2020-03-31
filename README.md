# single-spa-react-root-seed

[![Build Status]()]()

[![Coverage Status]()]()

A seed project for create a [single-spa](https://single-spa.js.org) root project, that implement 
[React](https://reactjs.org) apps.

## Available commands

### `npm start`
Run app in dev mode.

### `npm run build`
Build project.
> Built project has an own server. Open a terminal, change directory to built project path and run it with
> following command:
> ```sh
> node index.js 
> ```

### `npm run lint`
Run Eslint.

### `npm test`
Run Jest and Enzyme.

## Browsers compatibility

This seed works on the following browsers: 

| Browser | Configured version | Tested | Tested version
| ------ | ------ | ------ | ------ |
| Chrome | 81 | YES | 81
| Firefox | 75 | YES | 75
| Edge | 81 | YES | 81 
| IE (Internet Explorer) | 11 | YES | 11
| Safari | 13 | YES | 13
| Opera | 67 | YES | 67

> You can do your own test with different versions, only you need to modify "targets" in `.bashrc` file.

## .env file

`.env` example:
```
NODE_ENV=development
PORT=3000

MORGAN_FORMAT=dev
SERVE_STATIC=public
```

`.env.prod` example:
```
NODE_ENV=production
PORT=3000

MORGAN_FORMAT=combined
SERVE_STATIC=public
```

## License

MIT

**Free Software, Hell Yeah!**

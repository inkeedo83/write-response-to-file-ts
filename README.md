## Description

CLI typescript app
fetch & write data to .json file

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev           // save all projects into out.json
or
$ npm run dev -- -o filename -p 1 2 3 <projects ids>...
or
$ npm run dev -- -o -p // save all projects into out.json


# watch mode
$ npm run start:dev

# production mode
$ npm run build
$ npm run start:prod
```

### important

setup TOKEN value in .env

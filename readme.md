
# Dzianis-sdk



## Run Locally

For local development you can use the npm link and build commands.

In package folder run

```bash
  npm link
```

and

```bash
  npm run watch
```

Then in you test app add package:

```bash
  npm link denis-dektry-sdk
```

## Running Tests

No tests


## Installation

```bash
  npm i denis-dektry-sdk
```

## Production build

Assemble bundles

```bash
  npm run build
```

and publish

```bash
  npm publish
```

## API Reference

`config(token: string)` - set ups sdk with the right access token;

`theOneAPI()` - returns an instance of a class, each method of which corresponds to API routes

`options` - each method takes this object as its argument, each field is optional, the object itself is optional

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` |  id of document |
| `allQuotes` | `boolean` |  if true return all quotes |
| `allChapters` | `boolean` |  if true return all chapters |
| `options` | `Object` |  each field will be added as query parameter (use for pagination, sorting etc see api doc) |





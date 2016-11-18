# Node Bindings for Github API protobuf

This project contains the Node.JS bindings for the [protobuf](https://github.com/google/protobuf) definition files for entities and events in the [Github API](https://developer.github.com/).  This bindings generated from the [jhaynie/github-protobuf](https://github.com/jhaynie/github-protobuf) project.

## Install

```bash
npm install github-protobuf
```

or with Yarn

```bash
yarn add github-protobuf
```

## Usage

```nodejs
var User = require('github-protobuf').User;
var u = new User();
u.setLogin('jhaynie');
// dump as JS object
console.log(u.toObject());
// serialize
var b = u.serializeBinary();
// deserialize
var b2 = User.deserializeBinary(b);
```

## License

Licensed under the MIT License.

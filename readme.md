# dynConvert

Generate svg preview for [Dynamo](https://dynamobim.org/) 2.x .dyn files.

Absolutely not finished, mostly working.

Most of the code is here: [dyn2svg](https://github.com/infeeeee/dyn2svg)

## Installation

### Npm

Prerequisites:
- node js 10+

```
npm install -g infeeeee/dynConvert
```

## Usage

Currently it can only convert .dyn files to svg:

```
dynconvert path/to/graph.dyn
```

It will place an svg file next to the dyn file. Open with your browser or with an svg viewer.

## Development

### Installation

Prerequisites:
- node js 10+
- git

```
git clone https://github.com/infeeeee/dynConvert.git
cd dynConvert
npm install
npm start
```

## License

MIT
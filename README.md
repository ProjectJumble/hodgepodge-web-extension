# About

Jumble was a news source reliability-checking initiative.

This repository is hosting the web browser extension. RESTful API is available in the separate [repository](https://github.com/ProjectJumble/hodgepodge-api).

## Why Jumble?

Disinformation represents risks for democratic processes and social fabric, undermines the trust in the information society and confidence in digital news sources. We believed everyone had a responsibility to combat the scourge of disinformation and "fake news."

## Was Jumble reliable?

We were committed to limit the spread of disinformation and improve the visibility of trusted news sources. Data used for news source quality indicators was compiled by well-respected fact-checkers, crowdsourced from people like yourself, and analyzed using machine learning algorithms.

## Could I contribute to Jumble?

Crowdsourced data was an integral part of our news source audit process. We valued everyone's opinion and encouraged anyone to contribute.

## Was Jumble secure?

We didn't track browsing behavior, neither we asked for, nor stored personal information.

## Who was behind Jumble?

Jumble was developed by Permanent Holiday OÜ. Permanent Holiday OÜ was committed to freedom of expression and the right to receive and impart information and ideas without interference. We upheld liberty, independence and transparency as our core principles.

# Dependencies

Jumble RESTful API is available in the separate [repository](https://github.com/ProjectJumble/hodgepodge-api). After setting up the API, make sure you enter the appropriate `API_URL` endpoint in the `configuration/[development|production]/constants.js` file.

# Build Instructions

Before proceeding, make sure [Node.js](https://nodejs.org/) is installed on the build machine. To build the Jumble web browser extension execute `npm run` with one of the following commands:

- `pcd` for development (debug) version for Chromium-based web browsers;
- `pcp` for production (release) version for Chromium-based web browsers;
- `pfd` for development (debug) version for Firefox;
- `pfp` for production (debug) version for Firefox.

Alternatively, execute `make.sh` bash script with one of the following command-line arguments:

- `-c` Build extension for Chromium-based web browsers. **This is the default.**
- `-f` Build extension for Firefox.
- `-p` Production (release) configuration. **This is the default.**
- `-d` Development (debug) configuration.
- `-z` Zip content of output directory. Requires _zip_ package.

## Examples

### Chromium-based web browsers

To build the release version of Jumble for Chromium-based web browsers execute:

```
npm run pcp
```

or

```bash
sh make.sh
```

To build the debug version for Chromium-based web browsers execute:

```
npm run pcd
```

or

```bash
sh make.sh -d
```

### Firefox

Similarly, to build the release version of Jumble for Firefox execute:

```
npm run pfp
```

or

```bash
sh make.sh -f
```

To build the debug version for Firefox execute:

```
npm run pfd
```

or

```bash
sh make.sh -f -d
```

### Output

After the successful build, compiled web extension can be found in `./package/[chromium|firefox]` directory.

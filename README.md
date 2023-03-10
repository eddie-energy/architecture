# EDDIE Architecture

This repository hosts the software architecture of EDDIE (European Distributed Data Infrastructure for Energy) which
has been documented based on [arc42](https://arc42.org/). EDDIE is a research project co-funded by the European Union's
Horizon Innovation Actions under grant agreement No. 101069510.

The documentation files are processed by a static site generator to produce a version that is easier to read and navigate.
To generate the HTML version [Node.js](https://nodejs.org) is needed.

## How to use in live-preview mode (local webserver)
1. `npm install` _needs to run only once_
2. `npm run dev`
3. Open browser on: <http://localhost:8080>

## How to build site for deployment
1. `npm install` _needs to run only once_
2. `npm run build`
3. Deploy files contained in directory `_site` to a webserver.

## How to deploy a freshly generated site to the Hagenberg webserver
1. `npm install` _needs to run only once_
2. `npm run clean-deploy`
3. Enter SFTP server's username _when prompted_
4. Enter SFTP server's password _when prompted_
5. Check if the site is up and running at: <https://eddie-web.projekte.fh-hagenberg.at/architecture/>
   _use a hard refresh to clear the browser cache_

## Tools used
- [11ty](https://www.11ty.dev/): the used static site generator
- [Water.css](https://github.com/kognise/water.css): base styles

<img align="right" width="150" src="./arc42/figures/eddie-logo.png">
<br/>
<br/>

# Instructions

The documentation files are processed by a static site generator to produce a version that is easier to read and navigate.
To generate the HTML version [Node.js](https://nodejs.org) is needed.

To generate PlantUml pictures, a local server is used which is started via docker-compose.

## How to use in live-preview mode (local webserver)
1. `npm install` _needs to run only once_
2. `npm run compose-up`
3. `npm run dev`
4. Open browser on: <http://localhost:8080>

## How to build site for deployment
1. `npm install` _needs to run only once_
2. `npm run compose-up`
3. `npm run build`
4. Deploy files contained in directory `_site` to a webserver.

## How to deploy a freshly generated site to the Hagenberg webserver
1. `npm install` _needs to run only once_
2. `npm run compose-up`
3. `npm run clean-deploy`
4. Enter SFTP server's username _when prompted_
5. Enter SFTP server's password _when prompted_
6. Check if the site is up and running at: <https://eddie-web.projekte.fh-hagenberg.at/architecture/>
   _use a hard refresh to clear the browser cache_

## Tools used
- [11ty](https://www.11ty.dev/): the used static site generator
- [Water.css](https://github.com/kognise/water.css): base styles
- [PlantUML](https://plantuml.com/): generate UML diagrams from text

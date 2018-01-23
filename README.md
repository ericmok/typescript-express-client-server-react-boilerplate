## typescript-express-client-server-react-minmial-boilerplate

#### Rundown

This is a minimal boilerplate template for a project that uses 
Typescript and Express. For the client, webpack is used for bundling
the source code while for the server, tsc and helper scripts are used.

This template comes with docker files that can start the
project in either development or production environments. 

Task running is delegated to npm scripts which includes
build and dev scripts, and scripts to run docker for development.

#### Explanation

This project demonstrates a build configuration that can
accomodate both client and server builds that require different
requirements.

The separation of client and server build configs is motivated
by how clients may require the ecosystem that is built around webpack,
whereas the server may not.

For example, when developing the client it may be useful to use 
webpack's hot module replacement or the react library. 
On the other hand servers are compiled targeting the node context 
rather than the browser context. Instead of using webpack, 
tsc was used to compile server source code. 
For watching source code changes on the server side, 
nodemon was used instead of webpack-dev-server.

After development of the client is finished, how is the client served?

While it may be okay for client html files to be served by 
webpack-dev-server, in production, the Express server needs 
a way to find the client's html files in order to serve them!

Thus when the npm script to build the client is run, these html
files are copied to a location that is accessible to the server's
final bundled script.

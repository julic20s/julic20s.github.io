import { renderToStaticNodeStream } from 'react-dom/server';
import { createWriteStream, mkdirSync } from 'fs';

mkdirSync("build");
let stream = renderToStaticNodeStream(<div>Hello world!</div>);
let output = createWriteStream("build/index.html");
stream.pipe(output);

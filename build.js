import { renderToStaticNodeStream } from 'react-dom/server';
import { createWriteStream, existsSync, mkdirSync, readdir, statSync } from 'fs';

const reg = /.*\.html\.js$/;
function generateHtml(dir, output) {
    readdir(dir, (err, file) => {
        if (err) return;
        if (!existsSync(output)) mkdirSync(output);
        file.forEach((file) => {
            let filepath = dir + '/' + file;
            let stat = statSync(filepath);
            if (stat.isDirectory()) {
                generateHtml(filepath, output + '/' + file);
            } else if (stat.isFile() && reg.test(file)) {
                let module = require(filepath.replace(".js", ""));
                let element = module.default();
                let stream = renderToStaticNodeStream(element);
                let out = createWriteStream(output + '/' + file.replace(".js", ""));
                stream.pipe(out);
            }
        });
    });
}

generateHtml('./app', './build');

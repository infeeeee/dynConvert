#!/usr/bin/env node
/* -------------------------------------------------------------------------- */
/*                                   Modules                                  */
/* -------------------------------------------------------------------------- */

const fs = require('fs')
const path = require('path')

const program = require('commander')

const sanitize = require("sanitize-filename")

require('dyn2svg')


/* -------------------------------------------------------------------------- */
/*                                  Commander                                 */
/* -------------------------------------------------------------------------- */

program.parse(process.argv);

if (program.args[0]) {
    const parsedPath = path.parse(program.args[0])

    if (parsedPath.ext == '.dyn') {
        let data = fs.readFileSync(program.args[0], "utf-8")

        data.dyn2svg()
            .then((res) => {
                // console.log(res)

                let saveFilename = sanitize(parsedPath.name + '.svg')
                let savePath = path.join(parsedPath.dir, saveFilename)

                fs.writeFile(savePath, res, (err) => {
                    if (err) throw err;
                    console.log(savePath, 'has been saved!');
                });


            })
    }
}
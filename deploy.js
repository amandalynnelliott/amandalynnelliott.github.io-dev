const fs = require('fs');
const exec = require('child_process').exec;

// download repo
// delete everything inside expect for .git and CNAME
// build site and copy all files in site to the repo
// git add .
// git commit
// git push

Promise.resolve()
    .then(() => new Promise((res, rej) => {
        rmdirAsync('./_site', err =>
            err
                ? rej(err) :
                res(console.log('Files deleted')));
    }))
    .then(() => new Promise((res, rej) => {
        exec('bundle exec jekyll build', err =>
            err
                ? rej(err)
                : res(console.log('Site built')));
    }))
    .then(() => new Promise((res, rej) => {
        fs.writeFile('./_site/CNAME', 'amandalynnelliott.com', err =>
            err
                ? rej(err)
                : res(console.log('CNAME added')));
    }))
    .then(() => new Promise((res, rej) => {
        exec('git init', { cwd: './_site' }, err =>
            err
                ? rej(err)
                : res(console.log('Repositiory initialized')))
    }))
    .then(() => new Promise((res, rej) => {
        exec('git add .', { cwd: './_site' }, err =>
            err
                ? rej(err)
                : res(console.log('Files staged')))
    }))
    .then(() => new Promise((res, rej) => {
        exec(`git commit -m "${process.argv[2] || 'New Commit'}"`, { cwd: './_site' }, err =>
            err
                ? rej(err)
                : res(console.log('Files committed')))
    }))
    .then(() => new Promise((res, rej) => {
        exec('git remote add origin https://github.com/amandalynnelliott/amandalynnelliott.github.io', { cwd: './_site' }, err =>
            err
                ? rej(err)
                : res(console.log('Remote added')))
    }))
    .then(() => new Promise((res, rej) => {
        exec('git push origin master --force', { cwd: './_site' }, err =>
            err
                ? rej(err)
                : res(console.log('Commit pushed')))
    }))
    .catch(console.error);

function rmdirAsync(path, callback) {
    fs.readdir(path, function (err, files) {
        if (err) return callback(err, []);

        const wait = files.length;
        let count = 0;
        const folderDone = err => {
            if (++count >= wait || err) fs.rmdir(path, callback);
        };

        if (!wait) return folderDone();

        path = path.replace(/\/+$/, "");
        files.forEach(file => {
            var curPath = path + "/" + file;
            fs.lstat(curPath, (err, stats) => {
                if (err) return callback(err, []);

                if (stats.isDirectory()) {
                    rmdirAsync(curPath, folderDone);
                } else {
                    fs.unlink(curPath, folderDone);
                }
            });
        });
    });
};

const fs = require('fs');
const exec = require('child_process').exec;

Promise.resolve()
    .then(() => new Promise((resolve, reject) => rmdirAsync('./_site', err => err ? reject(err) : resolve(console.log('Files deleted')))))
    .then(() => new Promise((resolve, reject) => exec('bundle exec jekyll build', {
        env: {
            JEKYLL_ENV: 'production'
        }
    }, err => err ? reject(err) : resolve(console.log('Site built')))))
    .then(() => new Promise((resolve, reject) => fs.writeFile('./_site/CNAME', 'amandalynnelliott.com', err => err ? reject(err) : resolve(console.log('CNAME added')))))
    .then(() => new Promise((resolve, reject) => exec('git init', {
        cwd: './_site'
    }, err => err ? reject(err) : resolve(console.log('Repositiory initialized')))))
    .then(() => new Promise((resolve, reject) => exec('git add .', {
        cwd: './_site'
    }, err => err ? reject(err) : resolve(console.log('Files staged')))))
    .then(() => new Promise((resolve, reject) => exec(`git commit -m "${process.argv[2] || 'New Commit'}"`, {
        cwd: './_site'
    }, err => err ? reject(err) : resolve(console.log('Files committed')))))
    .then(() => new Promise((resolve, reject) => exec('git remote add origin https://github.com/amandalynnelliott/amandalynnelliott.github.io', {
        cwd: './_site'
    }, err => err ? reject(err) : resolve(console.log('Remote added')))))
    .then(() => new Promise((resolve, reject) => exec('git push origin master --force', {
        cwd: './_site'
    }, err => err ? reject(err) : resolve(console.log('Commit pushed')))))
    .catch(console.error);

/**
 * Recursively removes a directory and all files.
 * @param {string} path
 * @param {(err: NodeJS.ErrnoException) => void} callback
 * @returns {void}
 */
function rmdirAsync(path, callback) {
    fs.readdir(path, (err, files) => {
        if (!files) return callback(null);
        if (err) return callback(err);

        let count = 0;
        const folderDone = err => {
            if (err || ++count >= files.length) fs.rmdir(path, callback);
        };

        if (!files.length) return folderDone();

        path = path.replace(/\/+$/, "");
        files.forEach(file => {
            var curPath = path + "/" + file;
            fs.lstat(curPath, (err, stats) => {
                if (err) return callback(err);

                if (stats.isDirectory()) {
                    rmdirAsync(curPath, folderDone);
                } else {
                    fs.unlink(curPath, folderDone);
                }
            });
        });
    });
};

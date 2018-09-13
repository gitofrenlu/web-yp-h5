require('./check-versions')()

var chalk = require('chalk')
var path = require('path')
var readline = require('readline');
var exec = require('child_process').exec
var fs = require('fs')
var shell = require('shelljs');
var configs = JSON.parse(fs.readFileSync('settings.json'))
var target = path.join(__dirname, '..', configs.deploy.www.targetDist)

getCurBranch().then(() => {
    fs.access(configs.deploy.www.feReleaseDist, fs.constants.R_OK | fs.constants.W_OK, (err) => {
        if(err) {
            if (err.code === 'ENOENT') {
                console.log(chalk.red(`${configs.deploy.www.feReleaseDist} 部署目录不存在！`))
                return;
            }
        } else {
            shell.cd(configs.deploy.www.feReleaseDist)
            if (!shell.which('git')) {
                shell.echo('Sorry, this script requires git');
                shell.exit(1);
            }
            if(!fsExistsSync(configs.project)) {
                shell.exec(`git clone ${configs.deploy.www.releaseGit}`)
            }
            shell.rm('-rf', `${configs.project}/*`);
            shell.cp('-R', target, './') &&　shell.cd(configs.project)
            shell.exec('git add .')
            shell.exec('git commit -m "Auto-commit"')
            shell.exec('git push')
            
            getSysTime().then(time => {
                // tag
                shell.exec(`git tag "www/${configs.project}/${time[0]}.${time[1]}"`)
                shell.exec('git push --tags')
            })
        }
    })
}).catch(() => {
    console.log(chalk.red('please merge to master!'))
})

function fsExistsSync(path) {
    try{
        fs.accessSync(path,fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
}

function isBranchMaster(brName) {
    return brName.replace(/\n/g, '') == 'master' ? true : false
}

function getCurBranch() {
    let gitBr = exec("git branch | grep -e '^*' | cut -d' ' -f 2")
    return new Promise((res, rej) => {
        gitBr.stdout.on('data', data => {
            if(isBranchMaster(data)) {
                res()
            } else {
                rej()
            }
        })
    })
}

function getSysTime() {
    let time = exec('date "+%Y/%m/%d %H%M"')
    return new Promise((res, rej) => {
        time.stdout.on('data', data => {
            res([data.slice(0, -5).replace(' ', ''), data.slice(-5).replace(/\n/g, '')])
        })
    })
}







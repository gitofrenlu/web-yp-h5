require('./check-versions')()

var chalk = require('chalk')
var path = require('path')
var readline = require('readline');
var exec = require('child_process').exec
var fs = require('fs')
var configs = JSON.parse(fs.readFileSync('settings.json'))

var dict = resolve(configs.deploy.qa.targetDist)
var serverDir = configs.deploy.qa.testServerDirectory
var servers = configs.deploy.qa.servers
let tips = "> 选择你要部署测试服务器\n"

servers.map((val, key) => {
    tips+= `${key+1}. ${val.host} \n`
})

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

function getCommandParams(label) {
    return new Promise((res, rej) =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(label, info => {
            rl.close()
            res(info)
        })
    })
}
getCommandParams(tips).then(res => {
    if(res > 0 && res <= servers.length) {
        console.log(chalk.yellow(`${servers[res-1].host} connecting....`))
        var scp = exec(`scp -r ${dict} ${servers[res-1].username}@${servers[res-1].host}:${serverDir}`)

        scp.stderr.on('data', function(data) {
            console.log(data)
        });
        scp.on('close', function(code) {
            console.log('closing code: ' + code);
            if(code == 0) {
                console.log(chalk.green(
                    `  Tip: Deployment is complete on the ${servers[res-1].host}\n`
                ))
            }
        });
    } else {
        console.log(chalk.red(`请选择已有的测试服务器！`))
    }

})
const monitor = require("active-window")
var processWindows = require("node-process-windows");

setTimeout(()=>monitor.getActiveWindow((w)=>sushi(w)),2000)



function sushi(name) {
    console.log(name)
    var activeProcesses = processWindows.getProcesses((err, p) => {
        p.forEach((cp) => {
            console.log(cp)
        })
    });
}
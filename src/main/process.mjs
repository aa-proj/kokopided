import processlist from "process-list";
 
const tasks = await processlist.snapshot('pid', 'name',"starttime","cpu","owner");
console.log(tasks.forEach(element => {
    if(element.owner == "kokoa") console.log(element.name)
}));
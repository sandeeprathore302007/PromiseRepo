let promise = new Promise();
let promise2 = new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        console.log("Hello World")

    },2000)
})
promise2.then(function()
{

}).catch(function()
{

})

// There is a new promise created

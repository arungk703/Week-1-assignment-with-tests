const fs = require("fs")

var contents = fs.readFile("cleaner.txt","utf-8", function(err, data){
    if(err)
        console.log(err);
    else{
        var arr = data.split(/\s+/);
        var filteredContents = arr.join(' ');
        fs.writeFile("cleaner.txt", filteredContents, "utf-8", function(err){
            if(err){
                console.log(err);
                return;
            }
            console.log("File Has been written");
            
        });
    }

});

// var arr = contents.split("");
// console.log(arr);

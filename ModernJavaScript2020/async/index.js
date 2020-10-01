 const gettodos = (resource, callback) => {
     const request = new XMLHttpRequest();
     //Event fires when every time state change in request  
     // It changers in every 4 pahses 
     request.addEventListener('readystatechange', () => {
         //  console.log(request, request.readyState);
         if (request.readyState === 4 && request.status === 200)
         // When request complete  
         {
             const data = JSON.parse(request.responseText)
             callback(undefined, data);
         } else if (request.readyState === 4) {
             //  console.log("Couldnot fetch the daat")
             callback('could not find the data', undefined);
         }
         //  If there is some endpoint which is not valid it still going to state 4 it will come with some eror code 
         //   status = 404 with sate 4 and no response text not find resource 0
         //  so also check status
         //  status = 200 means everything is ok 
     });
     request.open("GET", resource);
     request.send();
 };


 //  ASYNC 
 console.log(1);
 console.log(5);
 // Sending a callback function to be fired
 gettodos("todos.json", (err, data) => {
     console.log("Callback fired");
     if (err) {
         console.log(err);
     } else {
         console.log(data);
         gettodos("notes.json", (err, data) => {
             console.log("Callback 2 fired");
             console.log(data);
             //  Callabck in callback waitimg . callback hell
         })
     }
 });
 console.log(8);
 console.log(9);
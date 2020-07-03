// XML HTTP REQUEST
let fetchBtn = document.getElementById('fetchbtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('clicked fetchBtn')
        // instantiate an xhr object
    const xhr = new XMLHttpRequest();
    // // open the object
    // // where to find data which type of request
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
    //     // blocing or non blocking
    //     // GET :fetch url 
    //     // post : url plus data give response acc to data




    // POST REUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    xhr.setRequestHeader('Content-type', 'application/json')














    // During progress
    xhr.onprogress = function() {
            console.log('On Progress  spinners')
        }
        // on load what to do when response is reading
    xhr.onreadystatechange = function() {
            console.log('ready state', xhr.readyState)
                // has codes
        }
        // onload is ready state 4
    xhr.onload = function() {
        // if file exist 200 is response code of http
        if (this.status === 200) {
            console.log(this.responseText)
        } else {
            document.body.innerHTML = `<img src="error.png" alt="">`
        }
    }

    // now send request

    // post
    params = `{"name":"tehsthyt","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log(`we are done`)
        // comes at start because we are not blocking 
}

// http status 200 404 403 and many more

let popBtn = document.getElementById('popbtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('clicked popBtn')
        // instantiate an xhr object
    const xhr = new XMLHttpRequest();
    // POST REUEST
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    // During progress
    // xhr.onprogress = function() {
    //     console.log('On Progress  spinners')
    // }

    // onload is ready state 4
    xhr.onload = function() {
            if (this.status === 200) {
                let obj = JSON.parse(this.responseText);
                console.log(obj);
                let list = document.getElementById('list');
                str = "";
                for (key in obj) {
                    str += `<li>${obj[key].employee_name} </li>`;
                }
                list.innerHTML = str;
            } else {
                document.body.innerHTML = `<img src="error.png" alt="">`
            }
        }
        // post
    xhr.send();
    console.log(`we are done fetching employee data`)

}
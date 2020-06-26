let str = 'python';
let links = document.links;
console.log(links)
let href = '';


// if link content contain python then return

Array.from(links).forEach(function(element) {
    href = element.href;
    // console.log(href)

    if (href.includes(str)) {
        console.log(href)
    }

})
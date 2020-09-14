// console.log(1);
// console.log(2);

//fired asyn code when. it doesnt block the code. added at the end
// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);
// console.log(4);
// console.log(5);


// Ajax - xml, json

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
});
//'https://jsonplaceholder.typicode.com/todos/1'

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
console.log('App.js is running!');

// Create app object title/subtitle
// use title/subtitle in the template
// render template

// JSX = Javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your Life in the hands of a computer',
    options: ['One', 'Two', 'Three']
};
var template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// var user = {
//     name: 'Ndulue Ginikachi',
//     Age: 25,
//     location: 'Nigeria'
// };
// function getLocation(location){
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

// var templateTwo = (
//     <div>
//         <h1>{user.name ? user.name: 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

let count = 0;
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
};
const templateTwo =(
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

// Challenge
// Make the button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
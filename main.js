const firstName = 'jahlys';
const lastName = 'manfré';


// Solution sans bonus
const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));
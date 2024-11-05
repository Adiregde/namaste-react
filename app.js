const heading = React.createElement(
    'h1', 
    { id:"heading", xyz:"hejnkjwbd"}, 
    "Hello world !!");

const root = ReactDOM.createRoot(document.getElementById('root'));



const parent = React.createElement('div', { id:"parent"},[
        React.createElement('div', {id: 'child1'}, [
            React.createElement('h1', {}, "H1 tag in first child"),
            React.createElement('h2', {}, "H2 tag in first child"),
        ]),
        React.createElement('div', {id: 'child2'}, [
            React.createElement('h1', {}, "H3 tag in first child"),
            React.createElement('h2', {}, "H4 tag in first child"),
        ]),
        React.createElement('div', {id: 'child3'}, [
            React.createElement('ul', {id: "fruits"},[
                React.createElement('li', {}, "Apple"),
                React.createElement('li', {}, "Bannana"),
                React.createElement('li', {}, "Mango"),
                React.createElement('li', {}, "Grapes"),
                React.createElement('li', {}, "Orange"),
            ])
        ]),
    ]);

root.render(heading);
root.render(parent);
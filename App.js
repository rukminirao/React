const parent = React.createElement("div", {}, 
    React.createElement("div", {}, 
        React.createElement("h1", {}, "Hello World from React"))
    );




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
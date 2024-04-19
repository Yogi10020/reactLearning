
const heading = React.createElement("div", { id: "parent" },
        [
            React.createElement("div", { id: "child" },
                [
                    React.createElement("h3", {}, "This is first line"),
                    React.createElement("h3", {}, "This is first line"),
                ]),
                React.createElement("div", { id: "child" },
                [
                    React.createElement("h3", {}, "This is first line"),
                    React.createElement("h3", {}, "This is first line"),
                ])
        ]
        );
const root = ReactDOM.createRoot( document.getElementById("hello"));

root.render(heading);
console.log(heading);

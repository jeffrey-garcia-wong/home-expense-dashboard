import { Component } from "react";

class NoPage extends Component<any> {

    constructor(props:any) {
        super(props);
        console.log(`constructor: ${this.constructor.name}`);
    }

    render() {
        console.log(`render: ${this.constructor.name}`);

        return(
            <div>
                <h1>Page not found</h1>
            </div>
        );
    }

    componentDidMount() {
        console.log(`componentDidMount: ${this.constructor.name}`);
    }      
}

export default NoPage;
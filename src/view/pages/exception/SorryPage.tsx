import { Component } from "react";

class SorryPage extends Component<any> {

    constructor(props:any) {
        super(props);
        console.log(`constructor: ${this.constructor.name}`);
    }

    render() {
        console.log(`render: ${this.constructor.name}`);

        return(
            <div>
                <h1>
                    Sorry, we have a little problem with the site now.
                </h1>
                <h2>
                    The engineer is working on it, please check back
                    at a later time.
                </h2>                    
            </div>
        );
    }

    componentDidMount() {
        console.log(`componentDidMount: ${this.constructor.name}`);
    }      
}

export default SorryPage;
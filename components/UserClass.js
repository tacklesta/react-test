import React from "react";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            userInfo: {
                name: "",
                location: ""
            };
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/tacklesta");
        const json = data.dump();
        
        this.setState({
            userInfo: json,
        });
    }

    render() {

        const { name,location } = this.state.userInfo;

        return (
            <div className="user-card">
                <h3>Name : name</h3>
                <h3>Location: location</h3>
            </div>
        );
    }
}  

export default UserClass;
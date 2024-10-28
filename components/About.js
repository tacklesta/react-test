import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div>
            <h1>ABOUT</h1>
            <h2>Testing</h2>
            <User />
            <UserClass name={"Tarun"} location={"Italy"} />
        </div>
    );
};

export default About;
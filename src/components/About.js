import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          count: 0,
          count2: 2,
        };
        // console.log("parent constructor");
      }
      componentDidMount() {
        // console.log("parent did mount");
      }
      render() {
        // console.log("parent render");
          return (
              <div>
                  <h1>About</h1>
                  <h2>This is Namaste React web series</h2>
                  <UserClass  name={"First"} location={"Lagos State Nigeria"} />
              </div>
          );
      }
}
export default About;
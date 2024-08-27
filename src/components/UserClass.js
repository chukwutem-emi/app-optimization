import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        login:"chukwutem",
        type:"Default",
      }
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    console.log(this.props.name + "child did mount");
    const data = await fetch("https://api.github.com/users/chukwutem-emi");
    const result = await data.json();
    this.setState({
      userInfo:result
    });
    console.log(result);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("Component will unmount")
  }
  render() {
    const {login, type, avatar_url} = this.state.userInfo;
    // console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <h2>name: {login}</h2>
        <h3>Type: {type}</h3>
        <img src={avatar_url}></img>
        <h4>Contact: @Emichukwutem</h4>
      </div>
    );
  }
}
export default UserClass;

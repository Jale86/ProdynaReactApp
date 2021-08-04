import React, {Component} from "react";

class AddItem extends Component {
  state = {
    title: "",
    body: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.body === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addItemHandler(this.state);
    this.setState({ title: "", body: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Item</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="titile"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Body</label>
            <input
              type="text"
              name="body"
              placeholder="Body"
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
            />
          </div>
          <button className="button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
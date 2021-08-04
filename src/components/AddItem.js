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
      <div className="container-fluid mt-3">
        <h2>Add Item</h2>
        <form onSubmit={this.add}>
    
            <div className="form-group">
                <label>Title</label>
                <input
                 className="form-control"
                type="text"
                name="title"
                placeholder="titile"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Body</label>
                <input
                className="form-control"
                type="text"
                name="body"
                placeholder="Body"
                value={this.state.body}
                onChange={(e) => this.setState({ body: e.target.value })}
                />
            </div>
            
          <button className="btn btn-primary mt-3">Add</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
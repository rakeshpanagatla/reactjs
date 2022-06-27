import axios from "axios";
import React, { Component } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

class PostsApp extends Component {
  constructor(props) {
    // console.log("constructor");
    super(props);
    this.state = {
      posts: [],
      id: "",
      userId: "",
      title: "",
      body: "",
      errors: {
        userId: "",
        title: "",
        body: "",
      },
    };
  }

  //   createPost
  createPost = async () => {
    try {
      const { userId, body, title } = this.state;

      const { data } = await axios.post(API_URL, {
        userId,
        body,
        title,
      });
      // console.log(data);
      const posts = [...this.state.posts];
      posts.push(data);
      this.setState({ posts, userId: "", body: "", title: "" });
    } catch (err) {
      console.error(err);
    }
  };

  //  getPost
  getPosts = async () => {
    try {
      const { data } = await axios.get(API_URL);
      // console.log(data);
      this.setState({ posts: data });
    } catch (err) {
      console.error(err);
    }
  };

  //  updatePost
  updatePost = async () => {
    try {
      const { id, userId, body, title } = this.state;

      const { data } = await axios.put(`${API_URL}/${id}`, {
        userId,
        body,
        title,
      });
      const index = this.state.posts.findIndex((post) => post.id === id);
      const posts = [...this.state.posts];
      posts[index] = data;
      this.setState({ posts, id: "", userId: "", title: "", body: "" });
    } catch (err) {
      console.error(err);
    }
  };

  //  deletePost
  deletePost = async (id) => {
    try {
      // console.log(id);
      await axios.delete(`${API_URL}/${id}`);
      const posts = this.state.posts.filter((post) => post.id !== id);
      this.setState({ posts });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    // console.log("componentdidMount");
    this.getPosts();
  }

  handleChange = ({ target: { name, value } }) => {
    const errors = { ...this.state.errors };

    // validation
    switch (name) {
      case "userId": {
        if (!value) {
          errors.userId = "UserId is required";
        } else errors.userId = "";
        break;
      }
      case "title": {
        if (!value) {
          errors.title = "Title is required";
        } else errors.title = "";
        break;
      }
      case "body": {
        if (!value) {
          errors.body = "Body is required";
        } else errors.body = "";
        break;
      }
    }

    this.setState({ [name]: value, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) this.updatePost();
    else this.createPost();
  };

  editPost = (post) => {
    // console.log(post);
    this.setState({ ...post });
  };

  render() {
    // console.log("render");
    return (
      <>
        <h2>Posts Application</h2>
        <form onSubmit={this.handleSubmit}>
          {/* below is only used for editpost function */}
          {this.state.id && (
            <>
              <div>
                <label>Id : </label>
                <input value={this.state.id} disabled />
              </div>
              <br />
            </>
          )}

          <div>
            <label>UserID : </label>
            <input
              name="userId"
              type="number"
              placeholder="Enter user ID"
              value={this.state.userId}
              onChange={this.handleChange}
              required
            />
            <span>{this.state.errors.userId}</span>
          </div>
          <br />
          <div>
            <label>Title : </label>
            <input
              name="title"
              type="text"
              placeholder="Enter the title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
            <span>{this.state.errors.title}</span>
          </div>
          <br />
          <div>
            <label>Body : </label>
            <input
              name="body"
              type="text"
              placeholder="Enter the body"
              value={this.state.body}
              onChange={this.handleChange}
              required
            />
            <span>{this.state.errors.body}</span>
          </div>
          <br />
          <div>
            <button type="submit">{this.state.id ? "Update" : "Create"}</button>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button onClick={() => this.editPost(post)}>Edit</button>
                    <button onClick={() => this.deletePost(post.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default PostsApp;

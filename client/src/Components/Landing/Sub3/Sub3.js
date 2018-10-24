import React, { Component } from "react";

import "./Sub3.css";

class Sub3 extends Component {
  state = {
    list: [
      {
        id: 0,
        src:
          "https://images.unsplash.com/photo-1526492664619-72c7c4c62835?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=755e4d28b548e5958990744e28ccd079&auto=format&fit=crop&w=1050&q=80"
      },
      {
        id: 1,
        src:
          "https://images.unsplash.com/photo-1518639845127-064c4bd0c574?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08a594504b0a22b044c53416b965f18a&auto=format&fit=crop&w=634&q=80"
      },
      {
        id: 2,
        src:
          "https://images.unsplash.com/photo-1517390947773-a742ed6ce0d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2021da9e47b7ff4f42c521aa33348704&auto=format&fit=crop&w=634&q=80"
      },
      {
        id: 3,
        src:
          "https://images.unsplash.com/photo-1518639845127-064c4bd0c574?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08a594504b0a22b044c53416b965f18a&auto=format&fit=crop&w=634&q=80"
      },
      {
        id: 4,
        src:
          "https://images.unsplash.com/photo-1497382706140-605ee76b3b55?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=596978d195a422e61e61308cb8b333b5&auto=format&fit=crop&w=1050&q=80"
      },
      {
        id: 5,
        src:
          "https://images.unsplash.com/photo-1530556626422-4471d585bb73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88fb4711c634559bb81c957f8f1fd2c9&auto=format&fit=crop&w=1050&q=80"
      },
      {
        id: 6,
        src:
          "https://images.unsplash.com/photo-1506796684999-9fa2770af9c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a251f141a02256a195c10d61937b3a8f&auto=format&fit=crop&w=967&q=80"
      },
      {
        id: 7,
        src:
          "https://images.unsplash.com/photo-1490915785914-0af2806c22b6?ixlib=rb-0.3.5&s=33749f4b3c347c6a3be70f243711662e&auto=format&fit=crop&w=1050&q=80"
      },
      {
        id: 8,
        src:
          "https://images.unsplash.com/photo-1456444029056-7dfaeeb83a19?ixlib=rb-0.3.5&s=e8c8fe958bf4175b78c2d5df6979c240&auto=format&fit=crop&w=634&q=80"
      }
    ]
  };
  render() {
    const listing = this.state.list.map(listItem => {
      return (
        <div
          className="box"
          style={{
            background: `url('${listItem.src}')`,
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
          key={listItem.id}
        />
      );
    });
    return (
      <div className="Sub3">
        <h2>Here's What Our Happy Customers Are Wearing</h2>
        <div className="Box">{listing}</div>
      </div>
    );
  }
}

export default Sub3;

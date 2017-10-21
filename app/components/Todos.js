// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Todos.css';

export default class Todos extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <div className="window">
            <div className="window-content">

              <div className="pane-group">

                <div className="pane">
                  <div className="todo-header">
                    <img src='../icons/letter.png' height='50' width= '50'/>
                  </div>

                  <form className= "add-todo">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Add new todo"/>
                    </div>
                    <button className="btn btn-mini btn-primary">Add</button>
                  </form>
                </div>

                <div className="pane">
                  <div className="todo-header">
                    <img src='../icons/chat.png' height='50' width= '50'/>
                  </div>
                </div>

                <div className="pane">
                  <div className="todo-header">
                    <img src='../icons/calendar.png' height='50' width= '50'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

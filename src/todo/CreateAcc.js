import React, { Component } from 'react'

class CreateAcc extends Component {
    onSubmit(e) {}
    
    render() {
        return (
            <div>
                <h3>add new user</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control"
                               //value={this.state.name}
                               onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control"
                               //value={this.state.name}
                               onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control"
                               //value={this.state.name}
                               onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="ADD new Account" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateAcc
import React, { Component } from 'react'


class UpdateAcc extends Component {
    onSubmit(e) {}
    
    render() {
        return (
            <div>
                <h3>Update user</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                            <label>Person Name:</label>
                            <input type="text" className="form-control"
                                //value={this.state.name}
                                onChange={this.onChangeName}
                            />
                    </div>
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
                        <label>Gender</label>
                        <input type="text" className="form-control"
                               //value={this.state.name}
                               onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default UpdateAcc
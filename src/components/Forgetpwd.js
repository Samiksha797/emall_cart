import React from 'react';
class Forgetpwd  extends React.Component {
 
    render() { 
        return (
        <><div className=" ">
        <form className="px-4 py-3">
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label"> Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Current Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Create new-Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="New-Password" />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck" />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Save Password
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Save Password</button>
        </form>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/login" >Already a user? Login</a>
      </div>
      </>
    );
    }
}
 
export default Forgetpwd;
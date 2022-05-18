import React from 'react';

class Signup extends React.Component {
   
    render() { 
        return (
        <><div className="bg-grey">
        <form className="px-4 py-3">
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label"> Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Create Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Re-Enter Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck" />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Remeber me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/login" >Already a user? Login</a>
        <a className="dropdown-item" href="/forgetpwd">Forgot password?</a>
      </div>
      </>
    );
    }
}
 
export default Signup;
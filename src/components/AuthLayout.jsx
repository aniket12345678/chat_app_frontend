import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthLayout = (Component) => {
  return function WrappedComponent() {
    const { isLoggedIn } = useSelector((x) => x.authSlice);
    if (isLoggedIn) {
      return <Navigate to={'/home'} />
    }
    return (
      <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <Component />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AuthLayout

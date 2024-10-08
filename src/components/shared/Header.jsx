import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



const Header = () => {
  const { googleSignIn } = useContext(AuthContext);
  const { gitHubSignIn } = useContext(AuthContext);
  const { user, logOutUser } = useContext(AuthContext);
  const { registerEmailPassword, updateUserProfile } = useContext(AuthContext);
  const { signInEmailPassword } = useContext(AuthContext);
  

  // Login modal code start
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);

  const toggleModal = () => {
    setIsOpenReg(false);
    setIsOpen(true);
  };
  const toggleModalLoginClose = () => {
    setIsOpen(false);
  }

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    // Handle login logic here
    signInEmailPassword(emailLogin, passwordLogin)
      .then((result) => {
        console.log("Data User:" + result.user);
        toast.success("Login Successful", {
          position: "top-right",
        });
        navigate("/");
      })
    console.log('Form submitted');
  };
  // Login modal code end


  // Register modal code start
  const toggleModalReg = () => {
    setIsOpen(false);
    setIsOpenReg(true);
  };

  const toggleModalRegFromLoginPage = () => {
    setIsOpenReg(true);
    setIsOpen(false);
  }
  const toggleModalRegClose = () => {
    setIsOpenReg(false);
  }

  //Register user using email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fullname, setFullName] = useState('');

  const photoUrl = "/images/user.png";
  const handleSubmitReg = (e) => {
    e.preventDefault();
    setIsOpenReg(false);
    setError('');
    // Handle Register logic here
    registerEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        handleUserProfile(fullname, photoUrl);
        toast.success("User Registration Successful", {
          position: "top-right",
        });
        navigate("/");
        console.log('Form submitted');
      })
  };


  const handleUserProfile = (name, photo) => {
    const profile = { displayName: name, photoURL: photo };

    updateUserProfile(profile)
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  };
  // Register modal code end


  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location in the login page", location);

  const googlelogInButtonClick = () => {
    setIsOpen(false);
    setIsOpenReg(false);
    googleSignIn(googleProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("User Google Login Successful", {
          position: "top-right",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const googlelogOutButtonClick = () => {
    logOutUser();
    navigate("/");
  };
  //Google authnication end

  //Github authintication start
  const gitHublogInButtonClick = () => {
    setIsOpen(false);
    setIsOpenReg(false);
    gitHubSignIn(githubProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("User Github Login Successful", {
          position: "top-right",
        });
        navigate("/");
      })
  }
  //Github authintication end

  return (
    <div className="bg-gray-200 px-4">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-xl text-black">
              <Link to={"/"}><li><a><img src="/images/home-icon.png"/>Home</a></li></Link>
              {
                user ? (
                  <>
                    <Link to={"/coursepage"}><li><a><img src="/images/course-icon.png"/>Courses</a></li></Link>
                  </>
                ) : (
                  <></>
                )
              }
            </ul>
          </div>
          <NavLink to={'/'}> <img
            src="/images/logo.png" className="w-16 h-16 rounded-xl" /></NavLink>
          <NavLink className="font-bold text-green-600 text-3xl from-neutral-content space-x-1 px-1" to={'/'}>Tech Skill Course</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-xl text-black">
            <Link to={"/"}><li><a><img src="/images/home-icon.png"/>Home</a></li></Link>
            {
              user ? (
                <>
                  <Link to={"/coursepage"}><li><a><img src="/images/course-icon.png"/>Courses</a></li></Link>
                </>
              ) : (
                <></>
              )
            }

          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? (
              <>
                <div className="flex items-center gap-2">
                  <img src={user?.photoURL || "/images/user.png"} className="w-7 rounded-full" />
                  <span>{user?.displayName || "No Name" }</span>
                  <button onClick={googlelogOutButtonClick} className="btn btn-outline btn-success">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="navbar gap-3 flex-col lg:flex-row space-x-4 flex justify-end sm:w-32">
                <Link className="btn btn-active btn-error text-cyan-100" onClick={toggleModal}>LogIn</Link>
                <Link className="btn btn-primary text-cyan-100" onClick={toggleModalReg}>Registration</Link>
              </div>
            )
          }
        </div>
      </div>

      {/* Login Modal */}
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Login Here</h2>
            <form onSubmit={handleSubmit} className="py-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={passwordLogin}
                  onChange={(e) => setPasswordLogin(e.target.value)}
                  placeholder="••••••••"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex flex-col py-1">
                <div className="py-2 flex justify-end">
                  <button type="submit" className="btn btn-error">Login</button>
                </div>
                <div className="flex flex-row space-x-3 py-2">
                  <button className="btn btn-secondary space-y-4" onClick={googlelogInButtonClick}>Login with google</button>
                  <button className="btn btn-warning space-y-4" onClick={gitHublogInButtonClick}>Login with GitHub</button>
                  <button onClick={toggleModalLoginClose} className="btn btn-outline">Close</button>
                </div>
              </div>
              <div>
                <span>Dont have an account?<NavLink className="text size-3 font-bold" onClick={toggleModalRegFromLoginPage}>Register</NavLink></span>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Login modal end */}

      {/* Register Modal start */}
      {isOpenReg && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Register Here</h2>
            <form onSubmit={handleSubmitReg} className="py-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your mobile no"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="modal-action">
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className="btn btn-secondary">Register</button>
                <button onClick={toggleModalRegClose} className="btn btn-outline">Close</button>
              </div>
              <div>
                <span>Already have an account?<NavLink className="text size-3 font-bold" onClick={toggleModal}>Login here</NavLink></span>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Register modal end */}

    </div>
  )
}

export default Header;

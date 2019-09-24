import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Login } from './components/login/loginComponent';
import SideNav from './components/sidebar/sideBar';
import '../src/components/sidebar/sideBar.scss';
import { authenticationService } from './_services/authService';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// Token interceptor
import '../src/_services/tokenIterceptor';
interface AuthModal {
  currentUser: any;
  location: string;
}
// const App: React.FC = () => {
//   const currentPath = window.location.pathname;
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div className="App">
//           <Route exact path='/login' component={Login} />
//           {!currentPath.includes('login') && <SideNav />}
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }
class App extends React.Component<{}, AuthModal> {
  public state: AuthModal;

  constructor(props: AuthModal) {
    super(props);
    this.state = {
      currentUser: null,
      location: ''
    };
    if (localStorage.getItem('currentUser')) {
      this.state.currentUser = localStorage.getItem('currentUser')
    }
  }
  componentDidMount = () => {
    authenticationService.currentUser.subscribe(data => this.setState({
      currentUser: data
    }))
  }
  logout = () => {
    authenticationService.logout();
    // <Redirect
    //   to={{
    //     pathname: "/login"
    //   }} />
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <ToastContainer />
        <BrowserRouter>
          <div className="App">
            <div>
              {currentUser &&
                <div>
                  {/* <Link to='/'></Link> */}
                  <SideNav />
                </div>
              }
            </div>
            {!currentUser &&
              <div>
                <Route exact path='/login' component={Login} />
                {
                  !currentUser ?  <Redirect to={{
                    pathname: "/login",
                  }} /> : null
                }
              </div>
            }
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;

import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/main/Main.component";
import alertify from "alertifyjs";
import ProtectedRoute from "./components/shared/ProtectedRouter";
import { LoaderAlt } from "./components/shared";

const Login = React.lazy(() => import("./containers/login/Login.container"));
const ResetPassword = React.lazy(() => import("./containers/resetPassword/ResetPassword.container"));
const Dashboard = React.lazy(() => import("./containers/dashboard/dashboard.container/dashboard.container"));
const Company = React.lazy(() => import("./containers/company/company.container/company.container"));
const CompanyDetail = React.lazy(() => import("./containers/company/companyDetail.container/companyDetail.container"));
const CompanyPaymentDetail = React.lazy(() =>
  import("./containers/company/companySource.container/companyPayment.container/companyPayment.container")
);
const CompanyMessageDetail = React.lazy(() =>
  import("./containers/company/companySource.container/companyMessage.container/companyMessage.container")
);
const CompanyEmailDetail = React.lazy(() =>
  import("./containers/company/companySource.container/companyEmail.container/companyEmail.container")
);
const Invoice = React.lazy(() => import("./containers/invoice/invoice.container/invoice.container"));
const Fee = React.lazy(() => import("./containers/settings/fee.container/fee.container"));
const General = React.lazy(() => import("./containers/settings/general.container/general.container"));
class App extends Component {
  componentDidMount() {
    Promise.all([
      import("bootstrap/dist/css/bootstrap.min.css"),
      import("jquery/dist/jquery.min"),
      import("bootstrap/dist/js/bootstrap.min"),
      import("date-input-polyfill"),
      import("@fortawesome/fontawesome-free/css/all.css"),
      import("./alertify.css"),
      import("@trendmicro/react-sidenav/dist/react-sidenav.css")
    ]);
  }

  render() {
    alertify.defaults.transition = "zoom";
    alertify.defaults.theme.ok = "btn btn-danger";
    alertify.defaults.theme.cancel = "btn btn-outline-secondary";
    alertify.defaults.theme.input = "form-control";
    const NoMatch = () => <Redirect to="/nomatch" />;
    return (
      <Suspense fallback={<LoaderAlt />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/reset" component={ResetPassword} />
          <Route exact path="/nomatch" component={Page404} />
          <Main>
            <Switch>
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <ProtectedRoute exact path="/company" component={Company} />
              <ProtectedRoute exact path="/company/detail/:realm_token" component={CompanyDetail} />
              <ProtectedRoute exact path="/company/detail/payment/:realm_token" component={CompanyPaymentDetail} />
              <ProtectedRoute exact path="/company/detail/message/:realm_token" component={CompanyMessageDetail} />
              <ProtectedRoute exact path="/company/detail/email/:realm_token" component={CompanyEmailDetail} />

              <ProtectedRoute exact path="/invoice" component={Invoice} />
              <ProtectedRoute exact path="/settings/fee" component={Fee} />
              <ProtectedRoute exact path="/settings/general" component={General} />
              {/* Start Of 404 Info */}
              <Route component={NoMatch} />
              {/* End Of 404 Info */}
            </Switch>
          </Main>
        </Switch>
      </Suspense>
    );
  }
}

function Page404(props) {
  return (
    <main style={styles.container} className="text-center">
      <img style={styles.imageContainer} src={`${process.env.PUBLIC_URL}/img/404/error404-head.png`} alt="error404" />
      <div className="d-flex mt-3">
        <img style={styles.imageContainerSub} src={`${process.env.PUBLIC_URL}/img/404/4.png`} alt="error404" />
        <img style={styles.imageContainerSub} src={`${process.env.PUBLIC_URL}/img/404/0.png`} alt="error404" />
        <img style={styles.imageContainerSub} src={`${process.env.PUBLIC_URL}/img/404/4.png`} alt="error404" />
      </div>
      <img
        style={styles.imageContainerText}
        src={`${process.env.PUBLIC_URL}/img/404/sorry.png`}
        alt="error404"
        className="mt-4"
      />
      <a className="btn hm-bg-darkblue text-white mt-4" href="/home">
        返回
      </a>
    </main>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "5vh auto",
    width: "300px",
    // height: '300px',
    overflowY: "auto"
  },
  imageContainer: {
    width: "300px",
    margin: "0 auto"
  },
  imageContainerSub: {
    width: "100px",
    margin: "0 auto",
    height: "10vh"
  },
  imageContainerText: {
    width: "300px",
    margin: "0 auto",
    height: "5vh"
  }
};

export default App;

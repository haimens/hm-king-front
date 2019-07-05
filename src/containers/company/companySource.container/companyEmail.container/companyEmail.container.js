import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompanyEmailDetail from "./companyEmail.component/companyEmailDetail.component";
import CompanyEmailDetailListItem from "./companyEmail.component/companyEmailList.item";
import CompanyEmailModal from "./companyEmail.component/companyEmail.modal";
import CompanyEmailUpdateModal from "./companyEmail.component/companyEmailUpdate.modal";
import {
  findCompanyDetail,
  findAllEmailResourceList,
  createAEmailMethod,
  updateAEmailMethod
} from "../../../../actions/company.action";
import { Header, ListView, ListHeader } from "../../../../components/shared";

class CompanyEmail extends Component {
  state = {
    showCreateEmailResource: false,
    showEditEmailResource: false,
    currEmailResource: ""
  };
  handleCreateEmailResource = () => {
    this.setState(states => ({ showCreateEmailResource: !states.showCreateEmailResource }));
  };

  handleUpdateEmailResource = (email_resource_token, currEmail) => {
    this.setState(states => ({
      showEditEmailResource: !states.showEditEmailResource,
      currEmailResource: {
        email_resource_token,
        currEmail
      }
    }));
  };

  async componentDidMount() {
    const { findAllEmailResourceList, match } = this.props;
    const { realm_token } = match.params;
    Promise.all([findAllEmailResourceList(realm_token)]);
  }
  handlePageChange = start => {
    this.props.findAllEmailResourceList({ start });
  };
  render() {
    const { company_detail, email_list, match, createAEmailMethod, updateAEmailMethod } = this.props;
    const { realm_token } = match.params;
    const { showCreateEmailResource, showEditEmailResource, currEmailResource } = this.state;
    return (
      <main>
        {showCreateEmailResource && (
          <CompanyEmailModal
            realm_token={realm_token}
            createAEmailMethod={createAEmailMethod}
            onClose={this.handleCreateEmailResource}
          />
        )}
        {showEditEmailResource && (
          <CompanyEmailUpdateModal
            realm_token={realm_token}
            updateAEmailMethod={updateAEmailMethod}
            currEmailResource={currEmailResource}
            onClose={this.handleUpdateEmailResource}
          />
        )}
        <section className="container-fluid">
          <div className="mb-4">
            <Header title="Company" subTitle={"Company Detail"} />
          </div>
          <div className="mb-4 ">
            <CompanyEmailDetail email_list={email_list} />
          </div>
          <div className="mb-4">
            <ListHeader
              parentProps={{
                title: "Email Resource List",
                clickFunction: this.handleCreateEmailResource,
                clickTitle: "Email Resource"
              }}
            />
            <ListView
              totalCount={email_list.count}
              title="Email List"
              fieldNames={["sendgrid api key", "sendgrid from_email", "Status", "edit"]}
              hideHeader={true}
              onPageChange={this.handlePageChange}
            >
              {email_list.record_list.map((email, index) => (
                <CompanyEmailDetailListItem
                  parentProps={email}
                  handleUpdateEmailResource={this.handleUpdateEmailResource}
                  key={index}
                />
              ))}
            </ListView>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    company_detail: state.companyReducer.company_detail,
    email_list: state.companyReducer.email_list
  };
};
const mapDispatchToProps = {
  findCompanyDetail,
  findAllEmailResourceList,
  createAEmailMethod,
  updateAEmailMethod
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyEmail));

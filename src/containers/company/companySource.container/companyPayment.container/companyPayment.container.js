import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompanyPaymentDetail from "./companyPayment.component/companyPaymentDetail.component";
import CompanyPaymentDetailListItem from "./companyPayment.component/companyPaymentList.item";
import CompanyPaymentModal from "./companyPayment.component/companyPayment.modal";
import CompanyPaymentUpdateModal from "./companyPayment.component/companyPaymentUpdate.modal";
import {
  findCompanyDetail,
  findAllPaymentResourceList,
  createAPaymentMethod,
  updateAPaymentMethod,
  setPrimaryForResources
} from "../../../../actions/company.action";
import { Header, ListView, ListHeader } from "../../../../components/shared";

class CompanyPayment extends Component {
  state = {
    showCreatePaymentResource: false,
    showEditPaymentResource: false,
    currPaymentResource: ""
  };
  handleCreatePaymentResource = () => {
    this.setState(states => ({ showCreatePaymentResource: !states.showCreatePaymentResource }));
  };

  handleUpdatePaymentResource = (payment_resource_token, currPayment) => {
    this.setState(states => ({
      showEditPaymentResource: !states.showEditPaymentResource,
      currPaymentResource: {
        payment_resource_token,
        currPayment
      }
    }));
  };

  async componentDidMount() {
    const { findAllPaymentResourceList, match } = this.props;
    const { realm_token } = match.params;
    Promise.all([findAllPaymentResourceList(realm_token)]);
  }
  handlePageChange = start => {
    this.props.findAllPaymentResourceList({ start });
  };
  render() {
    const {
      company_detail,
      payment_list,
      match,
      createAPaymentMethod,
      updateAPaymentMethod,
      setPrimaryForResources
    } = this.props;
    const { realm_token } = match.params;
    const { showCreatePaymentResource, showEditPaymentResource, currPaymentResource } = this.state;
    return (
      <main>
        {showCreatePaymentResource && (
          <CompanyPaymentModal
            realm_token={realm_token}
            createAPaymentMethod={createAPaymentMethod}
            onClose={this.handleCreatePaymentResource}
          />
        )}
        {showEditPaymentResource && (
          <CompanyPaymentUpdateModal
            realm_token={realm_token}
            updateAPaymentMethod={updateAPaymentMethod}
            currPaymentResource={currPaymentResource}
            onClose={this.handleUpdatePaymentResource}
          />
        )}
        <section className="container-fluid">
          <div className="mb-4">
            <Header title="Company" subTitle={"Company Detail"} />
          </div>
          <div className="mb-4 ">
            <CompanyPaymentDetail payment_resource_info={company_detail.payment_resource_info} />
          </div>
          <div className="mb-4">
            <ListHeader
              parentProps={{
                title: "Payment Resource List",
                clickFunction: this.handleCreatePaymentResource,
                clickTitle: "Payment Resource"
              }}
            />
            <ListView
              totalCount={payment_list.count}
              title="Company Admin List"
              fieldNames={["Square Application Id", "Square location id", "square access token", "Status", "edit"]}
              hideHeader={true}
              onPageChange={this.handlePageChange}
            >
              {payment_list.record_list.map((payment, index) => (
                <CompanyPaymentDetailListItem
                  parentProps={payment}
                  handleUpdatePaymentResource={this.handleUpdatePaymentResource}
                  setPrimaryForResources={setPrimaryForResources}
                  realm_token={realm_token}
                  isPrimary={
                    company_detail.payment_resource_info.payment_resource_token === payment.payment_resource_token
                  }
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
    payment_list: state.companyReducer.payment_list
  };
};
const mapDispatchToProps = {
  findCompanyDetail,
  findAllPaymentResourceList,
  createAPaymentMethod,
  updateAPaymentMethod,
  setPrimaryForResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyPayment));

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompanyMessageDetail from "./companyMessage.component/companyMessageDetail.component";
import CompanyMessageDetailListItem from "./companyMessage.component/companyMessageList.item";
import CompanyMessageModal from "./companyMessage.component/companyMessage.modal";
import CompanyMessageUpdateModal from "./companyMessage.component/companyMessageUpdate.modal";
import {
  findCompanyDetail,
  findAllMessageResourceList,
  createAMessageMethod,
  updateAMessageMethod,
  setPrimaryForResources
} from "../../../../actions/company.action";
import { Header, ListView, ListHeader } from "../../../../components/shared";

class CompanyMessage extends Component {
  state = {
    showCreateMessageResource: false,
    showEditMessageResource: false,
    currMessageResource: ""
  };
  handleCreateMessageResource = () => {
    this.setState(states => ({ showCreateMessageResource: !states.showCreateMessageResource }));
  };

  handleUpdateMessageResource = (message_resource_token, currMessage) => {
    this.setState(states => ({
      showEditMessageResource: !states.showEditMessageResource,
      currMessageResource: {
        message_resource_token,
        currMessage
      }
    }));
  };

  async componentDidMount() {
    const { findAllMessageResourceList, match } = this.props;
    const { realm_token } = match.params;
    Promise.all([findAllMessageResourceList(realm_token)]);
  }
  handlePageChange = start => {
    this.props.findAllMessageResourceList({ start });
  };
  render() {
    const {
      company_detail,
      message_list,
      match,
      createAMessageMethod,
      updateAMessageMethod,
      setPrimaryForResources
    } = this.props;
    const { realm_token } = match.params;
    const { showCreateMessageResource, showEditMessageResource, currMessageResource } = this.state;
    return (
      <main>
        {showCreateMessageResource && (
          <CompanyMessageModal
            realm_token={realm_token}
            createAMessageMethod={createAMessageMethod}
            onClose={this.handleCreateMessageResource}
          />
        )}
        {showEditMessageResource && (
          <CompanyMessageUpdateModal
            realm_token={realm_token}
            updateAMessageMethod={updateAMessageMethod}
            currMessageResource={currMessageResource}
            onClose={this.handleUpdateMessageResource}
          />
        )}
        <section className="container-fluid">
          <div className="mb-4">
            <Header title="Company" subTitle={"Message Detail"} />
          </div>
          <div className="mb-4 ">
            <CompanyMessageDetail message_resource_info={company_detail.message_resource_info} />
          </div>
          <div className="mb-4">
            <ListHeader
              parentProps={{
                title: "Message Resource List",
                clickFunction: this.handleCreateMessageResource,
                clickTitle: "Message Resource"
              }}
            />
            <ListView
              totalCount={message_list.count}
              title="Company Admin List"
              fieldNames={["Twilio Account Id", "Twilio Auth Id", "Twilio From Num", "Status", "edit"]}
              hideHeader={true}
              onPageChange={this.handlePageChange}
            >
              {message_list.record_list.map((message, index) => (
                <CompanyMessageDetailListItem
                  parentProps={message}
                  handleUpdateMessageResource={this.handleUpdateMessageResource}
                  setPrimaryForResources={setPrimaryForResources}
                  realm_token={realm_token}
                  isPrimary={
                    company_detail.message_resource_info.message_resource_token === message.message_resource_token
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
    message_list: state.companyReducer.message_list
  };
};
const mapDispatchToProps = {
  findCompanyDetail,
  findAllMessageResourceList,
  createAMessageMethod,
  updateAMessageMethod,
  setPrimaryForResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyMessage));

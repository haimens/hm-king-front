import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ListView, Header, ListHeader } from "../../../components/shared";
import { findInvoiceList } from "../../../actions/invoice.action";

class Invoice extends Component {
  handlePageChange = page => {
    console.log(page);
  };
  handlePageChange = start => {
    this.props.findInvoiceList({ start });
  };
  componentDidMount() {
    this.props.findInvoiceList();
  }
  render() {
    return (
      <main>
        <section className="container-fluid">
          <div className="mb-4">
            <Header title="Invoice" tabicon={"tabicon_invoice.svg"} />
          </div>
          <div className="mb-4">
            <ListHeader
              parentProps={{ title: "Invoice List", clickFunction: this.handleAddCompanyModal, clickTitle: "Invoice" }}
              hideButton={true}
            />
            <ListView
              totalCount={30}
              title="Invoice List"
              fieldNames={["Created On", "Company Name", "Invoice Number", "Amount", "Status"]}
              hideHeader={true}
              onPageChange={this.handlePageChange}
            >
              {/* {company_list.record_list.map((company, index) => (
            <InvoiceListItem parentProps={company} key={index} onClick={this.handleCompanyItemClick} />
          ))} */}
            </ListView>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    invoice_list: state.invoiceReducer.invoice_list
  };
};

const mapDispatchToProps = { findInvoiceList };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Invoice));

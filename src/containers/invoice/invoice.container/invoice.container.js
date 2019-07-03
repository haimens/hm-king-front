import React, { Component } from "react";
import { ListView, Header, ListHeader } from "../../../components/shared";

class Invoice extends Component {
  handlePageChange = page => {
    console.log(page);
  };
  render() {
    return (
      <main>
        <section className="container-fluid">
          <Header title="Invoice" />
          <ListHeader
            parentProps={{ title: "Invoice List", clickFunction: this.handleAddCompanyModal, clickTitle: "Invoice" }}
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
        </section>
      </main>
    );
  }
}
export default Invoice;

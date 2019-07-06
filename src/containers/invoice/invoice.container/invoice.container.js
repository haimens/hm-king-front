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
          <div className="mb-4">
            <Header title="Invoice" tabicon={"tabicon_invoice.svg"} />
          </div>
          <div className="mb-4">
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
          </div>
        </section>
      </main>
    );
  }
}
export default Invoice;

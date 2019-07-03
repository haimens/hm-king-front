import React, { Component } from "react";
import InvoiceAddingModal from "./invoice.component/invoiceAdding.modal";
import { ListView } from "../../../components/shared";

class Invoice extends Component {
  handlePageChange = page => {
    console.log(page);
  };
  render() {
    return (
      <main>
        <div className="container-fluid">
          <section className="mb-4">
            <div className="d-flex align-items-center mb-4 text-white">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon_company.svg`}
                height={18}
                width={17}
                alt="company"
                className="hm-header-size mr-3"
              />
              <h4 className="hm-header-size">Invoice</h4>
            </div>
          </section>

          <div className="rounded-top shadow-sm bg-white">
            <section className="d-flex justify-content-between  p-3 shadow-sm" style={{ height: "65px" }}>
              <h6 className="d-block d-flex align-items-center hm-title-sub-size text-main-color font-weight-bold ml-3">
                Invoice List
              </h6>
              <button
                className="text-white button-main-background btn shadow p-0 hm-text-12"
                onClick={this.handleAddCompanyModal}
                style={{
                  height: "28px",
                  width: "98px"
                }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-plus mr-2" />
                  <div>Invoice</div>
                </div>
              </button>
            </section>
          </div>
          <ListView
            totalCount={30}
            title="Company List"
            fieldNames={["Company Logo", "Created On", "Company Name", "Status", "Detail"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {/* {company_list.record_list.map((company, index) => (
            <InvoiceListItem parentProps={company} key={index} onClick={this.handleCompanyItemClick} />
          ))} */}
          </ListView>
        </div>
      </main>
    );
  }
}
export default Invoice;

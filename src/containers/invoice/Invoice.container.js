import React, { Component } from "react";
import ListView from "../../components/shared/ListView";
import InvoiceListItem from "./Invoice.component/InvoiceList.item";
class Invoice extends Component {
  handlePageChange = page => {
    console.log(page);
  };
  render() {
    return (
      <main>
        <section>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Invoice List</h4>
          </div>
          <ListView
            totalCount={30}
            title="收款记录列表"
            fieldNames={["Created On", "Last Updated", "Invoice Token", "Company Name", "Amount", "Receipt", "Status"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {/* {punch_list_in_puri.record_list.map((punch, index) => (
              <InvoiceListItem parentProps={punch} key={index} onClick={this.handlePunchItemClick} />
            ))} */}
          </ListView>
        </section>
      </main>
    );
  }
}
export default Invoice;

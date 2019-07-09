import React, { Component } from "react";
import { Modal } from "../../../../components/shared";
import { parseAmount } from "../../../../actions/utilities.action";
import alertify from "alertifyjs";
class CompanyInvoice extends Component {
  state = {
    amount: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleAddingInvoiceInACompany = () => {
    const { realm_token } = this.props;
    const { amount } = this.state;
    if (amount !== "" && !isNaN(amount)) {
      this.props.createAInvoiceInCompany(realm_token, { amount: amount * 100 });
      this.handleClose();
    } else {
      alertify.alert("Error!", "Please Finish The Form and Input Correct Value!");
    }
  };

  render() {
    const { sum, name } = this.props;
    const { amount } = this.state;
    return (
      <Modal
        title="Add Invoice"
        onClose={this.handleClose}
        position="center"
        getWidth={"467px"}
        getHeight={"420px"}
        zIndex="3"
      >
        <div className="container">
          <div className="p-3">
            <div className="form-group pt-3">
              <label className="text-secondary-color font-weight-500 hm-text-14" htmlFor="company_name">
                Company
              </label>
              <div className="hm-text-14 font-weight-bold">{name}</div>
            </div>

            <div className="form-group pt-3">
              <label className="text-secondary-color font-weight-500 hm-text-14" htmlFor="company_name">
                Available Balance
              </label>
              <div className="hm-text-14 font-weight-bold">{parseAmount(sum)}</div>
            </div>

            <div className="input-group my-3 ">
              <input
                type="number"
                className="form-control hm-input-height border-right-0"
                id="amount"
                value={amount}
                placeholder="Invoice Amount"
                onChange={this.handleInputChange}
              />
              <div className="input-group-append">
                <span className="input-group-text hm-input-height border-left-0 bg-white">.00</span>
              </div>
            </div>

            <div className="form-group text-right pt-3">
              <button
                className="button-main-background btn button-main-size px-4 text-white mr-3"
                onClick={this.handleAddingInvoiceInACompany}
              >
                Add
              </button>
              <button onClick={this.handleClose} className="btn button-main-size btn-outline-secondary px-4">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default CompanyInvoice;

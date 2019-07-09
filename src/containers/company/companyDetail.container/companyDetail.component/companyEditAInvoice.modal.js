import React, { Component } from "react";
import { Modal } from "../../../../components/shared";
class CompanyEditAInvoice extends Component {
  state = {
    receipt: "",
    status: 1,
    invoice_token: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleEditInvoiceInACompany = async () => {
    const { realm_token, updateAInvoiceInCompany } = this.props;
    const { receipt, status, invoice_token } = this.state;
    console.log(status);
    updateAInvoiceInCompany(realm_token, invoice_token, { receipt, status });
    this.handleClose();
  };

  async componentDidMount() {
    const { receipt, status, invoice_token } = this.props.editInfo;
    await this.setState({ receipt: receipt ? receipt : "N/A", status, invoice_token });
  }

  render() {
    const { receipt, status } = this.state;
    return (
      <Modal
        title="Update Invoice"
        onClose={this.handleClose}
        position="center"
        getWidth={"467px"}
        getHeight={"370px"}
        zIndex="3"
      >
        <div className="container">
          <div className="p-3">
            <div className="form-group pt-3">
              <input
                type="text"
                className="form-control hm-input-height"
                id="receipt"
                placeholder="Receipt"
                value={receipt}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="input-group form-group pt-3">
              <select
                className="custom-select hm-input-height"
                id="status"
                value={status}
                onChange={this.handleInputChange}
              >
                <option value="1">Pending</option>
                <option value="2">Waiting</option>
                <option value="3">Finished</option>
              </select>
            </div>

            <div className="form-group text-right pt-3">
              <button
                className="button-main-background btn button-main-size px-4 text-white mr-3"
                onClick={this.handleEditInvoiceInACompany}
              >
                Update
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

export default CompanyEditAInvoice;

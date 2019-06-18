import React, { Component } from "react";

export default class CompanyDetailInfo extends Component {
  state = {
    showAddCompanyModal: false,
    company_name: "",
    company_address: "",
    company_title: "",
    fee_rate: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  render() {
    const { company_name, company_address, company_title, fee_rate } = this.state;

    return (
      <section>
        <div className="mb-3">
          <h4>Company Detail</h4>
          <div className="container-fluid shadow-sm my-3">
            <div className="row rounded">
              <div className="col-6 bg-white p-4 ">
                <div className="form-group">
                  <label htmlFor="company_name">Company Name</label>
                  <input
                    className="form-control"
                    name="company_name"
                    id="company_name"
                    value={company_name}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company_title">Realm Token</label>
                  <input
                    type="cell"
                    className="form-control"
                    name="company_title"
                    id="company_title"
                    value={company_title}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company_address">Company Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="company_address"
                    id="company_address"
                    value={company_address}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company_title">Company Title</label>
                  <input
                    type="cell"
                    className="form-control"
                    name="company_title"
                    id="company_title"
                    value={company_title}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fee_rate">Fee Rates</label>
                  <input
                    type="cell"
                    className="form-control"
                    name="fee_rate"
                    id="fee_rate"
                    value={fee_rate}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="row">
                  <div className="col-2">Status:</div>
                  <div className="col-9">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        Active
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 bg-white p-4 ">
                <div className="form-group">
                  <label htmlFor="company_name">Company Name</label>
                  <input
                    className="form-control"
                    name="company_name"
                    id="company_name"
                    value={company_name}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company_address">Company Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="company_address"
                    id="company_address"
                    value={company_address}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company_title">Company Title</label>
                  <input
                    type="cell"
                    className="form-control"
                    name="company_title"
                    id="company_title"
                    value={company_title}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fee_rate">Fee Rates</label>
                  <input
                    type="cell"
                    className="form-control"
                    name="fee_rate"
                    id="fee_rate"
                    value={fee_rate}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="col-12 bg-white p-2 pr-4 ">
                <div className="form-group text-right bg-white">
                  <button className="hm-bg-green btn btn-sm px-4 text-white mr-3">Add</button>
                  <button onClick={this.handleCancel} className="btn btn-sm btn-outline-secondary px-4">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

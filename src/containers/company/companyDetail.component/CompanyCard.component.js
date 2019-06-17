import React, { Component } from "react";

export default class CompanyCard extends Component {
  render() {
    const { title, sub_title, sub_title_2, sub_title_3 } = this.props.parentProps;
    return (
      <section className="my-3">
        <h4>{title}</h4>
        <div className="container-fluid shadow-sm my-3">
          <div className="row rounded bg-white p-3">
            <div className="col-6 bg-white ">
              <div className="form-group">
                <label htmlFor="company_name">{sub_title}</label>
                <input
                  className="form-control"
                  name="company_name"
                  id="company_name"
                  value={123}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="col-6 bg-white ">
              <div className="form-group">
                <label htmlFor="company_title">{sub_title_2}</label>
                <input
                  type="cell"
                  className="form-control"
                  name="company_title"
                  id="company_title"
                  value={321}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            {sub_title_3 && (
              <div className="col-6 bg-white ">
                <div className="form-group">
                  <label htmlFor="company_title">{sub_title_3}</label>
                  <input
                    type="cell"
                    className="form-control"
                    name="company_title"
                    id="company_title"
                    value={321}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            )}
            <div className="col-12 bg-white ">
              <div className="form-group text-right bg-white">
                <button className="hm-bg-green btn btn-sm px-4 text-white mr-3">Save</button>
                <button onClick={this.handleCancel} className="btn btn-sm btn-outline-secondary px-4">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

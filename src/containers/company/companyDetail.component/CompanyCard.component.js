import React, { Component } from "react";

export default class CompanyCard extends Component {
  state = {
    input_first: "",
    input_second: "",
    input_third: ""
  };
  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  render() {
    const { title, sub_title, sub_title_2, sub_title_3 } = this.props.parentProps;
    const { input_first, input_second, input_third } = this.state;
    return (
      <section className="my-3">
        <h4>{title}</h4>
        <div className="container-fluid shadow-sm my-3">
          <div className="row rounded bg-white p-3">
            <div className="col-6 bg-white ">
              <div className="form-group">
                <label htmlFor="input_first">{sub_title}</label>
                <input
                  className="form-control"
                  name="input_first"
                  id="input_first"
                  value={input_first}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="col-6 bg-white ">
              <div className="form-group">
                <label htmlFor="input_second">{sub_title_2}</label>
                <input
                  type="cell"
                  className="form-control"
                  name="input_second"
                  id="input_second"
                  value={input_second}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            {sub_title_3 && (
              <div className="col-6 bg-white ">
                <div className="form-group">
                  <label htmlFor="input_third">{sub_title_3}</label>
                  <input
                    type="cell"
                    className="form-control"
                    name="input_third"
                    id="input_third"
                    value={input_third}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            )}
            <div className="col-12 bg-white ">
              <div className="form-group text-right bg-white">
                <button className="hm-bg-green btn btn-sm px-4 text-white hm-3">Save</button>
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

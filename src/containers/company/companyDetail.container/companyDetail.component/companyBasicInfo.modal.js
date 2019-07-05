import React, { Component } from "react";
import { Modal, GAutoComplete } from "../../../../components/shared";
import alertify from "alertifyjs";
export default class CompanyAdmin extends Component {
  state = {
    company_name: "",
    company_title: "",
    logo_path: "",
    icon_path: "",
    addr_str: "",
    status: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleShowImage = () => {
    this.setState(states => ({ showImage: !states.showImage }));
  };

  handleClose = () => {
    this.props.onClose();
  };
  handleImageUpload = img_path => {
    this.setState({ img_url: img_path });
  };
  saveToAddress = address => {
    console.log(address);
  };
  handleAddingCompanyAdmin = () => {
    const { username, name, cell, email, area } = this.state;
    const { realm_token, createALord } = this.props;
    if (username !== "" && name !== "" && cell !== "" && email !== "" && area !== "") {
      createALord(realm_token, {
        username,
        name,
        cell: `${area} ${cell}`,
        email
      });
      this.handleClose();
    } else {
      alertify.alert("Error!", "Please Finished The Form!");
    }
  };

  componentDidMount() {
    const { basic_info, address_info } = this.props.company_detail;
    this.setState({
      company_name: basic_info.company_name,
      company_title: basic_info.company_title,
      addr_str: address_info.addr_str
    });
  }

  render() {
    const { company_name, company_title, addr_str, logo_path, icon_path, status } = this.state;
    return (
      <div>
        <Modal
          title="Add Company Admin"
          onClose={this.handleClose}
          position="center"
          getWidth={"467px"}
          getHeight={"500px"}
          zIndex="3"
        >
          <div className="container">
            <div className="p-3">
              <div className="form-group pt-3">
                <input
                  type="text"
                  className="form-control hm-input-height"
                  name="company_name"
                  placeholder="Company Name"
                  id="company_name"
                  value={company_name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <GAutoComplete defaultValue={addr_str} getGoogleAddress={this.saveToAddress} />
              </div>

              <div className="form-group input-group">
                <input
                  type="text"
                  className="form-control hm-input-height "
                  id="company_title"
                  placeholder="Company Title"
                  value={company_title}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group text-right pt-3">
                <button
                  className="button-main-background btn button-main-size px-4 text-white mr-3"
                  onClick={this.handleAddingCompanyAdmin}
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
      </div>
    );
  }
}

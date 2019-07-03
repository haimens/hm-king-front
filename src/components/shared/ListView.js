import React, { Component } from "react";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import NoRecord from "./NoRecord";
import ImageButton from "./ImageButton";
import "./ImageButton";
import "./ListView.css";

/**
 * ListView
 * @onPageChange (already proper format)
 * @title
 * @fieldnames [title of arr]
 * @showAll show all
 * @onSearch
 * @hideHeader
 */
class ListView extends Component {
  state = {
    isLess: true
  };

  handlePageChange = page => {
    if (this.props.onPageChange) this.props.onPageChange(page);
  };

  handleSubmit = keywords => {
    if (this.props.onSearch) this.props.onSearch(keywords);
  };

  handleClear = () => {
    if (this.props.onSearch) this.props.onSearch(null);
  };

  showMore = () => {
    this.setState(states => ({ isLess: !states.isLess }));
  };

  renderList = (list = []) => {
    if (!this.props.totalCount) {
      const cols = this.props.fieldNames.length;
      return <NoRecord howManyCol={cols} />;
    }
    return list.map(item => item);
  };

  async componentDidMount() {
    if (this.props.showAll) this.setState({ isLess: false });
  }

  render() {
    /** @data field
     * {fieldNames, color} = props
     */
    const renderFieldNames = (names = []) => {
      return names.map((name, key) => (
        <th scope="col" key={key} className="text-secondary-color text-left custom-text">
          {name}
        </th>
      ));
    };

    return (
      <div className="table-responsive rounded shadow-sm bg-white">
        {!this.props.hideHeader && (
          <section
            className="d-flex justify-content-between 
        p-3 border-bottom shadow-sm"
            style={{ height: "65px" }}
          >
            <h6 className="d-block d-flex align-items-center hm-title-sub-size text-main-color font-weight-bold">
              {this.props.title}
            </h6>
            {this.props.onSearch && (
              <div>
                <SearchBar
                  placeholder={this.props.placeholder || "search"}
                  name="search"
                  onSubmit={this.handleSubmit}
                  onClearClick={this.handleClear}
                />
              </div>
            )}
          </section>
        )}
        <table className="table mb-0">
          <thead>
            <tr style={{ backgroundColor: "#f7f9fc" }}>{renderFieldNames(this.props.fieldNames)}</tr>
          </thead>
          <tbody className="hm-break-word">{this.renderList(this.props.children)}</tbody>
        </table>
        <div className="d-flex flex-column shadow-sm border p-2">
          {<Pagination onPageChange={this.handlePageChange} count={this.props.totalCount} />}
        </div>
      </div>
    );
  }
}

export default ListView;

import React from "react";
import { connect } from "react-redux";
import { LoaderAltNoModal } from "./index";
import "./RequireLoading.css";

/**
 * @forceHeight
 */
class RequireLoading extends React.Component {
  render() {
    let minHeightStyle = this.props.forceHeight
      ? { minHeight: this.props.forceHeight }
      : {};
    return (
      <main className="requireLoading-container">
        {this.props.isLoading ? (
          <section style={{ ...minHeightStyle }}>
            <LoaderAltNoModal />
          </section>
        ) : (
          <section>{this.props.children}</section>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.loadReducer.loading
  };
};

export default connect(mapStateToProps)(RequireLoading);

import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    //
    return { hasErrored: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasErrored: false };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
          <ErrorImageText>This page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

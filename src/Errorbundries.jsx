import React from "react";
import Errorpage from "./components/Errorpage";





class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);

    }
  
    render() {
      if (this.state.hasError) {
        console.log('we got him')
        return <p>something went wroung</p>
      }
  
      return this.props.children ; 
    }
  }

  export default ErrorBoundary
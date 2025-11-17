import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Higher-Order Component to provide navigate prop to class components
 * This is a workaround for React Router v6 which removed the history prop
 * 
 * Usage:
 * export default withNavigate(YourClassComponent);
 * 
 * Then use: this.props.navigate('/path') instead of this.props.history.push('/path')
 */
export const withNavigate = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

export default withNavigate;

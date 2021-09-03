import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <h2>I am a page component</h2>
      <h3> {cool} </h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  // any PropTypes of Children, render it all
  children: PropTypes.any,
  // children: PropTypes.oneOf([
  //   PropTypes.arrayOf(PropTypes.node), // Take an array of nodes
  //   PropTypes.node, // Take a Single node
  // ]),
};

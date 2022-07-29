// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
export const Main = ({ children }) => {
  //   const handleClick = () => {
  //     toast.error('Wow, cool!');
  //   };
  return (
    <main className="container-fluid">
      <div className="row">{children}</div>
    </main>
  );
};
Main.propTypes = {
  children: PropTypes.node.isRequired,
};

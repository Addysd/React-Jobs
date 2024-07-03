import { ClipLoader } from "react-spinners"
import PropTypes from 'prop-types';
const override={
    display:'block',
    margin:'100px auto'
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader
    color='#4339ca'
    loading={loading}
    cssOverride={override}
    size={150}/>
  )
}
Spinner.propTypes={
    loading:PropTypes.bool,
};
export default Spinner
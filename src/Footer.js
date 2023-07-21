import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { redAction } from './actions/redAction';
import { greenAction } from './actions/greenAction';
function Footer(props) {
  console.log(props)
  return (
    <div className="App" style={{backgroundColor:props.colorname}}>
      <h1>theme is  : {props.colorname}</h1>
     
    </div>
  );
}

const statetoprops=state=>({...state});
const dispatchtoprops = dispatch =>({
  redAction:()=>dispatch(redAction),
  greenAction:()=>dispatch(greenAction)
})

export default connect(statetoprops,dispatchtoprops) (Footer);

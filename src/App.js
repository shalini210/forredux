import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { redAction } from './actions/redAction';
import { greenAction } from './actions/greenAction';

import Footer from './Footer';
import {useSelector,useDispatch} from 'react-redux';
import { red,green ,yellow} from './coloroptions/redSlice';
import Bankaccount from './Bankaccount';
export default function App()
{
  const color = useSelector((state)=>state.color.colorname);
  const size = useSelector((state)=>state.color.fs)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Bankaccount></Bankaccount>
      <h1>*******************************************</h1>
<h1> redux using toolkit</h1>
<h2 style={{backgroundColor:color,fontSize:size}}>current value of color is : {color}</h2>
<input type="button" value="to red" onClick={()=>dispatch(red())}/>
<input type="button" value="to green" onClick={()=>dispatch(green())}/>
<input type="button" value="to yellow" onClick={()=>dispatch(yellow())}/>
    </div>
  )
}
// function App(props) {
//   console.log(props)
//   return (
//     <div className="App">
//       <h1> colorname is : {props.colorname}</h1>
//      <input  type="button" value="to red" onClick={props.redAction}/>
//      <input  type="button" value="to green" onClick={props.greenAction}/>
//      <Footer></Footer>
//     </div>
//   );
// }

// const statetoprops=state=>({...state});
// const dispatchtoprops = dispatch =>({
//   redAction:()=>dispatch(redAction),
//   greenAction:()=>dispatch(greenAction)
// })

// export default connect(statetoprops,dispatchtoprops) (App);

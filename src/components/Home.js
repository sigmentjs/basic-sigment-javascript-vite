
import './sigments/sigments.js';

function Home()  {

  return div({id:"home"},
    
    h1('Hello from Sigment',
    br(),
    span('   +Vite')),
    div({class:"examples"},
      div(
        a({href:"http://localhost:3000/counter"},"Counter Example State")
      ),
      div(
        a({href:"http://localhost:3000/hello"},"Add Sigment Hello Example")
      )
    ),
 
  );

}

export default Home;
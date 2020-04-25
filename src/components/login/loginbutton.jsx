import React from 'react';

function Button() {
  return (
<label className='login-button'>
 {/* <input type='checkbox'/> */}
	 <span className='back'>
		<span className='toggle'></span>
 		<span className='label on'>LOGIN</span>
		<span className='label off'>SIGN UP</span>  
	</span>
</label>
  );
}



export default Button;
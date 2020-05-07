import React from 'react';

function Button() {
  /* This function creates the login-signup flipping buttons
  that are displayed on the top of the login/signup cart. */
  return (
<label className='login-button'>
	 <span className='back'>
		<span className='toggle'></span>
 		<span className='label on'>LOGIN</span>
		<span className='label off'>SIGN UP</span>  
	</span>
</label>
  );
}



export default Button;
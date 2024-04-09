import {auth , provider} from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';

export const Auth = () =>{
     const SignInWithGoogle = async () =>{
        await signInWithPopup(auth , provider);
     };

     return (
        <div className='Auth'>
              <p>Sign In With Google To Continue</p>
              <button onClick={SignInWithGoogle}>Sign In</button>
        </div>
     );
};
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response)
    };

    return (
        <>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </>
    );
};

export default SignIn
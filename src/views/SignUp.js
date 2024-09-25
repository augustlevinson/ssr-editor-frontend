import SignUpForm from "../components/SignUpForm";

function SignUp() {
    return (
        <div className="main">
            <div className="wrapper">
                < SignUpForm />
                <a href="/signin">Redan medlem? Logga in</a>
            </div>
        </div>
    );
}

export default SignUp;

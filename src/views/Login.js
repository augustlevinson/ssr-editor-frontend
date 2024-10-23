import LoginForm from "../components/LoginForm";

function Login({ updateUserStatus }) {
    return (
        <div className="main">
            <div className="wrapper">
                < LoginForm updateUserStatus={updateUserStatus} />
            </div>
        </div>
    );
}

export default Login;

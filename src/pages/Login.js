export default function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default function Register() {
  return (
    <div className="container">
      <h2>Register</h2>
      <form className="form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Create Account</button>
      </form>
    </div>
  );
}

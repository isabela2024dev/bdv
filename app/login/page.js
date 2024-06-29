export default function login() {
  return (
    <div className="main-container">
      <div className="col-xs-12">
        <div className="detalles-container">
          <h2>Login</h2>
          <hr style={{ width: "100%", borderTop: "1px solid #5c5c5c" }} />
          <form action="" method="POST" className="">
            <div className="content-select">
              <div className="group">
                <input name="username" id="username" type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Usuario</label>
              </div>
              <div className="group">
                <input name="password" id="password" type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Contraseña</label>
              </div>
              <button
                type="submit"
                style={{ padding: "15px 0" }}
                className="button_slide slide_inside"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

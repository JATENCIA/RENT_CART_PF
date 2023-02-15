import { useEffect, useContext } from "react";

export function MPButton() {
  // aqui se recibe el body

  useEffect(() => {
    const fetchCheckout = async () => {
      const res = await fetch("/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // aqui se manda la data recibida en el body
        }),
      });
      const data = await res.json();

      if (data) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.setAttribute("data-preference-id", data.id);
        document.body.appendChild(script);

        const mp = new window.MercadoPago(
          process.env.NEXT_PUBLIC_MP_PUBLIC_KEY,
          {
            locale: "es-AR",
          }
        );

        mp.checkout({
          preference: {
            id: data.global,
          },
          render: {
            container: ".cho-container",
            label: "GO PAY",
          },
        });
      }
    };

    fetchCheckout();
  }, []);

  return <div className="cho-container"></div>;
}

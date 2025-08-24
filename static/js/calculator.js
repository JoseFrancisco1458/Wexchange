document.getElementById("calcForm").addEventListener("submit", async function(e) {
  e.preventDefault(); // Evita recargar la página

  const action = document.getElementById("action").value;
  const currency = document.getElementById("currency").value;
  const amount = document.getElementById("amount").value;

  const response = await fetch("/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: action,
      currency: currency,
      amount: amount
    })
  });

  const data = await response.json();
  document.getElementById("result").innerText = data.message; // Mostrar resultado
});

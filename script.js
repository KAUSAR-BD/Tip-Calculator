const calculateTip = () => {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const tipAmount = parseFloat(document.getElementById("tipAmount").value);

  if (isNaN(billAmount) || isNaN(tipAmount)) {
    document.getElementById("tipResult").innerText =
      "Please, Enter valid number.";

    return;
  }

  const calculateTipAmount = (billAmount * tipAmount) / 100;
  const totalTipAmount = billAmount + calculateTipAmount;

  document.getElementById("tipResult").innerHTML = `
  <p>Tip Amount: $${calculateTipAmount.toFixed(2)}</p>
  <p>Tip Amount: $${totalTipAmount.toFixed(2)}</p>
  `;
  
};

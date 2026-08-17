const calculateTip = () => {
  const billAmount = parseInt(document.getElementById("billAmount").value);
  const tipAmount = parseInt(document.getElementById("tipAmount").value);

  if (isNaN(billAmount || isNaN(tipAmount))) {
    document.getElementById("tipResult").innerText =
      "Please, Enter valid number.";

    return;
  }

  const calculateTipAmount = Math.ceil((billAmount * tipAmount) / 100);
  const totalTipAmount = billAmount + calculateTipAmount;

  document.getElementById("tipResult").innerHTML = `
  <p>Tip Amount: ${calculateTipAmount}</p>
  <p>Tip Amount: ${totalTipAmount}</p>
  `;
  console.log(calculateTipAmount);
  console.log(totalTipAmount);
};

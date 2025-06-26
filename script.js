function calcularFee() {
    // Obtener los valores del input
    const gasLimit = parseFloat(document.getElementById('gasLimit').value);
    const gasPrice = parseFloat(document.getElementById('gasPrice').value);
    const ethPrice = parseFloat(document.getElementById('ethPrice').value);
  
    // Validar que todos los campos tengan valor válido
    if (isNaN(gasLimit) || isNaN(gasPrice) || isNaN(ethPrice)) {
      document.getElementById('resultado').innerText = 'Por favor completa todos los campos.';
      return;
    }
  
    // Cálculo del fee
    const totalGwei = gasLimit * gasPrice;
    const totalEth = totalGwei / 1e9; // Convertir Gwei a ETH
    const totalUsd = totalEth * ethPrice;
  
    // Mostrar resultados
    document.getElementById('resultado').innerHTML = `
      🔹 <b>Fee en ETH:</b> ${totalEth.toFixed(6)} ETH<br>
      💲 <b>Fee estimado en USD:</b> $${totalUsd.toFixed(2)}
    `;
  }
  
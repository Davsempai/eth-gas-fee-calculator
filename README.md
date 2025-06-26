
# ETH Gas Fee Calculator 🔥

Esta es una aplicación web simple que permite calcular el costo aproximado de una transacción en la red de Ethereum.

## 🚀 Funcionalidades

- Introducir el `gas usado`, el `precio del gas (en Gwei)` y el `precio actual de ETH (en USD)`
- Calcular automáticamente:
  - Fee total en ETH
  - Fee total estimado en USD

## 🧠 Fórmula utilizada

```
fee_eth = (gasLimit × gasPrice) / 1e9
fee_usd = fee_eth × ethPrice
```

## 🛠️ Tecnologías utilizadas

- HTML
- CSS
- JavaScript puro (sin frameworks)
- [Remix IDE](https://remix.ethereum.org) para futuros contratos

## 📦 Cómo usarlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/eth-gas-fee-calculator
   ```
2. Abre `index.html` en tu navegador.
3. Ingresa los datos y presiona **Calcular**.

## 🧪 Ejemplo

Con estos valores:

- Gas usado: `21000`
- Gas price: `50` Gwei
- ETH price: `$3500`

Obtendrás:

- Fee en ETH: `0.00105`
- Fee en USD: `$3.68`

## 📌 Nota

Este proyecto es educativo y no se conecta aún a la red Ethereum ni utiliza una API para el precio real del ETH.

## 🧑‍💻 Autor

Desarrollado por Aku Dark – Ingeniero en Ciencias Informáticas, en formación como desarrollador blockchain junior.

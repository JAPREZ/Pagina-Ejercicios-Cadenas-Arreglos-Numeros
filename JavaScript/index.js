class Numeros{
    vuelto(){
      let dinero = document.getElementById("dinero").value
      dinero = parseFloat(dinero)
      let precio = document.getElementById("precio").value
      precio = parseFloat(precio)
      let resp = document.getElementById("resp")
      const iva = document.getElementById("checkbox");
      
      if (iva.checked){
        resp = (dinero - precio)
        let precioIva = resp - (resp * 0.12)
        document.getElementById("resp").textContent = `Su vuelto es de ${precioIva} $ . Se aplicó un 12% de IVA.`
      }else if (dinero == precio){
          document.getElementById("resp").textContent = `No hay vuelto.`
      }else if (dinero > precio) {
          resp = (dinero - precio)
          document.getElementById("resp").textContent = `Su vuelto es de ${resp} $. No se aplicó IVA. `
      }else{
          document.getElementById("resp").textContent = `Dinero ingresado no es suficiente para pagar el monto.`
      }

    }

    multiplo(){
      let num = document.getElementById("num").value
      num = parseInt(num)
      let multi = document.getElementById("multi").value
      multi = parseInt(multi)
      let resp = document.getElementById("resp")
      //console.log(resp.textContent)
      console.log(num,multi)
      if (num % multi == 0){
          resp.textContent=`${num} Es múltiplo de ${multi} .`
          //console.log(multi, " Es multiplo de ",num)
      }else{
          resp.textContent=`${num} No es mútiplo de ${multi} .`
      }
    }

    divisores(){
      let num = document.getElementById("num").value
      num = parseFloat(num)

      let resp = []
      

      for (let i = 1; i < num; i++) {
          if (num % i === 0) {
            resp.push(i);
          }
        }
      document.getElementById("resp").textContent = `Los divisores de ${num} son: ${resp} `
    }
        
    sumaDivisores(){
      let num = document.getElementById("num").value
      num = parseFloat(num)
      let suma = 0
      let resp = []

      for (let i = 1; i < num; i++) {
          if (num % i === 0) {
            resp.push(i);
          }
        }
    
      for (let i = 0; i < resp.length; i++) {
          suma += resp[i];
        }
      document.getElementById("resp").textContent = `La suma de los divisores de ${num} es: ${suma} `
    }

    cantidadDivisores(){
      let num = document.getElementById("num").value
      num = parseFloat(num)

      let resp = []

      for (let i = 1; i < num; i++) {
          if (num % i === 0) {
            resp.push(i);
          }
        }
      let cantidad = resp.length
      document.getElementById("resp").textContent = `La cantidad de divisores de ${num} es: ${cantidad}`
    }

    perfecto(){
      let num = document.getElementById("num").value
      num = parseFloat(num)
      let suma = 0
      let resp = []

      for (let i = 1; i <= num; i++) {
          if (num % i === 0) {
            resp.push(i)
          }
        }
    
      for (let i = 0; i < resp.length; i++) {
          suma = suma + resp[i];
        }
      
      if (suma - num == num){
          document.getElementById("resp").textContent = `El número ${num} es perfecto.`
      } else {
          document.getElementById("resp").textContent = `El número ${num} no es perfecto.`
      }
        
    }

    amigos(){
      let num1 = document.getElementById("num1").value
      num1 = parseInt(num1)
      let num2 = document.getElementById("num2").value
      num2 = parseInt(num2)
      let suma1 = 0
      let resp1 = []
      let suma2 = 0
      let resp2 = []

      for (let i = 1; i < num1; i++) {
          if (num1 % i === 0) {
            resp1.push(i);
          }
        }
    
      for (let i = 0; i < resp1.length; i++) {
          suma1 += resp1[i];
        }
        
      for (let i = 1; i < num2; i++) {
        if (num2 % i === 0) {
          resp2.push(i);
        }
      }
  
      for (let i = 0; i < resp2.length; i++) {
          suma2 += resp2[i];
        }
      
      if (suma1 == num2 && suma2 == num1){
          document.getElementById("resp").textContent = `Los números ${num1} y ${num2} son amigos.`
      } else {
          document.getElementById("resp").textContent = `Los numeros ingresados no son amigos.`
      }
    }

    primo(){
      let num = document.getElementById("num").value
      num = parseFloat(num)
      let suma = 0
      let resp = []

      for (let i = 1; i <= num; i++) {
          if (num % i === 0) {
            resp.push(i);
          }
        }
    
      for (let i = 0; i < resp.length; i++) {
          suma += resp[i];
        }
      
      if (suma - 1 == num){
          document.getElementById("resp").textContent = `El número ${num} es primo.`
      } else {
          document.getElementById("resp").textContent = `El número ${num} no es primo.`
      }
    }

    primosGemelos(){
      let num = document.getElementById("num").value
      num = parseFloat(num)
      let num2 = document.getElementById("num2").value
      num2 = parseFloat(num2)
      let suma = 0
      let suma2 = 0
      let resp = []
      let resp2 = []

      for (let i = 1; i <= num; i++) {
          if (num % i === 0) {
            resp.push(i);
          }
      }
    
      for (let i = 0; i < resp.length; i++) {
          suma += resp[i];
      }

      for (let i = 1; i <= num2; i++) {
          if (num2 % i === 0) {
            resp2.push(i);
          }
      }
    
      for (let i = 0; i < resp2.length; i++) {
          suma2 += resp2[i];
      }
      
      suma -= 1
      suma2 -= 1

      if ((suma == num  && suma2 == num2) && (Math.abs(num - num2) === 2)){
          document.getElementById("resp").textContent = `Los números ${num} y ${num2} son primos gemelos.`
      } else {
          document.getElementById("resp").textContent = `Los números ${num} y ${num2} no son primos gemelos.`
      }
    }

    numeroInvertido(){
      let num = document.getElementById("num").value
      num = parseFloat(num)

      let numeroInvertido = parseInt(num.toString().split('').reverse().join(''));

      document.getElementById("resp").textContent = `El número invertido es: ${numeroInvertido}`

    }

    cantidadDigitos(){
      let num = document.getElementById("num").value
      num = parseInt(num)
 
      let cantidadDigitos = num.toString().length;

      document.getElementById("resp").textContent = `La cantidad de dígitos es: ${cantidadDigitos}`
    }

    factorial(){
      let num = document.getElementById("num").value
      num = parseInt(num)

      if (num === 0 || num === 1) {
        document.getElementById("resp").textContent = `El factorial de ${num} es : 1`
      }

      let factorial = 1;
      for (let i = 2; i <= num; i++) {
        factorial *= i;
      }
      document.getElementById("resp").textContent = `El factorial de ${num} es : ${factorial}`

    }

    exponente(){
      let num = document.getElementById("num").value
      num = parseInt(num)
      let exp = document.getElementById("exp").value
      exp = parseInt(exp)
      let resultado 

      resultado = Math.pow(num, exp)
      document.getElementById("resp").textContent = `El resultado de ${num} elevado a la ${exp} es : ${resultado}`
    }

    tablaMultiplicar(){
      let num = document.getElementById("num").value
      num = parseInt(num)

      let resultadoDiv = document.getElementById("resp");
      resultadoDiv.innerHTML = ""; // Limpiar el contenido anterior
    
      for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        resultadoDiv.innerHTML += num + " x " + i + " = " + resultado + "<br>";
      }
    }
    
    

    fibonaci(){
      let num = document.getElementById("num").value
      num = parseInt(num)
      let sucesion = [0,1];

      for (let i = 2; i <= num; i++) {
        let siguienteNumero = sucesion[i - 1] + sucesion[i - 2];
        sucesion.push(siguienteNumero);
      }

      document.getElementById("resp").textContent = `La sucesión del número ${num} es : ${sucesion}`
    }


 
}
const numero = new Numeros();
class Arreglos{
    mayor(){
        let datos = document.getElementById("datos").value
        let numeros = datos.split(";") //["23","40","4","100"]
        let may=parseInt(numeros[0]) // 23
        for(let i=1;i < numeros.length;i++){
           if (may < parseInt(numeros[i])){
             may = parseInt(numeros[i])//100
           } 
        }
        let resp = document.getElementById("resp")
        resp.textContent=`El número mayor del arreglo [${numeros}] es= ${may}`
    }
    
    menor(){
        let datos= document.getElementById("datos").value
        let numeros = datos.split(";") //["23","40","4","100"]
        let men=parseInt(numeros[0]) // 23
        for(let i=1;i < numeros.length;i++){
           if (men > parseInt(numeros[i])){
             men = parseInt(numeros[i])//100
           } 
        }
        let resp = document.getElementById("resp")
        resp.textContent=`El número menor del arreglo [${numeros}] es= ${men}`
    }

    promedio(){
        let num = document.getElementById("num").value
        let numeros = []
        numeros = num.split(";")


        let suma = 0
        for (let i = 0; i < numeros.length; i++){
            suma = suma + parseFloat(numeros[i])
        }

        let promedio = suma / numeros.length
        document.getElementById("resp").textContent=`El promedio del arreglo es: ${promedio}`
    }

    nombreRevez(){
        let nombre = document.getElementById("nombre").value
        let nombreInvertido = ""
        for (let i = nombre.length -1; i >= 0; i--) {
          nombreInvertido += nombre[i]; 
        }       
        document.getElementById('resp').textContent = nombreInvertido;
    }

    buscar(){
        let datos = document.getElementById("datos").value
        let arreglo = datos.split(";")
        let buscado = document.getElementById("buscado").value
        let c = 0, enc = false
        while (c < arreglo.length && enc == false) {
          if (arreglo[c] == buscado){
            enc = true
          }
          else {
            c = c + 1
          }
        }
        let resp = document.getElementById("resp")
        if (enc == true) {
          //console.log(buscado, "se encuentra en la pos: ",c)
          resp.textContent = `El valor ${buscado} se encuentra en la posicion ${c} del arreglo ${JSON.stringify(arreglo)}`
        } else {
          //console.log(buscado," no se encuentra")
          resp.textContent = `El valor ${buscado} no se encuentra en el arreglo ${JSON.stringify(arreglo)}`
        }
    }

    adivinaNumero(){
        let num = document.getElementById("num").value
        num = parseInt(num)
        let pos = document.getElementById("pos").value
        pos = parseInt(pos)
        let arrRamdom
        arrRamdom = this.generarArregloAleatorio

        if (arrRamdom[pos]== num){
            document.getElementById("resp").textContent = `ADIVINASTE!`

        }else{
            document.getElementById("resp").textContent = `NO ADIVINASTE :(`

        }
        
    }

    insertar(){
        let datos = document.getElementById("datos").value
        let numeros = []
        numeros = datos.split(";")
        let num = document.getElementById("num").value
        num = parseInt(num)
        let pos = document.getElementById("pos").value
        pos = parseInt(pos)
        let nuevoArreglo = [];
        
        for (let i = 0; i < numeros.length; i++) {
          if (i === pos) {
            nuevoArreglo.push(num);
          }
          nuevoArreglo.push(numeros[i]);
        }
        document.getElementById("resp").textContent = `El número ${num} ingresó a la posicion ${pos} = ${nuevoArreglo}`
    }

    eliminar(){
        let datos = document.getElementById("datos").value
        let numeros = []
        numeros = datos.split(";")
        let numEliminar = document.getElementById("num").value
        numEliminar = parseInt(numEliminar)
        let nuevoArreglo = [];

        for (let i = 0; i < numeros.length; i++) {
          if (numeros[i] != numEliminar) {
            nuevoArreglo.push(numeros[i]);
          }
        }
        document.getElementById("resp").textContent = `El número ${numEliminar} fue eliminado = ${nuevoArreglo}`
    }

    base2Base10(){
        let num = document.getElementById("num").value
        let base10 = 0;
        let potencia = 0;
      
        for (let i = num.length - 1; i >= 0; i--) {
          if (num[i] == "1") {
            base10 += Math.pow(2, potencia);
          }
          potencia++;
        }
        document.getElementById("resp").textContent=`El numero ${num} en base 10 es = ${base10}`
    }

    base10Base2(){
        let num = document.getElementById("num").value
        let binario = "";
        let num2
        num2 = num 
        while (num > 0) {
          let residuo = num % 2;
          binario = residuo + binario;
          num = Math.floor(num / 2);
        }
        document.getElementById("resp").textContent=`El numero ${num2} en base 2 es = ${binario}`
    }

    sueldoEmpleados(){
        let promedioSueldos=0
        let nombre= document.getElementById("nombre").value
        let empleados=nombre.split(";")
        let valorHora=document.getElementById("valorHoras").value
        let valorxhora=valorHora.split(";")
        let numeroHoras=document.getElementById("horas").value
        let horas=numeroHoras.split(";")
        let totalSueldos=0
        let con=0
        if (empleados.length === 0) {
          document.getElementById("resp").textContent = "Agrega al menos un empleado.";
        } else {
         for (let i = 0; i < empleados.length; i++) {
           totalSueldos+=parseFloat(horas[i])*parseFloat(valorxhora[i])
           con=con+1
          }
                      
          promedioSueldos=totalSueldos/con;
          document.getElementById("resp").textContent = "Promedio de sueldos: " + promedioSueldos.toFixed(2);                    
        }
    }

    sumaDivisores(){
        //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
        let datos= document.getElementById("datos").value
        let numeros = datos.split(";") //["4","6","9","10"]
        let acu,num=0,resultado=""
        // recorre cada elemento del arreglo
        for(let i=0;i < numeros.length;i++){
            // proceso de suma de divisores
            num=parseInt(numeros[i])
            acu=this.acuDivisores(num)
            resultado=resultado+acu+"|"    //""+"3"="3"+"|"+"6"="3|6"
        }
        let resp = document.getElementById("resp")
        resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`
    }

    perfecto(){
        //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
        let datos= document.getElementById("datos").value
        let numeros = datos.split(";") //["4","6","9","10"]
        let acu,num=0,resultado=""
        // recorre cada elemento del arreglo
        for(let i=0;i < numeros.length;i++){
            // proceso de suma de divisores
            num=parseInt(numeros[i])
            acu=this.acuDivisores(num)
            if (acu==num){
            resultado=resultado+num+"|"    //""+"3"="3"+"|"+"6"="3|6"
            }
        }
        let resp = document.getElementById("resp")
        resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`
    }
    
    primos(){
      let num=document.getElementById("datos").value
      let numeros=num.split(";")
      let resultado=[]
      for(let i=0;i<numeros.length;i++){
        num=parseInt(numeros[i])
        let acu=0
        for(let c=1;c<num;c++){
          if(num%c==0){
            acu=acu+c
          }
        }
  
        if(acu==1){
          resultado.push(num)
        }
      }
      let resp = document.getElementById("resp")
      resp.textContent=`Los numeros primos del arreglo[${numeros}] son = [${resultado}]`
    
    }

    repeticionNumero(){
        let datos = document.getElementById("datos").value
        let numeros = []
        numeros = datos.split(";")
        let num = document.getElementById("num").value
        num = parseInt(num)
        let acu = 0

        for(let i = 0 ; i < numeros.length; i++){
          if (parseInt(numeros[i])==num){
            acu += 1
          }
        }

        document.getElementById("resp").textContent=`El numero ${num} se repite ${acu} veces`
    }

    billetes(){
      let cantidad =document.getElementById("costo").value
      cantidad = parseFloat(cantidad);
      let pago =document.getElementById("pago").value
      pago = parseFloat(pago);
      let vueltofinal=parseInt(cantidad-pago)
      let cantidaddecimal=Math.round((cantidad%1)*100)
      const billetesMonedas = [50, 20, 10, 5, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
      let respuestaFormatoEspecial = "";
  
      for (let i = 0; i < billetesMonedas.length; i++) {
        const billeteMoneda = billetesMonedas[i];
        let contador = 0;
  
        while (vueltofinal >= billeteMoneda) {
          contador++;
          vueltofinal-= billeteMoneda;
        }
  
        if (contador > 0) {
          if (billeteMoneda >= 1) {
            respuestaFormatoEspecial += `${contador} billete${contador > 1 ? "s" : ""} de ${billeteMoneda}, `;
          }
        }
      }
  
      respuestaFormatoEspecial = respuestaFormatoEspecial.slice(0, -2);
      document.getElementById("resp").innerHTML = `Vuelto en billetes: ${respuestaFormatoEspecial} y ${cantidaddecimal} centavos`;
    }

//Funcion para sumar los divisores de un numero 

    acuDivisores(num){
        let acu=0
        for(let c=1;c<num;c++){
           if (num%c==0){
               acu=acu+c
           }
        }
        return acu //1+3=4
    }

//Funcion para generar un arreglo con 100 numeros enteros aleatorios

    generarArregloAleatorio(){
            let arreglo = [];
            let longitud = 100
            let min = 1
            let max = 1000
            for (let i = 0; i < longitud; i++) {
            let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            arreglo.push(numeroAleatorio);
            }
        return arreglo
        
    }

}
const arreglo = new Arreglos
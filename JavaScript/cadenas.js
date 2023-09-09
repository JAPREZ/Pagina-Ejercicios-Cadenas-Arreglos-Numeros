class Cadenas{
    vocalesConsonantes(){
        // "hola que tal"
        let frase = document.getElementById("datos").value
        let cv=0,cc=0
        for(let i=0;i < frase.length;i++){
            if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
               cv=cv+1
            }
            if (frase[i]>= 'a' && frase[i]<= 'z' ) {
               cc=cc+1
            }
        }
        console.table({cv,cc})
        let resp = document.getElementById("resp")
        resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
    }
    palabrasFrase(){
        let frase=document.getElementById("datos").value
        let con=1
        let con2=1
        let con3=1
        for(let i=0;i<frase.length;i++){
            if(frase[i]=="   "){
                con3=con3+1
            }else if(frase[i]=="  "){
                con2=con2+1
            }else if(frase[i]==" "){
                con=con+1
            }
        }
        let resp=document.getElementById("resp")
        resp.textContent=`La  cantidad de palabras que contiene la frase son ${con}`
    }
    caracterEspecial(){
        let frase = document.getElementById("frase").value
        let conPC=0
        let conC=0
        let conP=0
        let conDP=0
        let total=0
        let respuesta=""
        for(let i=0;i<frase.length;i++){
            if(frase[i]==","){
                conC=conC+1
            }
            if(frase[i]==";"){
                conPC=conPC+1
            }
            if(frase[i]==":"){
                conDP=conDP+1
            }
            if(frase[i]=="."){
                conP=conP+1
            }
        }
        total=(conC+conDP+conP+conPC)
        let resp=document.getElementById("resp")
        resp.innerHTML=`La cantidad caracteres especiales en la frase son  ${total}`+"<br>"+`${conC} comas ","`+"<br>"+`${conP} puntos "."`+"<br>"+`${conPC} punto y coma ";"`+"<br>"+`${conDP} doble puntos ":"`

    }
    fraseIgual(){
        let cadena=document.getElementById("frase").value
        let cadena_minuscula=cadena.toLowerCase()
        let cadenarevez=""
        for( let i=cadena_minuscula.length-1;i>=0;i--){
            cadenarevez= cadenarevez+(cadena_minuscula[i])
            console.log(cadenarevez)
        }
        if(cadena_minuscula==cadenarevez){
            document.getElementById("resp").innerHTML=`La cadena [${cadena}]  es igual al revez `+"<br>"+`[${cadenarevez}]`
        }else{
            document.getElementById("resp").innerHTML=`La cadena [${cadena}]  no es igual al revez`+"<br>"+`[${cadenarevez}]`
        }
    }
    copiaFraseInvertida(){
        // Obtenemos el texto ingresado en el input
        let fraseOriginal = document.getElementById('fraseInput').value;

        // Creamos una variable para almacenar la frase invertida
        let fraseInvertida = "";

        // Invertimos la frase
        for (let i = fraseOriginal.length - 1; i >= 0; i--) {
        fraseInvertida += fraseOriginal[i];
        }

        // Mostramos la frase invertida en el elemento HTML correspondiente
        document.getElementById('resp').textContent = fraseInvertida;
    }
    concatenarFrases(){
        let frase1 = document.getElementById("frase1").value
        let frase2 = document.getElementById("frase2").value
        let frase3 = frase1 + frase2
        document.getElementById("resp").textContent = frase3
    }
    buscarCaracter(){
        let frase = document.getElementById("frase").value
        let caracter = document.getElementById("caracter").value
        let posicion = 0
        for(let i = 0; i < frase.length; i++){
            if(frase[i]==caracter){
                posicion = i
                break
            }
        }
        document.getElementById("resp").innerHTML = `El caracter "${caracter}" se encuentra en la posicion : ${posicion}`

    }
    buscarSubcadena(){
        let resp = document.getElementById("resp")
        let $input=document.getElementById("cadena");
        let conespacio=$input.value
        let scadena=document.getElementById("subcadena")
        //let cadena=this.quitaEspacio(conespacio)
        let subcadena=scadena.value
        let cadena=conespacio
        let posfinal=-1
        for (let i = 0; i <= cadena.length - subcadena.length; i++) {
          let coincidencias = 0;
          for (let j = 0; j < subcadena.length; j++) {
            if (cadena[i + j] == subcadena[j]) {
              coincidencias++;
            }
          }
          if (coincidencias == subcadena.length) {
            posfinal=i;
          }
        }
        if(posfinal!=-1){
            resp.textContent=`La subcadena "${subcadena}" se encuentra en la posicion ${posfinal} de la cadena "${conespacio}"`;
        }else{
            resp.textContent=`La subcadena "${subcadena}" no se encontro en la cadena "${conespacio}"`;
        }
    }
    insertarSubcadena(){
        let cadena = document.getElementById("cadena").value
        let subcadena = document.getElementById("subcadena").value
        let posicion = parseInt(document.getElementById("posicion").value)
        let aux=""
        if (posicion >= 0 && posicion <= cadena.length){ 
            for (let i = 0; i < posicion; i++) {
                aux=aux+cadena[i]
            }
            aux=aux+subcadena
            
            for (let i = posicion; i < cadena.length; i++) {
                aux = aux + cadena[i]
            }
             cadena=aux
             let resp = document.getElementById("resp")
             resp.textContent = `cadena nueva:= ${cadena}`
        }
        else{
            alert("la posicion no es valida")
        }

    }
    eliminarSubcadena(){
        let cadena = document.getElementById("cadena").value
        let subcadena = document.getElementById("subcadena").value
        let resp =document.getElementById("resp")
        let posicion=0
        let aux=""
        for(let i=0;i<cadena.length;i++){
            if(subcadena[0]==cadena[i]){
                posicion=i+subcadena.length
                break
            }else{
                aux+=cadena[i]
            }
        }
        for(let c=posicion;c<cadena.length;c++){
            aux+=cadena[c]
        }
        resp.textContent=`La cadena "${cadena}" despues de eliminar la subcadena "${subcadena}" es "${aux}"`
    }
    convertirFraseArreglo(){
        let cadena = document.getElementById("cadena").value
        let resp =document.getElementById("resp")
        let arreglo=[]
        let agregar=""
        let a=0
        
        for(let i=0;i<cadena.length;i++){
            if(cadena[i]==" "){
                arreglo.push(agregar)
                agregar=""
                console.log(agregar)
                console.log(arreglo)
            }else{
                agregar+=cadena[i]
                console.log(agregar)
            }
            a+=1
            
            
        }
        if(a>=cadena.length){
            arreglo.push(agregar)
        }
        resp.textContent=`La cadena "${cadena}" en arreglo es [${arreglo}]`
    }
    sumaDigitosFrase(){
        let cadena = document.getElementById("digitos").value
        let resp =document.getElementById("resp")
        let suma=0
        let con=0
        for(let i=0;i<cadena.length;i++){
           if(!isNaN(cadena[i])){
            suma+=parseFloat(cadena[i])
           }else{
            con+=1

           } 
            
        }
        if(con==0){
            resp.textContent=`La suma de la cadena "${cadena}" es ${suma} `

        }else{
            resp.textContent=`Inserte solo numeros`
        }
    }
}
const cad = new Cadenas()
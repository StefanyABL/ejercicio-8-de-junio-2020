function  getVector (elements, elements2){
    var vector = new Array();
    vector.push(1);
    vector.push(1);
    for (var cont =2;cont<elements; cont ++){
        vector.push(vector[cont-1]+ vector[cont-2]);
    }
        return vector[elements2];
}
function begin(){
      var numOne =document.getElementById("numOne").value;
     var numTwo =document.getElementById("numTwo").value;
 if(numOne>numTwo){
      var out = document.getElementById("layout");
     var out1 = document.getElementById("layout1");
     var out2 = document.getElementById("layout2");
     
    
  
   
   
    out.innerHTML = "número 1 es :"+ sumarDigitos(numOne);
     out1.innerHTML =   " número 2 es :"+ sumarDigitos(numTwo);
      const arreglo=getVector(numOne,numTwo);
    alert (arreglo);
      out2.innerHTML =   arreglo;
   
    numerosPerfectos(numTwo,numOne);
    
 }if(numTwo>numOne){
   var out = document.getElementById("layout");
     var out1 = document.getElementById("layout1");
     var out2 = document.getElementById("layout2");
     
    
 
   
   
    out.innerHTML = "número 1 es :"+ sumarDigitos(numOne);
     out1.innerHTML =   " número 2 es :"+ sumarDigitos(numTwo);
      const arreglo=getVector(numTwo,numOne);
    alert (arreglo);
      out2.innerHTML =   arreglo;
   
    numerosPerfectos(numOne,numTwo);   
 }
     
    
}
function numerosPerfectos(numTwo,numOne){
       var out3 = document.getElementById("layout3");
        
		
		       var i, j, suma;
	
		        for(i=numTwo;i <= numOne;i++){    
		            suma = 0;
		            for(j = 1;j < i;j++){                            
		                 if(i % j==0){
		                    suma = suma + j; 
		                 }
		            }
		          if(i == suma){                    
		             out3.innerHTML = i;
      
		          }
		        }
	}

function sumarDigitos(numOne){
    
         
    
 
		
    var sumDig=0;
var  aux=numOne;
    while (numOne != 0) {

			sumDig = sumDig + (numOne % 10);

			numOne = numOne / 10;

		}
    var resultado = parseInt(sumDig);
    return resultado;

	

}

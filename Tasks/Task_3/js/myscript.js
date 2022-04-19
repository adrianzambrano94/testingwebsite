// Me base un tanto en este ejemplo https://www.youtube.com/watch?v=M4LaQ3KUGOM
const xhttp = new XMLHttpRequest(); //Se crea 'new' una variable 'xhttp' de tipo constante 'const' de la clase 'XMLHttpRequest()'.
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/albums", true); //de la variable 'xhttp' iniciamos con 'open', donde 'GET' se emplea para recibir información, después va la fuente que en este caso se obtiene desde una dirección web, y al final tenemos la declaración de 'true' para que la conexión sea asincrona.
        xhttp.send(); //Con esto se manda la petición de optener la información.
        xhttp.onreadystatechange = function () {//Utiliza la variable y la instancia para inicialización de la función.
            if (this.readyState == 4 && this.status == 200) {// se ejecuta una condición para ferificar que se conectó de manera correcta '200' así como ... no entendí de donde sale el 4, pero debe de ser importante.
                let datos = JSON.parse(this.responseText);//se crea una variable (datos) ya que la lectura de JSON se obtendrá como texto, pero de esta manera, con el atributo 'parse' de la función 'JSON' se convertirá el texto a un formato/archivo tipo json. 
                let res = document.querySelector('#res');//Se establece la variable 'res' la cual se correlaciona con el identificador 'res' del archivo html.
                res.innerHTML = '';//esto nos sirve para inicicalizar la variable de manera sin valor y ya declarada.
                for (let item = 0 ; item<20; item++){//comenzamos un ciclo for para poder imprimir los primero 20 valores del archivo json.
                    res.innerHTML += `<h3  class="my-3"><strong>${datos[item].title}</strong></h3>`//Se utiliza el simbolo del acento grabe '`' para poder sobre escribir código html que se tenga dentro de los dos acentos. Y para incertar el valor deseado se emplea el simbolo de moneda seguido de dos corchetes '${}'
                }
            }
        }
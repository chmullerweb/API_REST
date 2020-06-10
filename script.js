//REQUETE FETCH POUR AFFICHER UN CHAT 


alert("Vous aimez les chats ou les plantes ?");


fetch('https://aws.random.cat/meow') // fetch() prend un argument le chemin de la ressource que nous souhaitons récupérer
.then(function(response) {
    //Extraire le contenu de la réponse en format Json
  return response.json();
})
.then(function(json) {
    //le retour de l'api est un "file : avec l'url random d'un chat"
    console.log(json.file);
   
    //je mets l'url du chat dans la src de l'image
    var image = document.createElement('img');
    image.src = json.file;
    
    var container = document.getElementById("container");
    container.appendChild(image);
});


//REQUETE FETCH POUR AFFICHER UNE PLANTE



fetch('https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants/104914?token=Q2JOVVBLeUg4V3Z5OWdJbDVCWEdWdz09') // fetch() prend un argument le chemin de la ressource que nous souhaitons récupérer. Le token se récupère lors de la création du compte user à l'API. https/cors-anywhere.herokuapp.com permet de bypasser l'erreur de CORS. Ici id_token = Q2JOVVBLeUg4V3Z5OWdJbDVCWEdWdz09 Il ne faut pas exposer l'id_token. Pour ce faire, la clé doit être enregistrée côté Back en Node.js.


.then(function(response) {
    //Extraire le contenu de la réponse en format Json
  return response.json();
})
.then(function(json) {
    //le retour de l'api est un "file : avec l'url random de la plante"
    console.log(json.images[0].url);
   
    //je mets l'url de la plante dans la src de l'image
    var titre = document.getElementById('plantName');
    var scientificname = document.getElementById('scientificname');
    var plantimage = document.getElementById('plantimage');
    
    titre.innerHTML = json.common_name;
    scientificname.innerHTML = json.scientific_name;
    plantimage.src = json.images[1].url;
    
});


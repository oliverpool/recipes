var recipeManager = function(){
  var stack = [];
  return {
    push: function(obj) {
      stack.push(obj);
    },
    pop: function() {
      return stack.pop();
    },
    new: function(){
      return {
        "name": "",
        "duration": {},
        "recipe": {
          "duration": {},
          "container": "",
          "description": "",
          "ingredients": []
        }
      };
    }
  }
}();


// Requires nodeca/pako
var hashConvertor = function(){
  return {
    toJSON: function(hash){
      var parts = hash.split("-");
      if(parts[0] != "pako"){
        return false;
      }
      try{  
        var hash_bin = atob(parts[1]);
        var hash_str = pako.inflate(hash_bin, { to: 'string' });
        return JSON.parse(hash_str);
      } catch(e) {
        console.log("Error while parsing:");
        console.log(e);
        return false;
      }
    },
    fromJSON: function(obj){
      var obj_str = JSON.stringify(obj);
      var obj_bin = pako.deflate(obj_str, { to: 'string' });
      var obj_b64 = btoa(obj_bin);
      return 'pako-'+obj_b64;  
    }
  }
}();


var recipeStore = function(){
  var recipes = [];

  recipes.push({'name': 'Meringues', 'duration': {'value':60, 'unit':'min'}, 'recipe': {'duration': {'value': 50, 'unit': 'min'}, 'container': {'ingredients': [{'ingredients': [{'of': 'sucre', 'quantity': {'value': 60, 'unit': 'g'}}], 'description': 'Mélanger le sucre avec les blancs', 'container': {'ingredients': [{'quantity': 1, 'of': 'oeuf', 'select': 'seulement le blanc'}], 'description': 'Battre les blancs en neige', 'container': 'Bol'}}], 'description': 'Faire des petits tas', 'container': 'Plaque beurrée'}, 'description': 'Mettre au four'}});

  recipes.push({
    "name": "Cake aux raisins",
    "duration": {
      "value": 60,
      "unit": "min"
    },
    "recipe": {
      "duration": {
        "value": 50,
        "unit": "min"
      },
      "container": {
        "ingredients": [
          {
            "ingredients": [
              {
                "ingredients": [
                  {
                    "of": "Raisins secs",
                    "select": ""
                  },
                  {
                    "of": "Rhum",
                    "select": ""
                  }
                ],
                "duration": {
                  "value": "1",
                  "unit": "nuit"
                },
                "container": "Verre",
                "description": "Laisser les raisins s'imbiber"
              }
            ],
            "container": {
              "ingredients": [
                {
                  "quantity": {
                    "value": "1",
                    "unit": "pot"
                  },
                  "of": "Crème fraiche",
                  "select": ""
                },
                {
                  "quantity": {
                    "value": "1",
                    "unit": "pot"
                  },
                  "of": "Farine",
                  "select": ""
                },
                {
                  "quantity": {
                    "value": "1",
                    "unit": "pot"
                  },
                  "of": "Sucre",
                  "select": ""
                },
                {
                  "quantity": {
                    "value": "2"
                  },
                  "of": "Oeufs",
                  "select": ""
                }
              ],
              "container": "Bol",
              "description": "Mélanger les ingrédients"
            },
            "description": "Rajouter les raisins"
          }
        ],
        "container": "Moule à Cake",
        "description": "Verser le tout"
      },
      "description": "Mettre au four",
      "ingredients": []
    }
  });

  return {
    get: function(idx){
      return recipes[idx];
    },
    random: function(){
      return recipes[Math.floor(Math.random() * recipes.length)];
    }
  }

}();
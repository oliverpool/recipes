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
    },
    list: {
      'Meringues':'pako-eJx9kDFuwzAMRa8icPbQDu3gMUO3AN2LDozybQiQKUcSAxSBD5Rz5GKlnSFobHQk+T//Iy8kPIBa2iMH6RWFGjpq5hqSUHuhM0e1+ftLQyqhmnIIQlNDGT6MmCUb8reV3CepHAR5VllSxjFAaqH2a12nzoxFfYbRnJSlhvqzTdPTNH0bMorPYbxj0P52jSw9sotwyx7HZ3irijvYxM9X/kv0CH1t7jgJ2pmrIMLPwQUaMZhhzliW0hpkx7Va+CPXQZwg9PgLQLsUtw754GB267kRhlNc5Sd0+ox8UiOA5ny7Yv710zOwMLC6Lmm2lF90t61t',
      'Cake aux raisins':'pako-eJylU71OwzAQfhXrFpYMgARDRioxUSEViQV1cN1Le+DY4WwjUJV3YaTPkRfDbtqK4PInpsjK93ff2SswskYoYSQfUMjwLFiSI+OggHlg6ckaKFfwJHWIsPPjAoIhHwk1GWgLYFTUYIIcgJ9lcGWNl2SQE4rMgnFOaLyD8u7ns62i0KTPJxyqFNKhRpUMovoOsQz18M/04DBwAvt4JsTPMB/cIjOmHtAppqZnw1X0d8hCo9t1JdwR1TOaRVay+nbGxyCNJ//yRY7GbmJs5hhx91ajqKKLWmI26x+ULiXHPP9RuAmKfydwuudcY6hctoiPDV9YnfU77tZamsW24VRft972137GTuS9DX64jMxkbING0b2KdMUzu7jkfpvCR6ncYozec3oZorKBI3240GnbvgO1zxp5',      
    }
  }

}();
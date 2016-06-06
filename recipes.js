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
  var pakoToJson = function(uri){
    try{
      var hash_bin = atob(uri);
      var hash_str = pako.inflate(hash_bin, { to: 'string' });
      return JSON.parse(hash_str);
    } catch(e) {
      console.log("Error while parsing:");
      console.log(e);
      return false;
    }
  };
  var pakoFromJson = function(obj){
      var obj_str = JSON.stringify(obj);
      var obj_bin = pako.deflate(obj_str, { to: 'string' });
      var obj_b64 = btoa(obj_bin);
      return obj_b64;
  };

  return {
    toJSON: function(hash){
      var i = hash.indexOf('-');
      var algo = hash.slice(0,i);
      var args = hash.slice(i+1);
      switch (algo) {
        case "pako":
        return pakoToJson(args);
      }
      return false;
    },
    fromJSON: function(obj){
      return 'pako-'+pakoFromJson(obj);
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
    "serving": {
      "value": 4,
      "unit": "Personnes",
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
    empty: function(){
      return {
        "name":"",
        "duration":"",
        "recipe":{
          "container":"",
          "description":"",
          "ingredients":[
            {
              "quantity":{},
              "of":"",
              "select":""
            }
          ]
        }
      }
    },
    list: {
      'Meringues':'pako-eJx9kDFuwzAMRa8icPbQDu3gMUO3AN2LDozybQiQKUcSAxSBD5Rz5GKlnSFobHQk+T//Iy8kPIBa2iMH6RWFGjpq5hqSUHuhM0e1+ftLQyqhmnIIQlNDGT6MmCUb8reV3CepHAR5VllSxjFAaqH2a12nzoxFfYbRnJSlhvqzTdPTNH0bMorPYbxj0P52jSw9sotwyx7HZ3irijvYxM9X/kv0CH1t7jgJ2pmrIMLPwQUaMZhhzliW0hpkx7Va+CPXQZwg9PgLQLsUtw754GB267kRhlNc5Sd0+ox8UiOA5ny7Yv710zOwMLC6Lmm2lF90t61t',
      'Cake aux raisins':'pako-eJylU71OwzAQfhXrFpYMgARDRioxUSEViQV1cN1Le+DY4WwjUJV3YaTPkRfDbtqK4PInpsjK93ff2SswskYoYSQfUMjwLFiSI+OggHlg6ckaKFfwJHWIsPPjAoIhHwk1GWgLYFTUYIIcgJ9lcGWNl2SQE4rMgnFOaLyD8u7ns62i0KTPJxyqFNKhRpUMovoOsQz18M/04DBwAvt4JsTPMB/cIjOmHtAppqZnw1X0d8hCo9t1JdwR1TOaRVay+nbGxyCNJ//yRY7GbmJs5hhx91ajqKKLWmI26x+ULiXHPP9RuAmKfydwuudcY6hctoiPDV9YnfU77tZamsW24VRft972137GTuS9DX64jMxkbING0b2KdMUzu7jkfpvCR6ncYozec3oZorKBI3240GnbvgO1zxp5',
      'Pâte à choux':'pako-eJyVU81u00AQfpXRXgKSDymoqOoNonJDVOKIetisx8lW611nd6eiqvIuFSfMiWdgX4yZBOzEFaFYsj0rz8/3M35QXreoLtV1+ZoRyiOYdaAvqlIRje34y4OqKepsg5f4TjuS9FfnnELeZo5b69W2UjUmE223z1QLshFBEzSBIrw4u5j//LF4yUUm+KytxyjtrF9FrC36nNTl56fnDWmfbb7nhq+5NjQcfERqOE7o0Mh4tb2ZDn97GyhjBIcJAqcnIC/c+IkeIrbSFm4pbWgmlBE2hMxcy0sKIAWbwXoTYhdi6ae4J+NiLN/386BBqsBpmxKfsy19bePp6g+ld9qvOJ2hOA2GrHPlG6vHWJfBJgHn+E7ASjOvVI3Q3SwsM8vFraCekUdoNY8GE9pOmyzELPC5Ln3WZs0ByoxOx2D/ZcYo/uj72Xw+Gr8S23eevNeRuzzTFaYlQBOS6CUEGVHzp8MRpIODWgixGJwkTXZtralp9gKy/tCGe/TVgdVccYrcbzrGcd5A9Hwgd6XpmFn1F21GZTpendLj0OITupMtBkFHAG/mQ/U7pBjxfzGY8mhGAGSmHW62cj11iXdKW16T/Tp1QbaGha2D7CVWskpdkO3mOuiQESTIOh1bp67d7mdaCvSdElsZHu/Yh0O8FyPe0hv+b2Li1F/t95lA',
      'Crème au chocolat':'pako-eJyNk8GK2zAQhl9F6NIWfNjSQsve2kCh0NLCQi9lD1p5ktUiS85ICl0Wv0uP6176EH6x/uMkjpNsSwPBtqSZ+efTPw86mIb0pV7w8NiQMkXZ22ijN1lXmsm6FrsPuqZk2bXZxYDD75iHX5lYeVJLKoqy8salhBWmJUdXO0a4jSEbF4jPM3zaHbfFMVWKAgKbYkKu1LqQxz+pxoWS8bwraV2eDT/V0LcSJpENhfzvCl8ji0KE+aFfDY9MiL8p3js5oJIJSVkaRdQ0VqczzS6smGqHWklffj//Xotil+/lbAkuo+wKOTbGF2H66kJ3lY5LvH4Yels8YTORJysnUbUxw++ku+vqRPvHYCO3kYWwUcsp9kjc7ENfGW+gi9VzHnoAytA1tm5wncZT4Rf6tMh7kzOgTHQtCXq50mbovQkrUjd42FvhjejT5se+rorlo67wPqeyR/HmAhsToq6rnoR3Z0qgNCc4AfxCZZmOCnXX3Tm5b8TjjcZiR49IO7Bmnlw99KqWq8d62kOD+8TIsVDOowXb4hIssdkms1gm1bLYj83onm0KwDVioHh+Of/hFOtnjb4+WAWjkeeNIgdE6r8gm/vt5cUhy2LXrwrRicNF51FakQ4Y6L2JbMmUH08Y8fPOCeMcyaQ38R4Rk2eAoHYJWLZDVcvU7rMdEdGLiVQnPxHCG1Cam+TtwSOwPK6NMRzdH/lpql0=',
      'Glaçage':'pako-eJyNkDtuwzAMhq8icM7gtEuRsUHaQxQdCJl2CKhkSklBC8N3yVb0HL5YqSGvrZMe/P6PlCYQ/CDYwGvC5QdHghUYRT743QRRpSALmQNbzJlMUyN6ytH4UFjFKy/IRmFQ6X1ZTmGgGnqtXw6yjEY9k5QMm7cJPitK4fLd5FW4eHp07IiptiEeO5hXoINvn6matV6ZEsUGeulecE6tu865i+5s2O41asISRNmCj+zjl38JH666uJzyxbjDep9/n9vRjv7M2/zTNb/8xuTf4475D+1KeJM=',
    }
  }

}();
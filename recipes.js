var cookbookManager = function(){
  var cookbook = [];
  var titles = [];
  var empty = function(){
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
  };
  return {
    // extern calls
    import: function(name, recipes) {
      if(!cookbook[name]){
        cookbook[name] = [];
      }
      for (var index in recipes) {
        cookbook[name][index] = recipes[index];
        titles.push({hash: name + '/' + index, name: recipes[index].name});
      }
    },
    titles : function(){
      return titles
    },
    get: function(uri) {
      switch(uri){
        case 'empty':
        return empty();

        case 'random':
        uri = titles[Math.floor(Math.random() * titles.length)].hash;
        location.hash = 'cookbook-' + uri;
        // no break

        default:
        var i = uri.indexOf('/');
        var name = uri.slice(0,i);
        var index = uri.slice(i+1);
        try{
          if(index in cookbook[name]){
            return cookbook[name][index];
          }
          console.log("No index '"+ index + "' in cookbook " + name);
        } catch(e) {
          console.log("Unknown cookbook: "+ uri);
        }
      }
      return false;
    },
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
        case "cookbook":
        return cookbookManager.get(args);
      }
      return false;
    },
    fromJSON: function(obj){
      return 'pako-'+pakoFromJson(obj);
    }
  }
}();

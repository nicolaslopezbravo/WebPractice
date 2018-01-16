function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

greet("Tim", function(name) { // function(name) this is an anonymous function
  return name.toUpperCase();
});

greet("Tim", function(name) {
  return name + "!!!!!";
});


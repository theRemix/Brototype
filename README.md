# Brototype

## JS lib attached the bro property to run bro methods together

# THIS IS TOTALLY LEGIT AND USEFUL!


### Set your bro, to another object

Running a method on the first object, will run the same method on the bro object.

````
  var bro = require('bro.js');

  function Guy ( name ) {
    
    this.name = name;

    this.yell = function ( statement ) {
      statement = statement.toUpperCase()+"!!!!!!";
      console.log(this.name, statement);
    }
  }
  
  var stewie = new Guy( 'Stewie' );
  var brian  = new Guy( 'Brian' );
  bro.call( stewie, brian );

  stewie.yell('demands a fist bump');

  // output
  // Stewie DEMANDS A FIST BUMP!!!!!!
  // Brian DEMANDS A FIST BUMP!!!!!!

````

![bro](http://crushbeercrushcode.org/blog/wp-content/uploads/2012/11/backdoor-feature-img.png)


_obviously not serious, just learning some js_

![other bro](http://www.quickmeme.com/img/ff/ffe9a7a41fff331ddbfb8880bbb8338744c69ab8cc8dd545289134d6a4284c41.jpg)
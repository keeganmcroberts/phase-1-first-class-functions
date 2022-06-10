function receivesAFunction(cb){
    return cb();
}
receivesAFunction(function () {return 'hi'})



function returnsANamedFunction(){
   return function newFunction(){

   }
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    // return e => e 
    return function(){
        
    }
}
returnsAnAnonymousFunction();


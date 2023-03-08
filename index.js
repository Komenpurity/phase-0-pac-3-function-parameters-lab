//define a function that uses a parameter
function introduction(name){
    return `Hi, my name is ${name}.`;  
}
introduction("Aki");


//define a function that uses two parameters
function introductionWithLanguage(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Aki","Ember.js");


//define a function that uses an default parameter
function introductionWithLanguageOptional(name,language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("Gracie");
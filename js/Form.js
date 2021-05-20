class Form { 
    constructor()
    {
        
    }

display()
{
    var title=createElement('h2');
    title.html("car racing Game");
    title.position(400,100);

    var input=createInput("Name");
    var button =createButton("Play");
    var greeting=createElement('h3');

    input.position(400,180);
    button.position(400,250);

    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        greeting.html("Hello "+ name);
        greeting.position(400,250);
        
    })
    
}
    
}
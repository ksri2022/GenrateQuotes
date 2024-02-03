function generate(){

    var quotes = {
        "― Marilyn Monroe" :  '“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cannot handle me at my worst, then you sure as hell do not deserve me at my best.”',
        "― Oscar Wilde"    :  ' “Be yourself; everyone else is already taken.” ',
        "― Albert Einstein":  ' “Two things are infinite, the universe and human stupidity; and I am not sure about the universe.” '
    }

   var authors = Object.keys(quotes);

    console.log(authors);

    var author = authors[Math.floor(Math.random() 
        * authors.length )];
    
    var quote = quotes[author];    
    console.log(quote[0]);

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML= author;
}
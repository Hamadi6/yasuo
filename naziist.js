//inisialise
let card=window.document.querySelectorAll(".card");

class CardObject{
    Value=0;
    type="D";
    CardPhoto=" ;p link";
}

class cardHolder{
    Ocard;
    CardHolderHtml;
    index=0;
}

let cardHolders=[cardHolder]*card.length;
let CardObjects=[CardObject]*3

for (let i = 0; i < cardHolder.length; i++) {
    cardHolders[i].CardHolderHtml=card[index];
}


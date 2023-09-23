class CardNews extends HTMLElement{
    constructor(){
        super();        
        const shadow = this.attachShadow( {mode: "open"});
        shadow.appendChild( this.build() );
        shadow.appendChild( this.style() );
    }

    build(){
        const componentRoot = document.createElement("div");
        const cardLeft = document.createElement("div");
        const cardRight = document.createElement("div");

        componentRoot.setAttribute("class" , "card");
        cardLeft.setAttribute("class" , "card_left");
        cardRight.setAttribute("class" , "card_right");
        
        componentRoot.appendChild( cardLeft);
        componentRoot.appendChild( cardRight);

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous" );
        const linkTitle = document.createElement("h1");
        linkTitle.textContent = (this.getAttribute("title") || " - ");
        const par = document.createElement("p");
        par.textContent = (this.getAttribute("descricao") || "");
        cardLeft.appendChild( autor );
        cardLeft.appendChild( linkTitle );
        cardLeft.appendChild( par );

        const img = document.createElement("img");
        if(this.getAttribute("img-news") == null){
            // img.width = 150;
            img.style = "width:150px;"
        }else{
            img.style = "max-width:250px; max-height: 250px;"
        }
        img.src = ( this.getAttribute("img-news") || "assets/sem_imagem.png" );
        img.alt = "Imagem da Notícia" + (this.getAttribute("title") || "");
        cardRight.appendChild( img );

       return componentRoot;
    }

    style(){
        const styles = document.createElement("style");
        styles.textContent = `*{
            margin: 0;
            padding: 0;
            box-sizing: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .card{
            width: 720px;
            border: solid gray 1px;
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
        justify-content: space-between;
        margin-bottom: 25px;
        }
        
        .card_left{
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            padding-right: 10px;
        
        }
        
        .card_left > h1{
            margin-top: 15px;
            font-size: 36px;
            
        }
        
        .card_left > p{
            color: #666;
        }
        
        .card_left > span{
            color: #333;
            font-weight: 500;
        }
        
        .card_right{
           
            padding: 0;
           justify-content: center;
        }`;
        return styles;
    }

}

customElements.define( "card-news" , CardNews );
    var adicionaLista =[];

    var filmeAddUser = [];
    var filmeAddLink = [];

    var filmeNome = ["Star Wars","A Vida Secreta de Walter Mitty","Interstellar","O Regresso","Coringa","Vingadores: Ultimato","Toy Story","Bastardos Inglórios"];

    var linkTrailer = ["https://www.imdb.com/title/tt2488496/?ref_=fn_tt_tt_18","https://www.imdb.com/title/tt0359950/?ref_=nv_sr_srsg_7","https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0","https://www.imdb.com/title/tt1663202/?ref_=nv_sr_srsg_0","https://www.imdb.com/title/tt7286456/?ref_=nv_sr_srsg_0","https://www.imdb.com/title/tt4154796/?ref_=nv_sr_srsg_0","https://www.imdb.com/title/tt0114709/?ref_=nv_sr_srsg_0","https://www.imdb.com/title/tt0361748/?ref_=nv_sr_srsg_0"];

    var filmesImagens = ["https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BODYwNDYxNDk1Nl5BMl5BanBnXkFtZTgwOTAwMTk2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg"];



    function mostraFilme(){
        document.getElementById("title").remove(); 
        document.getElementById("imersao").remove(); 
        document.querySelector('.op-container').style.visibility ="hidden";
        document.querySelector('.op-container').style.display ="none";
        document.getElementById('voltar').style.display = "block";
        document.getElementById('voltar').style.visibility = "visible"
        
        for(let i = 0; i < filmesImagens.length; i++){
            document.getElementById('retornaFilme').insertAdjacentHTML("beforeend", `<figure><img src="${filmesImagens[i]}"><figcaption><a href="${linkTrailer[i]}" target="-blank">${filmeNome[i]}</a></figcaption></figure> `)
        }
        
    }

    function voltar(){
        document.querySelector('.op-container').style.visibility ="visible";
        document.querySelector('.op-container').style.display ="flex";
        
        document.getElementById('voltar').style.display = "none";
        document.getElementById('voltar').style.visibility = "hidden"
        
        document.getElementById('retornaFilme').textContent = "";
    }

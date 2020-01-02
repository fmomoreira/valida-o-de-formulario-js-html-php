

function confirmar(){

    //pega os valores  dos inputs a serem preenchidos 
    let name = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#password").value;
    
    //verifica se os campos estao vazios 
    if(name == ""){
        alert("preencha o nome para prosseguir");
    }else if(email == ""){
        alert("preencha um email para processeguir");
    }else if(senha == ""){
        alert("preencha uma senha para continuar");
    }else{


    //exibindo botao faz submit do formulario
    let butaosalvar = document.querySelector("#salvar");
    butaosalvar.removeAttribute("hidden");

    

   //Selecionando os labels e inputs
    let inptname = document.querySelector("#nomenone");
    let inptemail = document.querySelector("#emailnone");
    let inptpassword = document.querySelector("#passwordnone");
    let btconfirm = document.querySelector("#confirm");
    



    //escondendo os labels e inputs com hidden
    inptname.setAttribute('hidden',true);
    inptemail.setAttribute('hidden',true);
    inptpassword.setAttribute('hidden',true);
    btconfirm.style.display="none";



    //exibindo os dados de confirmaçã
    let confdatanome = document.querySelector("#confnome");
    confdatanome.removeAttribute("hidden");
    let confdataemail = document.querySelector("#confemail");
    confdataemail.removeAttribute("hidden");
    let confdatapassword = document.querySelector("#confpassword");
    confdatapassword.removeAttribute("hidden");
    
    //imprimindo dados de confirmação
    confdatanome.innerHTML= "Nome: "+ name;
    confdataemail.innerHTML = "Email: "+ email;
    confdatapassword.innerHTML = "Password:  "+ senha;
}

    
}






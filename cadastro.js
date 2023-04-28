function Validar(){
    let email = document.getElementById('email').Value
    let nome =  document.getElementById('nome').Value
    let telefone = document.getElementById('telefone').Value
    let data = document.getElementById('data').Value
    let CPF = document.getElementById('CPF').Value
    let cidade = document.getElementById('cidade').Value
    let rua = document.getElementById('rua').Value
    let numero = document.getElementById('numero').Value
    let senha = document.getElementById('senha').Value

    if(email&&nome&&data_de_nascimento&&CPF&&cidade&&rua&&numero&&senha&&repetir_senha&&tell){
        if(senha === repetir_senha){
    alert("campos preenchidos obrugatório.  Favor preencher");
    }else{
        alert("campos preenchidos com sucesso");
    };
}else{
    alert('preenchea todos os campos!');
};

};

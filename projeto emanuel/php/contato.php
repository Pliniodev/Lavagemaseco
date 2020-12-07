<?php

if(isset($_POST["email"]) && !empty($_POST["email"])){ // se no campo email algo for escrito e(&&) o campo não estiver vazio então:

$nome = addslashes($_POST["nome"]); // chama o campo no html pelo name
$email = addslashes($_POST["email"]);
$mensagem = addslashes($_POST["mensagem"]);

//campos do recebimento do email    
$to = "admin@localhost"; 
$subject = "Contato - Emanuel Lavagem a Seco";
$body = "Nome: ".$nome. "\n".
        "Email: ".$email. "\n".
        "Mensagem: ".$mensagem;

//Cabeçalho do email
$header = "From: contato@emaildeexemplo.com"."\r\n"."Reply-To:".$email."\r\n"."X=Mailer:PHP/".phpversion();
    
if(mail($to,$subject,$body,$header)){
    
    echo("Email Enviado com sucesso!");
        
}else{
    
    echo("O Email não pôde ser enviado");
}    
    
}
    
    
?>
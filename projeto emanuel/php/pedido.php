<?php

if(isset($_POST["email"]) && !empty($_POST["email"])){ // se no campo email algo for escrito e(&&) o campo não estiver vazio então:

$nome = addslashes($_post["Pnome"]); // chama o campo no html pelo name
$email = addslashes($_post["Pemail"]);
$imagem = addslashes($_post["image_uploads"]);
$celular = addcslashes($post["Ptel"]);
    
//campos do recebimento do email    
$to = "admin@localhost"; 
$subject = "Contato - Emanuel Lavagem a Seco";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Celular: ".$celular. "\r\n".
        "Foto: ".$imagem;

//Cabeçalho do email
$header = "From: contato@emaildeexemplo.com"."\r\n"."Reply-To:".$email."\r\n"."X=Mailer:PHP/".phpversion();
    
if(mail($to,$subject,$body,$header,$imagem)){
    
    echo("Pedido de orçamento enviado com sucesso!");
        
}else{
    
    echo("O Pedido de orçamento não pôde ser enviado");
}    
    
}
    
    
?>
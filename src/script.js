$(document).ready(() => {
  $(".nav-toggle").on("click", () => {
    $("#nav-bar ul").slideToggle("medium");
  });


  $("#contact-form").on("submit", function(event){
    event.preventDefault();

    if(!$("#name").val() )
    {
        alert("Campo nome deve ser informado");
    }

    const formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        subjetc: $("#subject").val(),
        message: $("#message").val()
    };
    
    console.log(formData);

    /*
    $.ajax({
        type:"POST",
        url: 'endereco-backend',
        data: formData,
        success: function(response){
            console.log("Formulário enviado com sucesso");
        },
        error: function(error) {
            console.error("Erro ao enviar o formulário", error);
        }
    });
    */
    
  });

});

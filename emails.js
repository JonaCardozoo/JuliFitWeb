document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.init("YT79i6LEEtncoBRwh");

    emailjs.send("service_wgq0ivj", "template_n63kr41", {
        to_name: "Cliente",
        from_name: document.getElementById('nombre').value,
        user_email: document.getElementById('email').value,
    })
    .then(function() {
        // Muestra un mensaje de éxito
        document.getElementById('successMessage').style.display = 'block';
    }, function(error) {
        console.error("Hubo un error al enviar el correo:", error);
    });
});

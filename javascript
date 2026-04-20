javaScriptdocument.querySelectorAll('.mood-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remover clase activa de todos los botones
        document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('active'));
        
        // Añadir clase activa al seleccionado
        this.classList.add('active');
        
        // Obtener el estado de ánimo del atributo data-mood
        const mood = this.getAttribute('data-mood');
        
        // Actualizar el texto en pantalla
        const display = document.getElementById('mood-display');
        display.innerText = "Estado: " + mood;
        
        // Aquí podrías enviar este dato a una base de datos si quisieras
        console.log("Estado de ánimo guardado: " + mood);
    });
});
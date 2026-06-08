document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const fields = [
        document.getElementById('nombres'),
        document.getElementById('apPaterno'),
        document.getElementById('apMaterno'),
        document.getElementById('ci'),
        document.getElementById('registroU'),
        document.getElementById('fechaNac'),
        document.getElementById('camiseta'),
        document.getElementById('talla')
    ];
    
    let allFilled = true;
    
  
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value.trim()) {
            allFilled = false;
            break;
        }
    }
    

    if (!allFilled) {
        alert('no llenado completamente');
    } else {
        alert('Formulario verificado con éxito');
       
        document.getElementById('registroForm').reset();
    }
});
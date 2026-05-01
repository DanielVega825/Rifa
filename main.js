document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('raffle-grid');

    // Simulate some predefined data with names and states
    // States: 'available', 'pending', 'paid'
    const raffleData = {};

    // Example Test Data
    raffleData['07'] = { state: 'paid', name: 'Sebastian Niño' };
    raffleData['56'] = { state: 'paid', name: 'Sebastian Niño' };
    raffleData['16'] = { state: 'paid', name: 'Natalia Rodriguez' };
    raffleData['03'] = { state: 'paid', name: 'Natalia Rodriguez' };
    raffleData['14'] = { state: 'paid', name: 'Mauricio Linares' };
    raffleData['09'] = { state: 'paid', name: 'Carolina Rodriguez' };
    raffleData['13'] = { state: 'paid', name: 'Carolina Rodriguez' };
    raffleData['28'] = { state: 'paid', name: 'Carolina Rodriguez' };
    raffleData['61'] = { state: 'paid', name: 'Alvaro Linares' };
    raffleData['65'] = { state: 'paid', name: 'Alvaro Linares' };
    raffleData['78'] = { state: 'paid', name: 'Pato' };
    raffleData['15'] = { state: 'paid', name: 'Pato' };
    raffleData['17'] = { state: 'paid', name: 'Yesica' };

    //Vega Dias
    raffleData['12'] = { state: 'paid', name: 'Maritza Diaz' };
    raffleData['23'] = { state: 'paid', name: 'Jhon Vega' };
    raffleData['63'] = { state: 'paid', name: 'Luisa Vega' };
    raffleData['06'] = { state: 'paid', name: 'Adinael Vega' };

    //Janeth
    raffleData['18'] = { state: 'paid', name: 'Janeth Casallas' };
    raffleData['21'] = { state: 'paid', name: 'Janeth Casallas' };
    raffleData['35'] = { state: 'paid', name: 'Janeth Casallas' };
    raffleData['26'] = { state: 'paid', name: 'Janeth Casallas' };
    raffleData['89'] = { state: 'paid', name: 'Janeth Casallas' };

    //Gladys
    raffleData['33'] = { state: 'paid', name: 'Alex Niño' };
    raffleData['54'] = { state: 'paid', name: 'Gladys Linares' };
    raffleData['50'] = { state: 'paid', name: 'Pedro Linares' };

    //DianaVega
    raffleData['32'] = { state: 'paid', name: 'Diana Vega' };

    //Diego Vega
    raffleData['11'] = { state: 'paid', name: 'Diego Vega' };
    raffleData['25'] = { state: 'paid', name: 'Diego Vega' };

    //Lala
    raffleData['00'] = { state: 'pending', name: 'Gloria' };
    raffleData['02'] = { state: 'pending', name: 'Gloria' };
    raffleData['96'] = { state: 'pending', name: 'Gloria' };
    raffleData['81'] = { state: 'pending', name: 'Gloria' };
    raffleData['98'] = { state: 'pending', name: 'Gloria' };
    raffleData['38'] = { state: 'pending', name: 'Gloria' };
    raffleData['58'] = { state: 'pending', name: 'Gloria' };
    raffleData['86'] = { state: 'pending', name: 'Gloria' };

    //lala 2
    raffleData['27'] = { state: 'pending', name: 'Gloria' };
    raffleData['46'] = { state: 'pending', name: 'Gloria' };
    raffleData['37'] = { state: 'pending', name: 'Gloria' };
    raffleData['47'] = { state: 'pending', name: 'Gloria' };
    raffleData['57'] = { state: 'pending', name: 'Gloria' };
    raffleData['68'] = { state: 'pending', name: 'Gloria' };
    raffleData['75'] = { state: 'pending', name: 'Gloria' };

    //Magaly-Lyna-pendiente
    raffleData['01'] = { state: 'paid', name: 'Magaly-Lyna' };
    raffleData['04'] = { state: 'paid', name: 'Magaly-Lyna' };

    raffleData['19'] = { state: 'pending', name: 'Cristian-Lyna' };

    //Maria
    raffleData['87'] = { state: 'paid', name: 'Maria Garcia' };
    raffleData['41'] = { state: 'pending', name: 'Paula Garcia' };
    raffleData['39'] = { state: 'pending', name: 'Sonia Garcia' };

    //gloria Lyna
    raffleData['55'] = { state: 'paid', name: 'Gloria-Lyna' };
    raffleData['72'] = { state: 'paid', name: 'Gloria-Lyna' };

    //william -lyna
    raffleData['73'] = { state: 'paid', name: 'William-Lyna' };

    //Mamá
    raffleData['67'] = { state: 'pending', name: 'Judith Linares' };
    raffleData['53'] = { state: 'pending', name: 'Andres Gonzalez' };

    raffleData['24'] = { state: 'pending', name: 'Miguel - Daniel' };
    raffleData['77'] = { state: 'paid', name: 'Paola - Daniel' };
    raffleData['49'] = { state: 'paid', name: 'Laura Rojas' };
    raffleData['74'] = { state: 'pending', name: 'Laura Jimenez' };
    raffleData['05'] = { state: 'pending', name: 'Laura Jimenez' };

    raffleData['44'] = { state: 'paid', name: 'Fabian - Daniel' };
    raffleData['22'] = { state: 'pending', name: 'Natalia Villalobos' };
    raffleData['64'] = { state: 'paid', name: 'Arnols Alejandro' };
    raffleData['48'] = { state: 'pending', name: 'Laura Cifuentes' };
    raffleData['69'] = { state: 'paid', name: 'Richie' };
    raffleData['08'] = { state: 'pending', name: 'Arlex Beltran' };

    //Lyna de nuevo
    raffleData['70'] = { state: 'pending', name: 'Marcela - Lyna' };
    raffleData['79'] = { state: 'pending', name: 'Marcela - Lyna' };
    raffleData['97'] = { state: 'paid', name: 'Lucia Linares' };
    raffleData['76'] = { state: 'paid', name: 'Lucia Linares' };

    //Don Julio - Lyna
    raffleData['59'] = { state: 'pending', name: 'Don Julio - Lyna' };
    raffleData['82'] = { state: 'pending', name: 'Don Julio - Lyna' };

    //Daniel
    raffleData['20'] = { state: 'paid', name: 'Nicolas Novoa' };
    raffleData['10'] = { state: 'paid', name: 'Nicolas Novoa' };
    raffleData['83'] = { state: 'pending', name: 'Edwin' };

    raffleData['36'] = { state: 'pending', name: 'Yudis' };
    raffleData['31'] = { state: 'pending', name: 'Nicolas Chiquiza' };


    // Generate grid from 00 to 99
    for (let i = 0; i < 100; i++) {
        // Format number with leading zero (00, 01, ..., 99)
        const numberStr = i.toString().padStart(2, '0');

        // Create element
        const numberDiv = document.createElement('div');
        numberDiv.className = 'raffle-number';
        numberDiv.textContent = numberStr;

        // Check if there's data for this number
        if (raffleData[numberStr]) {
            const data = raffleData[numberStr];
            numberDiv.classList.add(`state-${data.state}`);

            // Set up tooltip with the person's name
            numberDiv.setAttribute('data-bs-toggle', 'tooltip');
            numberDiv.setAttribute('data-bs-placement', 'top');
            numberDiv.setAttribute('data-bs-custom-class', 'custom-tooltip');

            // Customize tooltip message based on state
            let estadoTexto = data.state === 'paid' ? 'Pagada' : 'Pendiente';
            // You can use HTML in titles if data-bs-html="true" is set, but plain text is safer
            numberDiv.setAttribute('data-bs-title', `${data.name} - ${estadoTexto}`);
        } else {
            // Optional: Tooltip for available numbers
            numberDiv.setAttribute('data-bs-toggle', 'tooltip');
            numberDiv.setAttribute('data-bs-placement', 'top');
            numberDiv.setAttribute('data-bs-title', 'Disponible');
        }

        gridContainer.appendChild(numberDiv);
    }

    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

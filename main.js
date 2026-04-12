document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('raffle-grid');

    // Simulate some predefined data with names and states
    // States: 'available', 'pending', 'paid'
    const raffleData = {};

    // Example Test Data
    raffleData['07'] = { state: 'pending', name: 'Sebastian Niño' };
    raffleData['56'] = { state: 'pending', name: 'Sebastian Niño' };
    raffleData['16'] = { state: 'paid', name: 'Natalia Rodriguez' };
    raffleData['03'] = { state: 'paid', name: 'Natalia Rodriguez' };
    raffleData['14'] = { state: 'paid', name: 'Mauricio Linares' };
    raffleData['09'] = { state: 'paid', name: 'Carolina Rodriguez' };
    raffleData['13'] = { state: 'paid', name: 'Carolina Rodriguez' };
    raffleData['28'] = { state: 'paid', name: 'Carolina Rodriguez' };
    raffleData['61'] = { state: 'pending', name: 'Alvaro Linares' };
    raffleData['65'] = { state: 'pending', name: 'Alvaro Linares' };
    raffleData['78'] = { state: 'paid', name: 'Pato' };
    raffleData['15'] = { state: 'paid', name: 'Pato' };
    raffleData['17'] = { state: 'pending', name: 'Yesica' };

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
    raffleData['33'] = { state: 'pending', name: 'Alex Niño' };
    raffleData['54'] = { state: 'pending', name: 'Gladys Linares' };
    raffleData['50'] = { state: 'pending', name: 'Pedro Linares' };

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
    raffleData['01'] = { state: 'pending', name: 'Magaly-Lyna' };
    raffleData['04'] = { state: 'pending', name: 'Magaly-Lyna' };

    // raffleData['12'] = { state: 'pending', name: 'María Gómez' };
    // raffleData['24'] = { state: 'paid', name: 'Carlos López' };
    // raffleData['45'] = { state: 'pending', name: 'Ana Silva' };
    // raffleData['67'] = { state: 'paid', name: 'David Torres' };
    // raffleData['88'] = { state: 'pending', name: 'Laura Martínez' };
    // raffleData['99'] = { state: 'paid', name: 'Daniel García' };

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

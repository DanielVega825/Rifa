document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('raffle-grid');

    // Simulate some predefined data with names and states
    // States: 'available', 'pending', 'paid'
    const raffleData = {};

    // Example Test Data
    raffleData['07'] = { state: 'pending', name: 'Sebastian Niño' };
    raffleData['56'] = { state: 'pending', name: 'Sebastian Niño' };
    raffleData['16'] = { state: 'pending', name: 'Natalia Rodriguez' };
    raffleData['03'] = { state: 'pending', name: 'Natalia Rodriguez' };
    raffleData['14'] = { state: 'pending', name: 'Mauricio Linares' };
    raffleData['09'] = { state: 'pending', name: 'Carolina Rodriguez' };
    raffleData['13'] = { state: 'pending', name: 'Carolina Rodriguez' };
    raffleData['28'] = { state: 'pending', name: 'Carolina Rodriguez' };
    raffleData['61'] = { state: 'pending', name: 'Alvaro Linares' };
    raffleData['65'] = { state: 'pending', name: 'Alvaro Linares' };

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

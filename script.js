        // Função para mostrar/ocultar o menu suspenso
        function toggleDropdown() {
            var dropdownContent = document.querySelector('.dropdown-content');
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        }

        // Adiciona o evento de clique no botão do menu
        var dropdownButton = document.querySelector('.dropdown button');
        dropdownButton.addEventListener('click', toggleDropdown);


         // Função para mostrar/ocultar o menu
         function toggleMenu() {
            var menuContent = document.querySelector('.dropdown-content');
            var menuToggle = document.querySelector('.dropdown-toggle');
            menuContent.style.display = (menuContent.style.display === 'block') ? 'none' : 'grid';
            menuToggle.classList.toggle('close');

        }

        // Adiciona o evento de clique no botão de toggle do menu
        var menuToggle = document.querySelector('.dropdown-toggle');
        menuToggle.addEventListener('click', toggleDropdown);


        // Adiciona o evento de clique no botão de menu
        var menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        // Função para abrir o dropdown centralizado
        function openDropdown() {
            
        }
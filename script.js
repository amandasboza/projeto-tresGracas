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

        // Adiciona o evento de clique no botão de menu
        var menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        // Função para abrir o dropdown centralizado
        function openDropdown() {
            
        }

        // func do slide
        $(document).ready(function() {
            var slides = $('.slide');
            var currentSlideIndex = 0;
            var totalSlides = slides.length;
          
            // Exibe o primeiro slide
            slides.eq(currentSlideIndex).show();
          
            // Função para exibir próximo slide
            function exibirProximoSlide() {
              slides.eq(currentSlideIndex).hide();
              currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
              slides.eq(currentSlideIndex).show();
            }
          
            // Função para exibir slide anterior
            function exibirSlideAnterior() {
              slides.eq(currentSlideIndex).hide();
              currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
              slides.eq(currentSlideIndex).show();
            }
          
            // Intervalo de tempo para exibir próximo slide (3 segundos)
            var intervalo = setInterval(exibirProximoSlide, 50000);
          
            // Evento de clique do botão Próximo
            $('#botao-proximo').on('click', function() {
              clearInterval(intervalo);
              exibirProximoSlide();
              
              // Reinicia o intervalo após cada clique
              intervalo = setInterval(exibirProximoSlide, 50000);
            });
          
            // Evento de clique do botão Anterior
            $('#botao-anterior').on('click', function() {
              clearInterval(intervalo);
              exibirSlideAnterior();

              // Reinicia o intervalo após cada clique
              intervalo = setInterval(exibirProximoSlide, 50000);
            });
          });
          
    
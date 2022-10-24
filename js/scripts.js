/**
 * @fileoverview Prueba maquetación VASS
 * @version 0.1
 * @author Juan José Alonso Sánchez <juanjoalsz@gmail.com>
 * @copyright VASS
 */

 const aside = document.querySelector('aside');

 aside.addEventListener("click", (event) =>{       
     if(event.target.classList.contains('aside__leer-mas')){
         const botonLeerMas = event.target;
         const textoLeerMas = botonLeerMas.parentElement.nextElementSibling; 
 
         textoLeerMas.classList.toggle("aside__text--hide");
            if(textoLeerMas.classList.contains('aside__text--hide')){
                botonLeerMas.innerHTML = 'Leer más'
            } else {
                botonLeerMas.innerHTML = 'Leer menos'
            }
     }
 });

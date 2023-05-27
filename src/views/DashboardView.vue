<script setup>
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

const logout = () => {
  userStore.logout();
}
</script>


<template>
  <div class="container">
    <h1 class="title">Animalslife</h1>
    <button class="buttons__btn buttons__btn--logout" @click.prevent="logout">Logout</button>

    <div class="card-container">
      <div class="card">
        <img src="../assets/1.png" alt="Producto 1">
        <div class="card-content">
          <h3>Luna</h3>
          <p>Luna es una perrita rescatada de las calles. 
            Tiene aproximadamente 2 años y está en busca de 
            un hogar amoroso. Necesita donaciones para cubrir 
            sus gastos médicos y alimentación mientras se recupera.</p>
            <div class="card-buttons">
              <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
            </div>
        </div>
      </div>
  
      <div class="card">
        <img src="../assets/2.png" alt="Producto 2">
        <div class="card-content">
          <h3>Kido</h3>
          <p>Kido es un gato adorable y astuto que ha descubierto 
            la forma de controlar a su dueña con su encanto felino 
            para obtener deliciosos manjares. ¡Apóyalo con una 
            donación y ayúdale a mantener su paladar satisfecho!</p>
            <div class="card-buttons">
              <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
            </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/3.png" alt="Producto 2">
        <div class="card-content">
          <h3>Rocky</h3>
          <p>Rocky es un perro de raza mixta que fue
             abandonado en una carretera. A pesar de
              su difícil pasado, es un perro amigable 
              y leal. Necesita donaciones para recibir
               entrenamiento y ser preparado para su adopción.</p>
               <div class="card-buttons">
                <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
              </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/4.png" alt="Producto 2">
        <div class="card-content">
          <h3>Mia</h3>
          <p>Mia es una gata callejera que fue encontrada 
            con signos de malnutrición y enfermedad. Ahora 
            está en rehabilitación y requiere donaciones 
            para su tratamiento veterinario y alimentación
             especial.</p>
             <div class="card-buttons">
              <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
            </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/5.png" alt="Producto 2">
        <div class="card-content">
          <h3>Buddy</h3>
          <p>Buddy es un perro mayor que fue abandonado por
             su familia anterior. Actualmente necesita donaciones 
             para cubrir los gastos de sus medicamentos y atención
              veterinaria, ya que padece de artritis y requiere 
              cuidados especiales</p>
              <div class="card-buttons">
                <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
              </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/6.png" alt="Producto 2">
        <div class="card-content">
          <h3>Lola</h3>
          <p>Lola es una gata embarazada que fue 
            rescatada de una situación de maltrato. 
            Ahora se encuentra en un refugio y necesita 
            donaciones para cubrir los costos de su cuidado, 
            así como los gastos relacionados con el parto y
             el cuidado de los gatitos.</p>
             <div class="card-buttons">
              <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
            </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/7.png" alt="Producto 2">
        <div class="card-content">
          <h3>Charlie</h3>
          <p>Charlie es un perro de raza mixta que sufrió abuso
             y abandono. Está en proceso de recuperación emocional 
             y física, y necesita donaciones para cubrir sus necesidades
              médicas, así como para proporcionarle una dieta nutritiva 
              y juguetes interactivos.</p>
              <div class="card-buttons">
                <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
              </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/8.png" alt="Producto 2">
        <div class="card-content">
          <h3>Milo</h3>
          <p>Milo es un gato rescatado de un incendio. 
            Afortunadamente, sobrevivió, pero sufrió quemaduras
             y necesita donaciones para financiar sus tratamientos
              y proporcionarle un entorno seguro mientras se recupera.</p>
              <div class="card-buttons">
                <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
              </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/9.png" alt="Producto 2">
        <div class="card-content">
          <h3>Daisy</h3>
          <p>Daisy es una perrita de raza pequeña que fue
             abandonada en un parque. Es muy cariñosa y 
             necesita donaciones para recibir atención veterinaria,
              incluyendo vacunas, esterilización y desparasitación,
               antes de poder ser adoptada.</p>
               <div class="card-buttons">
                <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
              </div>
        </div>
      </div>
      <div class="card">
        <img src="../assets/10.png" alt="Producto 2">
        <div class="card-content">
          <h3>Simba</h3>
          <p>Simba es un gato callejero que fue encontrado herido 
            y desnutrido. Requiere donaciones para someterse a una
             cirugía y recibir terapia para recuperar su movilidad y
              mejorar su calidad de vida.</p>
              <div class="card-buttons">
                <a class="card-button" href="https://www.paypal.com/paypalme/Casasnisperuza" target="_blank" rel="noopener noreferrer">Donar</a>
              </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.container {
  text-align: center;
  background-image: url(../assets/12.png);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

}

.title {
  font-size: 64px;
  margin-bottom: 0px;
}

.buttons__btn--logout {
  background-color: #dd3333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;}


.buttons__btn--logout:hover {
  background-color: #00087a;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.card {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
}

.card img {
  width: 100%;
  border-radius: 4px;
}

.card-content {
  margin-top: 10px;
}

.card-content h3 {
  font-size: 18px;
  margin: 0;
}

.card-content p {
  font-size: 14px;
}

.card-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.card-button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;}

.card-button:hover {
  background-color: #00b61b;
  font-size: 19px;
}
</style>

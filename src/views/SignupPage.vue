<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>Crear Cuenta</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<div id="container">
				<ion-grid>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Nombre de Usuario</ion-label>
								<ion-input required v-model="name"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Correo electronico</ion-label>
								<ion-input required v-model="email"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Contraseña</ion-label>
								<ion-input clearInput type="password" required v-model="password"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Confirmar contraseña</ion-label>
								<ion-input clearInput type="password" required v-model="cpassword"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Nombre de la Empresa</ion-label>
								<ion-input required v-model="name_company"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Telefono de la Empresa</ion-label>
								<ion-input type="tel" inputmode="tel" required v-model="tel_company"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col></ion-col>
					</ion-row>
					<ion-row>
						<ion-col>Dirección de la Empresa</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Calle y número</ion-label>
								<ion-input required v-model="street_company"></ion-input>
							</ion-item>
						</ion-col>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Colonia</ion-label>
								<ion-input required v-model="neighborhood_company"></ion-input>
							</ion-item>
						</ion-col>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Codigo Postal</ion-label>
								<ion-input required v-model="postalcode_company"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Municipio</ion-label>
								<ion-input required v-model="city_company"></ion-input>
							</ion-item>
						</ion-col>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Estado</ion-label>
								<ion-input required v-model="state_company"></ion-input>
							</ion-item>
						</ion-col>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Pais</ion-label>
								<ion-input required v-model="country_company"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-button color="success" expand="block" @click="signUp()">Crear Cuenta</ion-button>
						</ion-col>
						<ion-col>
							<ion-button color="danger" expand="block" href="/">¡Ya tengo cuenta!</ion-button>
						</ion-col>
					</ion-row>
				</ion-grid>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/vue';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const auth = getAuth();

export default defineComponent({
  name: 'SignupPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonInput,
    IonLabel,
    IonItem,
    IonToolbar,
  },
  data() {
    return {
        name: "",
        email: "",
        password: "",
		cpassword: "",
		name_company: "",
        tel_company: "",
		street_company: "",
		neighborhood_company: "",
		postalcode_company: "",
		city_company: "",
		state_company: "",
		country_company: "",
	}
  },
  methods: {
    signUp() {
		createUserWithEmailAndPassword(auth, this.email, this.password)
		.then((userCredential) => {
			const user = userCredential.user;

			updateProfile(user, {
				displayName: this.name
			}).catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error.code, error.message);
			});
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(error.code, error.message);
		});
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

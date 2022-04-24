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
								<ion-input></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Contraseña</ion-label>
								<ion-input clearInput type="password"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Confirmar contraseña</ion-label>
								<ion-input clearInput type="password"></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Nombre de la Empresa</ion-label>
								<ion-input></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Telefono de la Empresa</ion-label>
								<ion-input type="tel" inputmode="tel"></ion-input>
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
								<ion-input></ion-input>
							</ion-item>
						</ion-col>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Colonia</ion-label>
								<ion-input></ion-input>
							</ion-item>
						</ion-col>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Codigo Postal</ion-label>
								<ion-input></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Municipio</ion-label>
								<ion-input></ion-input>
							</ion-item>
						</ion-col>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Estado</ion-label>
								<ion-input></ion-input>
							</ion-item>
						</ion-col>
						<ion-col>
							<ion-item>
								<ion-label position="floating">Pais</ion-label>
								<ion-input></ion-input>
							</ion-item>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-button color="success" expand="block">Crear Cuenta</ion-button>
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

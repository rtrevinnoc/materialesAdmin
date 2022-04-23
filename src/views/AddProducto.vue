<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button color="primary"></ion-menu-button>
				</ion-buttons>
				<ion-title>Productos</ion-title>
			</ion-toolbar>
		</ion-header>
    
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Productos</ion-title>
				</ion-toolbar>
			</ion-header>	

			<div id="container">
				<ion-grid>
					<ion-row>
						<ion-col>Nombre</ion-col>
						<ion-col>Imagen</ion-col>
						<ion-col>Cantidad</ion-col>
						<ion-col>Precio</ion-col>
						<ion-col>Opciones</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>Cemento</ion-col>
						<ion-col>Imagen</ion-col>
						<ion-col>30</ion-col>
						<ion-col>100</ion-col>
						<ion-col>
							<ion-icon :icon="createOutline" id="editarProductoButton" size="large"></ion-icon>
							<ion-icon :icon="closeOutline" size="large"></ion-icon>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-icon :icon="addOutline" id="addProductoButton" size="large"></ion-icon>
						</ion-col>
					</ion-row>
				</ion-grid>
			</div>

			<ion-modal trigger="addProductoButton">
				<ion-content>
					<ion-header :translucent="true">
						<ion-toolbar>
							<ion-title>Productos</ion-title>
						</ion-toolbar>
					</ion-header>


					<ion-grid>
						<ion-row>
							<ion-col>
								<ion-item>
									<ion-label position="floating">Nombre de Usuario</ion-label>
									<ion-input></ion-input>
								</ion-item>
							</ion-col>
						</ion-row>
						<ion-row size="1">
							<ion-col>
								<ion-item>
									<ion-label position="floating">Contraseña</ion-label>
									<ion-input></ion-input>
								</ion-item>
							</ion-col>
						</ion-row>
						<ion-row>
							<ion-col>
								<ion-button color="success" expand="block">Agregar</ion-button>
							</ion-col>
						</ion-row>
					</ion-grid>
				</ion-content>
			</ion-modal>

			<ion-modal trigger="editarProductoButton">
				<ion-content>
					<ion-header :translucent="true">
						<ion-toolbar>
							<ion-title>Editar</ion-title>
						</ion-toolbar>
					</ion-header>
				</ion-content>
			</ion-modal>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonCol, IonGrid, IonRow, IonModal } from '@ionic/vue';
import { addOutline, closeOutline, createOutline } from "ionicons/icons";

export default defineComponent({
  name: 'addProducto',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonGrid,
    IonCol,
    IonRow,
    IonModal
  },
  setup() {
	return { addOutline, closeOutline, createOutline };
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

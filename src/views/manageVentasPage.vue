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
						<ion-col>Precio Unitario</ion-col>
						<ion-col>Opciones</ion-col>
					</ion-row>
					<ion-row>
						<ion-col @click="openEditModal('nombre')">Cemento</ion-col>
						<ion-col @click="openEditModal('imagen')">Imagen</ion-col>
						<ion-col @click="openEditModal('cantidad')">30</ion-col>
						<ion-col @click="openEditModal('precio')">100</ion-col>
						<ion-col>
							<ion-icon :icon="closeOutline" size="large" color="danger"></ion-icon>
						</ion-col>
					</ion-row>
					<ion-row>
						<ion-col>
							<ion-icon :icon="addOutline" @click="openAddModal" size="large" color="success"></ion-icon>
						</ion-col>
					</ion-row>
				</ion-grid>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonCol, IonGrid, IonRow, modalController} from '@ionic/vue';
import { addOutline, closeOutline } from "ionicons/icons";
import addModal from './AddProductoModal.vue'
import editModal from './EditProductoModal.vue'

export default defineComponent({
  name: 'manageVentasPage',
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
  },
  setup() {
	return { addOutline, closeOutline };
  },
methods: {
    async openAddModal() {
      const modal = await modalController
        .create({
          component: addModal,
        })
      return modal.present();
    },
	async openEditModal(campo: string) {
		const modal = await modalController
		.create({
			component: editModal,
			componentProps: {
				campo: campo
			},
        })
      return modal.present();
    },
  },
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

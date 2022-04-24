<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button color="primary"></ion-menu-button>
				</ion-buttons>
				<ion-title>Ordenes</ion-title>
			</ion-toolbar>
		</ion-header>
    
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Ordenes</ion-title>
				</ion-toolbar>
			</ion-header>	

			<div id="container">
				<ion-grid>
					<ion-row>
						<ion-col>Codigo</ion-col>
						<ion-col>Nombre</ion-col>
						<ion-col>Direccion</ion-col>
						<ion-col>Correo</ion-col>
						<ion-col>Fecha Pedido</ion-col>
						<ion-col>Fecha Envio</ion-col>
						<ion-col>Fecha Entrega</ion-col>
						<ion-col>Total</ion-col>
					</ion-row>
					<ion-row @click="openDesgloseOrdenModal('asfjjo91ejop1289')">
						<ion-col>asfjjo91ejop1289</ion-col>
						<ion-col>Roberto Treviño</ion-col>
						<ion-col>Parques de Santo Domingo #912</ion-col>
						<ion-col>rtrevinnoc@wearebuildingthefuture.com</ion-col>
						<ion-col>23/04/2022</ion-col>
						<ion-col>24/04/2022</ion-col>
						<ion-col>25/04/2022</ion-col>
						<ion-col>3020</ion-col>
					</ion-row>
				</ion-grid>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonCol, IonGrid, IonRow, modalController} from '@ionic/vue';
import { closeOutline } from "ionicons/icons";
import DesgloseOrdenModal from './DesgloseOrdenModal.vue'

export default defineComponent({
  name: 'ManageOrdenesPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonCol,
    IonRow,
  },
  setup() {
	return {  };
  },
methods: {
    async openDesgloseOrdenModal(codigo: string) {
      const modal = await modalController
        .create({
          component: DesgloseOrdenModal,
          componentProps: {
            codigo: codigo
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

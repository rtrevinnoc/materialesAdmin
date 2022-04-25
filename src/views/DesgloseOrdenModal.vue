<template>
					<ion-header :translucent="true">
						<ion-toolbar>
              <ion-buttons slot="end">
                <ion-icon :icon="closeOutline" size="large" @click="modalController.dismiss()" color="danger"></ion-icon>
              </ion-buttons>
							<ion-title>Desglose de Orden {{ codigo }}</ion-title>
						</ion-toolbar>
					</ion-header>
  <ion-content class="ion-padding">
				<ion-grid>
					<ion-row>
						<ion-col>Nombre</ion-col>
						<ion-col>Cantidad</ion-col>
						<ion-col>Precio Unitario</ion-col>
						<ion-col>Total</ion-col>
					</ion-row>
					<ion-row v-for="(cantidad, material) of materiales" :key="material">
						<ion-col>{{ material }}</ion-col>
						<ion-col>{{ cantidad }}</ion-col>
						<ion-col>100</ion-col>
						<ion-col>3000</ion-col>
					</ion-row>
				</ion-grid>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, modalController, IonButtons, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { closeOutline } from "ionicons/icons";

export default defineComponent({
  name: 'DesgloseOrdenModal',
  data() {
    return {
      modalController,
      closeOutline
    }
  },
  props: {
    codigo: { type: String },
	materiales: { type: Object }
  },
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonCol,
    IonRow,
    IonButtons,
    IonIcon,
  }
});
</script>

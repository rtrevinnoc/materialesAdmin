<template>
					<ion-header :translucent="true">
						<ion-toolbar>
							<ion-buttons slot="end">
								<ion-icon :icon="closeOutline" size="large" @click="modalController.dismiss()" color="danger"></ion-icon>
							</ion-buttons>
							<ion-title>Editar Producto</ion-title>
						</ion-toolbar>
					</ion-header>
  <ion-content class="ion-padding">
					<ion-grid>
						<ion-row>
							<ion-col>
								<ion-item>
									<ion-label position="floating">{{ campo }}</ion-label>
									<ion-input></ion-input>
								</ion-item>
							</ion-col>
						</ion-row>
						<ion-row>
							<ion-col>
								<ion-button color="warning" expand="block" @click="modalController.dismiss()">Editar</ion-button>
							</ion-col>
						</ion-row>
					</ion-grid>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonButton, modalController, IonInput, IonItem, IonLabel, IonButtons, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { closeOutline } from "ionicons/icons";

export default defineComponent({
  name: 'EditProductoModal',
  props: {
    campo: { type: String },
  },
  data() {
    return {
      modalController,
      closeOutline
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
	IonButtons,
	IonIcon,
  }
});
</script>

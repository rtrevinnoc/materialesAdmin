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
						<!-- <ion-col>Nombre</ion-col> -->
						<ion-col>Direccion</ion-col>
						<ion-col>Numero</ion-col>
						<ion-col>Fecha Pedido</ion-col>
						<ion-col>Enviado</ion-col>
						<ion-col>Fecha Entrega</ion-col>
						<ion-col>Total</ion-col>
					</ion-row>
					<ion-row v-for="order in orders" :key="order.codigo" @click="openDesgloseOrdenModal(order.codigo, order.materiales)">
						<ion-col>{{ order.codigo}} </ion-col>
						<!-- <ion-col>{{ order.nombre }}</ion-col> -->
						<ion-col>Parques</ion-col>
						<ion-col>{{ order.numero}}</ion-col>
						<ion-col>{{ order.fechaPedido }}</ion-col>
						<ion-col>{{ order.enviado }}</ion-col>
						<ion-col>{{ order.fechaEntrega }}</ion-col>
						<ion-col>3020</ion-col>
					</ion-row>
				</ion-grid>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, modalController} from '@ionic/vue';
import DesgloseOrdenModal from './DesgloseOrdenModal.vue'
import { getAuth } from "firebase/auth";
import { mapGetters } from "vuex";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

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
  data() {
	return {
		orders: [] as any,
	}
  },
  mounted: function() {
	setInterval(() => {
		return this.fetchOrders();
	}, 1000);
  },
  methods: {
    async openDesgloseOrdenModal(codigo: string, materiales: string[]) {
      const modal = await modalController
        .create({
          component: DesgloseOrdenModal,
          componentProps: {
            codigo: codigo,
			materiales: materiales
          },
        })
      return modal.present();
    },
	async fetchOrders() {
		const docs = await getDocs(collection(db, "ordenes"));
		docs.forEach((doc) => {
			if (this.orders.findIndex((o: { codigo: string }) => o.codigo === doc.id) === -1) {
				var data = doc.data();

				console.log(doc.id);

				var fechaPedido = new Date(0);
				if (data.fechaPedido != null) {
					fechaPedido.setUTCSeconds(data.fechaPedido.seconds);
				}
				var fechaEntrega = new Date(0);
				if (data.fechaEntrega != null) {
					fechaEntrega.setUTCSeconds(data.fechaEntrega.seconds);
				}

				this.orders.push({
					codigo: doc.id,
					// nombre: data.nombre,
					numero: data.numero,
					materiales: data.materiales,
					fechaPedido: fechaPedido.toString(),
					fechaEntrega: fechaEntrega.toString(),
					aceptado: data.aceptado,
					enviado: data.enviado,
					entregado: data.entregado
				});
			}
		});
	}
  },
  computed: {
      ...mapGetters({
        user: "user"
      })
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

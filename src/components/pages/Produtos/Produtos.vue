<template>
    <v-data-iterator style="margin: 2%;"
      :items="items"
      :items-per-page="itemsPerPage"
      :search="search"
    >
      <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
        <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
          
          <div style="width: 50%;" class="d-flex align-center">
            <v-text-field
                  v-model="search"
                  density="comfortable"
                  placeholder="Search"
                  prepend-inner-icon="mdi-magnify"
                  style="max-width: 300px;"
                  variant="solo"
                  clearable
                  hide-details
            ></v-text-field>
          </div>
  
          <div class="d-flex align-center">
            <v-btn class="me-1">
              <span class="text-none">Total: {{ items.length }}</span>
            </v-btn>
            <v-btn class="me-1">
                <span class="text-none"> Page {{ page }} of {{ pageCount }}</span>
            </v-btn>
            <div class="d-inline-flex">
              <v-btn
                :disabled="page === 1"
                class="me-2"
                icon="mdi-arrow-left"
                size="small"
                variant="tonal"
                @click="prevPage"
              ></v-btn>
              <v-btn
                :disabled="page === pageCount"
                icon="mdi-arrow-right"
                size="small"
                variant="tonal"
                @click="nextPage"
              ></v-btn>
            </div>
          </div>
        </h1>
      </template>
  
      <template v-slot:default="{ items }">
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            sm="3"
            xl="3"
          >

          <v-card elevation="24">
            <v-img v-if="item.raw.src != null && item.raw.src != '' "
                :gradient="`to top right, rgba(255, 255, 255, .1), rgba(${item.raw.color}, .15)`"
                :src="item.raw.src "
                height="150"
                cover
            ></v-img>
            
            <v-img v-else
                :gradient="`to top right, rgba(255, 255, 255, .1), rgba(${item.raw.color}, .15)`"
                src="/src/assets/produto-nao-encontrado.png"
                height="150"
                cover
            ></v-img>

            <v-list-item
                :title="item.raw.name"
                density="comfortable"
                lines="two"
              >
                <template v-slot:title>
                  <strong class="text-h6">
                    {{ item.raw.name }}
                  </strong>
                </template>
            </v-list-item>

          </v-card>



          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </template>

  <script>
  export default {
    data () {
      return {
        search: '',
        itemsPerPage: 10,
        items: [
          {
            name: 'Logitech G Pro X',
            color: '14, 151, 210',
            dpi: 16000,
            buttons: 8,
            weight: '63g',
            wireless: true,
            price: 149.99,
            description: 'Logitech G Pro X',
            src: null,
          },
          {
            name: 'Razer DeathAdder V2',
            color: '12, 146, 47',
            dpi: 20000,
            buttons: 8,
            weight: '82g',
            wireless: false,
            price: 69.99,
            description: 'Razer DeathAdder V2',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/2.png',
          },
          {
            name: 'Corsair Dark Core RGB',
            color: '107, 187, 226',
            dpi: 18000,
            buttons: 9,
            weight: '133g',
            wireless: true,
            price: 89.99,
            description: 'Corsair Dark Core RGB',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/3.png',
          },
          {
            name: 'SteelSeries Rival 3',
            color: '228, 196, 69',
            dpi: 8500,
            buttons: 6,
            weight: '77g',
            wireless: false,
            price: 29.99,
            description: 'SteelSeries Rival 3',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/4.png',
          },
          {
            name: 'HyperX Pulsefire FPS Pro',
            color: '156, 82, 251',
            dpi: 16000,
            buttons: 6,
            weight: '95g',
            wireless: false,
            price: 44.99,
            description: 'HyperX Pulsefire FPS Pro',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/5.png',
          },
          {
            name: 'Zowie EC2',
            color: '166, 39, 222',
            dpi: 3200,
            buttons: 5,
            weight: '90g',
            wireless: false,
            price: 69.99,
            description: 'Zowie EC2',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/6.png',
          },
          {
            name: 'Roccat Kone AIMO',
            color: '131, 9, 10',
            dpi: 16000,
            buttons: 10,
            weight: '130g',
            wireless: false,
            price: 79.99,
            description: 'Roccat Kone AIMO',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/7.png',
          },
          {
            name: 'Logitech G903',
            color: '232, 94, 102',
            dpi: 12000,
            buttons: 11,
            weight: '110g',
            wireless: true,
            price: 129.99,
            description: 'Logitech G903',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/8.png',
          },
          {
            name: 'Cooler Master MM711',
            color: '58, 192, 239',
            dpi: 16000,
            buttons: 6,
            weight: '60g',
            wireless: false,
            price: 49.99,
            description: 'Cooler Master MM711',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/9.png',
          },
          {
            name: 'Glorious Model O',
            color: '161, 252, 250',
            dpi: 12000,
            buttons: 6,
            weight: '67g',
            wireless: false,
            price: 49.99,
            description: 'Glorious Model O',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/10.png',
          },
          {
            name: 'HP Omen Photon',
            color: '201, 1, 2',
            dpi: 16000,
            buttons: 11,
            weight: '128g',
            wireless: true,
            price: 99.99,
            description: 'HP Omen Photon',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/11.png',
          },
          {
            name: 'Asus ROG Chakram',
            color: '10, 181, 19',
            dpi: 16000,
            buttons: 9,
            weight: '121g',
            wireless: true,
            price: 159.99,
            description: 'Asus ROG Chakram',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/12.png',
          },
          {
            name: 'Razer Naga X',
            color: '100, 101, 102',
            dpi: 16000,
            buttons: 16,
            weight: '85g',
            wireless: false,
            price: 79.99,
            description: 'Razer Naga X',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/13.png',
          },
          {
            name: 'Mad Catz R.A.T. 8+',
            color: '136, 241, 242',
            dpi: 16000,
            buttons: 11,
            weight: '145g',
            wireless: false,
            price: 99.99,
            description: 'Mad Catz R.A.T. 8+',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/14.png',
          },
          {
            name: 'Alienware 610M',
            color: '109, 110, 114',
            dpi: 16000,
            buttons: 7,
            weight: '120g',
            wireless: true,
            price: 99.99,
            description: 'Alienware 610M',
            src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/15.png',
          },
        ],
      }
    },
    methods: {
      onClickSeeAll () {
        this.itemsPerPage = this.itemsPerPage === 4 ? this.items.length : 4
      },
    },
  }
</script>



  


<template>
    <v-card
      :title="label"
      flat
    >
      <template v-slot:text>
        <v-row>
            <v-col cols="12">
                <v-text-field
                  v-model="search"
                  :loading="false"
                  prepend-inner-icon="mdi-magnify"
                  density="compact"
                  label="Pesquise.."
                  variant="solo"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                ></v-text-field>
            </v-col>
            <v-btn v-if="Insert" class="btn-action">
                <v-icon icon="mdi-plus" color="green"></v-icon>
                Inserir
            </v-btn>
            <v-btn v-if="Edit" class="btn-action">
                <v-icon icon="mdi-pen" color="yellow"></v-icon>
                Editar
            </v-btn>
            <v-btn v-if="Delete" class="btn-action">
                <v-icon icon="mdi-delete" color="red"></v-icon>
                Deletar
            </v-btn>
            <v-btn  v-if="Update" class="btn-action">
                <v-icon icon="mdi-rotate-3d-variant" color="blue"></v-icon>
                Atualizar
            </v-btn>
        </v-row>
      </template>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :search="search"
        item-value="name"
        :show-select="Select"
      ></v-data-table>
    </v-card>
  </template>
<script>
export default {
    props: {
        items: [],
        label: String,
        Insert: {type: Boolean,default: true},
        Edit: {type: Boolean,default: true},
        Delete: { type: Boolean,default: true},
        Update: {type: Boolean,default: true},
        Select: {type: Boolean,default: true},
    },
    data() {
        return {
            search: '',
            selected: [],
        }
    },
}
</script>


<style>
.btn-action{
  margin: 0.5%;
}



</style>
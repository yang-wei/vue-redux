<template>
  <div class="container">
    <h3>Todo List</h3>
    <table class="table">
       <tr v-repeat="item: items" track-by="id">
         <td v-text="item.title"></td>
         <td class="remove-button"><button v-on="click: removeItem(item)">X</button></td>
       </tr>
    </table>
    <div class="input">
      <input type="text" v-model="title" />
      <button class="add" v-on="click: addItem">Add Item</button>
    </div>
  <div>
</template>

<style>
  .container {
    width: 600px;
    margin: 80px auto;
  }

  .table {
    width: 250px;
  }

  .table > tr {
    padding: 10px 15px;
  }

  button {
    padding: 5px 10px;
    background-color: #8e44ad;
    border: 1px solid #8E44AC;
    color: #fff;
    border-radius: 3px;
  }
  
  .remove-button {
    float: right;
  }

  .input {
    margin-top: 20px;
  }

  input[text] {
    padding: 2px 5px;
  }

</style>

<script>

import { addItem, removeItem } from '../action/ItemAction.js'

export default {
  props: ['state', 'actions'],
  data() {
    return {
      title: '',
    }
  },
  computed: {
    items: function() {
      return this.state.items;
    },
  },
  methods: {
    addItem() {
      if(this.title.trim()) {
        this.actions.addItem(this.title)
      }
      this.title = ''
    },
    removeItem(item) {
      this.actions.removeItem(item.id)
    }
  },

}
</script>
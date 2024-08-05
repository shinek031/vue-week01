<script setup>
import { ref } from 'vue'
const reSet = (_item) => {
  reNameTemp.value.id = _item.id
  reNameTemp.value.name = _item.name
  reNameTemp.value.remake = _item.remake
  reNameTemp.value.price = _item.price
  reNameTemp.value.stock_number = _item.stock_number
  if (reNameTemp.value.id === 0) {
    reNameTemp.value.flg_isNew = true
  } else {
    reNameTemp.value.flg_isNew = false
  }
}
const clear = () => {
  reNameTemp.value.id = 0
  reNameTemp.value.name = String.empty
  reNameTemp.value.remake = String.empty
  reNameTemp.value.price = 0
  reNameTemp.value.stock_number = 0
  reNameTemp.value.flg_isNew = true
}
const AddorUpdata = () => {
  if (reNameTemp.value.price <= 0) {
    alert('價格不得<=0')
    return
  }
  if (reNameTemp.value.stock_number <= 0) {
    alert('庫存不得<=0')
    return
  }
  if (reNameTemp.value.flg_isNew) {
    todos.value.push({
      id: Date.now(),
      name: reNameTemp.value.name,
      remake: reNameTemp.value.remake,
      price: reNameTemp.value.price,
      stock_number: reNameTemp.value.stock_number
    })
  } else {
    var index = todos.value.findIndex((item) => item.id === reNameTemp.value.id)
    if (index >= 0) {
      todos.value[index].name = reNameTemp.value.name
      todos.value[index].remake = reNameTemp.value.remake
      todos.value[index].price = reNameTemp.value.price
      todos.value[index].stock_number = reNameTemp.value.stock_number
    } else {
      alert('找不到變更資料')
    }
  }
  clear()
}
const Del = (_item) => {
  var index = todos.value.findIndex((item) => item.id === _item.id)
  todos.value.splice(index, 1)
}
const reNameTemp = ref({
  id: 0,
  name: 'XXX',
  remake: 'XXXXX',
  price: 50,
  stock_number: 10,
  flg_isNew: true
})
const todos = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    remake: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock_number: 20
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    remake: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock_number: 18
  },
  {
    id: 3,
    name: '翡翠檸檬',
    remake: '綠茶與檸檬的完美結合',
    price: 55,
    stock_number: 34
  },
  {
    id: 4,
    name: '四季春茶',
    remake: '香醇四季春茶，回甘無比',
    price: 45,
    stock_number: 10
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    remake: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock_number: 25
  },
  {
    id: 6,
    name: '檸檬冰茶',
    remake: '檸檬與冰茶的清新組合',
    price: 45,
    stock_number: 20
  },
  {
    id: 7,
    name: '芒果綠茶',
    remake: '芒果與綠茶的獨特風味',
    price: 55,
    stock_number: 18
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    remake: '抹茶與鮮奶的絕配',
    price: 60,
    stock_number: 20
  }
])
</script>
<template>
  <div>
    <h3>新增品項</h3>
    <div>
      <span>id:</span><span>{{ reNameTemp.id }}</span>
    </div>
    <div><span>品項:</span><input type="text" v-model="reNameTemp.name" /></div>
    <div><span>描述:</span><input type="text" v-model="reNameTemp.remake" /></div>
    <div>
      <span>價格:</span>
      <button type="button" @click="reNameTemp.price--">-</button>
      <input type="number" v-model="reNameTemp.price" />
      <button type="button" @click="reNameTemp.price++">+</button>
    </div>
    <div>
      <span>庫存:</span>
      <button type="button" @click="reNameTemp.stock_number--">-</button>
      <input type="number" v-model="reNameTemp.stock_number" />
      <button type="button" @click="reNameTemp.stock_number++">+</button>
    </div>
    <div>
      <button type="button" @click="AddorUpdata">
        {{ reNameTemp.flg_isNew ? '確認新增' : '確認變更' }}
      </button>
    </div>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">品項</th>
        <th scope="col">描述</th>
        <th scope="col">價格</th>
        <th scope="col">庫存</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in todos" :key="item.id">
        <td scope>{{ item.name }}</td>
        <td scope>{{ item.remake }}</td>
        <td scope>{{ item.price }}</td>
        <td scope>{{ item.stock_number }}</td>
        <td><button type="button" @click="reSet(item)">變更</button></td>
        <td><button type="button" @click="Del(item)">刪除</button></td>
      </tr>
    </tbody>
  </table>
  <!-- <h2>內容變更</h2>
  <div class="border border-2">
    <input type="text" v-model="reNameTemp.name" />
    <button type="button">確認</button>
    <button type="button">取消</button>
  </div> -->
</template>
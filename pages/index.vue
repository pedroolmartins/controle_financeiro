<script setup lang="ts">
import { Loading } from '@element-plus/icons-vue';

const route = useRoute()
const message = 'test'
const value1 = ref('')
</script>

<template>
  <div>
    <p>Current route: {{ route.path }}</p>

    <el-button @click="ElMessage('hello')">{{ message }}</el-button>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <LazyElButton :icon="ElIconApple" type="warning">lazy button</LazyElButton>

    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker v-model="value1" type="date" placeholder="Pick" format="DD/MM/YYYY" />
    </div>
    <a href="">teste</a>
    <el-icon class="is-loading">
      <Loading />
    </el-icon>
  </div>
</template>

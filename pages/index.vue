<script setup lang="ts">
import { Edit, Loading, Promotion } from '@element-plus/icons-vue';


definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const message = 'test'
const value1 = ref('')
</script>

<template>
  <div>
    <p>Current route: {{ route.path }}</p>

    <div>
      <NuxtLink to="/cadastro_despesas">
        <el-button @click="ElMessage('hello')">
          Cadastrar nova despesa
        </el-button>
      </NuxtLink>
    </div>
    <el-button type="primary" :icon="Edit">Edit</el-button>
    <NuxtLink to="/cadastro_despesas" class="">
      <ElButton :icon="ElIconEditPen" type="success">
        Cadastrar nova despesa
      </ElButton>
    </NuxtLink>
    <el-button type="primary" :icon="Edit">Edit</el-button>

    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker v-model="value1" type="date" placeholder="Pick" format="DD/MM/YYYY" />
    </div>
    <a href="">teste</a>
    <el-icon class="is-loading">
      <Promotion />
    </el-icon>

    <div class="relative rounded-xl overflow-auto p-2">
      <div
        class="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-blue rounded-lg">
        <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">01</div>
        <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">02</div>
        <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">03</div>
      </div>
    </div>
    <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
  </div>
</template>

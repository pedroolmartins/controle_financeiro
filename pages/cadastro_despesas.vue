<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';

</script>

<template>
    <el-page-header :title="'Voltar'" :icon="ArrowLeft" @back="$router.go(-1)">	
        <template #content>
            <span class="text-large font-600 mr-3"> Cadastar nova despesa </span>
        </template>
    </el-page-header>

    <div class="flex justify-center mt-6">
        <FormExpenses></FormExpenses>
    </div>
</template>
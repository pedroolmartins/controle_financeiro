<template>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto" class="demo-ruleForm"
        :size="formSize" status-icon>
        <el-form-item label="Despesa" prop="name" :label-position="itemLabelPosition">
            <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="Tipo" prop="region" :label-position="itemLabelPosition">
            <el-select v-model="ruleForm.region" placeholder="Activity zone">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="Data" :label-position="itemLabelPosition" required>
            <el-col>
                <el-form-item prop="date1">
                    <el-date-picker v-model="ruleForm.date1" type="date" aria-label="Pick a date"
                        placeholder="Pick a date" style="width: 100%" format="DD/MM/YYYY" />
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="Valor" :label-position="itemLabelPosition" required>
            <el-input v-model="ruleForm.value" placeholder=""
                :formatter="(value: any) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="(value: any) => value.replace(/\$\s?|(,*)/g, '')" />
        </el-form-item>
        <el-form-item label="Instant delivery" :label-position="itemLabelPosition" prop="delivery">
            <el-switch v-model="ruleForm.delivery" />
        </el-form-item>
        <el-form-item label="Activity location" :label-position="itemLabelPosition" prop="location">
            <el-segmented v-model="ruleForm.location" :options="locationOptions" />
        </el-form-item>
        <el-form-item label="Activity type" :label-position="itemLabelPosition" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox value="Online activities" name="type">
                    Online activities
                </el-checkbox>
                <el-checkbox value="Promotion activities" name="type">
                    Promotion activities
                </el-checkbox>
                <el-checkbox value="Offline activities" name="type">
                    Offline activities
                </el-checkbox>
                <el-checkbox value="Simple brand exposure" name="type">
                    Simple brand exposure
                </el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources" :label-position="itemLabelPosition" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
                <el-radio value="Sponsorship">Sponsorship</el-radio>
                <el-radio value="Venue">Venue</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form" :label-position="itemLabelPosition" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
                Create
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormItemProps, FormProps, FormRules } from 'element-plus'

interface RuleForm {
    name: string
    region: string
    count: string
    date1: string
    date2: string
    delivery: boolean
    location: string
    type: string[]
    resource: string
    desc: string
    value: string
}

const labelPosition = ref<FormProps['labelPosition']>('top')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('top')
const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: '',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    location: '',
    type: [],
    resource: '',
    desc: '',
    value: '',
})

const locationOptions = ['Home', 'Company', 'School']

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    count: [
        {
            required: true,
            message: 'Please select Activity count',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
        },
    ],
    location: [
        {
            required: true,
            message: 'Please select a location',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))
</script>
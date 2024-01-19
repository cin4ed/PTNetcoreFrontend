<template>  
  <h1>Login</h1>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import auth from '@/auth'

  const router = useRouter()
  
  const form = reactive({
    email: '',
    password: ''
  })
  
  const login = async () => {
    try {
      const response = await auth.login(form.email, form.password)
      auth.setToken(response.data)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  </script>
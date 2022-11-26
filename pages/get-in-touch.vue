<script setup>

import { PhoneIcon } from '@heroicons/vue/24/outline'

const config = useRuntimeConfig()

const form = reactive({

  body: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    phoneNumber: '',
    companyName: '',
    message: '',
    marketing: false
  },

  response: null,
  errors: {},
  pending: false

})

const submit = async () => {
  form.pending = true
  form.errors = {}

  try {
    const { data } = await $fetch(`${ config.public.pes }/contact`, {
      method: 'POST',
      body: form.body
    })

    form.response = data
    form.pending = false
    await navigateTo('/request-success')
  } catch (error) {
    console.info('error?.response')
    console.dir(error?.response?._data)
    form.errors = error?.response?._data?.errors ?? {}

    form.pending = false
  }

}

</script>

<template>

  <div class="container relative mt-[15vh]">

    <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Contact Us</h1>

    <div class="px-8">

      <p class="my-8 text-lg leading-8 text-slate-300">
        For general enquiries...<br/>
        If you are looking for a demo, you can <nuxt-link to="/schedule-a-demo">request a demo</nuxt-link>.
      </p>

      <div class="flex ml-">

        <div class="shrink inline-block rounded-full w-14 h-14 ring-1 ring-slate-300/10 text-slate-200">
          <phone-icon class="stroke-1 w-[65%] h-[65%] m-[17.5%]" />
        </div>

        <div class="pl-8 text-lg">
          +44 (0)20 3778 1580<br/>
          Mon - Fri, 8:00-22:00
        </div>

      </div>

    </div>

    <div class="mt-20">

      <form @submit.prevent="submit">

      <div class="flex flex-wrap justify-center">

        <div class="w-6/12 pr-5">

          <input-field label="Given Name" name="firstName" :errors="form.errors" v-slot="props">
            <input v-model="form.body.firstName" type="text" tabindex="1" placeholder="..." required v-bind="props" />
          </input-field>

          <input-field label="Your email" name="email" :errors="form.errors" v-slot="props">
            <input v-model="form.body.email" type="email" tabindex="3" placeholder="..." required v-bind="props" />
          </input-field>

          <input-field label="Phone Number" name="phoneNumber" :errors="form.errors" v-slot="props">
            <input v-model="form.body.phoneNumber" type="tel" tabindex="4" placeholder="..." required pattern="\d{11}" v-bind="props" />
          </input-field>

          <input-field label="Company Name" name="companyName" :errors="form.errors" v-slot="props">
            <input v-model="form.body.companyName" type="text" tabindex="5" placeholder="..." required v-bind="props" />
          </input-field>

          <input-field label="Job Title" name="jobTitle" :errors="form.errors" v-slot="props">
            <input v-model="form.body.jobTitle" type="text" tabindex="6" v-bind="props" required />
          </input-field>


        </div>

        <div class="w-6/12 pl-5">

          <input-field label="Family Name" name="lastName" :errors="form.errors" v-slot="props">
            <input v-model="form.body.lastName" type="text" tabindex="2" placeholder="..." required v-bind="props" />
          </input-field>

          <input-field label="Message" name="message" :errors="form.errors" v-slot="props">
            <textarea v-model="form.body.message" rows="16" tabindex="8" placeholder="..." required v-bind="props" />
          </input-field>

        </div>

      </div>

      <div class="flex justify-between items-center">

        <div class="inline-flex items-center">
          <input v-model="form.marketing" id="input-newsletter" type="checkbox" class="form-check">
          <label for="input-newsletter" class="ml-2 text-sm font-medium text-slat-500">I would like to signup for the newsletter</label>
        </div>

        <button type="submit" class="ml-8 button-primary" :disabled="form.pending">Send Request</button>
      </div>

    </form>

    </div>

  </div>

</template>

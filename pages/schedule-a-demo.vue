<script setup>
const config = useRuntimeConfig()

const form = reactive({

  body: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    phoneNumber: '',
    companyName: '',
    companySize: '',
    country: '',
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
    const { data } = await $fetch(`${ config.public.pes }/demo-request`, {
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

    <div class="flex flex-wrap mb-20">

      <div class="w-full md:w-6/12">
        <h1 class="text-2xl font-bold tracking-tight sm:text-5xl">
          Schedule a demo
        </h1>

        <p class="mt-6 text-lg leading-8 text-slate-300">
          A representative will explain and demonstrate how our solution works and how it can benefit your organisation over a web meeting using screen share.<br />
        </p>

        <p class="mt-6 text-lg leading-8 text-slate-400">
          We recommend reserving at least 30 minuets, there is a lot talk about.
        </p>

      </div>

      <div class="w-full md:w-6/12">
        <img src="@/assets/img/brain.svg" class="mx-auto md:mr-0 md:pl-10 mt-20 md:mt-0 breath" />
      </div>

    </div>

    <div>

      <form @submit.prevent="submit">

        <div class="flex flex-wrap justify-center">

          <div class="w-6/12 pr-5">

            <input-field label="Given Name" name="firstName" :errors="form.errors" v-slot="props">
              <input v-model="form.body.firstName" type="text" tabindex="1" placeholder="..." v-bind="props" />
            </input-field>

            <input-field label="Your email" name="email" :errors="form.errors" v-slot="props">
              <input v-model="form.body.email" type="email" tabindex="3" placeholder="..." v-bind="props" />
            </input-field>

            <input-field label="Company Name" name="companyName" :errors="form.errors" v-slot="props">
              <input v-model="form.body.companyName" type="text" tabindex="5" placeholder="..." v-bind="props" />
            </input-field>

            <input-field label="Company Size" name="companySize" :errors="form.errors" v-slot="props">
              <input v-model="form.body.companySize" type="text" tabindex="6" placeholder="..." v-bind="props" />
            </input-field>

            <input-field label="Country or Region" name="country" :errors="form.errors" v-slot="props">
              <input v-model="form.body.country" type="text" tabindex="7" placeholder="..." v-bind="props" />
            </input-field>

          </div>

          <div class="w-6/12 pl-5">

            <input-field label="Family Name" name="lastName" :errors="form.errors" v-slot="props">
              <input v-model="form.body.lastName" type="text" tabindex="2" placeholder="..." v-bind="props" />
            </input-field>

            <input-field label="Phone Number" name="phoneNumber" :errors="form.errors" v-slot="props">
              <input v-model="form.body.phoneNumber" type="tel" tabindex="4" placeholder="..." pattern="\d{11}" v-bind="props" />
            </input-field>

            <input-field label="Job Title" name="jobTitle" :errors="form.errors" v-slot="props">
              <input v-model="form.body.jobTitle" type="text" tabindex="6" v-bind="props" />
            </input-field>

            <input-field label="Message" name="message" :errors="form.errors" v-slot="props">
              <textarea v-model="form.body.message" rows="6" tabindex="8" placeholder="..." v-bind="props" />
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

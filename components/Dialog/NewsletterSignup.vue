<script setup>
const config = useRuntimeConfig()
const hasStorage = typeof window !== 'undefined' && 'localStorage' in window

const form = reactive({
  display: false,

  can: {
    email: false
  },

  subscribed: {
    email: hasStorage ? (window.localStorage.getItem('network.email') || '') : ''
  },

  body: {
    email: ''
  },

  response: null,
  errors: {},
  pending: false
})

const visibility = computed(() => form.display ? '' : 'hidden')

const validEmail = computed(() => {
  const mail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  return mail.test(form.body.email)
})

const subscribe = async () => {
  // const headers = new Headers()
  // headers.append('Content-Type', 'application/json')

  form.pending = true
  form.errors = {}

  try {
    const { data } = await $fetch(`${ config.public.pes }/subscribe`, {
      method: 'POST',
      body: form.body
    })

    form.response = data

    if (hasStorage) {
      window.localStorage.setItem('network.newsletter', form.body.email)
    }

    // Set copy of subscribed e-mail
    form.subscribed.email = form.body.email.slice()

    form.pending = false
  } catch (error) {
    form.errors = error?.response?._data?.errors ?? {}
    form.pending = false
  }

}

</script>

<template>

  <div v-if="hasStorage">

    <template v-if="form.subscribed.email">

      Thank you for registering your interest.<br>
      <small>You are signed up to receive newsletters.</small>

    </template>

    <template v-else>

      <div class="subscriber w-full">
        <input v-model="form.body.email" type="email" class="form-input" placeholder="Enter E-Mail Address" />
        <button class="button-primary" :disabled="!validEmail || form.pending" @click="form.display = true">Subscribe</button>
      </div>

      <div tabindex="-1" class="flex justify-center items-center overflow-hidden fixed top-0 right-0 left-0 bottom-0 z-50 bg-gray-900 bg-opacity-95" :class="visibility">

        <form @submit.prevent.stop="subscribe">

          <div class="relative max-w-lg">
            <!-- Modal content -->
            <div class="relative rounded-lg shadow bg-slate-800">
              <!-- Modal header -->
              <div class="flex justify-between items-center p-5 rounded-t border-b border-slate-700">

                <h3 class="text-xl font-medium text-white">
                  Mailing List Subscription
                </h3>

                <button @click="form.display = false" type="button"
                        class="text-white bg-transparent hover:text-red-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="medium-modal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>

              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6 text-base leading-relaxed text-slate-300">

                <div class="text-left">

                  <h5 class="text-md mb-4 text-slate-100">
                    Marketing Permissions
                  </h5>

                  <p class="text-xs mb-4">
                    Please confirm methods of contact we may use:
                  </p>

                  <div class="flex items-center">
                    <input v-model="form.can.email" id="input-newsletter" type="checkbox" class="form-check">
                    <label for="input-newsletter" class="ml-2 text-sm font-medium text-slat-500">E-Mail</label>
                  </div>

                  <p class="my-4 text-xs">
                    You can unsubscribe at any time by clicking the link in the footer of our emails.
                  </p>

                  <p class="text-xs">
                    We use Mailchimp as our marketing platform. By clicking <strong>I accept</strong>, you acknowledge that your
                    information will be transferred to Mailchimp for processing.<br>
                    To learn more about Mailchimp privacy practices, <a href="https://mailchimp.com/legal/" target="_blank" class="text-underline">click here.</a>
                  </p>

                </div>

              </div>
              <!-- Modal footer -->
              <div class="flex items-center p-6 space-x-6">

                <button data-modal-toggle="medium-modal" type="submit" :disabled="!form.can.email"
                        class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 disabled:bg-slate-900">
                  I accept
                </button>

                <button @click="form.display = false" data-modal-toggle="medium-modal" type="button"
                        class="bg-gray-700 text-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-600 rounded-lg border text-sm font-medium px-5 py-2.5 border-gray-500 hover:text-white ">
                  Decline
                </button>

              </div>

            </div>

          </div>

        </form>

      </div>

    </template>

  </div>

</template>

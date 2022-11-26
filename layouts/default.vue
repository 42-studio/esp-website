<template>

  <div class="app relative text-slate-200 flex flex-col">

    <div class="relative container">

      <div class="min-h-full absolute isolate blur-3xl inset-x-0 top-[-8rem] left-[-12rem] -z-10 transform-gpu overflow-hidden">
        <svg class="max-w-none rotate-[60deg]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#esp39xu3)" fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="esp39xu3" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#d60b44" />
              <stop offset="1" stop-color="#26b0ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>

    <div class="relative grow">

      <MainNavigation />

      <main class="overflow-x-clip pb-[30vh]">
        <slot />
      </main>

      <div class="absolute bottom-0 left-0 right-0 -z-10">
        <div class="bg-footer flex items-end justify-center">
          <footer class="text-xs text-thin text-slate-500 p-5">
            ESPROFILER LIMITED, A COMPANY REGISTERED IN ENGLAND AND WALES WITH COMPANY NUMBER: 12711421, VAT NUMBER: 378676921
          </footer>
        </div>
      </div>

    </div>

  </div>

</template>

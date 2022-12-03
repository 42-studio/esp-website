<template>

  <div class="app relative text-slate-200 flex flex-col">

    <div class="relative container">

      <div class="w-screen-2xl absolute isolate blur-3xl inset-x-0 top-[4rem] left-[12rem] -z-10 transform-gpu overflow-hidden">
        <svg class="max-w-none rotate-[96deg]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#esp39xu3)" fill-opacity=".5"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="esp39xu3" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop offset="0" style="stop-color: #79349c;" />
              <stop offset="1" style="stop-color: #62a1cb;" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>

    <div class="relative grow">

      <elements-main-navigation />

      <main class="overflow-x-clip pb-[15vh] lg:pb-[30vh]">
        <slot />
      </main>

      <div class=bg-footer />

      <footer class="pb-5 md:pb-10">

        <div class="container block md:flex p-5 w-full items-end">

          <div class="grow">

            <div style="text-shadow: rgba(20,20,20, 0.5) 3px 3px 14px;">

              <h5 class="text-2xl text-white font-weight-bold">
                Newsletter
              </h5>

              <p class="text-sm mb-2 text-gray-400">
                Stay up-to date with our latest developments.
              </p>

            </div>

            <dialog-newsletter-signup style="box-shadow: rgba(20,20,20, 0.5) 3px 3px 14px;" />

          </div>

          <div class="grow text-right ">

            <div class="pt-2">
              <a href="https://www.linkedin.com/company/esprofiler" target="linkedin">
                <svg style="width:38px;height:38px" viewBox="0 0 24 24" class="inline-block">
                  <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
            </div>

            <div class="text-xs text-thin text-gray-400 grow pt-2">
              ESPROFILER LIMITED, Registered in England &amp; Wales<br />
              Company No. 12711421 | VAT No. 378676921
            </div>

          </div>

        </div>

      </footer>

    </div>

  </div>

</template>

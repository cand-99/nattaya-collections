<script lang="ts" setup>
import dress from '~/assets/lotties/dress.json'

useSeoMeta({
  title: 'Nattaya Collection',
  ogTitle: 'Nattaya Collection',
  description: 'Grosir & ritel dress, blouse, kemeja sweater dan knit ',
  ogDescription: 'Grosir & ritel dress, blouse, kemeja sweater dan knit ',
  ogImage: 'https://example.com/image.png'
})

</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <NuxtImg src="/bg.jpg" class="h-full w-full absolute object-cover z-0" alt="background image" />
    <div class="z-40 w-full flex flex-col justify-center items-center absolute px-4 py-3 h-full">
      <div class="max-w-xl w-full mx-auto">
        <h1 class="text-2xl text-center font-bold pt-3 text-slate-900">
          Nattaya Collections
        </h1>
        <p class="text-center text-sm text-slate-900">
          Grosir & ritel dress, blouse, kemeja sweater dan knit
        </p>
        <ClientOnly>
          <div class="-mt-5 z-0">
            <Vue3Lottie :animation-data="dress" :loop="true" :height="200" :width="160" :scale="1.1" />
          </div>
        </ClientOnly>

        <div class="w-full mt-3 space-y-3 z-20">
          <UButton
            to="https://api.whatsapp.com/send/?phone=%2B6281394134603&text&type=phone_number&app_absent=0"
            target="_blank"
            size="lg"
            block
            color="gray"
            :ui="{ rounded: 'rounded-full', font: 'font-bold' }"
          >
            WA Admin
          </UButton>
          <UButton
            to="https://shopee.co.id/nattaya_collection?uls_trackid=4uv2lfp500ks&utm_content=44T6hrbeDEAG18zndo2kLdH9WMp3"
            target="_blank"
            size="lg"
            block
            color="gray"
            :ui="{ rounded: 'rounded-full', font: 'font-bold' }"
          >
            Shopee
          </UButton>
          <UButton size="lg" block color="gray" :ui="{ rounded: 'rounded-full', font: 'font-bold' }">
            Join Grup Disini
          </UButton>

          <div class="flex space-x-4 justify-center pt-2">
            <UButton
              to="https://www.tiktok.com/@mariaviaaa0"
              size="xl"
              variant="link"
              aria-label="Tiktok"
              :padded="false"
              target="_blank"
            >
              <UIcon class="text-slate-800 w-8 h-8" name="i-simple-icons-tiktok" />
            </UButton>
            <UButton
              to="https://www.instagram.com/nattaya.collection_/?igsh=MXB3bmNpejE0bWRzOQ%3D%3D"
              size="xl"
              variant="link"
              aria-label="Instagram"
              :padded="false"
              target="_blank"
            >
              <UIcon class="text-slate-800 w-8 h-8" name="i-simple-icons-instagram" />
            </UButton>
          </div>
        </div>
      </div>
      <div class="mt-auto">
        <h1 class="text-xs font-semibold text-white">
          © {{ new Date().getFullYear() }} Nattaya Collection
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lottie-animation-container svg {
  @apply !bg-red-300
}
</style>

import React from 'react'
import Section5 from '../HomePage/Section5'
import AjouterAvisSite from '../Functions/AjouterAvisSite'
const SiteComments = () => {
  return (
    <>
    <section class="  py-8 lg:py-16">
  <div class="max-w-[1200px] mx-auto px-4 ">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900n text-blue-950">Discussion (8)</h2>
    </div>
  <AjouterAvisSite/>
    <div  >
 <Section5/>
 </div>
  </div>
</section>
    </>
  )
}

export default SiteComments
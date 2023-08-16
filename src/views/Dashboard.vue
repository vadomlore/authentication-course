<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>
      Loading events
    </p>
  </div>
</template>

<script setup>
import axios from 'axios'
import EventCard from '../components/EventCard'
import {ref, reactive, onBeforeMount} from 'vue'
    const isLoading = ref(true)
    const events = reactive([]);
    // a equal replacement 
    // const events = ref([]);

    onBeforeMount(()=>{
      axios.get('//localhost:3000/dashboard').then(({ data }) => {
        // events.value.push(...data.events.events)
        events.push(...data.events.events)
        isLoading.value = false
    })})
</script>

import axios from 'axios'
import { createInertiaApp } from '@inertiajs/vue3'

window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

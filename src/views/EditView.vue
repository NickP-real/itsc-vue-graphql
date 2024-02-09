<script setup lang="ts">
import { getIp } from '@/composables/ipUtils'
import useAddArticleMutate from '@/composables/useAddArticleMutate'
import useArticleByIdReadMoreQuery from '@/composables/useArticleByIdReadMoreQuery'
import { computed, onBeforeMount, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const { mode } = defineProps<{
  mode: 'Create' | 'Update'
}>()

type FormData = {
  title: string
  imageUrl: string
  authorName: string
  description: string
  createdDate: Date | null
  comments: string[]
}

const formData = ref<FormData>({
  title: '',
  imageUrl: '',
  authorName: '',
  description: '',
  createdDate: null,
  comments: []
})

if (formData.value.comments.length === 0) addNewComment()

async function onSubmit() {
  const { title, imageUrl, authorName, description, comments, createdDate } = formData.value
  // filter empty comments
  const filteredComments = comments.filter((comment) => comment.trim() !== '')

  const ip = await getIp()
  if (mode === 'Update') {
    return
  }

  // create article
  const { mutate } = useAddArticleMutate()
  const articleCreateResponse = await mutate({
    articleRequest: {
      title,
      imageUrl,
      createdDate: createdDate ? createdDate.toString() : null,
      description,
      authorName,
      ipAddress: ip
    }
  })
  // articleCreateResponse?.data?.articleId
}

function addNewComment() {
  formData.value.comments = [...formData.value.comments, '']
}

onBeforeMount(() => {
  if (mode === 'Update') {
    const route = useRoute()
    const articleId = parseInt(route.params.articleId.toString(), 10)

    const { result } = useArticleByIdReadMoreQuery(articleId)
    watch(
      () => result.value?.articles[0],
      (articleData) => {
        if (articleData)
          formData.value = {
            ...articleData,
            createdDate: new Date(articleData.createdDate),
            comments: articleData.comments.map((comment) => comment.message)
          }
      }
    )
    //
  }
})
</script>

<template>
  <form class="flex flex-col container mx-auto gap-4 py-20 max-w-xl" @submit.prevent="onSubmit">
    <div class="flex flex-col gap-4">
      <label for="title" class="font-semibold text-form-label">Title</label>
      <input
        id="title"
        name="title"
        v-model="formData.title"
        class="py-2 px-4 rounded"
        placeholder="as Jame Bond 007"
      />
    </div>
    <div class="flex flex-col gap-4">
      <label for="date" class="font-semibold text-form-label">Created Date</label>
      <input
        id="date"
        name="date"
        v-model="formData.createdDate"
        class="py-2 px-4 rounded"
        type="date"
        placeholder="11 / 12 / 2024"
      />
    </div>
    <div class="flex flex-col gap-4">
      <label for="image-url" class="font-semibold text-form-label">Image URL</label>
      <input
        id="image-url"
        name="imageUrl"
        v-model="formData.imageUrl"
        class="py-2 px-4 rounded"
        type="url"
        placeholder="as https://img.com/profile.png"
      />
    </div>
    <div class="flex flex-col gap-4">
      <label for="author" class="font-semibold text-form-label">Author Name</label>
      <input
        id="author"
        name="authorName"
        v-model="formData.authorName"
        class="py-2 px-4 rounded"
        placeholder="as ชัยพงษ์"
      />
    </div>
    <div class="flex flex-col gap-4">
      <label for="description" class="font-semibold text-form-label">Description</label>
      <textarea
        id="description"
        name="description"
        v-model="formData.description"
        class="py-2 px-4 rounded"
        rows="5"
        placeholder="Write a message"
      />
    </div>

    <p class="font-semibold text-form-label">Comments</p>
    <div class="flex flex-col gap-4 relative">
      <button
        type="button"
        class="absolute bg-success px-3 py-2 rounded flex items-center text-white gap-2 -right-2 translate-x-full font-semibold"
        @click="addNewComment"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_183_671)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.5 4.5C8.5 4.36739 8.44732 4.24021 8.35355 4.14645C8.25979 4.05268 8.13261 4 8 4C7.86739 4 7.74021 4.05268 7.64645 4.14645C7.55268 4.24021 7.5 4.36739 7.5 4.5V7.5H4.5C4.36739 7.5 4.24021 7.55268 4.14645 7.64645C4.05268 7.74021 4 7.86739 4 8C4 8.13261 4.05268 8.25979 4.14645 8.35355C4.24021 8.44732 4.36739 8.5 4.5 8.5H7.5V11.5C7.5 11.6326 7.55268 11.7598 7.64645 11.8536C7.74021 11.9473 7.86739 12 8 12C8.13261 12 8.25979 11.9473 8.35355 11.8536C8.44732 11.7598 8.5 11.6326 8.5 11.5V8.5H11.5C11.6326 8.5 11.7598 8.44732 11.8536 8.35355C11.9473 8.25979 12 8.13261 12 8C12 7.86739 11.9473 7.74021 11.8536 7.64645C11.7598 7.55268 11.6326 7.5 11.5 7.5H8.5V4.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_183_671">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Comment
      </button>
      <input
        id="comment"
        name="comment"
        v-for="(_, index) in formData.comments"
        v-model="formData.comments[index]"
        :key="index"
        class="py-2 px-4 rounded"
        placeholder="as ชัยพงษ์"
      />
    </div>

    <button class="text-white bg-success rounded py-2 font-semibold" v-if="mode === 'Create'">
      Create Blog
    </button>
    <button class="text-white bg-success rounded py-2 font-semibold" v-else>Update Blog</button>
  </form>
</template>

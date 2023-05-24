import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "footer" | "header"
declare module "/Users/lpieces/Desktop/music/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
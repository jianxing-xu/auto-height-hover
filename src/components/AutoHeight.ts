import { defineComponent, h, onMounted, ref } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'hover',
      validate: (v: string) => ['hover', 'click'].includes(v),
    },
    opa: {
      type: Number,
      default: 0,
    },
    h: {
      type: Number,
      default: 0.5,
    },
  },
  setup(props, ctx) {
    const panelRef = ref()
    const panelHeight = ref(0)
    const state = ref(false)

    function onClick() {
      if (props.type === 'click') {
        if (state.value) {
          hide()
          state.value = false
        }
        else {
          open()
          state.value = true
        }
      }
    }

    function open() {
      state.value = true
      if (props.h)
        panelRef.value.style.height = `${panelHeight.value}px`

      if (props.opa)
        panelRef.value.style.opacity = 1
    }
    function hide() {
      state.value = false
      panelRef.value.style.height = '0px'
      if (props.opa)
        panelRef.value.style.opacity = 0
    }

    function onMouseenter() {
      props.type === 'hover' && open()
    }
    function onMouseleave() {
      props.type === 'hover' && hide()
    }

    function getPanelHeight() {
      panelRef.value.style.height = 'auto'
      const h = panelRef.value.offsetHeight
      panelRef.value.style.height = 0
      return h
    }

    onMounted(() => {
      panelHeight.value = getPanelHeight()
    })
    const transition = `${props.h ? `height ${props.h}s` : ''}${props.opa ? `,opacity ${props.opa}s` : ''}`
    return () => h('div', { style: { position: 'relative' }, onMouseleave }, [
      h('div', { onMouseenter, onClick }, [ctx.slots.default?.()]),
      h('div', { ref: panelRef, style: { overflow: 'hidden', transition: `${transition}` } }, ctx.slots.panel?.()),
    ])
  },
})

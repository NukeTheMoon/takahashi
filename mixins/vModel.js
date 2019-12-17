/* kOpIrAjT mAjLo <3<3<3 xoxoxoxo */

const addVModel = (
  computedName = 'valueModel',
  type = [Array, Boolean, Number, String],
  def = false,
) => ({
  props: {
    value: {
      type,
      default: def,
    },
  },

  computed: {
    [computedName]: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
})

export default addVModel

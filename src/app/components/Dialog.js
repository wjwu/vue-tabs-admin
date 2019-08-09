import { Dialog } from 'element-ui';
import { CLOSE_TAB } from '../../common/js/events';

const mask = window.document.createElement('div');
mask.style.position = 'fixed';
mask.style.left = 0;
mask.style.top = 0;
mask.style.width = '100%';
mask.style.height = '100%';
mask.style.opacity = 0.5;
mask.style.background = '#000';

export default {
  name: 'DDialog',
  extends: Dialog,
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      doClosed: false
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        // this.$emit('open');
        this.$el.addEventListener('scroll', this.updatePopper);
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0;
          this.showMask();
        });
        // if (this.appendToBody) {
        //   document.body.appendChild(this.$el);
        // }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper);
        if (!this.closed) {
          this.$emit('close');
          this.$nextTick(() => {
            this.hideMask();
          });
        }
      }
    }
  },
  mounted() {
    this.$subscribe(CLOSE_TAB, params => {
      if (this.tabs.indexOf(params[0]) >= 0 && !this.doClosed) {
        if (window.parent.document) {
          window.parent.document.body.removeChild(this.$el);
        }
        this.doClosed = true;
      }
    });
    this.$nextTick(() => {
      window.parent.document.body.appendChild(this.$el);
    });
  },
  methods: {
    showMask() {
      window.parent.document.body.style.overflow = 'hidden';
      mask.style.zIndex = this.$el.style.zIndex - 1;
      mask.className = 'v-modal-enter';
      window.parent.document.body.appendChild(mask);
    },
    hideMask() {
      window.parent.document.body.style.overflow = '';
      mask.className = 'v-modal-leave';
      window.parent.document.body.removeChild(mask);
    }
  }
};

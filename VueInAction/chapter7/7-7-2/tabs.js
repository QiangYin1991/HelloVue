Vue.component('tabs', {
  template: '\
    <div class="tabs"> \
      <div class="tabs-bar"> \
        <div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)"> \
          {{ item.label }} \
        </div>\
      </div> \
      <div class="tabs-content"> \
        <slot></slot> \
      </div> \
    </div>',
    props: {
      value: {
        type: [String, Number]
      }
    },
    data() {
      return {
        currentValue: this.value,
        navList: []
      }
    },
    methods: {
      tabCls (item) {
        return [
          'tabs-tab',
          {
            'tabs-tab-active': item.name === this.currentValue
          }
        ]
      },
      handleChange (index) {
        const nav = this.navList[index];
        const name = nav.name;
        this.currentValue = name;
        this.$emit('input', name);
        this.$emit('on-click', name);
      },
      getTabs () {
        return this.$children.filter(function (item) {
          return item.$options.name === 'pane';
        });
      },
      updateNav () {
        this.navList = [];
        const _this = this;

        this.getTabs().forEach(function (pane, index) {
          _this.navList.push({
            label: pane.label,
            name: pane.name || index
          });
          if (!pane.name) pane.name = index;
          if (index === 0) {
            if (!_this.currentValue) {
              _this.currentValue = pane.name || index;
            }
          }
        });
        this.updateStatus();
      },
      updateStatus () {
        const tabs = this.getTabs();
        const _this = this;
        tabs.forEach(function (tab) {
          return tab.show = tab.name === _this.currentValue;
        });
      }
    },
    watch: {
      value: function (val) {
        this.currentValue = val;
      },
      currentValue: function () {
        this.updateStatus();
      }
    },
});